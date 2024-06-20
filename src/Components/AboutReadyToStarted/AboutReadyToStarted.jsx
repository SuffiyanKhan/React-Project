// import img1 from '../../assets/about-icons-1.svg'
// import img2 from '../../assets/about-icons-2.svg'
// import img3 from '../../assets/about-icons-3.svg'



// function AboutReadyToStarted() {
//     return (
//         <>
//             <div className="container">
//                 <div className="row d-flex justify-content-between px-5">
//                     <h3>Ready to get started?</h3>
//                     <div className="card" style={{ width: "24rem" }}>
//                         <img src={img1} className="" width={120} alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">Grow my business with Freshcart</h5>
//                             <p className="card-text">
//                                 Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.
//                             </p>
//                             <a href="#" className="btn btn-primary">
//                                 FreshCart Platform
//                             </a>
//                         </div>
//                     </div>
//                     <div className="card" style={{ width: "24rem" }}>
//                         <img src={img2} className="" width={120} alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">Grow my business with Freshcart</h5>
//                             <p className="card-text">
//                                 Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.
//                             </p>
//                             <a href="#" className="btn btn-primary">
//                                 FreshCart Platform
//                             </a>
//                         </div>
//                     </div>
//                     <div className="card" style={{ width: "24rem" }}>
//                         <img src={img3} className="" width={120} alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">Grow my business with Freshcart</h5>
//                             <p className="card-text">
//                                 Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.
//                             </p>
//                             <a href="#" className="btn btn-primary">
//                                 FreshCart Platform
//                             </a>
//                         </div>
//                     </div>


//                 </div>
//             </div>
//         </>
//     )
// }

// export default AboutReadyToStarted




import img1 from '../../assets/about-icons-1.svg';
import img2 from '../../assets/about-icons-2.svg';
import img3 from '../../assets/about-icons-3.svg';

function AboutReadyToStarted() {
    return (
        <>
            <div className="container mt-5">
                <div className="row d-flex justify-content-between ">
                    <h3 className='fw-bold'>Ready to get started?</h3>
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-4 my-5 ">
                        <div className="card h-100 py-4 px-4 rounded-4" style={{ backgroundColor: '#eff3f2', border: 'none' }}>
                            <img src={img1} className="" width={120} alt="..." />
                            <div className="card-body mt-4" >
                                <h4 className="card-title fw-bold">Grow my business with Freshcart</h4>
                                <p className="card-text fw-semibold text-secondary mt-3">
                                    Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.
                                </p>
                                <a href="#" className="btn btn-dark fw-semibold mt-4">
                                    FreshCart Platform
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-4 my-5 ">
                        <div className="card h-100 py-4 px-4 rounded-4" style={{ backgroundColor: '#eff3f2', border: 'none' }}>
                            <img src={img2} className="" width={120} alt="..." />
                            <div className="card-body mt-4" >
                                <h4 className="card-title fw-bold">Advertise my brand on Freshcart</h4>
                                <p className="card-text fw-semibold text-secondary mt-3">
                                    Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.
                                </p>
                                <a href="#" className="btn btn-dark fw-semibold mt-4">
                                    FreshCart ads
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-4 my-5 " >
                        <div className="card h-100 py-4 px-4 rounded-4" style={{ backgroundColor: '#eff3f2', border: 'none' }}>
                            <img src={img3} className="" width={120} alt="..." />
                            <div className="card-body mt-4" >
                                <h4 className="card-title fw-bold">Learn more about Freshcart</h4>
                                <p className="card-text fw-semibold text-secondary mt-3">
                                    Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.
                                </p>
                                <a href="#" className="btn btn-dark fw-semibold mt-4">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className='text-secondary fw-semibold'>For assistance using Freshcart services, please visit our <span style={{color:'#00b02a'}}>Help Center.</span></p>
                </div>
            </div>
        </>
    );
}

export default AboutReadyToStarted;
