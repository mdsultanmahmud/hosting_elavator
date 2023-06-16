import AboutButton from "../../components/AboutButton/AboutButton";
import BannerBG from "../../components/BannerBG/BannerBG";

// eslint-disable-next-line react/prop-types
const Certificate = () => {
    return (
        <div className={`marginTop`}>
            <BannerBG title={"Certificate"}/>
            <div className="container">
                <AboutButton text={'cer'}/>
                <div className="certificate-container">
                    <h1>here our all certificate</h1>
                </div>
            </div>
        </div>
    );
};

export default Certificate;