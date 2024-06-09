import bannerImage from '../../assets/image1.png';
import './DashboardBanner.css'
function DashboardBanner() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-4">
            <div className="card mb-3 py-5  h-100 rounded-4" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center', border: "none" }}>
              <div className="card-body">
                <h1 className="card-title fw-semibold">Welcome back! FreshCart</h1>
                <p className="card-text">
                  FreshCart is simple & clean design for developer and designer.
                </p>
                <button id='btn' className='btn btn-light px-3 fw-semibold text-light' style={{ fontSize: "14px",backgroundColor:'#0cac0c' }}>Create Product</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardBanner;
