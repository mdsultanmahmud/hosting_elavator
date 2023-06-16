import AboutButton from "../../components/AboutButton/AboutButton";
import BannerBG from "../../components/BannerBG/BannerBG";

// eslint-disable-next-line react/prop-types
const FactoryView = () => {
    return (
        <div className={`marginTop`}>
            <BannerBG title={"Factory View"}/>
            <div className="container">
                <AboutButton text={'view'}/>
                <div className="factory-container">
                    <h1>here our all factory view</h1>
                </div>
            </div>
        </div>
    );
};

export default FactoryView;