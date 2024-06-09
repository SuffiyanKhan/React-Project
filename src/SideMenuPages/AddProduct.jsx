import DashboardProductForm from "../Components/DashboardProductForm/DashboardProductForm";
import { BackButtonf } from "../Services/backbutton";
import '../Global.css'

function AddProduct() {
    const handleStatusChange = (event) => {
        alert(`You have selected: ${event.target.value}`);
    };

    return (
        <div className="container">
            <div className="row my-5 px-3">
                <div className="d-flex justify-content-between">
                    <h3 className="fw-bold">Add New Product</h3>
                    <button className="btn btn-light fw-bold" onClick={BackButtonf}>Back to Product</button>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 border mt-5 rounded-4 py-4 px-4">
                    <p className="fw-bold">Product Information</p>
                    <DashboardProductForm />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 mt-5">
                    <div className="border rounded-4 py-4 px-4">
                        <div>
                            <label htmlFor="Stock" className="form-label fw-bold">Stock</label>
                            <input
                                type="text"
                                className="form-control fw-semibold"
                                id="Stock"
                                placeholder="Stock"
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="ProductCode" className="form-label fw-bold">Product Code</label>
                            <input
                                type="text"
                                className="form-control fw-semibold"
                                id="ProductCode"
                                placeholder="Product Code"
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="ProductSKU" className="form-label fw-bold">Product SKU</label>
                            <input
                                type="text"
                                className="form-control fw-semibold"
                                id="ProductSKU"
                                placeholder="Product SKU"
                            />
                        </div>
                        <div className="mt-3">
                            <p className="fw-bold">Status</p>
                            <input
                                type="radio"
                                className="fw-semibold"
                                id="StatusActive"
                                value="Active"
                                name="status"
                                onChange={handleStatusChange}
                            />
                            <label htmlFor="StatusActive" className="form-label fw-semibold ms-2">Active</label>
                            <input
                                type="radio"
                                className="fw-semibold ms-3"
                                id="StatusDisable"
                                value="Disable"
                                name="status"
                                onChange={handleStatusChange}
                            />
                            <label htmlFor="StatusDisable" className="form-label fw-semibold ms-2">Disable</label>
                        </div>
                    </div>
                    <div className="border rounded-4 mt-5 py-4 px-4">
                        <p>Product Price</p>
                        <div>
                            <label htmlFor="Regular Price" className="form-label fw-bold">Regular Price</label>
                            <input
                                type="text"
                                className="form-control fw-semibold"
                                id="Regular Price"
                                placeholder="$0.00"
                            />
                        </div>
                        <div>
                            <label htmlFor="Sale Price" className="form-label fw-bold">Sale Price</label>
                            <input
                                type="text"
                                className="form-control fw-semibold"
                                id="Sale Price"
                                placeholder="$0.00"
                            />
                        </div>
                    </div>
                    <button className="btn btn-light w-100 mt-5 fw-semibold text-light bg-btn-color">Create Product</button>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
