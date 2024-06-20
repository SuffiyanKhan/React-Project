import ContactForm from "../Components/ContactForm/ContactForm"
import Footer from "../Components/Footer/Footer"

function Contact() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="px-5 mt-5 col-lg-12 col-md-12 col-sm-12">
                        <h4 className="fw-bold">Retailer Inquiries</h4>
                        <p className="text-secondary">This form is for retailer inquiries only. For all other customer or shopper support requests, please visit the links below this form.</p>
                    </div>
                </div>
            </div>
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact