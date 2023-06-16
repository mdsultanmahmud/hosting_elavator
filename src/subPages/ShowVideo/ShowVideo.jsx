import { useEffect, useState } from "react";
import { AiOutlineYoutube } from 'react-icons/ai'
import { Link } from "react-router-dom";
import BannerBG from "../../components/BannerBG/BannerBG";
import AboutButton from "../../components/AboutButton/AboutButton";
import './ShowVideo.css'
// eslint-disable-next-line react/prop-types
const ShowVideo = () => {
    const [videos, setVides] = useState([])
    useEffect(() => {
        fetch("videos.json")
            .then(res => res.json())
            .then(data => setVides(data))
    }, [])
    console.log(videos)
    return (
        <div className="marginTop">
            <BannerBG title={"Video"}/>
            <div className="container">
                <AboutButton text={"video"}/>
                <div className={`grid grid-cols-2 md:grid-cols-3 gap-8 video-container`}>
                    {
                        videos.map((video) => <Link to={`/video/${video.id}`} key={video.id}>
                            <div className="relative img-section">
                                <img src={video.img} alt="" className="drop-shadow-lg" />
                                <AiOutlineYoutube size={44} className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 icon" />
                            </div>
                            <h4>{video.name}</h4>
                        </Link>)
                    }
                </div>
            </div>
        </div>

    );
};

export default ShowVideo;