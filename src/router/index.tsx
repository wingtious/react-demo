import { HomeOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {  createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import type { MenuProps } from 'antd';
import MainComponent from '../components/MainComponent'

// 路由懒加载的封装
function LazyLoad(path: string){
  const Comp = lazy(() => import(`../pages/${path}`));
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

function getItemNoIcon(
  label: React.ReactNode,
  key?: React.Key | null,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    children,
    label,
  } as MenuItem;
}

// router
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <MainComponent/>,
      errorElement:LazyLoad('NotFound'),
      children:[
        {
          path:"/",
          element: LazyLoad('Home'),
        },
        {
          path:"/Home",
          element: LazyLoad('Home'),
        },
        {     
          path:"/HoverCase",
          children:[
            {
              index: true,
              element:LazyLoad('HoverCase'),
            },
            {
              path:"/HoverCase/Other",
              element:LazyLoad("HoverCase/other.jsx"),
            }
          ]
        },
        {
          path:"/NewsCase",
          children:[
            {
              index: true,
              element:LazyLoad('NewsCase/simple'),
            },
            {
              path:"/NewsCase/index",
              element:LazyLoad("NewsCase/index"),
            }
          ]
        },
        {
          path:"*",
          element: LazyLoad('NotFound'),
        },
      ]
    },
    {
      path:"/Login",
      element: LazyLoad('Login'),
    },   
  ]
);

// menus
const menuItems = [
  getItem('Home','/Home', <HomeOutlined/> ),
  getItem('Case1','Case1', <NotificationOutlined/>, [getItem('方法1', 'HoverCase',<LaptopOutlined/>),getItem('方法2', 'HoverCase/other',<LaptopOutlined/>)]),
  getItem('Case2','Case2', <NotificationOutlined/>,[getItem('方法1', 'NewsCase',<LaptopOutlined/>),getItem('方法2', 'NewsCase/index',<LaptopOutlined/>)] ),
];

// tool menus
const toolMenuItems = [
  getItemNoIcon('工具栏','Home', [getItemNoIcon('工具1', '工具1'),getItemNoIcon('工具2', '工具2')]),
];

export { router, menuItems,toolMenuItems }

