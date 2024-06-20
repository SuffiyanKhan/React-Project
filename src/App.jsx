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
import AddProduct from "./SideMenuPages/AddProduct.jsx"
import AddCategory from "./SideMenuPages/AddCategory.jsx"
import About from "./Pages/About.jsx"
import Blogs from "./Pages/Blogs.jsx"
import Contact from "./Pages/Contact.jsx"

function App() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <PageNotFound />
    },
    {
      path: '/',
      element: <>
        <Navbar /> <Home />
      </>
    },
    {
      path: '/about',
      element: <>
        <Navbar /> <About />
      </>
    },
    {
      path: '/blogs',
      element: <>
        <Navbar /> <Blogs />
      </>
    },
    {
      path: '/contact',
      element: <>
        <Navbar /> <Contact />
      </>
    },
    {
      path: '/d/:id',
      element: <>
        <DetailPage />
      </>
    }, {
      path: '/o',
      element: <>
        <OrderPage />
      </>
    },
    {
      path: '/dashboard',
      element: <>
        <DashboardNavbar ><Dashboard /></DashboardNavbar>
      </>
    },
    {
      path: '/customers',
      element: <>
        <DashboardNavbar ><Customers /></DashboardNavbar>
      </>
    }, {
      path: '/sellers',
      element: <>
        <DashboardNavbar ><SellersVendors /></DashboardNavbar>
      </>
    }, {
      path: '/orders',
      element: <>
        <DashboardNavbar ><Orders /></DashboardNavbar>
      </>
    }, {
      path: '/reviews',
      element: <>
        <DashboardNavbar ><Reviews /></DashboardNavbar>
      </>
    }, {
      path: '/products',
      element: <>
        <DashboardNavbar ><Product /></DashboardNavbar>
      </>
    }, {
      path: '/categories',
      element: <>
        <DashboardNavbar ><Categories /></DashboardNavbar>
      </>
    }, {
      path: '/addproduct',
      element: <>
        <DashboardNavbar ><AddProduct /></DashboardNavbar>
      </>
    }, {
      path: '/addcategory',
      element: <>
        <DashboardNavbar ><AddCategory /></DashboardNavbar>
      </>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App