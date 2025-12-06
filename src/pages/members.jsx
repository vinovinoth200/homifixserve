import { Link } from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { faUser} from "@fortawesome/free-solid-svg-icons";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
import "../css/members.css";


export default function Members(){
    return(
        <main className="members-container">
            <div className="m-container">
                {/* <Link to="/services" className="back-link">
                                    <FontAwesomeIcon icon={faArrowLeft} /> 
                                    
                                    
                                    Back to Areas
                                </Link> */}
                <Link to="/services" className="back-link">
                    <FontAwesomeIcon icon={faArrowLeft}/> Back to Services
                </Link>
                <h2 className="m-section-title">
                    Now Available Professionals
                </h2>
                <div className="members-grid">

                    <div className="m-card members-card">
                        <FontAwesomeIcon icon={faUser} />
                        <h3>Vinoth</h3>
                        <div className="member-rating">4.8 (782 reviews)</div>
                        <div className="member-price">₹530/hr</div>
                        <div className="contact-info">
                           <p> <FontAwesomeIcon icon={faPhone} /> +91 98765 43210</p>
                        </div>
                      <Link to="/details" className="btn btn-primary">  <a>Book Now</a> </Link>
                    </div>

                    <div className="m-card members-card">
                        <FontAwesomeIcon icon={faUser} />
                        <h3>Pragadesh</h3>
                        <div className="member-rating">4.6 (654 reviews)</div>
                        <div className="member-price">₹480/hr</div>
                        <div className="contact-info">
                           <p> <FontAwesomeIcon icon={faPhone} /> +91 91234 56789</p>
                        </div>
                      <Link to="/details" className="btn btn-primary">  <a>Book Now</a> </Link>
                    </div>

                    <div className="m-card members-card">
                        <FontAwesomeIcon icon={faUser} />
                        <h3>Abi</h3>
                        <div className="member-rating">4.1 (890 reviews)</div>
                        <div className="member-price">₹600/hr</div>
                        <div className="contact-info">
                           <p> <FontAwesomeIcon icon={faPhone} /> +91 99876 54321</p>
                        </div>
                      <Link to="/details" className="btn btn-primary">  <a>Book Now</a> </Link>
                    </div>  

                    <div className="m-card members-card">
                        <FontAwesomeIcon icon={faUser} />
                        <h3>JayaRam</h3>
                        <div className="member-rating">4.9 (1490 reviews)</div>
                        <div className="member-price">₹950/hr</div>
                        <div className="contact-info">
                           <p> <FontAwesomeIcon icon={faPhone} /> +91 99876 54321</p>
                        </div>
                      <Link to="/details" className="btn btn-primary">  <a>Book Now</a> </Link>
                    </div>  

                    <div className="m-card members-card">
                        <FontAwesomeIcon icon={faUser} />
                        <h3>Shanmugam</h3>
                        <div className="member-rating">3.9 (230 reviews)</div>
                        <div className="member-price">₹635/hr</div>
                        <div className="contact-info">
                           <p> <FontAwesomeIcon icon={faPhone} /> +91 99876 54321</p>
                        </div>
                      <Link to="/details" className="btn btn-primary">  <a>Book Now</a> </Link>
                    </div>  

                    <div className="m-card members-card">
                        <FontAwesomeIcon icon={faUser} />
                        <h3>Venkat</h3>
                        <div className="member-rating">4.2 (567 reviews)</div>
                        <div className="member-price">₹480/hr</div>
                        <div className="contact-info">
                           <p> <FontAwesomeIcon icon={faPhone} /> +91 99876 54321</p>
                        </div>
                      <Link to="/details" className="btn btn-primary">  <a>Book Now</a> </Link>
                    </div>  

                    <div className="m-card members-card">
                        <FontAwesomeIcon icon={faUser} />
                        <h3>Ashok</h3>
                        <div className="member-rating">3.6 (478 reviews)</div>
                        <div className="member-price">₹350/hr</div>
                        <div className="contact-info">
                           <p> <FontAwesomeIcon icon={faPhone} /> +91 99876 54321</p>
                        </div>
                        <Link to="/details" className="btn btn-primary">  <a>Book Now</a> </Link>
                     
                    </div>  

                    <div className="m-card members-card">
                        <FontAwesomeIcon icon={faUser} />
                        <h3>Hari</h3>
                        <div className="member-rating">3.9 (234 reviews)</div>
                        <div className="member-price">₹780/hr</div>
                        <div className="contact-info">
                           <p> <FontAwesomeIcon icon={faPhone} /> +91 99876 54321</p>
                        </div>
                        <Link to="/details" className="btn btn-primary"> <a>Book Now</a></Link>
                      
                    </div>  

                    <div className="m-card members-card">
                        <FontAwesomeIcon icon={faUser} />
                        <h3>Pavithran</h3>
                        <div className="member-rating">4.5 (784 reviews)</div>
                        <div className="member-price">₹890/hr</div>
                        <div className="contact-info">
                           <p> <FontAwesomeIcon icon={faPhone} /> +91 99876 54321</p>
                        </div>
                      <Link to="/details"  className="btn btn-primary">
                      <a >Book Now</a>
                      </Link>
                  </div>  
                </div>
            </div>
        <footer>
            <div className="container">
                <p> &copy; 2025 HomiFixServ. All rights reserved</p>
            </div>
        </footer>
        </main>
    )
}