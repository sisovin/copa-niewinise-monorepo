import React from 'react';
import CourseCard from '../components/CourseCard';
import Navbar from '../components/Navbar';

const courses = [
  {
    id: 1,
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming with this introductory course.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Deep dive into advanced JavaScript concepts and techniques.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Web Development Bootcamp',
    description: 'Become a full-stack web developer with this comprehensive bootcamp.',
    image: 'https://via.placeholder.com/150',
  },
];

const Courses: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
