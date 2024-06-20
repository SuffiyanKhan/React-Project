import image from '../../assets/blog-large.jpg'
import './blogs.css'
function BlogBottom() {
    return (
        <>
            <div>
                <div className="container my-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-8 abc col-md-6 col-sm-12 px-3">
                            <figure className='rounded-3'>
                            <img src={image} className="img-fluid  rounded-3" alt="bolg image" />
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 px-3 py-3">
                            <h3 className="fw-bold">Garlic Cream Bucatini with Peas and Asparagus</h3>
                            <p className='fw-semibold text-secondary' style={{ fontSize: 14 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac erat ut neque bibendum egestas sed quis justo. Integer non rhoncus diam. Nullam eget dapibus lectus, vitae condimentum sem.</p>
                            <div className="d-flex justify-content-between">
                                <p className='text-secondary' style={{ fontSize: 13 }} >25 April 2023</p>
                                <p className='text-secondary' style={{ fontSize: 13 }} >Read time: <span className="fw-bold text-dark"> 6min</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogBottom