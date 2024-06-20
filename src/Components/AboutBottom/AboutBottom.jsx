import image from '../../assets/about-img.jpg'

function AboutBottom() {
  return (
    <>
        <div className="container">
            <div className="row my-5 py-4 d-flex justify-content-center align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 px-5 my-5" >
                    <h1 className='fw-bold'>The Future of Grocery Delivery:</h1>
                    <p className='fw-semibold text-secondary'>By powering the future of grocery with our retail partners, we give everyone access to the food they love and more time to enjoy it together.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={image} className="img-fluid rounded-4" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutBottom