import { useState } from "react";
import { Layout } from "antd"; 
import SetInfo from '../config/base.config'
const { Content, Header, Footer, Sider } = Layout

const LayoutComponent = () => {
    return (
        <>   
           <Layout className='leftMenu'>
              <Sider trigger={null} collapsible collapsed={false}>
                <div className= '123'> {SetInfo.SetName} </div> 
            </Sider>
           </Layout>
           <Layout className='topMenu'>
           </Layout>
           <Content></Content>
           <Footer className='foot'></Footer>
        </>
      );

}

    
export default LayoutComponent