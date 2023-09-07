import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client';
import { RouterProvider} from 'react-router-dom'
import { router } from './router';
import { Provider } from 'react-redux'
import store from './redux/store'
import './i18n/configs.js';

const container = document.getElementById('root');
const root = createRoot(container!); 

root.render(
<React.StrictMode>
  <Provider store={store}>
     <RouterProvider router={router}/>
  </Provider>
 </React.StrictMode>
)