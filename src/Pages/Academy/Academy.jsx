import React from "react";
import Layout from '../../Components/Layout/Layout.jsx';


const programs = [
  {
    code: "ACCF",
    title: "Apprise Certified Cybersecurity Fundamentals",
    desc: "Entry-level certification providing foundational knowledge of cybersecurity principles & concepts.",
    btn: "ACCF DETAILS",
  },
  {
    code: "ACCA",
    title: "Apprise Certified Cybersecurity Analyst",
    desc: "Focused on advanced cybersecurity analysis and defense techniques.",
    btn: "ACCA DETAILS",
  },
  {
    code: "ACAPT",
    title: "Apprise Certified Advanced Penetration Tester",
    desc: "Specialized program catering to experienced professionals in the field of penetration testing.",
    btn: "ACAPT DETAILS",
  },
];

export default function Academy() {
  return (
    <Layout>
    <div className="bg-black text-center py-29 px-4 text-left">
      <h2 className="w-full md:w-1/2 text-left">CODEX ACADEMY</h2>
      <p className="text-sm md:text-base text-gray-600 mb-6">Empowering minds, transforming futures</p>
      <p className="text-gray-700 max-w-3xl mx-auto mb-10">
        CyberSecurity is a specialization with a massive growth in demand as many
        businesses are shifting to online and need more security coverage for their
        networks.
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {programs.map((prog) => (
          <div key={prog.code} className="bg-[#1e1b4b] text-white p-6 rounded-md shadow-lg hover:scale-105 transition-transform">
            <div className="text-left mb-3 font-bold">{prog.code}</div>
            <h3 className="text-lg font-semibold mb-2">{prog.title}</h3>
            <p className="text-sm mb-4">{prog.desc}</p>
            <button className="bg-white text-[#1e1b4b] px-4 py-2 text-sm font-semibold rounded hover:bg-gray-200">
              {prog.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
}
