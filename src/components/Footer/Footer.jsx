import './Footer.css'
import logo from './Group 2.png'
import twitter from './Twitter 3.png'
import fb from './Facebook 2.png'
import ig from './LinkedIN 2.png'
import linkdn from './Instagram 3.png'


export default function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer'>

                <div className='f1'>
                    <h3>About Us</h3>
                    <img src={logo} alt="" />
                    <p>Spatium Innovation Hub is a thinking company on a mission to connect people and businesses with meaningful innovation.</p>
                 <div className='logos'>
                    <img src={twitter} alt="" />
                    <img src={fb} alt="" />
                    <img src={ig} alt="" />
                    <img src={linkdn} alt="" />
                 </div>
             
                </div>

                <div className='f2'>
                    <h3>Contact Us</h3>
                    <p><strong>Address:</strong> Global Plaza, Jabi. Abuja. Nigeria</p>
                    <p><strong>Phone</strong></p>
                    <p><strong>Email:</strong> spatiuminnovation@gmail.com</p>
                </div>

                <div className='f3'>
                    <h3>Services</h3>
                    <p>Software Development</p>
                    <p>Identity Management & Verification</p>
                    <p>IT Consulting & Advisory Services</p>
                    <p>UI/UX Design</p>
                </div>

                <div className='f4'>
                    <h3>Quiklinks</h3>
                    <p>Careers</p>
                    <p>Resources</p>
                    <p>Products</p>
                    <p>Blogs</p>
                </div>

            </div>

            <div className='copyright'>
                <hr />
                <p>Copyright  2020. Spatium Innovation Hub. All Rights Reserved</p>
            </div>


        </div>
    )
}