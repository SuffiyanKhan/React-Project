import BlogBottom from "../Components/BlogBottom/BlogBottom"
import BlogsCard from "../Components/BlogsCard/BlogsCard"
import Footer from "../Components/Footer/Footer"

function Blogs() {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="px-5">
                        <h2 className="fw-bold">FreshCart Blog</h2>
                    </div>
                </div>
            </div>
            <BlogBottom/>
            <BlogsCard/>
            <Footer/>
        </>
    )
}

export default Blogs