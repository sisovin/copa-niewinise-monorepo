import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, image }) => {
  return (
    <div className="course-card bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
