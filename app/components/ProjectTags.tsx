'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSmile, FaHeart, FaHandHoldingHeart, FaLeaf, FaPaw, FaGraduationCap } from 'react-icons/fa';

interface ProjectTagsProps {
  onTagSelect?: (tag: string) => void;
  selectedTags?: string[];
  showTitle?: boolean;
}

const projectTags = [
  { id: 'joy', label: 'Радость', icon: <FaSmile className="text-yellow-500" />, color: 'from-yellow-400 to-yellow-600' },
  { id: 'love', label: 'Любовь', icon: <FaHeart className="text-pink-500" />, color: 'from-pink-400 to-pink-600' },
  { id: 'care', label: 'Забота', icon: <FaHandHoldingHeart className="text-sky-500" />, color: 'from-sky-400 to-sky-600' },
  { id: 'nature', label: 'Природа', icon: <FaLeaf className="text-green-500" />, color: 'from-green-400 to-green-600' },
  { id: 'animals', label: 'Животные', icon: <FaPaw className="text-amber-500" />, color: 'from-amber-400 to-amber-600' },
  { id: 'education', label: 'Образование', icon: <FaGraduationCap className="text-indigo-500" />, color: 'from-indigo-400 to-indigo-600' },
];

export default function ProjectTags({ onTagSelect, selectedTags = [], showTitle = true }: ProjectTagsProps) {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  
  const handleTagClick = (tagId: string) => {
    if (onTagSelect) {
      onTagSelect(tagId);
    }
  };
  
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {showTitle && (
        <motion.h3 
          className="text-xl font-semibold text-gray-800 mb-6 relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="relative z-10">Выберите теги, которые вам близки</span>
          <span className="absolute bottom-0 left-0 h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
        </motion.h3>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {projectTags.map((tag, index) => {
          const isSelected = selectedTags.includes(tag.id);
          const isHovered = hoveredTag === tag.id;
          
          return (
            <motion.div
              key={tag.id}
              className={`
                relative flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer transition-all
                backdrop-blur-sm overflow-hidden
                ${isSelected 
                  ? 'shadow-lg border-2 border-primary-500 bg-primary-50' 
                  : 'bg-white/90 border border-gray-200 hover:border-primary-300 hover:shadow-md'}
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              onClick={() => handleTagClick(tag.id)}
              onMouseEnter={() => setHoveredTag(tag.id)}
              onMouseLeave={() => setHoveredTag(null)}
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleTagClick(tag.id);
                }
              }}
            >
              {isSelected && (
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${tag.color} opacity-10`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              <motion.div 
                className={`text-3xl mb-3 transition-all ${isSelected ? 'text-primary-600' : ''}`}
                animate={{ 
                  scale: isHovered || isSelected ? 1.1 : 1,
                  y: isHovered ? -2 : 0
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tag.icon}
              </motion.div>
              
              <span className={`text-sm font-medium ${isSelected ? 'text-primary-700' : 'text-gray-700'}`}>{tag.label}</span>
              
              {isSelected && (
                <motion.div 
                  className="absolute top-2 right-2 w-5 h-5 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  <span className="text-white text-xs">✓</span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
} 