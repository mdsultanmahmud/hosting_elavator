import { CgMail } from 'react-icons/cg'
import { IoMdCall } from 'react-icons/io'
import { CiFacebook } from 'react-icons/ci'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import ukFlag from '../../assets/navbar/uk_flag.png'
import esFlag from '../../assets/navbar/es_flag.png'
const UpperNav = () => {
    return (
        <div className='hidden md:block'>
            <div className='container flex justify-between items-center'>
                <div className='flex items-center gap-x-3'>
                    <p>Welcome to </p>
                    <span>|</span>
                    <p className='flex items-center gap-x-1'><CgMail /> <span>usoverseas@nbxd.com</span></p>
                    <span>|</span>
                    <p className='flex items-center gap-x-1'><IoMdCall /> <span>0086-574-88336262</span></p>
                </div>
                <div className='flex gap-x-12 items-center'>
                    <div className='flex items-center gap-x-2'>
                        <CiFacebook />
                        <BsTwitter />
                        <AiOutlineInstagram />
                        <AiOutlineYoutube />
                    </div>
                    <div>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn m-1">Click</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li ><button className='flex items-center gap-x-2'><img src={ukFlag} className='w-[26px] h-[17px]'/><span>English</span></button></li>
                                <li ><button className='flex items-center gap-x-2'><img src={esFlag} className='w-[26px] h-[17px]'/><span>Espanol</span></button></li>
                                <li><button className='flex items-center gap-x-2'><img src={ukFlag} className='w-[26px] h-[17px]'/><span>لعربية</span></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpperNav;