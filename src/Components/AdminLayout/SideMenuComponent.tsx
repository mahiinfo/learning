import { Menu, MenuProps, theme } from "antd"
import Sider from "antd/es/layout/Sider"
import React from "react";
import { sideMenuRouter } from "../../router";

 const SideMenu = (props :any)=>{
    const items2: MenuProps["items"] = sideMenuRouter.map((e) => {
        const {
            token: { colorBgContainer },
          } = theme.useToken();
          
        return {
          key: e.key,
          icon: React.createElement(e.icon),
          label: e.label,
      
          ...e.children && {children: e.children.map((e)=>e)}
        };
      });
    return <Sider width={200} style={{ background: props.colorBgContainer }}>
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
      items={items2}
    />
  </Sider>
 }

 export default SideMenu;