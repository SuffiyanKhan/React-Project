
function DashboardSalesProgress() {
  return (
    <>
         <div className="mt-3">
                        <div>
                            <div className="mt-2 d-flex justify-content-between">
                                <p className="fw-semibold">Total Profit</p>
                                <p className="fw-semibold">$1,619 (8.6%)</p>
                            </div>
                            <div className="progress" style={{ height: '7px' }}>
                                <div
                                    className="progress-bar "
                                    role="progressbar"
                                    style={{ width: '34%', backgroundColor: "#00b02a" }}
                                    aria-valuenow="34"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                                <div
                                    className="progress-bar "
                                    role="progressbar"
                                    style={{ width: '91.4%', backgroundColor: "#c4f0d0" }}
                                    aria-valuenow="91.4"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-4 d-flex justify-content-between">
                                <p className="fw-semibold">Total Income</p>
                                <p className="fw-semibold">$3,571 (86.4%)</p>
                            </div>
                            <div className="progress" style={{ height: '7px' }}>
                                <div
                                    className="progress-bar "
                                    role="progressbar"
                                    style={{ width: '700%', backgroundColor: "#006df7" }}
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                // aria-valuemax="100"
                                ></div>
                                <div
                                    className="progress-bar "
                                    role="progressbar"
                                    style={{ width: '91.4%', backgroundColor: "#ebf0ef" }}
                                    aria-valuenow="91.4"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-4 d-flex justify-content-between">
                                <p className="fw-semibold">Total Expenses</p>
                                <p className="fw-semibold">$3,430 (74.5%)</p>
                            </div>
                            <div className="progress" style={{ height: '7px' }}>
                                <div
                                    className="progress-bar "
                                    role="progressbar"
                                    style={{ width: '70%',backgroundColor:"#f31012" }}
                                    aria-valuenow="70"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '91.4%',backgroundColor:"#ffd5d5" }}
                                    aria-valuenow="91.4"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>

                    </div>
    </>
  )
}

export default DashboardSalesProgress