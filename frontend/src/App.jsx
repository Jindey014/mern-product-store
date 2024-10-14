import react from 'react'
import { createBrowserRouter, RouterProvider , } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/create',
          element: <CreatePage />,
        },
      ],
    },
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App
