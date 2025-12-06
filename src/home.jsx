import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <section className="main1">

            <div className="container">
                <h2>Professional Home Services in Thanjavur</h2>
                <p>Find trusted professionals for all your home service needs.</p>
                <p>
                    Your home deserves the best - Book trusted professionals near you.
                </p>
                {/* <a href="/areas" className="btn btn-primary">Get Started</a> */}
                <Link to="/areas" className="btn btn-primary">Get Started</Link>
                <p>Tap, Book, Relax - We'll handle the rest.</p>
            </div>
        </section>

        <section className="how-it-works">
            <div className="container">
                <h2 className="section-title">How It Works</h2>
                <div className="grid">
                    <div className="card step">
                        <div className="step-number">1</div>
                        <h3>Select Your Area</h3>
                        <p>Choose your location in Thanjavur</p>
                    </div>

                     <div className="card step">
                        <div className="step-number">2</div>
                        <h3>Pick your service</h3>
                        <p>From electricians to plumbers</p>
                    </div>

                     <div className="card step">
                        <div className="step-number">3</div>
                        <h3>Contact professionals</h3>
                        <p>Directly connect with experts</p>
                    </div>
                </div>
            </div>
        </section>
        {/* footer */}
        <footer>
            <div className="container">
                <p> &copy; 2025 HomiFixServ. All rights reserved</p>
            </div>
        </footer>
        </div>
        
        
        
    )
}