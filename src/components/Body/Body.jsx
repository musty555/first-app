import "./Body.css"
import pic from './Picture.png'


export default function Body(){
    return(
        <div className="section">
           <img src={pic} alt="" />

            <div className="text1">
               <p><li>WHO WE ARE</li></p>
               <h1>We are a Team with Focus <br /> on Innovation and Improving <br />Business Processes, People,<br /> and Systems</h1>
               <p>Spatium Innovation Hub is a thinking company <br />on a mission to connect people and <br /> businesses with meaningful innovation,<br /> at scale.</p>
            </div>
        </div>
        
    )
}