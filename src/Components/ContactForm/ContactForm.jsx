function ContactForm() {
    return (
        <>
            <div className="container">
                <div className="row mt-4 mb-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <div className="">
                            <label className="fw-semibold">First Name</label>
                            <input type="text" className="form-control" placeholder="Enter Your First Name" />
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <div className="">
                            <label className="fw-semibold">Last Name</label>
                            <input type="text" className="form-control" placeholder="Enter Your Last Name" />
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="">
                            <label className="fw-semibold">Your Company</label>
                            <input type="text" className="form-control" placeholder="Your Company" />
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="">
                            <label className="fw-semibold">Your Title</label>
                            <input type="text" className="form-control" placeholder="Your Title" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <div className="">
                            <label className="fw-semibold">Email</label>
                            <input type="text" className="form-control" placeholder="Enter Your Email" />
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <div className="">
                            <label className="fw-semibold">Phone</label>
                            <input type="text" className="form-control" placeholder="Enter Your Phone Number" />
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="">
                            <label className="fw-semibold">Textarea</label>
                            <textarea className="form-control fw-semibold" placeholder="Additional Comments" cols="30" rows="5"></textarea>
                        </div>
                    </div>
                    <div className="">
                        <button className="btn bg-btn-color text-white fw-semibold mt-3">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm