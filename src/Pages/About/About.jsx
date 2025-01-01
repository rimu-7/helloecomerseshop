import Navbar from '../../Pages/Shared/Navbar/Navbar';
import SearchBox from '../../Pages/Shared/Navbar/SearchBox';
import Footer from '../../Pages/Shared/Footer/Footer';
import About from './About/About'

const Home = () => {
    return (
        <div className='z-10'>
            <SearchBox/>
            <Navbar/>
            <About/>
            <Footer/>
        </div>
    );
};

export default Home;