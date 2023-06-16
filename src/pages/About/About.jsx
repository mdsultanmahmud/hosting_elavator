import { useState } from "react";
import BannerBG from "../../components/BannerBG/BannerBG";
import CompanyProfile from "../../subPages/CompanyProfile/CompanyProfile";
import FactoryView from "../../subPages/FactoryView/FactoryView";
import Certificate from "../../subPages/Certificate/Certificate";
import FAQ from "../../subPages/FAQ/FAQ";
import Video from "../../subPages/Video/Video";
import './About.css'
const About = () => {
    const [title, setTitle] = useState("Company Profile")
    const [tab, setTab] = useState("companyProfile")
    return (
        <div className="marginTop">
            <BannerBG title={title} />
            <div className="container">
                <div className="about-container">
                    <div className="flex items-center gap-x-4 my-8 button-container">
                        <h2 onClick={() => {
                            setTitle("Company Profile")
                            setTab("companyProfile")
                        }}
                        className={`${tab == 'companyProfile' ? 'activeBtn' : ''}`}
                        >Company Profile</h2>
                        <h2 onClick={() => {
                            setTitle("Factory View")
                            setTab("factoryView")
                        }}
                        className={`${tab == 'factoryView' ? 'activeBtn' : ''}`}
                        >Factory View</h2>
                        <h2 onClick={() => {
                            setTitle("Certificate")
                            setTab("certificate")
                        }}
                        className={`${tab == 'certificate' ? 'activeBtn' : ''}`}
                        >Certificate</h2>
                        <h2 onClick={() => {
                            setTitle("FAQ")
                            setTab("faq")
                        }}
                        className={`${tab == 'faq' ? 'activeBtn' : ''}`}
                        >FAQ</h2>
                        <h2 onClick={() => {
                            setTitle("Video")
                            setTab("video")
                        }}
                        className={`${tab == 'video' ? 'activeBtn' : ''}`}
                        >Video</h2>
                    </div>
                    <div className="my-12">
                       <CompanyProfile tab = {tab}/>
                       <FactoryView tab = {tab}/>
                       <Certificate tab = {tab}/>
                       <FAQ tab = {tab}/>
                       <Video tab = {tab}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;