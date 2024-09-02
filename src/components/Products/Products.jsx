import "./Products.css"
import jornyman from './Rectangle 16.png'
import tovaERP from './Ellipse 3.png'

export default function Products(){
    return(
        <div className="product-container">
            <h1><br />Our Products</h1>

         <div>
            <div className="product1">
              <div className="product1-text">
                <h2>Jornyman</h2>
                <p>The Jornyman is an affordable new way to get your errands done quickly and save time.</p>
                <p>The Jornyman is not your regular market place. You go to a regular market place, but The Jornyman comes to you. And it brings the complete market place experience with it.</p>
                <p>See more at https://jornyman.com/</p>
               </div>
                <img src={jornyman} alt="" />
            </div>

            <div className="product2">
                <img src={tovaERP} alt="" />
                <div className="product2-text">
                    <h2>TovaERP</h2>
                    <p>Tova is an enterprise resource planning
                    solution that enables organisations to manage their resources and automate  their business activities and processes.</p>
                    <p>Tova is made up of different software solutions that are integrated  as a single business solution or as stand-alone modules catering to specific aspects of your business. You can also combine different modules to meet your needs</p>
                    <button>Request Demo</button>
                </div>

            </div>
                
               
         </div>

        
        </div>
    )
}