import { ConfigProvider } from 'antd'
import {  useEffect } from "react";
import 'antd/dist/reset.css'
import zh_CN from 'antd/locale/zh_CN'
import LayoutComponent from './LayoutComponent';

export default function Main() {
  return (
      <ConfigProvider locale={zh_CN}>
        <LayoutComponent></LayoutComponent>
      </ConfigProvider>
  );
}
