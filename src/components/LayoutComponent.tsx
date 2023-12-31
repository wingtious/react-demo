import { Outlet ,useLocation, useNavigate, Routes } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import {ConfigProvider,Layout, Menu, message   } from 'antd';
import 'antd/dist/reset.css';
import { router, menuItems,toolMenuItems } from '../router';
import { useReduxSelector } from '../redux/hooks'
import { login } from "../redux/reducer/loginReducer";

const { Header, Content, Footer, Sider } = Layout;


function  LayoutComponent() {
   const defaultPage = 'Home';
   const [collapsed, setCollapsed] = useState(false);
   const [currentPage,setCurrentPage] = useState(defaultPage);
   const [currentToolPage,setcurrentToolPage] = useState(defaultPage);
   const location = useLocation();
   const navigate = useNavigate(); 
   const user = useReduxSelector(state => state.login)

   useEffect(() => {
    debugger;
     if(user.userid==0)
     {
      navigate('/Login',{ replace: true});
     }
  }, []);

   const SwitchPage=(value:string)=>{
    console.log(value);
    setCurrentPage(value);
    navigate(value,{ replace: true});
   }

   const onClickTool=(value:string)=>{
    console.log(value);
    messageApi.info('我是个工具栏,'+ value);
   }

   const [messageApi, contextHolder] = message.useMessage();
   
   return(
    <ConfigProvider theme = {{token:{  },}}>
       {contextHolder}
      <Layout style={{minHeight:'100%'}}>  
        <Header className='title' style={{ display: 'flex', alignItems: 'center',width:'100%' }}>
          <img src={require('../assets/logo.png')} alt='gyg' />
          <h1>BEST Inc.</h1>
          <Menu theme="dark" mode="horizontal" items={toolMenuItems}  style={{ marginLeft:'auto' ,position: 'relative'}} selectable = {false} 
          onClick={(item)=>onClickTool(item.key)} />
          {user.name}
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

export default LayoutComponent
