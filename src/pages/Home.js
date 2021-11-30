import React from 'react';
import Typical from 'react-typical';
import styled from 'styled-components';
import docs from '../../src/images/Resume of Md Salek Mia.pdf';
import MyParticle from '../component/MyParticle';
import PrimaryButton from '../component/PrimaryButton';
const Home = () => {
    return (
        <HomeStyled>
            <div className="home-container">
            <div className="lines">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
                <div className="line-4"></div>
            </div>
            <div className="particle-con my-particles-js">
                <MyParticle></MyParticle>
            </div>
            <div className="typography mx-0 mx-md-4">
                <div>
                <h1>Hi! I'm Salek Mia</h1> 
                <h2>I'm a<span><Typical
        steps={['Frontend Web Developer.', 1500, 'React Developer', 1000]}
        loop={Infinity}
        wrapper="p"
      /></span></h2>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/salekalways/" target="_blank" className="icon i-linkedin" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/salekmia" target="_blank" className="icon i-github" rel="noreferrer">
                        <i className="fab fa-github-square"></i>
                    </a>
                    <a href="https://www.facebook.com/salekalways" target="_blank" className="icon i-facebook" rel="noreferrer">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                </div>
                <a download="Resume of Md Salek Mia" href={docs} className="resume-btn"><PrimaryButton Download title={'Download Resume'} href={docs}></PrimaryButton></a>
                </div>
            </div>
            </div>
        </HomeStyled>
    );
};

const HomeStyled = styled.header`
    min-height: 100vh;
    .home-container {
        position: relative;
        height: auto;
    }
    .lines {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        .line-1, .line-2, .line-3, .line-4 {
        width: 1px;
        height: 100%;
        background-color: var(--border-color);
        }
    }
    .my-particles-js {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .typography {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
        text-align: center;
        h2 {
            font-size: 1.6rem;
            span {
                font-size: 1.6rem;
                color: var(--primary-color);
            }
        }
        .resume-btn {
            margin: 1rem 0;
            display: inline-block;
        }
    }
    .icons {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid var(--border-color);
            border-radius: 50%;
            padding: .7rem;
            transition: all .3s ease;
            &:not(:last-child) {
                margin-right: 1rem;
            }
            &:hover {
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
                cursor: pointer;
            }
            svg{
                margin: .5rem;
            }
        }
        .i-linkedin {
            &:hover{
                border: 2px solid #0e76a8;
                color: #0e76a8;
            }
        }
        .i-github {
            &:hover{
                border: 2px solid #5f4687;
                color: #5f4687;
            }
        }
    }
`;

export default Home;