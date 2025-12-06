import { Link } from "react-router-dom";
import "../css/areas.css";

export default function Areas(){
    return(
        <div>
            <main className="areas-page">
                <div className="container">
                    <h2 className="a-section-title">Select Your Area in Thanjavur</h2>
                    <div className="areas-grid">

                        {/* <a href="/services" className="a-card area-card">
                            <img src="/assets/thanjavur-city.jpg" alt="thanjavur-city" className="area-img"/>
                         <div className="area-info">
                              <h3>Thanjavur city</h3>
                              <p>If you are staying in Thanjavur main city,Prefer to select this.</p>   
                         </div>
                            
                        </a> */}
                        <Link to="/services" className="a-card area-card">
                            <img src="/assets/thanjavur-city.jpg" alt="thanjavur-city" className="area-img"/>
                         <div className="area-info">
                              <h3>Thanjavur city</h3>
                              <p>If you are staying in Thanjavur main city,Prefer to select this.</p>   
                         </div>
                            
                        </Link>

                        {/* <a href="/services" className="a-card area-card">
                            <img src="/assets/big-temple.jpg" alt="big-temple" className="area-img"/>
                            <div className="area-info">
                              <h3>Big temple Areas</h3>
                              <p>If you are in this area,You can choose this.</p>
                            </div>
                            
                        </a> */}

                        <Link to="/services" className="a-card area-card">

                            <img src="/assets/big-temple.jpg" alt="big-temple" className="area-img"/>
                            <div className="area-info">
                              <h3>Big temple Areas</h3>
                              <p>If you are in this area,You can choose this.</p>
                            </div>

                        </Link>

                        {/* <a href="/services" className="a-card area-card">
                            <img src="/assets/old-busstand.jpg" alt="old-busstand" className="area-img"/>
                            <div className="area-info">
                              <h3>Old Bus Stand</h3>
                              <p>If you are in this area,You can choose this.</p>
                            </div>
                            
                        </a> */}

                        <Link to="/services" className="a-card area-card">
                            
                            <img src="/assets/old-busstand.jpg" alt="old-busstand" className="area-img"/>
                            <div className="area-info">
                              <h3>Old Bus Stand</h3>
                              <p>If you are in this area,You can choose this.</p>
                            </div>
                        
                        </Link>

                        {/* <a href="/services" className="a-card area-card">
                            <img src="/assets/vallam.jpg" alt="vallam" className="area-img"/>
                            <div className="area-info">
                              <h3>Vallam</h3>
                              <p>If you are in this area,You can choose this.</p>   
                            </div>
                            
                        </a> */}

                        <Link to="/services" className="a-card area-card">
                        
                        <img src="/assets/vallam.jpg" alt="vallam" className="area-img"/>
                            <div className="area-info">
                              <h3>Vallam</h3>
                              <p>If you are in this area,You can choose this.</p>   
                            </div>

                        </Link>

                        {/* <a href="/services" className="a-card area-card">
                            <img src="/assets/thiruvaiyaru.jpg" alt="thiruvaiyaru" className="area-img"/>
                            <div className="area-info">
                             <h3>Thiruvaiyaru</h3>
                             <p>If you are in this area,You can choose this.</p>   
                            </div>
                            
                        </a> */}

                        <Link to="/services" className="a-card area-card">
                        
                            <img src="/assets/thiruvaiyaru.jpg" alt="thiruvaiyaru" className="area-img"/>
                            <div className="area-info">
                             <h3>Thiruvaiyaru</h3>
                             <p>If you are in this area,You can choose this.</p>   
                            </div>

                        </Link>

                        {/* <a href="/services" className="a-card area-card">
                            <img src="/assets/nadukadai.jpg" alt="nadukkadai" className="area-img"/>
                            <div className="area-info">
                              <h3>Nadukkadai</h3>
                              <p>If you are in this area,You can choose this.</p>    
                            </div>
                            
                        </a> */}

                        <Link to="/services" className="a-card area-card">
                             
                            <img src="/assets/nadukadai.jpg" alt="nadukkadai" className="area-img"/>
                            <div className="area-info">
                              <h3>Nadukkadai</h3>
                              <p>If you are in this area,You can choose this.</p>    
                            </div>  
                        
                        </Link>

                        {/* <a href="/services" className="a-card area-card">
                            <img src="/assets/kandiyur.jpg" alt="kandiyur" className="area-img" />
                            <div className="area-info">
                              <h3>Kandiyur</h3>
                              <p>If you are in this area,You can choose this.</p>   
                            </div>
                            
                        </a> */}


                        <Link to="/services" className="a-card area-card">
                            <img src="/assets/kandiyur.jpg" alt="kandiyur" className="area-img" />
                            <div className="area-info">
                              <h3>Kandiyur</h3>
                              <p>If you are in this area,You can choose this.</p>   
                            </div>
                        </Link>

                        {/* <a href="/services" className="a-card area-card">
                            <img src="/assets/pattukottai.jpg" alt="pattukottai" className="area-img"/>
                            <div className="area-info">
                              <h3>Pattukkottai</h3>
                              <p>If you are in this area,You can choose this.</p>   
                            </div>
                            
                        </a> */}

                        <Link to="/services" className="a-card area-card">

                            <img src="/assets/pattukottai.jpg" alt="pattukottai" className="area-img"/>
                            <div className="area-info">
                              <h3>Pattukkottai</h3>
                              <p>If you are in this area,You can choose this.</p>   
                            </div>
                        
                        </Link>

                        {/* <a href="/services" className="a-card area-card">
                            <img src="/assets/thirukattupalli.jpg" alt="thirukattupalli" className="area-img"/>
                            <div className="area-info">
                              <h3>Thirukkattupalli</h3>
                             <p>If you are in this area,You can choose this.</p>   
                            </div>
                            
                        </a> */}

                        <Link to="/services"  className="a-card area-card">
                        <img src="/assets/thirukattupalli.jpg" alt="thirukattupalli" className="area-img"/>
                            <div className="area-info">
                              <h3>Thirukkattupalli</h3>
                             <p>If you are in this area,You can choose this.</p>   
                            </div>
                        </Link>

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