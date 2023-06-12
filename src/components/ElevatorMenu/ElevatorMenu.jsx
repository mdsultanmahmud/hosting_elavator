import './ElevatorMenu.css'
import img from '../../assets/banner/bannerbg.jpg'
import {AiOutlinePlus} from 'react-icons/ai'
const ElevatorMenu = () => {
    return (
        <div className="my-8 md:my-16">
            <div className="container">
                <div className="elevatro-content md:grid grid-cols-2 gap-x-4 bg-white">
                   <div className='hidden md:block'>
                        <img src={img} alt="" />
                   </div>
                   <div className='p-8 text-center bg-[#df1b33]'>
                        <h2>Leading Elevator Manufacturer in China</h2>
                        <p>Hosting is the most popular elevator manufacturer in China. The main business is to provide customized elevator services for elevator distributors and elevator companies worldwide. Our cooperative customers include FUJITEC, SCHINDLER, HYUNDAI, and another famous brand.</p>
                        <button><AiOutlinePlus size={30}/></button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ElevatorMenu;