import './DashboardBottom.css';

function DashboardBottom() {
  return (
    <div className="container">
      <div className="dashboard-row row px-4 mt-4 d-flex justify-content-between">
        <div className="dashboard-item col-md-4 col-sm-12 border py-3 rounded-4 px-4"style={{width:"23.5rem",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
          <div className="d-flex mt-2 justify-content-between align-items-center">
            <p className="fw-bold">Earnings</p>
            <span className="border btn rounded-circle" style={{width: "40px", height: "40px"}}>
              <i className="fa-solid fa-dollar-sign"></i>
            </span>
          </div>
          <div className="mt-2">
            <h1>$0</h1>
            <p className="fw-semibold" style={{fontSize: "14px"}}>Monthly revenue</p>
          </div>
        </div>
        <div className="dashboard-item col-md-4 col-sm-12 border py-3 rounded-4 px-4"style={{width:"23.5rem",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
          <div className="d-flex mt-2 justify-content-between align-items-center">
            <p className="fw-bold">Orders</p>
            <span className="border btn rounded-circle" style={{width: "40px", height: "40px"}}>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </div>
          <div className="mt-2">
            <h1>0</h1>
            <p className="fw-semibold" style={{fontSize: "14px"}}>35+ New Sales</p>
          </div>
        </div>
        <div className="dashboard-item col-md-4 col-sm-12 border py-3 rounded-4 px-4"style={{width:"23.5rem",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
          <div className="d-flex mt-2 justify-content-between align-items-center">
            <p className="fw-bold">Customer</p>
            <span className="border btn rounded-circle" style={{width: "40px", height: "40px"}}>
              <i className="fa-solid fa-users"></i>
            </span>
          </div>
          <div className="mt-2">
            <h1>0</h1>
            <p className="fw-semibold" style={{fontSize: "14px"}}>30+ new in 2 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardBottom;
