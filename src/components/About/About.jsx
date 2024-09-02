import './About.css'
import dakol from './dakol.png'

export default function About(){
    return(
        <div className='ab-container'>
            <div className='ab1'>
                <h1>About us</h1>
            </div>

            <div>
                <div className='ab2'>
                    <h1>Our Product Design Team</h1>
                </div>

                <div className='product-team'>
                    <img src={dakol} alt="" />
                    <div className='text-product'>
                        <h4><li>THE PRODUCT DESIGN TEAM</li></h4>
                        <h2><strong>Our focus is on creating highly usable and accessible products for our users</strong></h2>
                        <p>As designers working as a team, we try to understand the context in which users may use our products. Then we identify and specify the users requirements. We base our projects upon an explicit understanding of the users, their tasks and environment so as to capture the whole user experience.</p>
                        <p>Here at Spatium at every phase of the design our product design team has User-Centered Design(UCD) implemented as an integral part of the development model. With a combination of User research, sketches, wireframes, user flows, wirefolws, customer journey maps and prototypes, our products are sure to stand out. </p>
                        <a href="">click here to see our case studies</a>

                    
                    </div>
                
                </div>
            </div>

        </div>
    )
}