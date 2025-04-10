import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from '../pages/Home/ui/HomePage.tsx';
import { Movies } from '../pages/Home/ui/Movies.tsx';

export function App() {
  const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/movies', element: <Movies /> },
  ]);

  return <RouterProvider router={router} />;
}
