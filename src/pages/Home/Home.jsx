import Banner from "../../components/Banner/Banner";
import Elevator from "../../components/Elevator/Elevator";
import ElevatorMenu from "../../components/ElevatorMenu/ElevatorMenu";
import LatestNews from "../../components/LatestNews/LatestNews";
import Quote from "../../components/Quote/Quote";
import Video from "../../components/Video/Video";

const Home = () => {
    return (
        <div>
            <Banner />
            <ElevatorMenu />
            <Elevator/>
            <Video/>
            <LatestNews/>
            <Quote />
        </div>
    );
};

export default Home;