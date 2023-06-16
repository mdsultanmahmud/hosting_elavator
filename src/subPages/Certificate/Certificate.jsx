import AboutButton from "../../components/AboutButton/AboutButton";
import BannerBG from "../../components/BannerBG/BannerBG";
import c1 from '../../assets/about/c1.webp'
import c2 from '../../assets/about/c2.webp'
import c3 from '../../assets/about/c3.webp'
import c4 from '../../assets/about/c4.webp'
// eslint-disable-next-line react/prop-types
const Certificate = () => {
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
            cert: c1
        },
        {
            id: 6,
            cert: c2
        },
        {
            id: 7,
            cert: c3
        },
        {
            id: 8,
            cert: c4
        },
        {
            id: 9,
            cert: c1
        },
        {
            id: 10,
            cert: c2
        },
        {
            id: 11,
            cert: c3
        },
        {
            id: 12,
            cert: c4
        },
        {
            id: 13,
            cert: c3
        },
        {
            id: 14,
            cert: c4
        },
    ]
    return (
        <div className={`marginTop`}>
            <BannerBG title={"Certificate"} />
            <div className="container">
                <AboutButton text={'cer'} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
                    {
                        certificates.map(cert => <div key={cert.id}>
                            <img src={cert.cert} alt=""  className="w-full"/>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Certificate;