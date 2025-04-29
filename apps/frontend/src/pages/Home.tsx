import React from 'react';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import PopularTopics from '../components/PopularTopics';
import SignInModal from '../components/SignInModal';

const Home: React.FC = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = React.useState(false);

  const handleSignInClick = () => {
    setIsSignInModalOpen(true);
  };

  const handleSignInClose = () => {
    setIsSignInModalOpen(false);
  };

  const popularTopics = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Node.js' },
  ];

  const courses = [
    {
      title: 'Learn JavaScript',
      description: 'A comprehensive guide to JavaScript programming.',
      image: '/images/javascript-course.jpg',
    },
    {
      title: 'Mastering React',
      description: 'Become a React expert with this in-depth course.',
      image: '/images/react-course.jpg',
    },
    {
      title: 'Node.js for Beginners',
      description: 'Start your journey with Node.js with this beginner-friendly course.',
      image: '/images/nodejs-course.jpg',
    },
  ];

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Learning Platform</h1>
          <p className="text-lg text-gray-700">
            Discover a variety of courses and topics to enhance your skills.
          </p>
          <button
            onClick={handleSignInClick}
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Sign In
          </button>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                image={course.image}
              />
            ))}
          </div>
        </section>
        <section className="mb-8">
          <PopularTopics topics={popularTopics} />
        </section>
      </main>
      <SignInModal isOpen={isSignInModalOpen} onClose={handleSignInClose} />
    </div>
  );
};

export default Home;
