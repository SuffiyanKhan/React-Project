import { Link } from "react-router-dom"

function DashboardProductHeader() {
  return (
    <>
        <div className="d-flex justify-content-between px-4 mt-5">
            <h3>Products Manage</h3>
            <Link className="btn bg-btn-color text-light fw-semibold" to={'/addproduct'}>Add Product</Link>
        </div>
    </>
  )
}

export default DashboardProductHeader