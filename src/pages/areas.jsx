import { Link } from "react-router-dom";
import "../css/areas.css";

export default function Areas(){
    return(
        <div>
            <main className="areas-page">
                <div className="container">
                    <h2 className="a-section-title">Select Your Area in Thanjavur</h2>
                    <div className="areas-grid">

                        <a href="/services" className="a-card area-card">
                            <img src="src/assets/thanjavur-city.JPG" alt="thanjavur-city" className="area-img"/>
                         <div className="area-info">
                              <h3>Thanjavur city</h3>
                              <p>If you are staying in Thanjavur main city,Prefer to select this.</p>   
                         </div>
                            
                        </a>
                        {/* <Link to="/services" className="a-card area-card">
                            <img src="src/assets/thanjavur-city.JPG" alt="thanjavur-city" className="area-img"/>
                         <div className="area-info">
                              <h3>Thanjavur city</h3>
                              <p>If you are staying in Thanjavur main city,Prefer to select this.</p>   
                         </div>
                            
                        </Link> */}

                        <a href="/services" className="a-card area-card">
                            <img src="src/assets/big-temple.JPG" alt="big-temple" className="area-img"/>
                            <div className="area-info">
                              <h3>Big temple Areas</h3>
                              <p>If you are in this area,You can choose this.</p>
                            </div>
                            
                        </a>

                        <a href="/services" className="a-card area-card">
                            <img src="src/assets/old-busstand.JPG" alt="old-busstand" className="area-img"/>
                            <div className="area-info">
                              <h3>Old Bus Stand</h3>
                              <p>If you are in this area,You can choose this.</p>
                            </div>
                            
                        </a>

                        <a href="/services" className="a-card area-card">
                            <img src="src/assets/vallam.JPG" alt="vallam" className="area-img"/>
                            <div className="area-info">
                              <h3>Vallam</h3>
                              <p>If you are in this area,You can choose this.</p>   
                            </div>
                            
                        </a>

                        <a href="/services" className="a-card area-card">
                            <img src="src/assets/thiruvaiyaru.JPG" alt="thiruvaiyaru" className="area-img"/>
                            <div className="area-info">
                             <h3>Thiruvaiyaru</h3>
                             <p>If you are in this area,You can choose this.</p>   
                            </div>
                            
                        </a>

                        <a href="/services" className="a-card area-card">
                            <img src="src/assets/nadukadai.JPG" alt="nadukkadai" className="area-img"/>
                            <div className="area-info">
                              <h3>Nadukkadai</h3>
                              <p>If you are in this area,You can choose this.</p>    
                            </div>
                            
                        </a>

                        <a href="/services" className="a-card area-card">
                            <img src="src/assets/kandiyur.WEBP" alt="kandiyur" className="area-img" />
                            <div className="area-info">
                              <h3>Kandiyur</h3>
                              <p>If you are in this area,You can choose this.</p>   
                            </div>
                            
                        </a>

                        <a href="/services" className="a-card area-card">
                            <img src="src/assets/pattukottai.JPG" alt="pattukottai" className="area-img"/>
                            <div className="area-info">
                              <h3>Pattukkottai</h3>
                              <p>If you are in this area,You can choose this.</p>   
                            </div>
                            
                        </a>

                        <a href="/services" className="a-card area-card">
                            <img src="src/assets/thirukattupalli.WEBP" alt="thirukattupalli" className="area-img"/>
                            <div className="area-info">
                              <h3>Thirukkattupalli</h3>
                             <p>If you are in this area,You can choose this.</p>   
                            </div>
                            
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