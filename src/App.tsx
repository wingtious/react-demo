import { ConfigProvider } from 'antd'
import zh_CN from 'antd/locale/zh_CN'
import LayoutComponent from './components/LayoutComponent';
function App() {
  return (
    <ConfigProvider locale={zh_CN}>
        <LayoutComponent></LayoutComponent>
    </ConfigProvider>
  );
}

export default App;
