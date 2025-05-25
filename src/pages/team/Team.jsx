import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import iskandar from "../../assets/team/iskandar.png";
import yousef from "../../assets/team/yousef.png";
import oybek from "../../assets/team/oybek.png";
import aziza from "../../assets/team/aziza.png";
import shakhzod from "../../assets/team/shaxzod.png";
import ruslan from "../../assets/team/ruslan.png";
import bekzod from "../../assets/team/bekzod.png";
import kamila from "../../assets/team/kamila.png";
import asal from "../../assets/team/asalya.png";
import sardor from "../../assets/team/sardor.png";
import tatyana from "../../assets/team/tanya.png";
import abdurahmon from "../../assets/team/abdurahmon.png";
import mirjalol from "../../assets/team/mirjalol.png";
import abduqodir from "../../assets/team/abduqodir.png";
import bahodir from "../../assets/team/bohodir.png";
import izzat from "../../assets/team/izzat.png";
import bobur from "../../assets/team/bobur.png";
import toxir from "../../assets/team/toxir.png"
const sections = [
  {
    title: "CEO",
    members: [
      {
        name: 'Iskandar Mukhamedov',
        position: 'Founder',
        image: iskandar,
      },
      {
        name: 'Yousef Husain Yousef',
        position: 'UAE CEO',
        image: yousef,
      },
      {
        name: 'Oybek Nazirov',
        position: 'Russian Federation CEO',
        image: oybek,
      },
    ],
  },
  {
    title: "International Manager",
    members: [
      {
        name: 'Aziza Mukhamedova',
        position: 'International Manager',
        image: aziza,
      },
    ],
  },
  {
    title: "Project Manager",
    members: [
      {
        name: 'Shakhzod Azizov',
        position: 'Project Manager',
        image: shakhzod,
      },
      {
        name: 'Ruslan Kotov',
        position: 'Project Manager',
        image: ruslan,
      },
    ],
  },
  {
    title: "Designers",
    members: [
      {
        name: "Bekzod Shamsiddinov",
        position: "Senior Designer",
        image: bekzod
      },
      {
        name: "Kamila Kim",
        position: "Interior Designer",
        image: kamila
      },
      {
        name: "Asalya Azizova",
        position: "Interior Designer",
        image: asal
      },
      {
        name: "Sardor Kamilov",
        position: "Creative Producer",
        image: sardor
      },
      {
        name: "Tatyana Kasimova",
        position: "Interior Designer",
        image: tatyana
      },
      {
        name: "Abdurahmon Mirdadaev",
        position: "Interior & Exterior Designer",
        image: abdurahmon
      },
      {
        name: "Mirjalol Isroilov",
        position: "CGI Artist",
        image: mirjalol
      },
    ]
  },
  {
    title: "Сonstruction",
    members: [
      {
        name:"Abduqodir Mirdadaev",
        position:"Senior Architect",
        image: abduqodir
      },
      {
        name:"Bohodir Ibraimov",
        position:"Supply Manager",
        image: bahodir
      },
      {
        name:"Izzat Kholikov",
        position:"Architect",
        image: izzat
      },
      {
        name:"Bobur Asrorov",
        position:"Architect",
        image: bobur
      },
      {
        name:"Toxir Usmonov",
        position:"Architect",
        image: toxir
      },
    ]
  }
];

const Team = () => {
  return (
    <section>
      <div className="h-[39vh] pl-[13vw] ">
        <div className="max-w-[510px] ml-[8%] mt-[8%]">
          <h2 className="text-[50px] font-serif text-gray-900 mb-3 relative">TEAM</h2>
          <p className="text-gray-400 text-[20px] leading-relaxed font-medium w-[580px]">
            A competent team and competent design gives us the opportunity to work for an excellent result.
            The key point of our team is responsibility and punctuality. We will do our best to make you comfortable
            at all stages of collaboration from design to implementation!
          </p>
        </div>
      </div>


      <div className='bg-[#f8f6f6]'>
        <div className="pl-[200px] pr-10 space-y-12 mt-10 w-[93%] m-auto pt-4 pb-7">
          {sections.map((section, sIndex) => (
            <div key={sIndex}>
              <h3 className="text-5xl font text-gray-800 font-serif mb-4">{section.title}</h3>
          
              <div className="flex gap-[20px] flex-wrap ">
                {section.members.map((member, index) => (
                  <div
                    key={index}
                    className="relative group w-[350px] h-[520px] overflow-hidden rounded-xl shadow-lg bg-black/50"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500"
                    />

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                    <div className="absolute bottom-4 left-0 w-full px-4 text-center z-20 ">
                      <div className="transition-all duration-500 transform group-hover:-translate-y-[80px]">
                        <h3 className="text-[35px] font-extrabold text-white">{member.name}</h3>
                        <p className="text-bold text-[25px] text-white">{member.position}</p>
                
                        {/* <span className="absolute w-[60%] h-0.5 bg-white block right-[19%]"></span> */}
                
                        <div className="flex justify-center space-x-4 mt-4 text-[30px] transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <a href="#" className="text-white hover:text-pink-400">
                            <FaInstagram />
                          </a>
                          <a href="#" className="text-white hover:text-blue-500">
                            <FaFacebookF />
                          </a>
                          <a href="#" className="text-white hover:text-blue-300">
                            <FaLinkedinIn />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Team;
