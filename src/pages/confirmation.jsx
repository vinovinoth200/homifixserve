import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "../css/confirmation.css";


export default function Confirmation(){

            const [customerName,setCustomerName]= useState("");
            const [serviceBooked,setServiceBooked]= useState("");
            const [dateBooked,setDateBooked]= useState(""); 

        useEffect(()=>{
            setCustomerName(localStorage.getItem("customerName") || "customer");
            setServiceBooked (localStorage.getItem("serviceBooked") || "service");
            setDateBooked (localStorage.getItem("dateBooked") || "date");
        },[])


    return(
        
        <>
        <main className="confirmation c-container">
            
            <div className="tick-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h2>Thank You,<b>{customerName}</b>!</h2>
            <p>You booked <strong><b>{serviceBooked}</b></strong> service on <strong><b>{dateBooked}</b></strong></p>
            <p className="p-2">Our team will reach out to you shortly to confirm the details.</p>
            <Link to="/" className="btn btn-primary">Go Back to Home</Link>
            
        </main>
         <footer>
            <div className="container">
                <p> &copy; 2025 HomiFixServ. All rights reserved</p>
            </div>
        </footer>
        </>
        
    )
}