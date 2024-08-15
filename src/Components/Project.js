import React from 'react';
import info from '../Data/Info';  // Adjust the path as needed


const Project = () => {
    return (
        <div className='grid grid-cols-2 gap-4 justify-center items-center mt-4'>
            {info.projects.map((item, index) => (
                <div key={index} className="bg-white border rounded-lg shadow-sm p-4 mb-4 h-full">
                    <div className='p-2 border my-2'>
                        <img src={item.image} className='w-full' alt={item.title} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    {item.description && (
                        <p className="text-gray-600 mb-1 text-justify">
                            {item.description.substring(0, 180) + "....."}
                        </p>
                    )}
                    <div className='my-4 h-28'>
                        Tech Stack:
                        {item.techStack.map((tech, index) => (
                            <p className="bg-gray-200 font-semibold mb-1 inline-block m-2 px-4 py-1 rounded-lg" key={index}>
                                {tech}
                            </p>
                        ))}
                    </div>
                    <div className='flex justify-center items-center'>
                    {item.link && (
                        <a href={item.link} className='text-white bg-gray-400 mb-2 px-4 py-2 rounded-lg'>
                            Github Link
                        </a>
                    )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project