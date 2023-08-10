import React from 'react';
import Finance from "../assets/finance.jpg";

export default function Services() {
  const cards = [
    {
      title: 'Finance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ipsum at odio egestas luctus vel nec neque.usce porttitor augue eu commodo finibus. Aliquam imperdiet tempor purus a aliquet. Sed efficitur interdum justo, ornare dapibus ante feugiat ac. Donec vel odio eget ex feugiat semper. Proin tristique, nunc non iaculis venenatis, lorem magna aliquet felis, nec semper lorem felis eu magna. Vestibulum eleifend maximus nulla, et interdum enim mollis ac.',
      imageUrl: Finance,
    },
    {
      title: 'Finance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ipsum at odio egestas luctus vel nec neque.usce porttitor augue eu commodo finibus. Aliquam imperdiet tempor purus a aliquet. Sed efficitur interdum justo, ornare dapibus ante feugiat ac. Donec vel odio eget ex feugiat semper. Proin tristique, nunc non iaculis venenatis, lorem magna aliquet felis, nec semper lorem felis eu magna. Vestibulum eleifend maximus nulla, et interdum enim mollis ac.',
      imageUrl: Finance,
    },
    {
      title: 'Finance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ipsum at odio egestas luctus vel nec neque. usce porttitor augue eu commodo finibus. Aliquam imperdiet tempor purus a aliquet. Sed efficitur interdum justo, ornare dapibus ante feugiat ac. Donec vel odio eget ex feugiat semper. Proin tristique, nunc non iaculis venenatis, lorem magna aliquet felis, nec semper lorem felis eu magna. Vestibulum eleifend maximus nulla, et interdum enim mollis ac.',
      imageUrl: Finance,
    },
  ];

  return (
    <section className="py-10">
      <h1 className="text-4xl font-bold text-[#424642] font-sans from-neutral-500 text-center">OUR COURSES</h1>
      <div className="container mx-auto px-10 py-6 flex flex-col items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`border-2 shadow-xl shadow-grey-300 border-grey-100 relative rounded-lg overflow-hidden flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-8 max-w-4xl`}
          >
            {/* Image section (shown on medium and larger screens) */}
            <div className="w-1/2 hidden md:block">
              <img
                className="w-full h-full object-cover"
                src={card.imageUrl}
                alt={card.title}
              />
            </div>
            
            {/* Text section */}
            <div className="w-full bg-[#F3F4ED] p-4 flex flex-col justify-center">
              {/* Text content */}
              <h3 className="text-[#C06014] text-xl font-extrabold text-center md:text-left">{card.title}</h3>
              <p className="text-[#5F6769] text-justify md:text-left">{card.description}</p>

              {/* Image (shown on small screens) */}
              <div className="mt-4 md:hidden">
                <img
                  className="w-full h-full object-cover"
                  src={card.imageUrl}
                  alt={card.title} 

                  
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
