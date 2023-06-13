import Banner from "../../components/Banner/Banner";
import ElevatorMenu from "../../components/ElevatorMenu/ElevatorMenu";
import LatestNews from "../../components/LatestNews/LatestNews";
import Quote from "../../components/Quote/Quote";
import Video from "../../components/Video/Video";

const Home = () => {
    return (
        <div>
            <Banner />
            <ElevatorMenu />
            <Video/>
            <LatestNews/>
            <Quote />
        </div>
    );
};

export default Home;