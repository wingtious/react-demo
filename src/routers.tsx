import { HomeOutlined, LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {  createBrowserRouter, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import type { MenuProps } from 'antd';
import App from './App';

// 路由懒加载的封装
function LazyLoad(path: string){
  const Comp = lazy(() => import(`./pages/${path}`));
  return (
    <Suspense fallback={<>加载中...</>}>
      <Comp />
    </Suspense>
  );
};

// 菜单
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

// router
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <App/>,
      errorElement:LazyLoad('NotFound'),
      children:[
        {
          path:"/Home",
          element: LazyLoad('Home'),
          children:[
            {
              index: true,
              element:LazyLoad('Home'),
            },
            {
              path:"/Home/other",
              element:LazyLoad("Home/other.jsx"),
            }
          ]
        },
        {
          path:"/News",
          element: LazyLoad('News'),
        },
        {
          path:"/Login",
          element: LazyLoad('Login'),
        },
        {
          path:"*",
          element: LazyLoad('NotFound'),
        },
      ]
    },
    
  ]
);

// menus
const menuItems = [
  getItem('Home','/', <HomeOutlined/>, [getItem('Home', 'Home',<LaptopOutlined/>),getItem('Other', 'Home/other',<LaptopOutlined/>)]),
  getItem('News','News', <NotificationOutlined/> ),
];

export { router, menuItems }

