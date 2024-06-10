import { Link } from "react-router-dom"

function DashboardCategory() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-between px-4 mt-5">
                    <h2>Categories</h2>
                    <Link className="btn bg-btn-color text-light fw-semibold" to={'/addcategory'}>Add Categories</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default DashboardCategory