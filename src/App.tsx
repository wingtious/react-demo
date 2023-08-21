// 导入路由
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// 配置路由规则
function App() {
  return (
      <Routes>
        <Route path="/Home" element={LazyLoad("Home")}>
          <Route index element={<Navigate to="Home"></Navigate>} />
          <Route path="other" element={LazyLoad("Home/other.jsx")} />
        </Route>
        <Route path="/news" element={LazyLoad("News")}></Route>
        <Route path="/login" element={LazyLoad("Login")}></Route>
        <Route path="/" element={<Navigate to="Home"></Navigate>}></Route>
        <Route path="*" element={LazyLoad("NotFound")}></Route>
      </Routes>
  )}

// 路由懒加载的封装
const LazyLoad = (path:string) => {
  const Comp = lazy(() => import(`./pages/${path}`));
  return (
    <Suspense fallback={<>加载中...</>}>
      <Comp />
    </Suspense>
  );
};

export default App
