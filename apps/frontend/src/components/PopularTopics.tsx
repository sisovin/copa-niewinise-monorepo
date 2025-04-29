import React from 'react';

interface Topic {
  id: number;
  name: string;
}

interface PopularTopicsProps {
  topics: Topic[];
}

const PopularTopics: React.FC<PopularTopicsProps> = ({ topics }) => {
  return (
    <div className="popular-topics">
      <h2 className="text-2xl font-bold mb-4">Popular Topics</h2>
      <ul className="list-disc pl-5">
        {topics.map((topic) => (
          <li key={topic.id} className="mb-2">
            {topic.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularTopics;
