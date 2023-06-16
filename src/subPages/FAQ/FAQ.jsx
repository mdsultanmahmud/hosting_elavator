import AboutButton from "../../components/AboutButton/AboutButton";
import BannerBG from "../../components/BannerBG/BannerBG";

// eslint-disable-next-line react/prop-types
const FAQ = () => {
    return (
        <div className={`marginTop`}>
            <BannerBG title={"FAQ"}/>
            <div className="container">
                <AboutButton text={'faq'}/>
                <div className="faq-container">
                    <h1>here our all faq</h1>
                </div>
            </div>
        </div>
    );
};

export default FAQ;