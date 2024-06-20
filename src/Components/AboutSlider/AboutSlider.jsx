import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider1 from '../../assets/team-1.png'
import Slider2 from '../../assets/team-2.png'
import Slider3 from '../../assets/team-3.png'
import Slider4 from '../../assets/team-4.png'
import Slider5 from '../../assets/team-5.png'

const Slider = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5 px-5">
            <h3 className='fw-bold px-5 ms-5' >Our Leadership</h3>
          <div className="col-12">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
            //   pagination={{ clickable: true }}
              autoplay={{ delay: 9000, disableOnInteraction: false }}
              loop={true}
              className='my-4 rounded-3'
              
            >
               <SwiperSlide className='rounded-4' style={{ backgroundColor: '#eff3f2', border: 'none' }}>
                <div className="slide-content   pt-4 px-4">
                    <h6 className="fw-bold" >Martha White</h6>
                    <p className="fw-semibold text-secondary" >Chief Technology Officer</p>
                  <img src={Slider1} className='img-fluid mt-3  slider-img h-100'  alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className='rounded-4' style={{ backgroundColor: '#eff3f2', border: 'none' }}>
                <div className="slide-content   pt-4 px-4">
                    <h6 className="fw-bold" >Martha White</h6>
                    <p className="fw-semibold text-secondary" >Chief Technology Officer</p>
                  <img src={Slider2} className='img-fluid mt-3  slider-img h-100'  alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className='rounded-4' style={{ backgroundColor: '#eff3f2', border: 'none' }}>
                <div className="slide-content   pt-4 px-4">
                    <h6 className="fw-bold" >Martha White</h6>
                    <p className="fw-semibold text-secondary" >Chief Technology Officer</p>
                  <img src={Slider3} className='img-fluid mt-3  slider-img h-100'  alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className='rounded-4' style={{ backgroundColor: '#eff3f2', border: 'none' }}>
                <div className="slide-content   pt-4 px-4">
                    <h6 className="fw-bold" >Martha White</h6>
                    <p className="fw-semibold text-secondary" >Chief Technology Officer</p>
                  <img src={Slider4} className='img-fluid mt-3  slider-img h-100'  alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className='rounded-4' style={{ backgroundColor: '#eff3f2', border: 'none' }}>
                <div className="slide-content   pt-4 px-4">
                    <h6 className="fw-bold" >Martha White</h6>
                    <p className="fw-semibold text-secondary" >Chief Technology Officer</p>
                  <img src={Slider5} className='img-fluid mt-3  slider-img h-100'  alt="" />
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
