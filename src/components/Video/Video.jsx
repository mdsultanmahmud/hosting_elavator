import { useState } from 'react';
import './Video.css'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
const Video = () => {
    let [url, setUrl] = useState("https://www.youtube.com/embed/ZrXrE2TuEtQ")
    let [index, setIndex] = useState(0)
    const videos = [
        "https://www.youtube.com/embed/ZrXrE2TuEtQ",
        "https://www.youtube.com/embed/ZrXrE2TuEtQ?start=20",
        "https://www.youtube.com/embed/ZrXrE2TuEtQ?start=40",
        "https://www.youtube.com/embed/ZrXrE2TuEtQ?start=70",
        "https://www.youtube.com/embed/ZrXrE2TuEtQ?start=80",
        "https://www.youtube.com/embed/ZrXrE2TuEtQ?start=90",
    ]

    return (
        <div className="my-8 md:my-12">
            <div className="container">
                <div className="video-content">
                    <h1 className="primaryTitle">Video</h1>
                    <div className='md-video-content p-4 mt-8 mb-4 lg:hidden'>
                        <div>
                            <iframe src={videos[index]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe >
                        </div>
                        <div className='flex justify-between items-center mt-6'>
                            <button onClick={() => {
                                if (index == 0) {
                                    index = 5
                                }
                                setIndex(index - 1)
                            }}><IoIosArrowBack size={22} /></button>
                            <button onClick={() => {
                                if (index == 5) {
                                    index = 0
                                }
                                setIndex(index + 1)
                            }}><IoIosArrowForward size={22} /></button>
                        </div>
                    </div>
                    <div className='hidden lg:flex gap-x-4 items-center mt-12 '>
                        <div className='w-[20%]'>
                            <div onClick={() => setUrl("https://www.youtube.com/embed/ZrXrE2TuEtQ")} className={`p-4 flex items-start gap-x-3 cursor-pointer rounded-lg ${url == "https://www.youtube.com/embed/ZrXrE2TuEtQ" ? 'activeVideo' : ''}`}>
                                <AiFillPlayCircle size={32} />
                                <h3 className='text-[.9rem]'>Ningbo Hosting Elevator Company Video</h3>
                            </div>
                            <div onClick={() => setUrl('https://www.youtube.com/embed/ZrXrE2TuEtQ?start=20')} className={`p-4 flex items-start gap-x-3 cursor-pointer rounded-lg my-8 ${url == "https://www.youtube.com/embed/ZrXrE2TuEtQ?start=20" ? 'activeVideo' : ''}`}>
                                <AiFillPlayCircle size={32} />
                                <h3 className='text-[.9rem]'>Ningbo Hosting Elevator Company Video</h3>
                            </div>
                            <div onClick={() => setUrl('https://www.youtube.com/embed/ZrXrE2TuEtQ?start=40')} className={`p-4 flex items-start gap-x-3 cursor-pointer rounded-lg ${url == "https://www.youtube.com/embed/ZrXrE2TuEtQ?start=40" ? 'activeVideo' : ''}`}>
                                <AiFillPlayCircle size={32} />
                                <h3 className='text-[.9rem]'>Ningbo Hosting Elevator Company Video</h3>
                            </div>
                        </div>
                        <div>
                            <iframe width="660" height="400" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe >
                        </div>
                        <div className='w-[20%]'>
                            <div onClick={() => setUrl('https://www.youtube.com/embed/ZrXrE2TuEtQ?start=70')} className={`p-4 flex items-start gap-x-3 cursor-pointer rounded-lg ${url == "https://www.youtube.com/embed/ZrXrE2TuEtQ?start=70" ? 'activeVideo' : ''}`}>
                                <AiFillPlayCircle size={32} />
                                <h3 className='text-[.9rem]'>Ningbo Hosting Elevator Company Video</h3>
                            </div>
                            <div onClick={() => setUrl('https://www.youtube.com/embed/ZrXrE2TuEtQ?start=80')} className={`p-4 flex items-start gap-x-3 cursor-pointer rounded-lg my-8 ${url == "https://www.youtube.com/embed/ZrXrE2TuEtQ?start=80" ? 'activeVideo' : ''}`}>
                                <AiFillPlayCircle size={32} />
                                <h3 className='text-[.9rem]'>Ningbo Hosting Elevator Company Video</h3>
                            </div>
                            <div onClick={() => setUrl('https://www.youtube.com/embed/ZrXrE2TuEtQ?start=90')} className={`p-4 flex items-start gap-x-3 cursor-pointer rounded-lg ${url == "https://www.youtube.com/embed/ZrXrE2TuEtQ?start=90" ? 'activeVideo' : ''}`}>
                                <AiFillPlayCircle size={32} />
                                <h3 className='text-[.9rem]'>Ningbo Hosting Elevator Company Video</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;