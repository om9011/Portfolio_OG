import React from 'react';
import info from '../Data/Info';
import { FaGithub, FaLinkedin, FaLocationArrow, FaPhone, FaMailBulk, FaHackerrank, FaCodepen } from 'react-icons/fa';

const Info = () => {
  return (
    <div className="space-y-6 border rounded-lg shadow-md  pb-2 h-full bg-white">
      {/* Profile Image and Name */}
      <div className="rounded-md  p-4 m-2">
        <img src={info.profileImage} alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
        <h1 className="text-xl font-bold text-center">{info.name}</h1>
        <p className="text-center bg-gray-100 py-2 rounded-md text-lg">{info.title}</p>
      </div>

      {/* Contact Information */}
      <div className='rounded-md bg-gray-100 p-4 m-2 '>
        <h2 className="text-lg font-semibold">Contact Information</h2>
        <hr className="border-t-2 border-blue-500 my-2" />
        <div className="space-y-2 text-left">
          <p className='flex items-center gap-4'><FaMailBulk className="text-md" /><a href={`mailto:${info.contact?.email}`} className="text-blue-500 text-sm">{info.contact?.email}</a></p>
          <p className='flex items-center gap-4'><FaPhone className="text-md" /><a href={`tel:${info.contact?.phone}`} className="text-blue-500 text-sm">{info.contact?.phone}</a></p>
          <p className='flex items-center gap-4'><FaLocationArrow className="text-md" /> <span className="text-sm">{info.contact?.location}</span></p>
        </div>
      </div>

      {/* Social Links */}
      <div className='rounded-md bg-gray-100 p-4 m-2'>
        <h2 className="text-lg font-semibold">Social Profiles</h2>
        <hr className="border-t-2 border-blue-500 my-2" />
        <div className="grid grid-cols-2 gap-2">
          <p className="flex flex-col items-center justify-center border bg-white py-2 rounded-md">
            <FaGithub className="text-lg" />
            <a href={info.socialLinks?.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm">
              GitHub
            </a>
          </p>
          <p className="flex flex-col items-center justify-center border bg-white py-2 rounded-md">
            <FaLinkedin className="text-lg" />
            <a href={info.socialLinks?.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm">
              LinkedIn
            </a>
          </p>
          <p className="flex flex-col items-center justify-center border bg-white py-2 rounded-md">
            <FaCodepen className="text-lg" />
            <a href={info.socialLinks?.leetcode} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm">
              LeetCode
            </a>
          </p>
          <p className="flex flex-col items-center justify-center border bg-white py-2 rounded-md">
            <FaHackerrank className="text-lg" />
            <a href={info.socialLinks?.hackerrank} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm">
              HackerRank
            </a>
          </p>
        </div>
      </div>
      {/* Mail Me Button */}
      <div className="mt-4 text-center">
          <a href={`mailto:${info.contact?.email}`} className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
            Mail Me
          </a>
        </div>
    </div>
  );
}

export default Info;
