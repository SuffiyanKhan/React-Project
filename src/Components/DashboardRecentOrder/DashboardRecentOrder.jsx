
function DashboardRecentOrder() {
    return (
        <>
            <div className="container">
                <div className="row  px-4  mb-5">
                    <div className="col-12 border rounded-4" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                        <header className="fw-bold py-3 px-2 " >
                            <h4 className="fw-bold">Recent Order</h4>
                        </header>

                        <table className="table ">
                            <thead className="table-secondary" >
                                <tr >
                                    <th scope="col">Order Number</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Order Date</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">#0001</th>
                                    <td>Mark</td>
                                    <td>28 March 2023</td>
                                    <td>@$18.00</td>
                                    <td>
                                        <span className="bg-primary py-1 px-2 fw-semibold text-light rounded-2" style={{ fontSize: "13px" }}>Shipped</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">#0001</th>
                                    <td>Mark</td>
                                    <td>28 March 2023</td>
                                    <td>@$18.00</td>
                                    <td>
                                        <span className="bg-primary py-1 px-2 fw-semibold text-light rounded-2" style={{ fontSize: "13px" }}>Shipped</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">#0001</th>
                                    <td>Mark</td>
                                    <td>28 March 2023</td>
                                    <td>@$18.00</td>
                                    <td>
                                        <span className="bg-primary py-1 px-2 fw-semibold text-light rounded-2" style={{ fontSize: "13px" }}>Shipped</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">#0001</th>
                                    <td>Mark</td>
                                    <td>28 March 2023</td>
                                    <td>@$18.00</td>
                                    <td>
                                        <span className="bg-primary py-1 px-2 fw-semibold text-light rounded-2" style={{ fontSize: "13px" }}>Shipped</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">#0001</th>
                                    <td>Mark</td>
                                    <td>28 March 2023</td>
                                    <td>@$18.00</td>
                                    <td>
                                        <span className="bg-primary py-1 px-2 fw-semibold text-light rounded-2" style={{ fontSize: "13px" }}>Shipped</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardRecentOrder