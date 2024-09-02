import "./Team.css"
import teampic from './Group 220.png'
import news from './news 1.png'

export default function Team(){
    return(
        <div className="team">
            <h4><li>PROFESSIONAL PEOPLE</li></h4>
            <h1>Our Leadership Team</h1>
            <p>We have experience working with large and small businessesand are ready <br /> 
            to develop a targeted strategy and plan that's right for you</p>
            <img src={teampic} alt="" />

            <div className="subs">
                <img src={news} alt="" />
                <p>Subscribe to our Newsletter</p>
                <input type="email" name="mail" id="mail" placeholder="Your email"/>
                <input type="button" value="Subscribe" />
            </div>

        </div>
    )
}