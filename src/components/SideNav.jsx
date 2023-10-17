import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const sidebar = () => {
  const [nav, SetNav] = useState(false);

  handleNav = () => {
     SetNav(!nav)
  };

  return (
    <div>
      <AiOutlineMenu />
    </div>
  );
};

export default sidebar;
