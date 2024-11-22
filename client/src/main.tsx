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
import Story from './pages/Story.tsx';
import Feature from './pages/Feature.tsx';
import Pricing from './pages/Pricing.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<BaseLayout />}>
      <Route path='/' element={<App />} />
      <Route path='home' element={<App />} />
      <Route path='stories' element={<Story />} />
      <Route path='features' element={<Feature />} />
      <Route path='pricing' element={<Pricing />} />
    </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
