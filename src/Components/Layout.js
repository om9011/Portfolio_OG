import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Details from './Details';
import Info from './Info';

const Layout = () => {
  const [activeSection, setActiveSection] = useState('Education');

  return (
    <div className="flex w-full h-screen">
      {/* Section 1: Personal Information */}
      <div className="mx-1 p-2 w-1/4  ">
        <Info />
      </div>

      {/* Section 2: Detailed Section */}
      <div className="w-3/4 mx-1 p-2">
        <Details activeSection={activeSection} />
      </div>

      {/* Section 3: Vertical Navbar */}
      <div className="w-1/8 p-2 mx-1">
        <Sidebar setActiveSection={setActiveSection} />
      </div>
    </div>
  );
}

export default Layout;
