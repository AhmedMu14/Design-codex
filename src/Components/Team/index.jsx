import React from 'react'
import ceo from '../../assets/CEO.jpg'
import manager from '../../assets/Avatar.png'
import Page from '../../assets/Avatar.png'

const Work = () => {
  const executiveTeam = [
    {
      id: 1,
      name: 'Khubaib Riaz',
      position: 'CEO',
      image: ceo,
    },
    {
      id: 2,
      name: 'Noor ',
      position: 'Manager',
      image: manager,
    },
    {
      id: 3,
      name: 'Reeba Usama',
      position: 'Page Optimizer',
      image: Page,
    },
  ];

  return (
    <div id="team" className="px-20 py-20 text-center">
      {/* Main Heading */}
      <h2
        className="mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white relative inline-block 
        after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-28 sm:after:w-40 md:after:w-38 
        after:h-1 after:bg-[#114B9F] after:rounded-lg after:-translate-x-1/2"
      >
        Our Team
      </h2>

      {/* Sub Heading */}
      <h3 className="text-xl sm:text-2xl font-medium text-[#114B9F] mb-10">
        Executive Team
      </h3>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {executiveTeam.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            style={{ borderColor: "#114B9F", background: "linear-gradient(to bottom, #114B9F, black)" }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-white">{member.name}</h2>
            <p className="text-gray-300">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
