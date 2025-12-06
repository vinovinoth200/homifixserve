import { Link } from "react-router-dom";
import "../css/services.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBolt} from "@fortawesome/free-solid-svg-icons";
import { faFaucet} from "@fortawesome/free-solid-svg-icons";
import { faHammer} from "@fortawesome/free-solid-svg-icons";
import { faFan} from "@fortawesome/free-solid-svg-icons";
import { faPaintRoller} from "@fortawesome/free-solid-svg-icons";
import { faBroom} from "@fortawesome/free-solid-svg-icons";
import { faCamera} from "@fortawesome/free-solid-svg-icons";
import { faBabyCarriage} from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";


export default function Services() {
    return(
        <div>
             
            <main className="services-container">
                {/* <a href="/areas"className="back-link">
                    <FontAwesomeIcon icon={faArrowLeft} />Back to Areas
                </a> */}

                <Link to="/areas" className="back-link">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to Areas
                </Link>
                
                <div className="s-container">
                    <h2 className="s-section-title">
                        Available Services
                    </h2>
                    <div className="services-grid"> 
                        <a href="/members" className="s-card service-card">
                            <FontAwesomeIcon className="service-icon" icon={faBolt} />
                            <h3>Electrician</h3>
                            <p>Wiring, Repairs, Installations</p>
                        </a>

                         <a href="/members" className="s-card service-card">
                            <FontAwesomeIcon className="service-icon" icon={faFaucet} />
                            <h3>Plumber</h3>
                            <p>Leaks, Pipe repairs, Installations</p>
                        </a>

                         <a href="/members" className="s-card service-card">
                            <FontAwesomeIcon className="service-icon" icon={faHammer} />
                            <h3>Carpenter</h3>
                            <p>Furniture, Doors, Repairs</p>
                        </a>

                         <a href="/members" className="s-card service-card">
                            <FontAwesomeIcon className="service-icon" icon={faFan} />
                            <h3>AC Repair</h3>
                            <p>AC Installations, Issues</p>
                        </a>

                         <a href="/members" className="s-card service-card">
                            <FontAwesomeIcon className="service-icon" icon={faPaintRoller} />
                            <h3>Renovating & Interiors</h3>
                            <p>Painting, Tile or Floor working, Wall water proofing</p>
                        </a>

                         <a href="/members" className="s-card service-card">
                            <FontAwesomeIcon className="service-icon" icon={faBroom} />
                            <h3>Cleaning & Maintenance</h3>
                            <p>Pest Control, Bathroom & Home Cleaning</p>
                        </a>

                         <a href="/members" className="s-card service-card">
                            <FontAwesomeIcon className="service-icon" icon={faCamera} />
                            <h3>Technology</h3>
                            <p>CCTV Installation, Wi-Fi/Router Setup</p>
                        </a>

                         <a href="/members" className="s-card service-card">
                            <FontAwesomeIcon className="service-icon" icon={faBabyCarriage} />
                            <h3>Daily help services</h3>
                            <p>Housekeeping, Babysitter, Cook or Maid Services</p>
                        </a>
                    </div>
                </div>
            </main>
             {/* footer */}
        <footer>
            <div className="container">
                <p> &copy; 2025 HomiFixServ. All rights reserved</p>
            </div>
        </footer>
        </div>
    )
}