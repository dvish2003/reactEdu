export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-4 pb-2 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>About Us</h5>
                        <p className="text-muted">
                            We create amazing web applications with React, TypeScript, and Bootstrap.
                        </p>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-white">Home</a></li>
                            <li><a href="#about" className="text-white">About</a></li>
                            <li><a href="#projects" className="text-white">Projects</a></li>
                            <li><a href="#contact" className="text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h5>Contact Info</h5>
                        <address className="text-muted">
                            <p><i className="bi bi-geo-alt-fill me-2"></i> 123 Main St, City</p>
                            <p><i className="bi bi-envelope-fill me-2"></i> info@example.com</p>
                            <p><i className="bi bi-phone-fill me-2"></i> (123) 456-7890</p>
                        </address>
                    </div>
                </div>

                <hr className="my-4 bg-secondary" />

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="mb-2 mb-md-0">
                        <p className="mb-0">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
                    </div>
                    <div className="social-icons">
                        <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-white me-2"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}