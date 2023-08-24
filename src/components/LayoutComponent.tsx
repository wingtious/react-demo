import * as React from 'react'
import { useState } from "react";
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import SetInfo from '../config/base.config'
import { useNavigate, Routes, Route } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;


interface ILayoutModalProps{
	title:string;
	children : React.ReactElement<any>;
  colorBgContainer:any;
}

interface ILayoutModalState{
	setOpenKeys:[];
	collapsed : boolean;
}

const GetLayout=()=>{
  const navigate = useNavigate(); 

  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e);
    navigate(e.key);
 };
}


const items: MenuProps['items'] = SetInfo.Page.filter(x=>x.isShow).map(
  (item) => {
     if(item.children != null && item.children.length > 0)
     {
      return {
        key: `${item.key}`,
        icon: React.createElement(item.icon),
        label: `${item.name}`,
        children: item.children.map((subItem, j) => {
          return {
            key: `${subItem.key}`,
            icon: React.createElement(item.icon),
            label: `${subItem.name}`,
          };
        }),
      };  
     }
     else
     {
      return {
        key: `${item.key}`,
        icon: React.createElement(item.icon),
        label: `${item.name}`,
      }; 
     }
  },
);




class LayoutComponent extends React.Component<ILayoutModalProps, ILayoutModalState> {
	static defaultProps={
    colorBgContainer: '#ffffff'
	}

	constructor(props:ILayoutModalProps){
		super(props)
    this.state =
    {
      setOpenKeys:[],
      collapsed : false,
    }
	}

  render() {
    const {children,title,colorBgContainer} = this.props
    return(
    <Layout>
      <Header className='title' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={require('../assets/logo.png')} alt='gyg' />
        <h1>BEST Inc.</h1>
      </Header>
      <Layout className='heigth'>
        <Sider width={200} style={{ background: colorBgContainer}}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']}  onClick={GetLayout} 
         mode="inline" style={{ height: '100%', borderRight: 0 }} items={items} />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: 24,margin: 0,minHeight: 280, background: colorBgContainer,}}>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Layout>
  )};
};


export default LayoutComponent;