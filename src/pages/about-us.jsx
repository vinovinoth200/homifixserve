import { Link } from "react-router-dom";        
import "../css/about-us.css";
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom";

export default function AboutUs(){

        const navigate = useNavigate();
   
            return(
        <>
        <main className="about-container">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="about-title"
      >
        About HomiFixServ
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="about-text"
      >
        HomiFixServ is designed to make home service booking simple and
        stress-free. We connect skilled professionals with customers who
        need fast, trusted and affordable solutions for household problems.
      </motion.p>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="about-section"
      >
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver top-quality home services with trust,
          transparency and customer satisfaction at the core.
        </p>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="about-section"
      >
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Verified & Experienced Professionals</li>
          <li>✔ Fast Response & Service Guarantee</li>
          <li>✔ Affordable & Transparent Pricing</li>
          <li>✔ Customer-first Support & Assistance</li>
        </ul>
      </motion.div>

      {/* Team */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="team-section"
      >
        <h2>Meet Our Team</h2>
        <div className="team-card">
          <h3>Vinothagan</h3>
          <p>Founder & Full-Stack Developer</p>
        </div>
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="contact-box"
      >
        <h2>Contact Us</h2>
        <p>Email: support@homifixserv.com</p>
        <p>Phone: +91 98765 43210</p>
      </motion.div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cta-btn"
        onClick={()=> navigate("/areas")}
      >
        Book a Service
      </motion.button>

    </main>
        </>
    )
}
    
