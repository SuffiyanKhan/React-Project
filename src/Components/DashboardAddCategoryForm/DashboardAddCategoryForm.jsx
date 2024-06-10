
function DashboardAddCategoryForm() {
    return (
        <>
            <div className="container">
                <div className="row border mt-5 rounded-4 mx-4 py-4 px-3">
                    <p className="fw-bold">Category Information</p>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <label htmlFor="Category Name" className="form-label fw-bold">
                            Category Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="Category Name"
                            aria-describedby="emailHelp"
                            placeholder="Category Name"
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <label htmlFor="Slug" className="form-label fw-bold">
                            Slug
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="Slug"
                            aria-describedby="emailHelp"
                            placeholder="Slug"
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <label htmlFor="Parent Category" className="form-label fw-bold">
                            Parent Category(Optional)
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="Parent Category"
                            aria-describedby="emailHelp"
                            placeholder="Parent Category"
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <label htmlFor="Date" className="form-label fw-bold">
                            Date
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="Date"
                            aria-describedby="emailHelp"
                            placeholder="Date"
                        />
                    </div>
                    <div className="col-12 mt-5">
                        <p className="fw-bold">Category Description</p>
                        <textarea className="form-control fw-bold" placeholder="Category Description" cols="30" rows="10"></textarea>
                    </div>
                    <div className="col-12 mt-5">
                        <p className="fw-bold">Status</p>
                        <input
                            type="radio"
                            className="fw-semibold"
                            id="StatusActive"
                            value="Active"
                            name="status"
                        />
                        <label htmlFor="StatusActive" className="form-label fw-semibold ms-2">Active</label>
                        <input
                            type="radio"
                            className="fw-semibold ms-3"
                            id="StatusDisable"
                            value="Disable"
                            name="status"
                        />
                        <label htmlFor="StatusDisable" className="form-label fw-semibold ms-2">Disable</label>
                    </div>
                    <button className="btn bg-btn-color text-light fw-semibold mt-5">Craete Category</button>
                </div>
            </div>
        </>
    )
}

export default DashboardAddCategoryForm