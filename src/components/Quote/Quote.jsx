
import { Link } from 'react-router-dom';
import './Quote.css'
const Quote = () => {
    return (
        <div>
            <div className='container'>
                <div className='quote-container'>
                    <h2>Get a quote about your elevator needs!</h2>
                    <Link to={'/contact'}><button>contact us now</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Quote;