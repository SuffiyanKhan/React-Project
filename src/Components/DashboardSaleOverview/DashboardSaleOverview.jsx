import DashboardSalesProgress from "../DashboardSalesProgress/DashboardSalesProgress";
import './DashboardSaleOverview.css'
function DashboardSaleOverview() {
    return (
        <div className="container my-5">
            <div className="row d-felx justify-content-between px-4">
                <div className="col-lg-6 col-md-12 col-sm-12 px-4 py-4 border rounded-4" style={{  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }} >
                    <p className="fw-bold ">Sales Overview</p>
                    <DashboardSalesProgress />
                </div>
                <div className="col-lg-6 col-md-12 p-0 col-sm-12 align-items-between sales">
                    <div className="border rounded-4 py-4 px-3 d-flex align-items-center "  style={{  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                        <span className=" fs-1">
                            <i className="fa-regular fa-bell"></i>
                        </span>
                        <div className="ms-3">
                            <p className="fw-semibold">Start your day with New Notification.<br/>You have 2 <span>new notification</span></p>
                            <p></p>
                        </div>
                    </div>
                    <div className="border mt-5 rounded-4 py-4 px-3 d-flex align-items-center "  style={{  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                        <span className=" fs-1">
                            <i className="fa-regular fa-bell"></i>
                        </span>
                        <div className="ms-3">
                            <p className="fw-semibold">Start your day with New Notification.<br/>You have 2 <span>new notification</span></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardSaleOverview;