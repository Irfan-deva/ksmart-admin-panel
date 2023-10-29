import { LineStyle } from '@mui/icons-material';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Products from './pages/products/Products';
import Orders from './pages/orders/Orders';
import Categories from './pages/categories/Categories';
import Users from './pages/users/Users';

function App() {
  const Layout = () => {
    return (<div className="app">
      <Topbar />
      <div className="container">
        <Sidebar />
        {/* <Home />
         */}
        <Outlet />
      </div>
    </div>
    );
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'products',
          element: <Products />
        },
        {
          path: 'orders',
          element: <Orders />
        },
        {
          path: 'categories',
          element: <Categories />
        },
        {
          path: 'users',
          element: <Users />
        },
      ]

    }
  ])
  return <RouterProvider router={router} />
}

export default App
