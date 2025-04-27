import React, { useState } from 'react'
import ceo from '../../assets/CEO.png'
import web from '../../assets/Developer.png'
import web1 from '../../assets/web.png'
import Page from '../../assets/Avatar.png'
import manager from '../../assets/Avatar.png'
import fluter from '../../assets/fluter.jpeg'
import fluter1 from '../../assets/fluter1.png'
import graphic from '../../assets/graphic.png'
import marketer from '../../assets/marketer.png'

const Work = () => {
  const [selectedTeam, setSelectedTeam] = useState('Executive');


  const executieTeam = [
    {
      id: 1,
      name: 'Khubaib Riaz',
      position: 'CEO',
      image: ceo,
    },

    {
      id: 2,
      name: 'Mouhi Raiz',
      position: 'Manager',
      image: manager,
    },

    {
      id: 3,
      name: 'Areeba Usama',
      position: 'Page Optimizer',
      image: Page,
    },
  ];

  const creativeTeam = [
    {
      id: 1,
      name: 'Sheikh abdulah Ahmed',
      position: 'Web Developer',
      image: web1,
    },

    {
      id: 2,
      name: 'Ahmed Mujahid',
      position: 'Web Developer',
      image: web
    },

    {
      id: 3,
      name: 'Tehami Ali Shah',
      position: 'Mobile App Developer',
      image: fluter
    },

    {
      id: 4,
      name: 'Waqas Ilyas ',
      position: 'Mobile App Developer',
      image: fluter1,
    },

    {
      id: 5,
      name: 'Saim Waqar',
      position: 'Graphic Designer',
      image: graphic
    },

    {
      id: 6,
      name: 'Sohail Saeed',
      position: 'Digital Marketer',
      image: marketer
    },
  ];

  const TeamSelected = selectedTeam === 'Executive' ? executieTeam : creativeTeam;

  return (
    <div id="team" className="px-20 py-20 text-center">
      <h2
        className="mb-10 text-2xl sm:text-3xl md:text-4xl font-semibold text-white relative inline-block 
    after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-28 sm:after:w-40 md:after:w-38 
    after:h-1 after:bg-[#114B9F] after:rounded-lg after:-translate-x-1/2"
      >
        Our Team
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <button
          onClick={() => setSelectedTeam('Executive')}
          className={` md:w-auto text-sm md:text-base px-4 md:px-6 py-2 rounded-full text-white cursor-pointer ${selectedTeam === 'Executive' ? 'bg-[#114B9F]' : 'bg-gray-400'
            }`}
        >
          Executive Team
        </button>

        <button
          onClick={() => setSelectedTeam('creative')}
          className={`md:w-auto text-sm md:text-base px-4 md:px-6 py-2 rounded-full text-white cursor-pointer ${selectedTeam === 'creative' ? 'bg-[#114B9F]' : 'bg-gray-400'
            }`}
        >
          Creative & Development Team
        </button>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TeamSelected.map((member) => (
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
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-white-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
