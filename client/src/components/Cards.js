import React from 'react'
import Finance from "../assets/finance.jpg"

export default function Services() {
    const cards = [
        {
          title: 'Finance',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ipsum at odio egestas luctus vel nec neque.  ',
          imageUrl: Finance,
        },
        {
            title: 'Finance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ipsum at odio egestas luctus vel nec neque. ',
            imageUrl: Finance,
          },
          {
            title: 'Finance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ipsum at odio egestas luctus vel nec neque.  ',
            imageUrl: Finance,
          },
      ];
  return (
    <>
    <section className="py-10">
        <h1 className="text-4xl font-bold text-[#3C4245] font-sans from-neutral-500 text-center">OUR SERVICES</h1>
        <div className="flex justify-center">
        </div>
        <div className="container mx-auto px-10 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border-2 border-grey-100 relative rounded-lg overflow-hidden transition-transform duration-200 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#DFCDC3]"
          >
            <div className="h-48 ">
              <img
                className="w-full h-full object-cover"
                src={card.imageUrl}
                alt={card.title}
              />
            </div>
            <div className="bg-[#F3F4ED] p-4">
              <h3 className="text-[#C06014] text-xl font-extrabold text-left">{card.title}</h3>
              <p className="text-[#5F6769]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
        </div>
        </section>
        
      </>
  )
}