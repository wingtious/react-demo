import { useEffect, useState } from "react";
import { Layout, Menu } from "antd"; 
import { matchRoutes,   useLocation,  useNavigate } from "react-router-dom";
const { Content, Header, Footer, Sider } = Layout

interface MenuInfo{
    title:string
    key: string
    children: Array<MenuInfo>
    icon: string
}

const GetMenus = () => {
  let array: Array<MenuInfo> =
    [
        {
         key:"1",
         title :"Layout",
         children :[],
         icon:""
       },
       {
        key:"2",
        title :"News",
        children :[],
        icon:""
       }
      ];
      return array;
};



export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const [collapsed, setCollapsed] = useState(false); 
  
  // items 菜单内容	ItemType[]
  const [items, setitems] = useState([]); 
  // defaultSelectedKeys 初始选中的菜单项 key 数组
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([]); 
  // defaultOpenKeys 初始展开的 SubMenu 菜单项 key 数组
  const [defaultOpenKeys, setDefaultOpenKeys] = useState([]);
  // submenu keys of first level
  const [rootSubmenuKeys , setrootSubmenuKeys ] = useState([]) 
  // openKeys 当前展开的 SubMenu 菜单项 key 数组
  const [openKeys, setOpenKeys] = useState([]);


  const getTreeMenu = (menuData:any) => {
    if (menuData.length > 0) {
      return menuData.map((item: any) => {
        if (item.children && item.children.length > 0) {
          return <Menu.SubMenu key={item.jd_dm} title={item.jd_mc} icon={<i className={`iconfont icon-${item.jd_icon}`}/>}>
                  {getTreeMenu(item.children)}
                </Menu.SubMenu >
        }
        return (
          <Menu.Item key={item.jd_dm}>{item.jd_mc}</Menu.Item>
        )
      })
    }
  }

  const onClick = (e: any) => { 
    navigate(e.key);
  };

  
  const onOpenChange = (e: any) => { 
    navigate(e.key);
  };
  
  return (
    <>   
       <Layout className='leftMenu'>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className= '123'> 123123 </div> 
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={defaultSelectedKeys} //  初始选中的菜单项 key 数组  string[]
              defaultOpenKeys={defaultOpenKeys} // 初始展开的 SubMenu 菜单项 key 数组
              openKeys={openKeys} // openKeys  当前展开的 SubMenu 菜单项 key 数组
              onOpenChange={onOpenChange} //onOpenChange SubMenu 展开/关闭的回调
              onClick={onClick}
              style={{
                height: "100%",
                borderRight: 0,
              }}
              items={getTreeMenu(GetMenus())}
            ></Menu>
        </Sider>
       </Layout>
       <Layout className='topMenu'>
       </Layout>
       <Content></Content>
       <Footer className='foot'></Footer>
    </>
  );
}
