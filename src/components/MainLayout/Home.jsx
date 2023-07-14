import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div>
            <div className='header'>
                <FontAwesomeIcon className='icons' icon={faCoffee} />
                <span>UtRA-Active-club</span>
            </div>

        </div>
    );
};

export default Home;