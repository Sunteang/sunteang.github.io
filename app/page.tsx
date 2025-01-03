import React from 'react';
import Profile from '@/app/images/Profile.jpeg'
import Image from 'next/image';

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white shadow-lg rounded-lg max-w-6xl w-full p-8">
        <div className="flex">
          {/* Left Section */}
          <div className="w-1/3 pr-8 border-r border-gray-200">
            <div className="text-center mb-8">
              <Image
                src={Profile}
                alt="Profile"
                width={160}
                height={160}
                className="w-40 h-40 rounded-full mx-auto border-4 border-gray-200"
              />
              <h1 className="text-3xl font-semibold mt-4 text-gray-800">Sunteang SEREY</h1>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white bg-[#444440] text-center px-3 py-1 mb-2 rounded-2xl">Contact Me</h2>
              <div className='flex flex-col justify-center gap-2'>
                <p className="text-sm text-gray-600">📞 +855 (0) 98 255 128</p>
                <p className="text-sm text-gray-600">✉️ sereysunteang@gmail.com</p>
                <p className="text-sm text-gray-600">🌐 sunteang.github.io</p>
                <p className="text-sm text-gray-600">🔗 linkedin.com/in/sunteangserey</p>
                <p className="text-sm text-gray-600">📍 Preysor, Dongkor, Phnom Penh, Cambodia</p>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white bg-[#444440] text-center px-3 py-1 mb-2 rounded-2xl">Languages</h2>
              <div className='flex flex-col gap-2'>
                <p className="text-sm text-gray-600">Khmer - Native</p>
                <p className="text-sm text-gray-600">English - Good</p>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white bg-[#444440] text-center px-3 py-1 mb-2 rounded-2xl">Skills</h2>
              <ul className="list-disc list-inside text-sm text-gray-600 gap-2">
                <li>Web Programming with HTML, CSS, JS, Tailwind, ReactJS, NextJS</li>
                <li>Backend with NodeJS, Express, and MongoDB</li>
                <li>Version control with Git & GitHub</li>
                <li>DevOps: GitHub Action (CI/CD) with Docker and AWS</li>
                <li>Fundamentals of Computer Hardware and Software/Operating system</li>
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white bg-[#444440] text-center px-3 py-1 mb-2 rounded-2xl">Interests</h2>
              <div className='flex flex-col gap-2'>
                <p className="text-sm text-gray-600">Web & App Development</p>
                <p className="text-sm text-gray-600">Artificial Intelligence</p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white bg-[#444440] text-center px-3 py-1 mb-2 rounded-2xl">Reference</h2>
              <div className='flex flex-col gap-2'>
                <p className="text-sm font-semibold text-gray-600">Vichhaiy SEREY</p>
                <p className="text-sm text-gray-600">DevSecOps Team Lead at ABA Bank</p>
                <p className="text-sm text-gray-600">📞 +855 (0) 15 370 170</p>
                <p className="text-sm text-gray-600">✉️ vichhaiyserey@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-2/3 pl-8">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                I'm a passionate Computer Science student with a solid foundation in web development and a love for learning. I completed a full-stack bootcamp at SabaiCode, where I gained hands-on experience with React, Next.js, TypeScript, Node.js, Express, MongoDB, and DevOps practices. I'm a strong communicator, good at managing projects, and have experience leading teams. With a positive attitude and attention to detail, I'm always eager to take on challenging projects and grow in a dynamic environment.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Education</h2>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Third Year Student</h3>
                <p className="text-sm text-gray-600">University of Cambodia, Phnom Penh</p>
                <p className="text-sm text-gray-500 italic">March 2023 - Present</p>
                <p className="text-sm text-gray-600">
                  Pursuing a Bachelor of Computer Science at the University of Cambodia, I am developing a strong foundation in core computer science principles and their applications.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Fullstack Web Development</h3>
                <p className="text-sm text-gray-600">SabaiCode Bootcamp</p>
                <p className="text-sm text-gray-500 italic">June 2024 - Jan 2025</p>
                <p className="text-sm text-gray-600">
                  Skills: Full-Stack Developer with React, NextJS, TypeScript, Tailwind, StoryBook; Backend: NodeJS, Express, TSOA, RESTful API, MongoDB, Testing for code quality; DevOps: Deploy CI/CD pipelines with Docker and AWS
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">High School Diploma</h3>
                <p className="text-sm text-gray-600">Sok An Poychar High School, Banteay Meanchey</p>
                <p className="text-sm text-gray-500 italic">2017 - 2022</p>
                <p className="text-sm text-gray-600">
                  Skills: Hardworking student with good study skills, strong academic record, and readiness to take on demanding assignments.
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Experience</h2>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">LomNov, RealEstate Web Application</h3>
                <p className="text-sm text-gray-600">At SabaiCode</p>
                <p className="text-sm text-gray-500 italic">Jan 01, 2025</p>
                <p className="text-sm text-gray-600">
                  Leveraged my frontend development skills to lead the creation of Lomnov, a real estate web application. My responsibilities included designing and implementing the user interface, ensuring cross-browser compatibility, and integrating with backend APIs.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">KHNOG 5 Conference</h3>
                <p className="text-sm text-gray-600">By Cambodia Network Operators Group</p>
                <p className="text-sm text-gray-500 italic">Oct 22, 2023</p>
                <p className="text-sm text-gray-600">
                  Attended KHNOG 5 conference, expanding knowledge in computer networking, cybersecurity, and networking with people.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Python Essentials 1</h3>
                <p className="text-sm text-gray-600">By Cisco Networking Academy</p>
                <p className="text-sm text-gray-500 italic">May 30, 2023</p>
                <p className="text-sm text-gray-600">
                  Learning fundamental concepts of computer programming and started building coding skills with the Python programming language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
