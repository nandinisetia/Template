import React from 'react';

export default function CourseCard() {
  const courses = [
    {
      title: 'Beginner',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque fermentum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nisi fringilla sapien dignissim faucibus sit amet et nulla. Etiam ut fermentum odio. Integer non mauris mauris. Cras lacinia a nulla in tincidunt. Etiam quis maximus dolor.',
    },
    {
      title: 'Intermediate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque fermentum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nisi fringilla sapien dignissim faucibus sit amet et nulla. Etiam ut fermentum odio. Integer non mauris mauris. Cras lacinia a nulla in tincidunt. Etiam quis maximus dolor.',
    },
    {
      title: 'Advance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque fermentum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nisi fringilla sapien dignissim faucibus sit amet et nulla. Etiam ut fermentum odio. Integer non mauris mauris. Cras lacinia a nulla in tincidunt. Etiam quis maximus dolor.',
    },
    // Add more courses here
  ];

  return (
    <div>
      <div>
        <p className='text-2xl text-[#424642] font-bold ml-6'>Recommended Courses</p>
        <div className="border border-gray-300 my-3"></div>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-[#F3F4ED] p-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl text-[#424642] font-semibold mb-2">{course.title}</h2>
          <div className="border border-gray-300 mb-2"></div>
          <p className="text-[#536162] mb-4 text-justify">{course.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
