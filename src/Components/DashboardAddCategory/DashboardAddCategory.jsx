import { BackButtonf } from "../../Services/backbutton"

function DashboardAddCategory() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="d-flex justify-content-between px-5">
                    <h2 className="fw-bold">Add Category</h2>
                    <button className="btn btn-secondary" onClick={() => { BackButtonf() }}>Back to Categories</button>
                </div>
            </div>
        </div>
    )
}

export default DashboardAddCategory