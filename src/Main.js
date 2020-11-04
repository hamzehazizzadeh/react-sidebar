import React from "react";
import Switch from "react-switch";
import { FaHeart, FaBars } from "react-icons/fa";
import reactLogo from "./assets/logo.svg";

const Main = ({
  collapsed,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleImageChange,
}) => {
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <h1>
          <img width={80} src={reactLogo} alt="react logo" /> React Sidebar
        </h1>
        <p>
          کتابخانه نوار کناری را با منوهای کشویی و تعداد نامحدود زیر منوهای تو
          در تو واکنش نشان دهید
        </p>
        <div className="social-bagdes">
          <a
            href="https://github.com/hamzehazizzadeh/react-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/hamzehazizzadeh/react-sidebar?style=social"
            />
          </a>
          <a
            href="https://github.com/hamzehazizzadeh/react-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub forks"
              src="https://img.shields.io/github/forks/hamzehazizzadeh/react-sidebar?style=social"
            />
          </a>
        </div>
      </header>
      <div className="block ">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleCollapsedChange}
          checked={collapsed}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span>بستن</span>
      </div>
      <div className="block">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleImageChange}
          checked={image}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span>تصویر پس زمینه</span>
      </div>

      <footer>
        <small>
          © <span>{new Date().getFullYear()}</span> made with{" "}
          <FaHeart style={{ color: "red" }} /> by -{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://hamzehazizzadeh.ir"
          >
            Hamzeh Azizzadeh
          </a>
        </small>
        <br />
        <div className="social-bagdes">
          <a
            href="https://github.com/hamzehazizzadeh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub followers"
              src="https://img.shields.io/github/followers/hamzehazizzadeh?label=github&style=social"
            />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Main;
