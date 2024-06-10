import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider1 from '../../assets/IMG1.jpg'
import Slider2 from '../../assets/IMG2.jpg'
import './Slider.css'

const Slider = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className='my-5 rounded-3'
            >
              <SwiperSlide className='abc'>
                <div className="slide-content">
                  <img src={Slider1} className='img-fluid rounded-3 slider-img' alt="" />
                  <div className="card-img-overlay mx-5 w-25 ">
                    <div className=" ">
                      <h1 className='fw-bold'>SuperMarket For  Fresh Grocery</h1>
                      <p className='fw-semibold text-secondary'> Introduced a new model for online grocery shopping  and  convenient home delivery.</p>
                      <button className='btn btn-dark fw-semibold'>Shop Now</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='abc'>
                <div className="slide-content">
                  <img src={Slider2} className='img-fluid rounded-3 slider-img' alt="" />
                  <div className="card-img-overlay mx-5 w-25 ">
                    <div className="">
                      <h1 className='fw-bold'>Free Shipping on  order over <span style={{ color: '#0cac0c' }}>$100</span></h1>
                      <p className='fw-semibold text-secondary'> Free Shipping to First-Time Customers Only,  After promotions and discounts are applied.</p>
                      <button className='btn btn-dark fw-semibold'>Shop Now</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
