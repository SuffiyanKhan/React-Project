import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import DetailPage from "./Pages/DetailPage"
import PageNotFound from "./Components/PageNotFound/PageNotFound"
import OrderPage from "./Pages/OrderPage"
import Navbar from './Components/Navbar/Navbar.jsx'
import Dashboard from "./Pages/Dashboard.jsx"
import Customers from "./SideMenuPages/Customers.jsx"
import SellersVendors from "./SideMenuPages/SellersVendors.jsx"
import Orders from "./SideMenuPages/Orders.jsx"
import Reviews from "./SideMenuPages/Reviews.jsx"
import Product from "./SideMenuPages/Products.jsx"
import Categories from "./SideMenuPages/Categories.jsx"
import DashboardNavbar from "./Components/DashboardNavbar/DashboardNavbar.jsx"

function App() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <PageNotFound />
    },
    {
      path: '/',
      element: <><Navbar /> <Home /></>
    },
    {
      path: '/d/:id',
      element: <><Navbar /> <DetailPage /></>
    }, {
      path: '/o',
      element: <> <OrderPage /></>
    },
    {
      path: '/dashboard',
      element: <><DashboardNavbar ><Dashboard /></DashboardNavbar> </>
    },
    {
      path: '/customers',
      element: <><DashboardNavbar ><Customers /></DashboardNavbar> </>
    }, {
      path: '/sellers',
      element: <><DashboardNavbar ><SellersVendors /></DashboardNavbar> </>
    }, {
      path: '/orders',
      element: <><DashboardNavbar ><Orders /></DashboardNavbar> </>
    }, {
      path: '/reviews',
      element: <><DashboardNavbar ><Reviews /></DashboardNavbar> </>
    }, {
      path: '/products',
      element: <><DashboardNavbar ><Product /></DashboardNavbar> </>
    }, {
      path: '/categories',
      element: <><DashboardNavbar ><Categories /></DashboardNavbar> </>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App