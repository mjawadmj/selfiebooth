import React from 'react';
import altLogo from '../../assets/img/logo-alt.png';

export const Footer =()=>{
    return(

<footer id="footer" class="sm-padding bg-dark">

    
    <div className="container">

       
        <div className="row">

            <div className="col-md-12">

               
                <div className="footer-logo">
                    <a href="index.html"><img className="logo-alt" src={altLogo} alt="logo"/></a>
                </div>
                
                <ul class="footer-follow">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                </ul>
                
                <div class="footer-copyright">
                    <p>Copyright © 2018. All Rights Reserved. Designed by Team Xterminate</p>
                </div>
                
            </div>

        </div>
      

    </div>
    

</footer>
)
}