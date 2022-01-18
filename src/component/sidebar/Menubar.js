import React from "react";
import { Menu, Switch } from "antd";
import {} from "@ant-design/icons";
import HomeIcon from "../../icon/4.svg";
import BlogIcon from "../../icon/3.svg";
import VolunteersIcon from "../../icon/2.svg";
import AboutIcon from "../../icon/5.svg";
import DarkModeIcon from "../../icon/1.svg";

import styles from "../../asset/Menubar/index.module.scss";

function Menubar(theme, changeTheme) {
  // const [collapsed, setCollapsed] = useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };
  return (
    <>
      <div className={styles.navebar}>
        <div className={styles.menubar_header}>
          <a href="/">
            Covid19 <span>India</span>
          </a>
        </div>
        <div className={styles.menubar_content}>
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            //   theme="dark"
            // inlineCollapsed={collapsed}
            // onClick={toggleCollapsed}
          >
            <Menu.Item key="1" icon={<img src={HomeIcon} alt="HomeIcon" />}>
              {/* Home */}
            </Menu.Item>
            <Menu.Item key="2" icon={<img src={BlogIcon} alt="BlogIcon" />}>
              {/* Blog */}
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<img src={VolunteersIcon} alt="VolunteersIcon" />}
            >
              {/* Volunteers */}
            </Menu.Item>
            <Menu.Item key="4" icon={<img src={AboutIcon} alt="AboutIcon" />}>
              {/* About */}
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<img src={DarkModeIcon} alt="DarkModeIcon" />}
              onChange={changeTheme}
              checked={theme === "dark"}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            >
              {/* <Switch /> */}
              {/* A crowdsourced initiative. */}
            </Menu.Item>
          </Menu>
        </div>

        <div className={styles.menubar_footer}>English</div>
      </div>
    </>
  );
}

export default Menubar;

{
  /* <div style="position: absolute; transform: translate3d(10rem, 0px, 0px); height: 100vh; z-index: -1;">
  <div class="expand">
    <a href="/">
      <span class="focused">Home</span>
    </a>
    <a href="/blog">
      <span class="">Blog</span>
    </a>
    <a href="/volunteers">
      <span class="">Volunteers</span>
    </a>
    <a href="/about">
      <span class="">About</span>
    </a>
    <div class="expand-bottom">
      <h5>A crowdsourced initiative.</h5>
    </div>
  </div>
</div>; */
  // style="position: absolute; transform: translate3d(10rem, 0px, 0px); height: 100vh; z-index: -1;"
}
