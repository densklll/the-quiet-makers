'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart, FaUsers, FaCalendarAlt, FaSmile, FaHandHoldingHeart, FaLeaf, FaPaw, FaGraduationCap } from 'react-icons/fa';

// Объект для соответствия тегов и их стилей
const tagStyles: Record<string, { icon: React.ReactNode, color: string }> = {
  'joy': { icon: <FaSmile className="mr-1" />, color: 'bg-yellow-50 text-yellow-700 border-yellow-100' },
  'love': { icon: <FaHeart className="mr-1" />, color: 'bg-pink-50 text-pink-700 border-pink-100' },
  'care': { icon: <FaHandHoldingHeart className="mr-1" />, color: 'bg-sky-50 text-sky-700 border-sky-100' },
  'nature': { icon: <FaLeaf className="mr-1" />, color: 'bg-green-50 text-green-700 border-green-100' },
  'animals': { icon: <FaPaw className="mr-1" />, color: 'bg-amber-50 text-amber-700 border-amber-100' },
  'education': { icon: <FaGraduationCap className="mr-1" />, color: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
};

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  fundingGoal: number;
  fundingCurrent: number;
  supporters: number;
  daysLeft: number;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export default function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  category,
  tags,
  fundingGoal,
  fundingCurrent,
  supporters,
  daysLeft,
  isFavorite = false,
  onToggleFavorite
}: ProjectCardProps) {
  const fundingPercentage = Math.min(Math.round((fundingCurrent / fundingGoal) * 100), 100);
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(id);
    }
  };

  return (
    <motion.div 
      className="project-card group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/projects/${id}`} className="block h-full">
        <div className="project-card-image">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
          
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-md transition-all duration-300 hover:bg-white"
            aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
          >
            {isFavorite ? (
              <FaHeart className="text-primary-500" />
            ) : (
              <FaRegHeart className="text-gray-600" />
            )}
          </button>
        </div>
        
        <div className="project-card-content">
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
            {description}
          </p>
          
          {/* Отображение тегов */}
          {tags && tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => {
                const tagStyle = tagStyles[tag] || { 
                  icon: null, 
                  color: 'bg-primary-50 text-primary-700 border-primary-100' 
                };
                
                return (
                  <span 
                    key={index} 
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tagStyle.color}`}
                  >
                    {tagStyle.icon}
                    {tag}
                  </span>
                );
              })}
            </div>
          )}
          
          <div className="mt-auto">
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{fundingPercentage}% собрано</span>
                <span className="text-gray-600">{fundingCurrent.toLocaleString()} ₽ из {fundingGoal.toLocaleString()} ₽</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${fundingPercentage}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-600">
              <div className="flex items-center">
                <FaUsers className="mr-1 text-gray-400" />
                <span>{supporters} поддержали</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-1 text-gray-400" />
                <span>Осталось {daysLeft} дней</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 