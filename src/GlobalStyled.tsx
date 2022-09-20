import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    // css 초기값 정의
    ${reset};

    // 따로 스타일링
    a{
        text-decoration:none;
        color:inherit;
    }

    body {
        font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', sans-serif;
    }

    *{
        box-sizing:border-box;
    }

    .slider-item {
        width : 100%;
        display : flex;
        justify-content: center;
        align-items : center;
        height : 100%;
    }

    .Container {
        width: 100%;
        margin: 120px auto 120px;
        
    }

    .Button {
        all: unset;
        padding: 1em 2em;
        cursor: pointer;
    }

    .SliderContainer {
        margin: 0 auto;
        margin-bottom: 2em;
        
        display: -webkit-box; 
        height : 100%
        
    }

    .SliderContainer2 {
        margin: 0 auto;
        overflow: hidden; 
        width : 630px;
        height : 450px;
        background : #FFE600;
        position : relative; 
        left : 300px;
        top : -270px;
    }

    .Center {
        text-align: right;
        width : 1280px;
        margin : auto;
    }

    .Text {
        width : 1280px;
        color: #000;
        margin : auto;
        font-size : 48px;
        font-weight : 700;
        line-height : 64px;
    }

    .Text span {
        color : #9573FF;
    }

    .TextP {
        color: #fff;
        font-size: 20px;
        background-color: burlywood;
        display: inline-block;
        padding: 0.5em 1em;
    }

    .BackGround {
        background-color: #9573FF;
        height : 495px;
        margin-top : 100px;
        
    }
    .BackGround h3 {
        color :#fff;
        font-size : 40px;
        line-height : 56px;
    }

    .BackGround h6 {
        color :#fff;
        font-size : 18px;
        line-height : 26px;
    }

    .BackInner {
        width : 1280px;
        margin : auto;
    }

    .BackInnerText {
        padding-top : 120px;
    }


    @media screen and (max-width: 720px) {
        .Text {
            width : 93%;
            color: #000;
            margin : auto;
            font-size : 30px;
            font-weight : 700;
            line-height : 38px;
        }

        .BackInner {
            width : 100%;
            margin : auto;
        }

        .SliderContainer2 {
            margin: 0 auto;
            overflow: hidden; 
            width : 70%;
            height : 200px;
            background : #FFE600;
            position : relative; 
            left : 7%;
            top : 40px;
        }

        .Center {
            text-align: right;
            width : 93%;
            margin : auto;
            position : relative;
            top : 215px;
        }

        .BackGround {
            background-color: #9573FF;
            height : 230px;
            margin-top : 50px;
            
        }

        .BackInnerText {
            padding-top : 48px;
            padding-left : 10px;
        }

        .BackGround h3 {
            color :#fff;
            font-size : 28px;
            line-height : 35px;
        }
    
        .BackGround h6 {
            color :#fff;
            font-size : 17px;
            line-height : 20px;
        }

        .Container {
            width: 100%;
            margin: 50px auto 300px;
            
        }
    }

`;

export default GlobalStyles;