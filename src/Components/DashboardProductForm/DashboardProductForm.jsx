import ImageUploader from "../AddProductImage/AddProductImage"

function DashboardProductForm() {
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                    <label htmlFor="productName" className="form-label fw-bold">Title</label>
                    <input
                        type="text"
                        className="form-control fw-semibold"
                        id="productName"
                        placeholder="Product Name"
                    />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                    <label htmlFor="productCategory" className="form-label fw-bold">Product Category</label>
                    <select className="form-control fw-semibold" id="productCategory">
                        <option value="Product Category">Product Category</option>
                        <option value="Dairy, Bread & Eggs">Dairy, Bread & Eggs</option>
                        <option value="Snacks & Munchies">Snacks & Munchies</option>
                        <option value="Fruits & Vegetables">Fruits & Vegetables</option>
                    </select>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                    <label htmlFor="productWeight" className="form-label fw-bold">Weight</label>
                    <input
                        type="text"
                        className="form-control fw-semibold"
                        id="productWeight"
                        placeholder="Weight"
                    />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                    <label htmlFor="productUnits" className="form-label fw-bold">Units</label>
                    <select className="form-control fw-semibold" id="productUnits">
                        <option value="Select Units">Select Units</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className="mt-5">
                    <p className="fw-bold">Product Image</p>
                    <ImageUploader/>
                </div>
                <div className="mt-5">
                    <p className="fw-bold">Product Description</p>
                    <textarea className="form-control fw-bold" placeholder="Product Description" cols="30" rows="10"></textarea>
                </div>
            </div>

        </div>
    )
}

export default DashboardProductForm