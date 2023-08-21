import React from 'react'
import App from './App'
import './index.css'
import '../../node_modules/antd/dist/antd.min.css'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import LayoutComponent from './components/LayoutComponent'


const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(
<React.StrictMode>
<BrowserRouter>
<LayoutComponent/>
      <App />
</BrowserRouter>
</React.StrictMode>
)