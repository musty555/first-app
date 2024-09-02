import "./Header.css"
import twitter from './Twitter 2.png'
import fb from './Facebook 1.png'
import linkdn from './Vector.png'
import ig from './Instagram 2.png'
import maps from './maps-and-flags (1).png'
import envelope from './envelope.png'

export default function Header(){
    return(
    <div className="top-header">
        <div className="handle">
            <img src={twitter} alt="" />
            <img src={fb} alt="" />
            <img src={linkdn} alt="" />
            <img src={ig} alt="" />
        </div>

        <div className="location">
            <img src={maps} alt="" />
            <span>Global plaza, Jabi, Abuja, Nigeria.</span>

        </div>

        <div className="contact">
            <img src={envelope} alt="" />
            <span>spatiuminnovationhub@gmail.com</span>

        </div>

    </div>

    


    )
}

