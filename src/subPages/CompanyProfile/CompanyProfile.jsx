import './CompanyProfile.css'
// eslint-disable-next-line react/prop-types
import company from '../../assets/about/company1.webp'
import company2 from '../../assets/about/company2.webp'
import AboutButton from '../../components/AboutButton/AboutButton';
import BannerBG from '../../components/BannerBG/BannerBG';
import { useContext } from 'react';
import { NavbarContext } from '../../context/ContextProvider';
// eslint-disable-next-line react/prop-types
const CompanyProfile = () => {
    const {setIsBanner} = useContext(NavbarContext)
    function changeNav(){
        setIsBanner(false)
    }
    changeNav()
    return (
        <div className='marginTop'>
            <BannerBG title={"Company Profile"} />
            <div className='container'>
                <AboutButton text="company" />
                <div className={`companyprofile-container`}>
                    <img src={company} alt="" />
                    <div className='my-6'>
                        <h1>HOSTING Company Profile</h1>
                        <p>Hosting Elevator is China top elevator brand, established in 1993. <span className='text-[#5b5550] font-bold'>Hosting is China top 10 famous elevator brand</span>. It is a professional elevator and escalator manufacturer integrating development, manufacturing, installation, and maintenance. <span className='text-[#5b5550] font-bold'>We have a production base of over 300,000 square meters, and the test tower is over 165 meters high. The maximum speed is up to 10 m / s</span>. The production capacity of the first stage has reached more than 20,000 sets per year. <span className='text-[#5b5550] font-bold'>Fully able to customize the elevator you need.</span></p>
                        <p>Our products are widely used in government-funded projects, real estate projects, hotels, and urban rail transit projects. More than 30% of our products are exported to South America, Europe, Asia, the Middle East, Africa, and other countries; <span className='text-[#5b5550] font-bold'>our export volume ranks among the top ten in China</span>, and home elevators rank among the best elevators in China`&apos;`s own brands.</p>
                    </div>
                    <hr />
                    <div className='my-6'>
                        <h1>Hosting Company Video Overview</h1>
                        {/* <iframe src="https://www.youtube.com/embed/kJiDuZJLdXQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/h9aGGwQXPKw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/ZrXrE2TuEtQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                        <p>vidoe will be upload..</p>
                    </div>
                    <hr />
                    <div className='my-6'>
                        <h1>Our services</h1>
                        <h3>Custom elevator</h3>
                        <p>The types of elevators we can design and produce are <span className='text-red-500'>Passenger Elevator</span>, High-Speed Elevator, Observation Elevator, Medical Elevator, Freight Elevator, Car Elevator, Villa Elevator, Escalator, Escalators, and Moving Walks.</p>
                        <h3>Modern elevator service</h3>
                        <p>Hongda Elevator also provides <span className='text-red-500'>elevator modernization services</span>. Improve elevator safety performance, comfort, and work efficiency.</p>
                    </div>
                    <hr />
                    <div className='my-6'>
                        <h1>CE/UL/TUV Certification</h1>
                        <p>As to the qualification, HOSTING is an elevator manufacturing enterprise in China which is awarded by DNV the certificates of the ISO9001 quality management system, ISO14001 environmental management system, OHSAS18001 occupational health and safety management system, and the certificate of SA8000 social responsibility management system issued by TUV. </p>
                        <p>All products are developed and manufactured in accordance with the European EN81-20/50 and EN115 standards and have CE and UL certificates. HOSTING products are designed according to international standards and meet the standard requirements of Europe,  Australia, and Asia, etc.</p>
                    </div>
                    <hr />
                    <div className='my-6'>
                        <h1>Our Partner</h1>
                        <p>Hosting Elevator always following market requirement to get the trust from users around the world by its quality products and satisfactory service, expands market, establishes a sound marketing service network and service outlets and participates in different exhibition all over the world for communication. 1， 125 sales websites at domestic market and <span className='text-[#5b5550] font-bold'>more than 80 sales websites at overseas</span> .</p>
                        <img src={company2} alt="" />
                    </div>

                </div>
            </div>
        </div>

    );
};

export default CompanyProfile;