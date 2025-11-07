import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Avatar, theme } from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  };

  // Menu itemlar
  const menuItems = [
    { key: "1", label: <NavLink to="/">Asosiy</NavLink> },
    { key: "2", label: <NavLink to="/menegers">Menejerlar</NavLink> },
    { key: "3", label: <NavLink to="/admins">Adminlar</NavLink> },
    { key: "4", label: <NavLink to="/teachers">Ustozlar</NavLink> },
    { key: "5", label: <NavLink to="/students">Studentlar</NavLink> },
    { key: "6", label: <NavLink to="/groups">Guruhlar</NavLink> },
    { key: "7", label: <NavLink to="/courses">Kurslar</NavLink> },
    { key: "8", label: <NavLink to="/payment">To‘lovlar</NavLink> },
    {
      type: "group",
      label: "Boshqalar",
      children: [
        { key: "9", label: <NavLink to="/profile">Profil</NavLink> },
        {
          key: "10",
          label: (
            <span
              onClick={logOut}
              className="text-red-500 hover:text-red-600 cursor-pointer"
            >
              <LogoutOutlined /> 
            </span>
          ),
        },
      ],
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        style={{
          backgroundColor: "#fff",
          borderRight: "1px solid #f0f0f0",
        }}
      >
        <div className="h-[64px] flex items-center justify-center font-bold text-gray-700">
          LingLee
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
          style={{
            backgroundColor: "#fff",
            fontSize: "16px",
          }}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: "0 20px",
            background: colorBgContainer,
            borderBottom: "1px solid #f0f0f0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Chap tomonda toggle button */}
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />

          {/* O‘ng tomonda foydalanuvchi */}
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">
              {user ? `${user.first_name} ${user.last_name}` : "Foydalanuvchi"}
            </span>
            <Avatar icon={<UserOutlined />} />
          </div>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
