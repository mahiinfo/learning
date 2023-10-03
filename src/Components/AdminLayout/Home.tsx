import {
  LaptopOutlined,
  UserOutlined,
  StopOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Badge, Breadcrumb, Layout, Menu, theme } from "antd";
import React from "react";
import StatisticComponent from "./StatisticComponent";
import { sideMenuRouter } from "../../router";
import SideMenu from "./SideMenuComponent";
const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = [
  {
    label: "Menu",
    key: "mail",
    icon: <ToolOutlined />,
    children: [
      { key: 1, label: "Profile", icon: <UserOutlined /> },
      { key: 2, label: "Logout", icon: <StopOutlined /> },
    ],
  },
];


const notification = [
  {
    key: 1,
    icon: (
      <Badge
        className="site-badge-count-109"
        count={true ? 109 : 0}
        style={{ backgroundColor: "#f5222d",display:'flex',alignItems:'center' }}
      />
    ),
    label: "",
    children: [
        { key: 1, label: "https://codesandbox.io/s/", },
         {key:2,label:'https://www.bing.com/search?q=antd'}
      ],
  },
];

const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items2: MenuProps["items"] = sideMenuRouter.map((e) => {

    return {
      key: e.key,
      icon: React.createElement(e.icon),
      label: e.label,
  
      ...e.children && {children: e.children.map((e)=>e)}
    };
  });
  
  return (
    <Layout >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div className="demo-logo" />
        <h1 style={{ color: "#ffff" }}>Mahi</h1>

        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          items={items1}
          style={{ marginLeft: "auto" }}
          onClick={(e) => {
            if (parseInt(e.key) === 2) {
              localStorage.clear();
              window.location.reload();
            }
          }}
        />

        <Menu
          theme="dark"
          selectable={false}
          mode="vertical"
          items={notification}
          style={{alignContent:'center',justifyContent:'center',display:'flex'}}
        />
      </Header>
      <Layout>
        <SideMenu colorBgContainer={colorBgContainer}/>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <StatisticComponent/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
