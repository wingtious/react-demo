// 导入路由
import { Outlet ,useLocation, useNavigate, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import {ConfigProvider,Layout, Menu } from 'antd';
import 'antd/dist/reset.css';
import { router, menuItems } from '../routers';
const { Header, Content, Footer, Sider } = Layout;
function  App() {
   const defaultPage = 'Home';
   const [collapsed, setCollapsed] = useState(false);
   const [currentPage,setCurrentPage] = useState(defaultPage);
   const location = useLocation();
   const navigate = useNavigate(); 
   const SwitchPage=(value:string)=>{
    console.log(value);
    setCurrentPage(value);
    navigate(value,{ replace: true});
   }

  //  
   return(
    <ConfigProvider theme = {{token:{  },}}>
      <Layout style={{minHeight:'100%'}}>  
        <Header className='title' style={{ display: 'flex', alignItems: 'center' }}>
          <img src={require('../assets/logo.png')} alt='gyg' />
          <h1>BEST Inc.</h1>
        </Header>
        <Layout className='heigth'>
          <Sider width={200} collapsible collapsed = {collapsed} onCollapse={(value)=>setCollapsed(value)} >
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={[defaultPage]} onClick={(item)=>SwitchPage(item.key)} 
            selectedKeys = {[location.pathname]}
            mode="inline" style={{ height: '100%', borderRight: 0 }} items={menuItems} />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{ padding: 24,margin: 0,minHeight: 280,}}>
              <Outlet></Outlet>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Web Design ©2023 Created by BG458896</Footer>
        </Layout>
      </Layout>
      </Layout>
      </ConfigProvider>
   );
};

export default App
