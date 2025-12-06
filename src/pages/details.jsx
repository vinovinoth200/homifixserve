import React, {useState} from "react";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";
import "../css/details.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";



export default function Details(){
                const [name,setName] = useState( "");   //localStorage.getItem("customerName") ||
                const [service,setService]= useState( "");  //localStorage.getItem("serviceBooked") ||
                const [date,setDate]= useState("");         //   localStorage.getItem("dateBooked") || 
                

                const Navigate= useNavigate();

                const handleSubmit= (e)=>{
                    e.preventDefault();
                    localStorage.setItem("customerName",name);
                    localStorage.setItem("serviceBooked",service);
                    localStorage.setItem("dateBooked",date);
                    
                    Navigate("/confirmation");
                }

                
        return(
            <main className="details-container">

                <div className="d-container">
                 {/* <Link to
                 "/services" className="back-link">
                    <FontAwesomeIcon icon={faArrowLeft}/> Back to Professionals
                </Link> */}
                <Link to="/members" className="back-link">
                   <FontAwesomeIcon icon={faArrowLeft}/> Back to Professionals
                </Link>
                    <h2 className="d-section-title">Enter Your Details</h2>
                    <form id="detailForm" className="detail-form" onSubmit={handleSubmit} autoComplete="off"> 

                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" value={name} id="name" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)} autoComplete="off" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneNum">Phone Number</label>
                            <input type="tel"  id="phoneNum" placeholder="+91 98765 43210" required/>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="Email">Email Address</label>
                            <input type="email" id="Email" placeholder="Your@example.com" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="services">Service Needed</label>

                            <select name="service"  id="services"   value={service} onChange={(e)=> setService(e.target.value)}  required>
                                <option value="">--Select a Service</option>
                                <option value="Electrician" >Electrician</option>
                                <option value="Plumber">Plumber</option>
                                <option value="Carpenter">Carpenter</option>
                                <option value="AC Technical">AC Technical</option>
                                <option value="Renovation & interiors">Renovation & interiors</option>
                                <option value="Cleaning and Maintenance">Cleaning and Maintenance</option>
                                <option value="Technology">Technology</option>
                                <option value="Daily help services">Daily help services</option>
                            </select>

                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Preferred Date</label>
                            <input type="date" id="date" value={date} onChange={(e)=> setDate(e.target.value)} required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="address" >Address</label>
                            <textarea name="" rows="4" id="address" placeholder="Enter Your Address"></textarea>
                        </div>
                         {/* <Link to="/confirmation">  */}
                         <button type="submit" className="btn btn-primary">Submit</button>
                         {/* </Link> */}
                        
                    </form>
                </div>
        <footer>
            <div className="container">
                <p> &copy; 2025 HomiFixServ. All rights reserved</p>
            </div>
        </footer>
            </main>
        )
}
        
