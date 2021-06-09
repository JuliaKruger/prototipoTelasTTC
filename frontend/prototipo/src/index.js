import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import FormLayoutDemo from "./formulario/form";
import LogoAmbevTech from "./images/logoAmbevTech.png";
import {MdDehaze} from "react-icons/md"

const { Header, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <Layout>
    <Sider
      className="sider"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <MdDehaze id="icone" />
      <Menu className="sider" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item className="textSider" key="1" icon={<UserOutlined />}>
          Gerais
        </Menu.Item>
        <Menu.Item className="textSider" key="2" icon={<VideoCameraOutlined />}>
          Classificação
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      >
        <img id="logoAmbevTech" src={LogoAmbevTech} />
      </Header>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <FormLayoutDemo>

          </FormLayoutDemo>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        
      </Footer>
    </Layout>
  </Layout>,
  document.getElementById("root")
);