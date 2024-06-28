import styled from "styled-components";
import arrowNext from "../../../assets/home/trending/nextArrow.png";
import arrowPrev from "../../../assets/home/trending/prevArrow.png";

export const TrendingWrap = styled.div`
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width:350px;
  @media (min-width: 400px){
    max-width: 400px;
  }
  @media (min-width: 500px){
    max-width: 480px;
  }
  @media (min-width: 576px){
    max-width: 560px;
  }
  @media (min-width: 600px){
    max-width: 600px;
  }
  @media (min-width: 670px){
    max-width: 660px;
  }
  @media (min-width: 768px){
    max-width: 740px;
  }
  @media (min-width: 992px){
    max-width: 760px;
  }
  @media (min-width: 1200px){
    max-width: 717px;
  }
  @media (min-width: 1240px){
    max-width: 725px;
  }
  @media (min-width: 1300px){
    max-width: 750px;
  }
  @media (min-width: 1440px){
    max-width: 800px;
  }
  @media (min-width: 1600px){
    max-width: 1000px;
  }
  @media (min-width: 1700px){
    max-width: 1039px;
  }
  /* height: auto; */
  /* .sliderWrap{
    display: flex;
    justify-content: space-between;
    flex: 1;
        .slick-slide {
      padding: 0 15px;
    }
    } */
  
    .slick-slider {
    width: 100%;

    .slick-list {
      width: 100%;
    }

    .slick-track {
      display: flex;
      padding: 20px 0;
      @media (min-width: 576px) {
        margin: 0 -10px;
      }
    }

    .slick-slide {
      margin: 0 10px;
      display: flex;
      justify-content: center;
    }

    .slick-next,
    .slick-prev {
      position: absolute;
      top: -23px;
      right: ${({ $arrowsDirection }) =>
        $arrowsDirection ? $arrowsDirection : "0"};
      background: var(--primary);
      border-radius: 50px;
      background-repeat: no-repeat;
      background-position: center;
      width: 40px;
      height: 25px;
      transition: 0.4s;

      @media (min-width: 576px) {
        width: 56px;
        height: 35px;
      }
      @media (min-width: 1200px) {
        right: 0;
      }

      &::before {
        display: none;
      }
      &.slick-disabled {
        background-color: var(--gray-100);
      }
    }
    .slick-next {
      background-image: url(${arrowNext.src});
    }
    .slick-prev {
      background-image: url(${arrowPrev.src});
      right: ${({ $arrowsDirection }) =>
        $arrowsDirection ? "100px " : "50px"};
      left: auto;

      @media (min-width: 576px) {
        right: ${({ $arrowsDirection }) =>
          $arrowsDirection ? "120px " : "70px"};
      }
      @media (min-width: 1200px) {
        right: 70px;
      }
    }
  }
    .card {
    
    width: 300px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 0 10px;
    @media (min-width: 1440px){
      width: 100%;
    }
    .imgHolder{
      img{
        @media (max-width:600px){
          width: 100%;
        }
        @media (min-width: 1440px){
          width: 100%;
        }
      }
    }
    h6 {
      margin: 0;
    }
    
    .textHolder{
        padding: 20px;
    }
    .logoWrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px 20px;
      .logo{
        display: flex;
        gap: 10px;
      }
    }
  }
`;
