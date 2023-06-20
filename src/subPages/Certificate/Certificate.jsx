import AboutButton from "../../components/AboutButton/AboutButton";
import BannerBG from "../../components/BannerBG/BannerBG";
import c1 from '../../assets/about/c1.jpg'
import c2 from '../../assets/about/c2.jpg'
import c3 from '../../assets/about/c3.jpg'
import c4 from '../../assets/about/c4.jpg'
import c5 from '../../assets/about/c5.jpg'
import c6 from '../../assets/about/c6.jpg'
import c7 from '../../assets/about/c7.jpg'
import { useContext } from "react";
import { NavbarContext } from "../../context/ContextProvider";


// eslint-disable-next-line react/prop-types
const Certificate = () => {
    const {setIsBanner} = useContext(NavbarContext)
    function changeNav(){
        setIsBanner(false)
    }
    changeNav()
    const certificates = [
        {
            id: 1,
            cert: c1
        },
        {
            id: 2,
            cert: c2
        },
        {
            id: 3,
            cert: c3
        },
        {
            id: 4,
            cert: c4
        },
        {
            id: 5,
            cert: c5
        },
        {
            id: 6,
            cert: c6
        },
        {
            id: 7,
            cert: c7
        }
    ]
    return (
        <div className={`marginTop`}>
            <BannerBG title={"Certificate"} />
            <div className="container">
                <AboutButton text={'cer'} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
                    {
                        certificates.map(cert => <div key={cert.id}>
                            <img src={cert.cert} alt=""  className="w-full h-full"/>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Certificate;