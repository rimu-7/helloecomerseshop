import React from 'react';
import NewArrival from '../NewArrival/NewArrival';
import NewProduct from '../NewProduct/NewProduct';
import CarouselTest from '../Carousel/CarouselTest';
import CategoryPage from '../ProductCategory/CategoryPage'


const Home = () => {
    return (
        <div className='z-10 mt-[-26px] '>
            <CarouselTest />
            {/* <CategoryPage /> */}
            <NewArrival />
            <NewProduct />
        </div>
    );
};

export default Home;