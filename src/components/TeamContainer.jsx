import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './team.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../assets/Google_2015_logosvg.png';
import slide_image_2 from '../assets/Annotation 2023-05-27 194945.png';
import slide_image_3 from '../assets/LVM-mitarbeiter2-ohne-hintergrund.png';
import slide_image_4 from '../assets/Referenz_1.png';
import slide_image_5 from '../assets/SSL-certificate-image.png';
import slide_image_6 from '../assets/LVM_HB_Team_2023_v5.jpg';
import slide_image_7 from '../assets/novabit-black.png';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

function App() {
  return (
    <div className="container">
      <h3 style={{textAlign:'center'}}  id='team'>Das sind wir</h3>
      <h4 style={{textAlign:'center'}}>Unser #Team</h4>
      <Swiper
        // effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'4'}
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 2.5,
        // }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide >
          <div style={{height:'300px', width:'200px', backgroundColor:'green'}}>
sdasdsa
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height:'300px', width:'200px', backgroundColor:'green'}}>
sdasdsa
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height:'300px', width:'200px', backgroundColor:'green'}}>
sdasdsa
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height:'300px', width:'200px', backgroundColor:'green'}}>
sdasdsa
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height:'300px', width:'200px', backgroundColor:'green'}}>
sdasdsa
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height:'300px', width:'200px', backgroundColor:'green'}}>
sdasdsa
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
           <ArrowBack />
          </div>
          <div className="swiper-button-next slider-arrow">
           <ArrowForward />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;