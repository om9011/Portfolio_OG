import React from 'react';
import info from '../Data/Info'; // Import the updated skills data

const Skills = () => {
    const { skills } = info;

    return (
        <div className="container mx-auto px-4 py-8">
            {Object.entries(skills).map(([category, skillsList]) => (
                <div key={category} className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6">{formatCategoryName(category)}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {skillsList.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white border border-gray-200"
                            >
                                <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-4" />
                                <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                                <p className="text-gray-600 text-center">{skill.para}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

// Helper function to format category names
const formatCategoryName = (category) => {
    switch (category) {
        case 'programmingLanguages':
            return 'Programming Languages';
        case 'developmentLanguages':
            return 'Development Languages';
        case 'databases':
            return 'Databases';
        case 'versionControls':
            return 'Version Controls';
        case 'other':
            return 'Other';
        default:
            return 'Unknown Category';
    }
};

export default Skills;
