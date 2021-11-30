import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import travel from '../../src/images/project2/travel.png';
import hospital from '../../src/images/project3/hospital.png';
import Title from '../component/Title';
import { InnerLayout, MainLayout } from '../style/Layouts';

const Projects = () => {
    return (
        <MainLayout>
            <Title title={'Projects'} span={'Projects'}></Title>
            <ProjectsPageStyled>
                <InnerLayout>
                <div className="all-items">
                    
                   <div>
                   <div className="items">
                        <div className="left">
                            <img src="https://i.ibb.co/mCr5FD4/Ladies.png" alt="project one" />
                        </div>
                        <div className="right">
                            <h2 className="project-title">Ladies Shoe</h2>
                            <h6 className="sub-title">Niche product website.</h6>
                            <p className="project-doc">If users login then they can go to the dashboard and manage some tasks. Like he can see my orders, pay, add a review. Reviews are dynamic.</p>
                            <Link to={`projects/${1}`} className="custom-btn btn-one">Show Details <i className="fas fa-external-link-alt"></i></Link>
                        </div>
                    </div>

                    <div className="items">
                        <div className="left">
                            <img src={travel} alt="project one" />
                        </div>
                        <div className="right">
                            <h2 className="project-title">World Travel</h2>
                            <h6 className="sub-title">Tourism related website</h6>
                            <p className="project-doc">This is a good looking and responsive website. On this website there are many services for patients. Users can register with an email-password or login with google or github.</p>
                            <Link to={`projects/${2}`} className="custom-btn btn-one">Show Details <i className="fas fa-external-link-alt"></i></Link>
                        </div>
                    </div>

                    <div className="items">
                        <div className="left">
                            <img src={hospital} alt="project one" />
                        </div>
                        <div className="right">
                            <h2 className="project-title">General Hospital</h2>
                            <h6 className="sub-title">Health realated website</h6>
                            <p className="project-doc">If users login then they can go to the dashboard and manage some tasks. Like he can see my orders, pay, add a review. Reviews are dynamic. After reviewing, the reviews will be added to the review section of the home page</p>
                            <Link to={`projects/${3}`} className="custom-btn">Show Details <i className="fas fa-external-link-alt"></i></Link>
                        </div>
                    </div>
                   </div>
                </div>
            </InnerLayout>
            </ProjectsPageStyled>
        </MainLayout>
    );
};

const ProjectsPageStyled = styled.div`
    .all-items {
        display: flex;
        justify-content: center;
        align-items: center;
        .items {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 5rem;
            max-width: 800px;
            .left {
                width: 100%;
                flex: 1;
                overflow: hidden;
                border-radius: 12px;
                img {
                    width: 100%;
                    height: 500px;
                    overflow: hidden;
                    border-radius: 12px;
                    box-shadow: 0 0 20px #007bff28;
                    object-fit: cover;
                    position: relative;
                    transition: all .5s ease-in-out;
                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #5a24ed38;
                    }
                }
            }
            .right {
                flex: 1;
                margin-left: -150px;
                background-color: var(--background-dark-color-2);
                padding: 2rem 1rem;
                border-radius: 12px;
                box-shadow: 0 0 20px #ffffff28;
                z-index: 2;
                .project-title {
                    color: var(--white-color);
                    font-size: 1.8rem;
                }
                .sub-title {
                    font-size: .8rem;
                }
                .custom-btn {
                    background-color: var(--primary-color);
                    color: white;
                    padding: .5rem 1.5rem;
                    display: inline-block;
                    text-transform: uppercase;
                    font-size: .9rem;
                    font-weight: bold;
                    position: relative;
                    cursor: pointer;
                    transition: all .4s ease;
                    margin-top: 1rem;
                    &:hover {
                        color: white;
                    }
                    &::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: .2rem;
                    background-color: var(--white-color);
                    left: 0;
                    bottom: 0;
                    transition: all .4s ease-in-out;
                    opacity: .7;
                }
                    &:hover::after {
                        width: 100%;
                    }
                }
            }
            &:nth-child(even) {
                flex-direction: row-reverse;
                .right {
                    margin-left: 0;
                    margin-right: -150px;
                }
            }
            &:hover {
                .left {
                    img {
                        transform: scale(1.2);
                    }
                }
            }
        }

    }

    @media only screen and (max-width: 768px) {
        .all-items {
            .items {
                flex-direction: column;
                .right {
                    margin-left: 0;
                    margin-top: -150px;
                    width: 80%;
                }
                &:nth-child(even) {
                    flex-direction: column;
                    .right {
                        margin-left: 0;
                        margin-right: 0;
                    }
                }
            }
        }
    }
`;

export default Projects;