import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Products from '../Products/Products';
import Calculation from '../Calculation/Calculation';

const Home = () => {
    return (
        <div>
            <div className='header'>
                <FontAwesomeIcon className='icons' icon={faCoffee} />
                <span>UtRA-Active-club</span>
            </div>

            <div className='main-content'>
                <div className='site-data'>
                    <Products></Products>
                </div>
                <div className='site-calculation'>
                    <Calculation></Calculation>
                </div>
            </div>

        </div>
    );
};

export default Home;