import React from 'react'

const Footer = () => {
    return (
            <div>

                <footer className="text-center text-lg-start bg-dark text-light text-muted" >

                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                        <div className="me-5 d-none d-lg-block"  >
                            <span className=' text-light fw-bold'>Get connected with me on social networks:</span>
                        </div>

                        <div>

                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/chinu.negi.1213?mibextid=ZbWKwL" target="_blank" rel="noreferrer" role="button"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="#!" target="_blank" rel="noreferrer" role="button"><i class="fab fa-google"></i></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/dishant_negi_/" target="_blank" rel="noreferrer" role="button"><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/dishant-negi-42200b237" target="_blank" rel="noreferrer" role="button"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/dishant2582" target="_blank" rel="noreferrer" role="button"><i class="fab fa-github"></i></a>
                        </div>

                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">

                            <div className="row mt-3">

                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                    <h6 className="text-uppercase text-light fw-bold mb-4">
                                        <i className="fas fa-gem me-3"></i>NEWS APPLICATION
                                    </h6>
                                    <p className=' text-light'>
                                        It is a simple News Website Project to show my skills using React JS
                                    </p>
                                    <h6 className="text-uppercase fw-bold mb-4  text-light my-5">
                                        <i class="fa-solid fa-user-graduate fa-xl me-3"></i>Owner
                                    </h6>
                                    <h5 className='fw-bold  text-light'>DISHANT NEGI</h5>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4  text-light">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="/"  ra className="text-light">Home</a>
                                    </p>
                                    <p>
                                        <a href="/business"  className=" text-light">Business</a>
                                    </p>
                                    <p>
                                        <a href="/entertainment"  className=" text-light">Entertainment</a>
                                    </p>
                                    <p>
                                        <a href="/sports"  className=" text-light">Sports</a>
                                    </p>
                                </div>


                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4  text-light">Contact</h6>
                                    <p className=' text-light'><i className="fas fa-home me-3  text-light"></i> Ramnagar, Nainital, India</p>
                                    <p className=' text-light'>
                                        <i className="fas fa-envelope me-3  text-light "></i> negidishant5@gmail.com
                                    </p>
                                    <p className=' text-light'><i className="fas fa-phone me-3  text-light"></i> +91 9389937075</p>
                                    <p className=' text-light'><i className="fas fa-print me-3  text-light"></i> + 01 234 567 89</p>
                                </div>

                            </div>

                        </div>
                    </section>

                    <div className="text-center p-4 fw-bold  text-light">
                        React Project By Dishant Negi
                    </div>

                </footer>
            </div>
    )
}
export default Footer;