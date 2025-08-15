-- schema.sql — полная схема БД для The Quiet Makers (MySQL 8+)
-- Кодировка и сравнение для поддержки эмодзи и многоязычия
SET NAMES utf8mb4;
SET time_zone = '+00:00';

-- Безопасный дроп/создание
SET FOREIGN_KEY_CHECKS = 0;

CREATE DATABASE IF NOT EXISTS `quietmakers`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;

USE `quietmakers`;

-- Сначала удаляем представления, зависящие от таблиц
DROP VIEW IF EXISTS `project_stats`;

-- Затем удаляем таблицы (в обратном порядке зависимостей)
DROP TABLE IF EXISTS `audit_logs`;
DROP TABLE IF EXISTS `contact_messages`;
DROP TABLE IF EXISTS `content_resources`;
DROP TABLE IF EXISTS `content_items`;
DROP TABLE IF EXISTS `quiz_recommended_projects`;
DROP TABLE IF EXISTS `quiz_answers`;
DROP TABLE IF EXISTS `quiz_submissions`;
DROP TABLE IF EXISTS `quiz_options`;
DROP TABLE IF EXISTS `quiz_questions`;
DROP TABLE IF EXISTS `blockchain_transactions`;
DROP TABLE IF EXISTS `payment_events`;
DROP TABLE IF EXISTS `recurring_subscriptions`;
DROP TABLE IF EXISTS `donations`;
DROP TABLE IF EXISTS `user_favorites`;
DROP TABLE IF EXISTS `project_stories`;
DROP TABLE IF EXISTS `project_images`;
DROP TABLE IF EXISTS `project_formats`;
DROP TABLE IF EXISTS `project_tags`;
DROP TABLE IF EXISTS `project_categories`;
DROP TABLE IF EXISTS `projects`;
DROP TABLE IF EXISTS `formats`;
DROP TABLE IF EXISTS `tags`;
DROP TABLE IF EXISTS `categories`;
DROP TABLE IF EXISTS `partners`;
DROP TABLE IF EXISTS `password_resets`;
DROP TABLE IF EXISTS `email_verifications`;
DROP TABLE IF EXISTS `sessions`;
DROP TABLE IF EXISTS `oauth_accounts`;
DROP TABLE IF EXISTS `role_permissions`;
DROP TABLE IF EXISTS `permissions`;
DROP TABLE IF EXISTS `user_roles`;
DROP TABLE IF EXISTS `roles`;
DROP TABLE IF EXISTS `users`;

-- =========================================
-- Пользователи, роли, доступ
-- =========================================

-- Таблица: users
CREATE TABLE `users` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ пользователя',
  `email` VARCHAR(255) NOT NULL COMMENT 'Уникальный email пользователя',
  `email_verified` TINYINT(1) NOT NULL DEFAULT 0 COMMENT 'Флаг подтверждения email',
  `password_hash` VARCHAR(255) NULL COMMENT 'Хеш пароля (например, bcrypt); NULL для OAuth-аккаунтов',
  `name` VARCHAR(255) NULL COMMENT 'Отображаемое имя пользователя',
  `avatar_url` VARCHAR(1024) NULL COMMENT 'URL аватара пользователя',
  `locale` VARCHAR(10) NOT NULL DEFAULT 'ru' COMMENT 'Предпочитаемая локаль интерфейса (например, ru, en)',
  `is_active` TINYINT(1) NOT NULL DEFAULT 1 COMMENT 'Активен ли аккаунт',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда создан пользователь',
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Когда обновлён пользователь',
  `deleted_at` TIMESTAMP NULL DEFAULT NULL COMMENT 'Метка мягкого удаления, если установлен',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_users_email` (`email`),
  KEY `idx_users_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Пользователи платформы';

-- Таблица: roles
CREATE TABLE `roles` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ роли',
  `slug` VARCHAR(64) NOT NULL COMMENT 'Системный слаг роли (admin, moderator, user)',
  `name` VARCHAR(255) NOT NULL COMMENT 'Человекочитаемое название роли',
  `description` VARCHAR(512) NULL COMMENT 'Описание назначения роли',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда создана роль',
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Когда обновлена роль',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_roles_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Роли доступа';

-- Таблица: permissions (на будущее, тонкая настройка)
CREATE TABLE `permissions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ права',
  `slug` VARCHAR(128) NOT NULL COMMENT 'Системный слаг права (например, projects.manage)',
  `name` VARCHAR(255) NOT NULL COMMENT 'Человекочитаемое название права',
  `description` VARCHAR(512) NULL COMMENT 'Описание действия, на которое даётся право',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_permissions_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Права доступа';

-- Таблица: role_permissions (связь ролей и прав)
CREATE TABLE `role_permissions` (
  `role_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на роль',
  `permission_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на право',
  PRIMARY KEY (`role_id`, `permission_id`),
  KEY `idx_rp_permission_id` (`permission_id`),
  CONSTRAINT `fk_rp_role` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk_rp_permission` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Назначенные права ролям';

-- Таблица: user_roles (связь пользователей и ролей)
CREATE TABLE `user_roles` (
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на пользователя',
  `role_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на роль',
  PRIMARY KEY (`user_id`, `role_id`),
  KEY `idx_ur_role_id` (`role_id`),
  CONSTRAINT `fk_ur_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk_ur_role` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Роли пользователей';

-- Таблица: oauth_accounts (Google/VK и т.п.)
CREATE TABLE `oauth_accounts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ записи OAuth',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на пользователя',
  `provider` ENUM('google','vk','github','facebook') NOT NULL COMMENT 'Провайдер авторизации',
  `provider_account_id` VARCHAR(255) NOT NULL COMMENT 'ID пользователя у провайдера',
  `access_token` VARCHAR(1024) NULL COMMENT 'Access token провайдера (если хранится)',
  `refresh_token` VARCHAR(1024) NULL COMMENT 'Refresh token провайдера (если хранится)',
  `expires_at` TIMESTAMP NULL DEFAULT NULL COMMENT 'Время истечения access_token',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда привязана учётка',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_oauth_provider_user` (`provider`, `provider_account_id`),
  KEY `idx_oauth_user_id` (`user_id`),
  CONSTRAINT `fk_oauth_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Внешние OAuth-аккаунты пользователей';

-- Таблица: sessions
CREATE TABLE `sessions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ сессии',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на пользователя',
  `session_token` CHAR(64) NOT NULL COMMENT 'Уникальный токен сессии (например, sha256)',
  `user_agent` VARCHAR(512) NULL COMMENT 'User-Agent клиента',
  `ip_address` VARCHAR(45) NULL COMMENT 'IP-адрес клиента (IPv4/IPv6)',
  `expires_at` TIMESTAMP NOT NULL COMMENT 'Момент истечения сессии',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда создана сессия',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_sessions_token` (`session_token`),
  KEY `idx_sessions_user_id` (`user_id`),
  KEY `idx_sessions_expires_at` (`expires_at`),
  CONSTRAINT `fk_sessions_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Сессии входа пользователей';

-- Таблица: email_verifications
CREATE TABLE `email_verifications` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ записи верификации',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на пользователя',
  `token` CHAR(64) NOT NULL COMMENT 'Токен подтверждения email',
  `expires_at` TIMESTAMP NOT NULL COMMENT 'Момент истечения токена',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда создан токен',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_email_verifications_token` (`token`),
  KEY `idx_email_verifications_user_id` (`user_id`),
  CONSTRAINT `fk_email_verifications_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Токены подтверждения email';

-- Таблица: password_resets
CREATE TABLE `password_resets` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ записи сброса пароля',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на пользователя',
  `token` CHAR(64) NOT NULL COMMENT 'Токен сброса пароля',
  `expires_at` TIMESTAMP NOT NULL COMMENT 'Момент истечения токена',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда создан токен',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_password_resets_token` (`token`),
  KEY `idx_password_resets_user_id` (`user_id`),
  CONSTRAINT `fk_password_resets_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Токены восстановления пароля';

-- =========================================
-- Партнёры/фонды (коллаборации) и словари
-- =========================================

-- Таблица: partners
CREATE TABLE `partners` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ партнёра/фонда',
  `name` VARCHAR(255) NOT NULL COMMENT 'Название партнёра/фонда',
  `slug` VARCHAR(128) NOT NULL COMMENT 'Слаг для URL',
  `description` TEXT NULL COMMENT 'Описание партнёра',
  `website_url` VARCHAR(1024) NULL COMMENT 'Официальный сайт',
  `contact_email` VARCHAR(255) NULL COMMENT 'Контактный email',
  `logo_url` VARCHAR(1024) NULL COMMENT 'URL логотипа',
  `verified` TINYINT(1) NOT NULL DEFAULT 0 COMMENT 'Флаг верификации партнёра',
  `blockchain_wallet` VARCHAR(255) NULL COMMENT 'Публичный кошелёк для прозрачности',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда добавлен партнёр',
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Когда обновлён партнёр',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_partners_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Партнёры и фонды (коллаборации)';

-- Таблица: categories (словари тематик)
CREATE TABLE `categories` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ категории',
  `slug` VARCHAR(64) NOT NULL COMMENT 'Системный слаг (people, animals, nature и т.п.)',
  `name` VARCHAR(255) NOT NULL COMMENT 'Название категории',
  `description` VARCHAR(512) NULL COMMENT 'Описание категории',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда создана категория',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_categories_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Категории проектов';

-- Таблица: tags (свободные теги)
CREATE TABLE `tags` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ тега',
  `slug` VARCHAR(64) NOT NULL COMMENT 'Системный слаг тега',
  `name` VARCHAR(255) NOT NULL COMMENT 'Отображаемое имя тега',
  `description` VARCHAR(512) NULL COMMENT 'Описание назначения тега',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда создан тег',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_tags_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Теги проектов';

-- Таблица: formats (форматы поддержки/участия)
CREATE TABLE `formats` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ формата',
  `slug` VARCHAR(64) NOT NULL COMMENT 'Системный слаг (one-time, recurring, volunteer)',
  `name` VARCHAR(255) NOT NULL COMMENT 'Название формата',
  `description` VARCHAR(512) NULL COMMENT 'Описание формата',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда создан формат',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_formats_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Форматы участия/поддержки';

-- =========================================
-- Проекты, медиа, истории и избранное
-- =========================================

-- Таблица: projects
CREATE TABLE `projects` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ проекта',
  `slug` VARCHAR(128) NOT NULL COMMENT 'SEO-слаг проекта для URL',
  `title` VARCHAR(255) NOT NULL COMMENT 'Название проекта',
  `short_description` VARCHAR(512) NOT NULL COMMENT 'Краткое описание проекта',
  `full_description` LONGTEXT NULL COMMENT 'Полное описание проекта',
  `main_image_url` VARCHAR(1024) NULL COMMENT 'Главное изображение проекта',
  `goal_amount` DECIMAL(12,2) NOT NULL DEFAULT 0.00 COMMENT 'Целевой объём сбора средств',
  `collected_amount` DECIMAL(12,2) NOT NULL DEFAULT 0.00 COMMENT 'Текущий собранный объём (может кэшироваться)',
  `currency` CHAR(3) NOT NULL DEFAULT 'RUB' COMMENT 'Валюта сборов (ISO 4217)',
  `status` ENUM('draft','active','completed','paused','archived') NOT NULL DEFAULT 'draft' COMMENT 'Статус проекта',
  `start_date` DATE NULL COMMENT 'Дата начала кампании',
  `end_date` DATE NULL COMMENT 'Дата окончания кампании',
  `owner_partner_id` BIGINT UNSIGNED NULL COMMENT 'FK на партнёра-владельца проекта',
  `created_by_user_id` BIGINT UNSIGNED NULL COMMENT 'FK на пользователя-создателя/куратора',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда создан проект',
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Когда обновлён проект',
  `deleted_at` TIMESTAMP NULL DEFAULT NULL COMMENT 'Мягкое удаление',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_projects_slug` (`slug`),
  KEY `idx_projects_status` (`status`),
  KEY `idx_projects_owner` (`owner_partner_id`),
  FULLTEXT KEY `ft_projects_title_text` (`title`, `short_description`, `full_description`),
  CONSTRAINT `fk_projects_owner_partner` FOREIGN KEY (`owner_partner_id`) REFERENCES `partners` (`id`) ON DELETE SET NULL ON UPDATE RESTRICT,
  CONSTRAINT `fk_projects_created_by` FOREIGN KEY (`created_by_user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE RESTRICT,
  CHECK (`goal_amount` >= 0),
  CHECK (`collected_amount` >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Проекты благотворительности';

-- Таблица: project_categories (многие-ко-многим)
CREATE TABLE `project_categories` (
  `project_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на проект',
  `category_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на категорию',
  PRIMARY KEY (`project_id`, `category_id`),
  KEY `idx_pc_category` (`category_id`),
  CONSTRAINT `fk_pc_project` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk_pc_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Привязка проектов к категориям';

-- Таблица: project_tags (многие-ко-многим)
CREATE TABLE `project_tags` (
  `project_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на проект',
  `tag_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на тег',
  PRIMARY KEY (`project_id`, `tag_id`),
  KEY `idx_pt_tag` (`tag_id`),
  CONSTRAINT `fk_pt_project` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk_pt_tag` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Привязка проектов к тегам';

-- Таблица: project_formats (многие-ко-многим)
CREATE TABLE `project_formats` (
  `project_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на проект',
  `format_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на формат',
  PRIMARY KEY (`project_id`, `format_id`),
  KEY `idx_pf_format` (`format_id`),
  CONSTRAINT `fk_pf_project` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk_pf_format` FOREIGN KEY (`format_id`) REFERENCES `formats` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Поддерживаемые проектом форматы участия';

-- Таблица: project_images (галерея)
CREATE TABLE `project_images` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ изображения',
  `project_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на проект',
  `image_url` VARCHAR(1024) NOT NULL COMMENT 'URL изображения',
  `alt_text` VARCHAR(255) NULL COMMENT 'Альтернативный текст для доступности',
  `sort_order` INT NOT NULL DEFAULT 0 COMMENT 'Порядок сортировки изображения в галерее',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда добавлено изображение',
  PRIMARY KEY (`id`),
  KEY `idx_pimg_project_order` (`project_id`, `sort_order`),
  CONSTRAINT `fk_pimg_project` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Галерея изображений проекта';

-- Таблица: project_stories (истории/кейсы)
CREATE TABLE `project_stories` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ истории',
  `project_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на проект',
  `title` VARCHAR(255) NOT NULL COMMENT 'Заголовок истории',
  `body` TEXT NOT NULL COMMENT 'Текст истории/кейса',
  `image_url` VARCHAR(1024) NULL COMMENT 'Иллюстрация к истории',
  `published_at` TIMESTAMP NULL DEFAULT NULL COMMENT 'Когда опубликована история',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда создана запись',
  PRIMARY KEY (`id`),
  KEY `idx_pst_project_pub` (`project_id`, `published_at`),
  CONSTRAINT `fk_pst_project` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Истории и успехи проектов';

-- Таблица: user_favorites (избранные проекты пользователей)
CREATE TABLE `user_favorites` (
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на пользователя',
  `project_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на проект',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда добавлено в избранное',
  PRIMARY KEY (`user_id`, `project_id`),
  KEY `idx_uf_project` (`project_id`),
  CONSTRAINT `fk_uf_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk_uf_project` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Избранные проекты пользователей';

-- =========================================
-- Пожертвования, подписки, платежи, блокчейн
-- =========================================

-- Таблица: donations (разовые пожертвования)
CREATE TABLE `donations` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ пожертвования',
  `user_id` BIGINT UNSIGNED NULL COMMENT 'FK на пользователя-донатора (NULL для анонимных)',
  `project_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на проект',
  `amount` DECIMAL(12,2) NOT NULL COMMENT 'Сумма пожертвования',
  `currency` CHAR(3) NOT NULL DEFAULT 'RUB' COMMENT 'Валюта (ISO 4217)',
  `is_anonymous` TINYINT(1) NOT NULL DEFAULT 0 COMMENT 'Флаг анонимного пожертвования',
  `message` VARCHAR(512) NULL COMMENT 'Сообщение от жертвователя',
  `payment_provider` ENUM('stripe','yookassa','paypal','cloudpayments','robokassa','other') NOT NULL DEFAULT 'other' COMMENT 'Платёжный провайдер',
  `payment_external_id` VARCHAR(255) NULL COMMENT 'Внешний ID платежа у провайдера',
  `status` ENUM('pending','paid','failed','refunded','canceled') NOT NULL DEFAULT 'pending' COMMENT 'Статус платежа',
  `paid_at` TIMESTAMP NULL DEFAULT NULL COMMENT 'Время успешной оплаты (если оплачено)',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда создана запись',
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Когда обновлена запись',
  PRIMARY KEY (`id`),
  KEY `idx_donations_project_status` (`project_id`, `status`),
  KEY `idx_donations_user` (`user_id`),
  CONSTRAINT `fk_donations_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE RESTRICT,
  CONSTRAINT `fk_donations_project` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CHECK (`amount` > 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Разовые пожертвования';

-- Таблица: recurring_subscriptions (регулярные подписки)
CREATE TABLE `recurring_subscriptions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ подписки',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на пользователя',
  `project_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на проект',
  `amount` DECIMAL(12,2) NOT NULL COMMENT 'Сумма регулярного платежа',
  `currency` CHAR(3) NOT NULL DEFAULT 'RUB' COMMENT 'Валюта (ISO 4217)',
  `payment_provider` ENUM('stripe','yookassa','paypal','cloudpayments','robokassa','other') NOT NULL DEFAULT 'other' COMMENT 'Платёжный провайдер',
  `provider_subscription_id` VARCHAR(255) NOT NULL COMMENT 'ID подписки у провайдера',
  `status` ENUM('active','paused','canceled','expired') NOT NULL DEFAULT 'active' COMMENT 'Статус подписки',
  `started_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Дата начала подписки',
  `canceled_at` TIMESTAMP NULL DEFAULT NULL COMMENT 'Дата отмены (если отменена)',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда создана запись',
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Когда обновлена запись',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_recurring_provider_id` (`payment_provider`, `provider_subscription_id`),
  KEY `idx_recurring_user` (`user_id`),
  KEY `idx_recurring_project` (`project_id`),
  CONSTRAINT `fk_recurring_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk_recurring_project` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CHECK (`amount` > 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Регулярные пожертвования (подписки)';

-- Таблица: payment_events (вебхуки/события от провайдеров)
CREATE TABLE `payment_events` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ события платежа',
  `donation_id` BIGINT UNSIGNED NULL COMMENT 'FK на разовое пожертвование (если относится к нему)',
  `subscription_id` BIGINT UNSIGNED NULL COMMENT 'FK на подписку (если относится к ней)',
  `event_type` VARCHAR(128) NOT NULL COMMENT 'Тип события провайдера (например, payment.succeeded)',
  `raw_payload` JSON NOT NULL COMMENT 'Исходный JSON-пейлоад вебхука',
  `received_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда получено событие',
  PRIMARY KEY (`id`),
  KEY `idx_pe_donation` (`donation_id`),
  KEY `idx_pe_subscription` (`subscription_id`),
  KEY `idx_pe_event_type` (`event_type`),
  CONSTRAINT `fk_pe_donation` FOREIGN KEY (`donation_id`) REFERENCES `donations` (`id`) ON DELETE SET NULL ON UPDATE RESTRICT,
  CONSTRAINT `fk_pe_subscription` FOREIGN KEY (`subscription_id`) REFERENCES `recurring_subscriptions` (`id`) ON DELETE SET NULL ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='События/вебхуки платёжных провайдеров';

-- Таблица: blockchain_transactions (прозрачность на блокчейне)
CREATE TABLE `blockchain_transactions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ блокчейн-транзакции',
  `donation_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на пожертвование',
  `tx_hash` VARCHAR(255) NOT NULL COMMENT 'Хеш транзакции в сети',
  `chain` VARCHAR(64) NOT NULL COMMENT 'Имя/тип сети (например, Ethereum, Polygon)',
  `explorer_url` VARCHAR(1024) NULL COMMENT 'URL на обозреватель блокчейна',
  `status` ENUM('pending','confirmed','failed') NOT NULL DEFAULT 'pending' COMMENT 'Статус подтверждения транзакции',
  `recorded_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда записано соответствие',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_blockchain_tx_hash` (`tx_hash`),
  KEY `idx_btx_donation` (`donation_id`),
  CONSTRAINT `fk_btx_donation` FOREIGN KEY (`donation_id`) REFERENCES `donations` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Отслеживание донатов в блокчейне';

-- =========================================
-- Квиз: вопросы, опции, ответы, рекомендации
-- =========================================

-- Таблица: quiz_questions
CREATE TABLE `quiz_questions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ вопроса',
  `slug` VARCHAR(64) NOT NULL COMMENT 'Системный слаг (category, goal, format, result, project_type)',
  `text_ru` VARCHAR(512) NOT NULL COMMENT 'Текст вопроса на русском',
  `text_en` VARCHAR(512) NULL COMMENT 'Текст вопроса на английском',
  `sort_order` INT NOT NULL DEFAULT 0 COMMENT 'Порядок вывода вопроса',
  `is_multi_select` TINYINT(1) NOT NULL DEFAULT 0 COMMENT 'Разрешён ли множественный выбор',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда создан вопрос',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_quiz_questions_slug` (`slug`),
  KEY `idx_quiz_questions_sort` (`sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Вопросы квиза';

-- Таблица: quiz_options
CREATE TABLE `quiz_options` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ опции',
  `question_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на вопрос',
  `slug` VARCHAR(64) NOT NULL COMMENT 'Системный слаг опции (people, animals, nature, etc.)',
  `text_ru` VARCHAR(512) NOT NULL COMMENT 'Текст опции на русском',
  `text_en` VARCHAR(512) NULL COMMENT 'Текст опции на английском',
  `value` VARCHAR(128) NOT NULL COMMENT 'Значение, используемое в фильтрах/логике',
  `icon_key` VARCHAR(64) NULL COMMENT 'Ключ иконки для UI (например, FaLeaf)',
  `sort_order` INT NOT NULL DEFAULT 0 COMMENT 'Порядок вывода опции',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_quiz_options_slug_question` (`question_id`, `slug`),
  KEY `idx_quiz_options_question` (`question_id`),
  CONSTRAINT `fk_qo_question` FOREIGN KEY (`question_id`) REFERENCES `quiz_questions` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Опции ответов на вопросы квиза';

-- Таблица: quiz_submissions (прохождения квиза)
CREATE TABLE `quiz_submissions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ результата квиза',
  `user_id` BIGINT UNSIGNED NULL COMMENT 'FK на пользователя (NULL если гость)',
  `answers_json` JSON NOT NULL COMMENT 'Ответы в формате JSON (question_slug -> [values])',
  `result_filters_json` JSON NULL COMMENT 'Вычисленные фильтры для подбора проектов (например, tags/categories/format)',
  `recommended_reason` VARCHAR(512) NULL COMMENT 'Краткое пояснение рекомендаций',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда завершён квиз',
  PRIMARY KEY (`id`),
  KEY `idx_qs_user_time` (`user_id`, `created_at`),
  CONSTRAINT `fk_qs_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Прохождения квиза и рассчитанные фильтры';

-- Таблица: quiz_answers (нормализованные ответы)
CREATE TABLE `quiz_answers` (
  `submission_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на прохождение квиза',
  `question_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на вопрос',
  `option_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на выбранную опцию',
  PRIMARY KEY (`submission_id`, `question_id`, `option_id`),
  KEY `idx_qa_question` (`question_id`),
  KEY `idx_qa_option` (`option_id`),
  CONSTRAINT `fk_qa_submission` FOREIGN KEY (`submission_id`) REFERENCES `quiz_submissions` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk_qa_question` FOREIGN KEY (`question_id`) REFERENCES `quiz_questions` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_qa_option` FOREIGN KEY (`option_id`) REFERENCES `quiz_options` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Выбранные ответы по вопросам в прохождении квиза';

-- Таблица: quiz_recommended_projects (фиксируем рекомендации)
CREATE TABLE `quiz_recommended_projects` (
  `submission_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на прохождение квиза',
  `project_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на рекомендованный проект',
  `rank` INT NOT NULL DEFAULT 0 COMMENT 'Ранг/порядок показа рекомендации',
  PRIMARY KEY (`submission_id`, `project_id`),
  KEY `idx_qrp_project` (`project_id`),
  CONSTRAINT `fk_qrp_submission` FOREIGN KEY (`submission_id`) REFERENCES `quiz_submissions` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk_qrp_project` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Рекомендованные проекты по результатам квиза';

-- =========================================
-- Контент «Happiness»: статьи/интервью/истории
-- =========================================

-- Таблица: content_items
CREATE TABLE `content_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ контентного элемента',
  `type` ENUM('education','interview','story') NOT NULL COMMENT 'Тип контента',
  `title` VARCHAR(255) NOT NULL COMMENT 'Заголовок материала',
  `body` LONGTEXT NULL COMMENT 'Основной текст материала',
  `image_url` VARCHAR(1024) NULL COMMENT 'Обложка/изображение',
  `author_name` VARCHAR(255) NULL COMMENT 'Имя автора/спикера',
  `published_at` TIMESTAMP NULL DEFAULT NULL COMMENT 'Дата публикации',
  `created_by_user_id` BIGINT UNSIGNED NULL COMMENT 'FK на пользователя-редактора',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда создан материал',
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Когда обновлён материал',
  PRIMARY KEY (`id`),
  KEY `idx_content_type_pub` (`type`, `published_at`),
  CONSTRAINT `fk_ci_created_by` FOREIGN KEY (`created_by_user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Контентные материалы раздела «Happiness»';

-- Таблица: content_resources (ссылки/ресурсы к материалам)
CREATE TABLE `content_resources` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ ресурса',
  `content_id` BIGINT UNSIGNED NOT NULL COMMENT 'FK на контентный материал',
  `title` VARCHAR(255) NOT NULL COMMENT 'Заголовок ресурса',
  `url` VARCHAR(1024) NOT NULL COMMENT 'URL ресурса',
  `sort_order` INT NOT NULL DEFAULT 0 COMMENT 'Порядок отображения',
  PRIMARY KEY (`id`),
  KEY `idx_cr_content_order` (`content_id`, `sort_order`),
  CONSTRAINT `fk_cr_content` FOREIGN KEY (`content_id`) REFERENCES `content_items` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Привязанные ссылки/ресурсы к материалам';

-- =========================================
-- Контакты и аудит
-- =========================================

-- Таблица: contact_messages (если появится форма обратной связи)
CREATE TABLE `contact_messages` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ сообщения',
  `name` VARCHAR(255) NOT NULL COMMENT 'Имя отправителя',
  `email` VARCHAR(255) NOT NULL COMMENT 'Email отправителя',
  `subject` VARCHAR(255) NULL COMMENT 'Тема сообщения',
  `message` TEXT NOT NULL COMMENT 'Текст сообщения',
  `status` ENUM('new','read','replied','archived') NOT NULL DEFAULT 'new' COMMENT 'Статус обработки сообщения',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда отправлено сообщение',
  PRIMARY KEY (`id`),
  KEY `idx_cm_status_time` (`status`, `created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Сообщения из формы обратной связи';

-- Таблица: audit_logs (для админки и внешних интеграций)
CREATE TABLE `audit_logs` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Первичный ключ записи аудита',
  `actor_user_id` BIGINT UNSIGNED NULL COMMENT 'FK на пользователя-инициатора действия',
  `action` VARCHAR(128) NOT NULL COMMENT 'Короткий код действия (например, project.update)',
  `entity_type` VARCHAR(64) NOT NULL COMMENT 'Тип сущности (projects, users, donations и т.д.)',
  `entity_id` BIGINT UNSIGNED NULL COMMENT 'ID сущности (если применимо)',
  `metadata` JSON NULL COMMENT 'Доп. детали события (до/после, поля и т.п.)',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Когда зафиксировано событие',
  PRIMARY KEY (`id`),
  KEY `idx_audit_entity` (`entity_type`, `entity_id`),
  KEY `idx_audit_actor_time` (`actor_user_id`, `created_at`),
  CONSTRAINT `fk_audit_actor` FOREIGN KEY (`actor_user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Аудит действий админки и системных событий';

-- =========================================
-- Представления (агрегации)
-- =========================================

CREATE VIEW `project_stats` AS
SELECT
  d.project_id AS project_id,
  SUM(d.status = 'paid') AS donations_count,
  SUM(CASE WHEN d.status = 'paid' THEN d.amount ELSE 0 END) AS donated_amount
FROM donations d
GROUP BY d.project_id;

SET FOREIGN_KEY_CHECKS = 1;