import Header from "../components/Header/Header"
import BottomHeader from "../components/BottomHeader/BottomHeader"
import HeroSection from "../components/HeroSection/HeroSection"
import Body from "../components/Body/Body"
import Body2 from "../components/Body2/body2"
import Products from "../components/Products/Products"
import Team from "../components/Team/Team"
import Footer from "../components/Footer/Footer"

export default function HomePage(){
    return(
        <div>
           <Header />
           <BottomHeader />
           <HeroSection />
           <Body />
           <Body2 />
           <Products />
           <Team />
           <Footer />

        </div>
    )
}