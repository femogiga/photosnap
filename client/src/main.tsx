import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<BaseLayout />}>
      <Route path='/' element={<App />} />
      {/* <Route path='about' element={<About />} /> */}
    </Route>
  )
);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
