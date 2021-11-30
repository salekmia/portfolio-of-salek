import React from 'react';
import styled from 'styled-components';
import about from '../images/about.png';
import docs from '../images/Resume of Md Salek Mia.pdf';
import PrimaryButton from './PrimaryButton';
const ImageSection = () => {
    return (
        <ImageSectionStyled className="row d-flex align-items-center">
            <div className="left-content col-md-4">
                <img src={about} alt="avatar" />
            </div>
            <div className="right-content col-md-8">
                    <h2>I am <span>Salek Mia</span></h2>
                <div className="paragraph">
                    <p>Hi! I am a frontend (React) web developer. I love programming. I am deeply interested in JavaScript and doing google searches is my hobby. I have fun learning new things.</p> 
                    <p>However, I am more interested in web development. So I want to stick to it, I want to work.</p>
                </div>
                {/* <div className="about-info">
                    <div className="">
                        <p className="info"><span className="info-title">Full Name</span>  : Mohammad Salek Mia</p>
                        <p className="info"><span className="info-title">Age</span>  : 18.7 years</p>
                        <p className="info"><span className="info-title">Nationality</span>  : Bangladeshi</p>
                        <p className="info"><span className="info-title">Languages</span>  : Bangla, English</p>
                        <p className="info"><span className="info-title">Location</span>  : Bhairab, Dhaka, Banladesh</p>
                        <p className="info"><span className="info-title">Service</span>  : Web Development</p>
                    </div>
                </div> */}
                <table className="about-info">
                    <tr className="info">
                        <td className="info-title">Full Name</td>
                        <td>: Mohammad Salek Mia</td>
                    </tr>
                    <tr className="info">
                        <td className="info-title">Age</td>
                        <td>: 18.7 years</td>
                    </tr>
                    <tr className="info">
                        <td className="info-title">Nationality</td>
                        <td>: Bangladeshi</td>
                    </tr>
                    <tr className="info">
                        <td className="info-title">Languages</td>
                        <td>: Bangla, English</td>
                    </tr>
                    <tr className="info">
                        <td className="info-title">Location</td>
                        <td>: Bhairab, Dhaka, Banladesh</td>
                    </tr>
                    <tr className="info">
                        <td className="info-title">Service</td>
                        <td>: Web Development</td>
                    </tr>
                </table>
                <a download="md-salek-mia" href={docs}><PrimaryButton Download title={'Download CV'} href={docs}></PrimaryButton></a>
                
                
            </div>
        </ImageSectionStyled>
    );
};

const ImageSectionStyled = styled.div`
    width: 100%;
    margin-top: 5rem;
    .left-content {
        img {
            width: 100%;
            object-fit: cover;
            border-radius: 3px;
        }
    }
    .right-content {
        h2 {
            font-size: 2rem;
            color: var(--white-color);
            span {
                font-size: 2rem;
            }
        }
        .paragraph {
            padding: 1rem 0;
        }
        .about-info {
            width: 100%;
            margin-bottom: 1.4rem;
            .info-title {
                font-weight: 600;
            }
            .info td{
                padding: .5rem 0;
            }
        }
    }
`;

export default ImageSection;