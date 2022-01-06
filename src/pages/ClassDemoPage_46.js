import React from 'react';
import Grocery_46 from '../demo/grocery/Grocery_46';
import Navbar_46 from '../demo/navbar/Navbar_46';
import {links, social} from './nav_data';

const ClassDemoPage_46 = () => {
  return (
    <>
    <Navbar_46 links={links} social={[]}/>
    <Grocery_46 />
    </>
  );
};

export default ClassDemoPage_46;
