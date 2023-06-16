
// eslint-disable-next-line react/prop-types
const Video = ({tab}) => {
    return (
        <div className={`${tab == "video" ? "block" : "hidden"}`}>
            <h1>our all video content</h1>
        </div>
    );
};

export default Video;