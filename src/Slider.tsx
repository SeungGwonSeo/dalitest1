import React, { useEffect, useRef, useState } from 'react';
import Slide from './Slide';
import { FaAngleLeft , FaAngleRight} from 'react-icons/fa';

const TOTAL_SLIDES = 2; // 전체 슬라이드 개수(총3개. 배열로 계산)

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const [isMobile, setisMobile] = useState(false);

  // 리사이즈 이벤트를 감지하여 가로 길이에 따라 모바일 여부 결정
  const resizingHandler = () => {
    if (window.innerWidth <= 720) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 720) {
      setisMobile(true);
    }
    
    window.addEventListener("resize", resizingHandler);
    return () => {
      // 메모리 누수를 줄이기 위한 removeEvent
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);

  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <div className='Container'>
      <div className='Text'>
        <h1>With <span className='purple'>withyou company</span> </h1>
        <h1>Will be better.</h1>
        {/* <p className='TextP'>{currentSlide + 1}번 째 사진</p> */}
      </div>
      
      <div className='Center'>
        <FaAngleLeft onClick={PrevSlide} className='Button' size='24'  style={(!isMobile) ? {fill: 'black'} : {fill : 'white'}} />
        <FaAngleRight onClick={NextSlide} className='Button' size='24' style={(!isMobile) ? {fill: 'black'} : {fill : 'white'}} />
      </div>
      <div className='BackGround'>
        <div className='BackInner'>
            <div className='BackInnerText'>
                <h3>위드유 컴퍼니만의</h3>
                <h3>독보적인 마케팅 전략</h3>
                <h6>AD Service</h6>
            </div>
            <div className='SliderContainer2'>
                <div className='SliderContainer' ref={slideRef}>
                    <Slide item='첫 번째 슬라이드' />
                    <Slide item='두 번째 슬라이드' />
                    <Slide item='세 번째 슬라이드' />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
