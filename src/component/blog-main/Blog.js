import React, { useEffect } from 'react';
import "./Blog.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Nav from '../navigation/Nav';
import { Link } from "react-router-dom";


const Blog = () => {
    return (
      
    <div className='blog-main'>
      <div>
        <Nav/>
      </div>
      <div className='img-blog'>
         <img src='https://www.infogenx.com/image/RK1.png'></img>
               
           </div>
           <div className='blog-name'>
              Blogs
           </div>

           <div className='main-card'>

           <div className='card1'>
                 <img id='data1-img' src='https://www.infogenx.com/image/dataimg1.png' ></img>
                 <p id='data1-h'>Data Engineering</p>
                 <p id='data1-p'>Do you know what is Data Engineering?
                 And Why should you use Infogenx for Data Engineering?</p>
      <Link to="/engineering">
 <a id='data1-a' href=''>Read More...</a>
 </Link>
      </div>

           <div className='card2'>
               <img id='data2-img' src='https://www.infogenx.com/image/data1.png' ></img>
               <p id='data2-h'>Data Analytics</p>
               <p id='data1-p'>Data analytics is the science of analyzing raw data 
               to make conclusions about that information.</p>
               <Link to="/analytics">
                 <a id='data1-a' href=''>Read More...</a>
                 </Link>
               </div>          
               
                <div className='card3'>
               <img id='data3-img' src='https://www.infogenx.com/image/data222.png' ></img>
               <p id='data3-h'>Database Administration<br/>
                   (On-Premises&Cloud)</p>
                   <p id='data1-p'>Database administration is important function and organization</p>
               <Link to="/base">
                 <a id='data1-a' href=''>Read More...</a>
                 </Link>

   
               </div>         
               
                 <div className='card4'>
                     <img id='data4-img' src='https://www.infogenx.com/image/FM.png' ></img>
                     <p id='data4-h'>Web Design & Development</p>
                   <p id='data4-p'>How Do you Pick the Best Web Developer Company?</p>
                <Link  to="/web">
                 <a id='data1-a' href=''>Read More...</a>
              </Link>
               </div>          
               
                <div className='card5'>
                <img id='data5-img' src='https://www.infogenx.com/image/data4.png'></img>
                <p id='data5-h'>Application Development</p>
                <p id='data1-p'>Your reliable, competent partner in developing 
                secure and scalable applications.</p>
                <Link to="/app">
                 <a id='data1-a' href=''>Read More...</a>
                 </Link>

               </div>

               <div className='card6'>
               <img id='data6-img' src='https://www.infogenx.com/image/data3.png'></img>
               <p id='data6-h'>Cloud Data Management</p>
               <p id='data1-p'>Without a competent IT staff in place, it's difficult for any
                cloud management strategy to succeed.</p>
                <Link to="/cloud">
                 <a id='data1-a' href=''>Read More...</a>
                 </Link>
            </div>
           </div>
             <div className='main-subs'>
                 <p id='subs-h'>Subscribe My Newsletter</p>
                 <p id='subs-p'>Subscribe and get my latest article in your inbox</p>
                <input id='subs-input' type="text"></input>
                <  button id='subs-button' >Subscribe</button> 
          </div>
          <div>
            
          </div>
 
          <div className='main-footer' >
                 <p id='footer-h1'>Contact With Us</p>
                 <p id='footer-h2'>Location</p>
                 <div className='footer-a' >
                     <a href=''>Home</a>
                     <a href=''>About Us</a>
                     <a href=''>Services</a>
                     <a href=''>Products</a>
                     <a href=''>Portfolio</a>
                     <a href=''>Blog</a>
                 </div>
                 <div className='div1' >
                 <p>No.34, C-1, Metha.S</p> 
                 <p>Gokulam, Kuberan</p>
                 <p>Nagar,Velachery,</p>
                 <p>Chennai - 600042</p>
                 <p>rechus@infonex.com</p>
                 <p>+(91)9787806366</p>
                 </div>


                  {/* <div className='div2' >
                 <p>1936-1940,</p> 
                 <p>Trichy Road,</p>
                 <p>RamanathaPuram</p>
                 <p>Coimbatore -641045</p>
                 <p>rechus@infonex.com</p>
                 <p>+(91)9787806366</p>
                 </div>  */}

                  <div className='div4' >
                
                 <p>36 Bess Street,</p> 
                 <p>Windsor,Brisbane</p>
                 <p>Queensland –4030,</p>
                 <p>Australia.</p>
                 <p>rechus@infonex.com</p>
                 <p>+61 405826614</p>
                 </div> 

                   <div className='div3' >
                 <p>Po Box 1843,</p> 
                 <p>Konedobu, Port</p>
                 <p>Moresby, NCD-121</p>
                 <p>Papua New Guinea.</p>
                 <p>rechus@infonex.com</p>
                 <p>+675 7591 7607</p>
                 </div> 
                

          </div>
          <div className='small-footer'>
              <p>All Rights Reserved. Designed by Infogenx Pvt Ltd.</p>
              
<div className='icon'>
  <a id='ista' href='https://www.instagram.com/infogenxpvt/'>< InstagramIcon fontSize="large" color="black"/></a>
<a href=''> <TwitterIcon fontSize="large" color="black"/></a>
<a href=''> <LinkedInIcon fontSize='large' color="black"/></a>
<a href=''> <FacebookIcon fontSize='large' color="black"/></a>

</div> 

    </div> 

      </div>
        
    );
};

export default Blog;