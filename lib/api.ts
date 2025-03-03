// Типы для проектов
export interface Story {
  title: string;
  text: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  collected: number;
  goal: number;
  tags: string[];
  additionalImages?: string[];
  stories?: Story[];
}

// Моковые данные проектов
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Помощь детям с особенностями развития',
    description: 'Программа поддержки детей с особенностями развития через творческие мастерские и занятия.',
    fullDescription: 'Наш проект направлен на поддержку детей с особенностями развития через серию творческих мастерских и специализированных занятий.\n\nМы создаем безопасное и поддерживающее пространство, где дети могут развивать свои навыки, учиться новому и находить друзей.\n\nВаша поддержка поможет нам организовать больше занятий, привлечь квалифицированных специалистов и обеспечить детей всеми необходимыми материалами для творчества и обучения.',
    image: '/images/projects/children-support.jpg',
    collected: 750000,
    goal: 1500000,
    tags: ['Люди', 'Благотворительность', 'Дети'],
    additionalImages: [
      '/images/projects/children-support-1.jpg',
      '/images/projects/children-support-2.jpg',
      '/images/projects/children-support-3.jpg',
      '/images/projects/children-support-4.jpg'
    ],
    stories: [
      {
        title: 'История Миши',
        text: 'Миша, 8 лет, начал посещать наши творческие мастерские 6 месяцев назад. За это время он стал более общительным, научился новым навыкам и нашел друзей.',
        image: '/images/stories/misha.jpg'
      },
      {
        title: 'Новое оборудование для занятий',
        text: 'Благодаря вашим пожертвованиям мы смогли приобрести специализированное оборудование, которое помогает детям развивать моторику и координацию.',
        image: '/images/stories/equipment.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Спасение бездомных животных',
    description: 'Проект по спасению, лечению и поиску новых домов для бездомных животных в нашем городе.',
    fullDescription: 'Наш проект занимается спасением бездомных животных, их лечением, реабилитацией и поиском новых любящих семей.\n\nМы работаем с ветеринарными клиниками, чтобы обеспечить животным необходимую медицинскую помощь, и с волонтерами, которые временно размещают животных у себя дома.\n\nВаши пожертвования помогут нам оплачивать медицинские расходы, корм, средства по уходу и транспортировку животных.',
    image: '/images/projects/animal-rescue.jpg',
    collected: 450000,
    goal: 800000,
    tags: ['Животные', 'Благотворительность'],
    additionalImages: [
      '/images/projects/animal-rescue-1.jpg',
      '/images/projects/animal-rescue-2.jpg'
    ],
    stories: [
      {
        title: 'История Барсика',
        text: 'Барсик был найден на улице с травмой лапы. Благодаря вашей поддержке, мы смогли оплатить ему операцию и найти новый дом.',
        image: '/images/stories/barsik.jpg'
      }
    ]
  },
  {
    id: '3',
    title: 'Восстановление лесов после пожаров',
    description: 'Инициатива по восстановлению лесных массивов, пострадавших от пожаров, через посадку новых деревьев.',
    fullDescription: 'Наш проект направлен на восстановление лесных экосистем, пострадавших от пожаров в последние годы.\n\nМы организуем волонтерские выезды для посадки новых деревьев, проводим мониторинг восстановления лесов и работаем над предотвращением новых пожаров через образовательные программы.\n\nВаша поддержка поможет нам приобрести саженцы, необходимое оборудование и организовать больше волонтерских выездов.',
    image: '/images/projects/forest-restoration.jpg',
    collected: 300000,
    goal: 1000000,
    tags: ['Экология', 'Природа'],
    additionalImages: [
      '/images/projects/forest-1.jpg',
      '/images/projects/forest-2.jpg',
      '/images/projects/forest-3.jpg'
    ],
    stories: [
      {
        title: 'Восстановление соснового бора',
        text: 'В прошлом году мы высадили более 5000 саженцев сосны в районе, пострадавшем от пожара. Сегодня 80% саженцев успешно прижились.',
        image: '/images/stories/pine-forest.jpg'
      }
    ]
  }
];

// Функции для работы с проектами
export function getAllProjects(): Project[] {
  return mockProjects;
}

export function getProjectById(id: string): Project | undefined {
  return mockProjects.find(project => project.id === id);
}

export function getProjectsByTags(tags: string[]): Project[] {
  if (!tags.length) return mockProjects;
  return mockProjects.filter(project => 
    project.tags.some(tag => tags.includes(tag))
  );
} 