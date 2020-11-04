import React, { useState } from "react";
import Aside from "./Aside";
import Main from "./Main";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app rtl ${toggled ? "toggled" : ""}`}>
      <Aside
        image={image}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Main
        image={image}
        toggled={toggled}
        collapsed={collapsed}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        handleImageChange={handleImageChange}
      />
    </div>
  );
};

export default Layout;
