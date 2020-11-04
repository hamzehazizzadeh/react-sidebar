import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import sidebarBg from "./assets/bg1.jpg";

const Aside = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={true}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          خوش آمدید
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">جديد</span>}
          >
            داشبورد
          </MenuItem>
          <MenuItem icon={<FaGem />}> اجزاء</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title="با پسوند"
            icon={<FaRegLaughWink />}
          >
            <MenuItem>زیر منو 1</MenuItem>
            <MenuItem>زیر منو 2</MenuItem>
            <MenuItem>زیر منو 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title="با پیشوند"
            icon={<FaHeart />}
          >
            <MenuItem>زیر منو 1</MenuItem>
            <MenuItem>زیر منو 2</MenuItem>
            <MenuItem>زیر منو 3</MenuItem>
          </SubMenu>
          <SubMenu title="چند سطح" icon={<FaList />}>
            <MenuItem>زیر منو 1 </MenuItem>
            <MenuItem>زیر منو 2 </MenuItem>
            <SubMenu title="زیر منو 3">
              <MenuItem>زیر منو 3.1 </MenuItem>
              <MenuItem>زیر منو 3.2 </MenuItem>
              <SubMenu title="زیر منو 3.3">
                <MenuItem>زیر منو 3.3.1 </MenuItem>
                <MenuItem>زیر منو 3.3.2 </MenuItem>
                <MenuItem>زیر منو 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/hamzehazizzadeh/react-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>مشاهده منبع</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
