import React from 'react';

import banImg1 from '../../../assets/images/banner/1.jpg'
import banImg2 from '../../../assets/images/banner/2.jpg'
import banImg3 from '../../../assets/images/banner/3.jpg'
import banImg4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w- h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banImg1} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]    left-0  bottom-0 ">
           <div className='text-white pl-12 space-y-7 w-1/2'>
            <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className='btn btn- mr-5'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
            </div>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banImg2} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]    left-0  bottom-0 ">
           <div className='text-white pl-12 space-y-7 w-1/2'>
            <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className='btn btn- mr-5'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
            </div>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banImg3} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]    left-0  bottom-0 ">
           <div className='text-white pl-12 space-y-7 w-1/2'>
            <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className='btn btn- mr-5'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
            </div>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banImg4} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]    left-0  bottom-0 ">
           <div className='text-white pl-12 space-y-7 w-1/2'>
            <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className='btn btn- mr-5'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
            </div>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
       
      </div>
    );
};

export default Banner;