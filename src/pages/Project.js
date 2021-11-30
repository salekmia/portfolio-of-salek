import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { SRLWrapper } from "simple-react-lightbox";
import styled from 'styled-components';
import Title from '../component/Title';
import { InnerLayout, MainLayout } from '../style/Layouts';

const Project = () => {
    const {id}  = useParams();
    const [projects, setProject] = useState([])
    useEffect(() => {
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => {
            setProject(data)
        })
    },[])
    console.log(projects)
    const project = projects.find(element => element.id === id)
    return (
        <MainLayout>
            <Title title={'Details'} span={'Details'}></Title>
            <ProjectPageStyled>
                <InnerLayout>
                    <div className="row">
                        <div className="col-md-6 left">
                            <h3>Project Screenshot</h3>
                            <SRLWrapper>
                            <div className="images row row-cols-1 row-cols-md-2 g-4">
                                <div className="image col">
                                    <img src={project?.img1} alt="project-img" />
                                </div>
                                <div className="image col">
                                    <img src={project?.img2} alt="project-img" />
                                </div>
                                <div className="image col">
                                    <img src={project?.img3} alt="project-img" />
                                </div>
                                <div className="image col">
                                    <img src={project?.img4} alt="project-img" />
                                </div>
                            </div>
                            </SRLWrapper>
                        </div>
                        <div className="col-md-6 right">
                            <h2>{project?.name}</h2>
                            <p>{project?.subtitle}</p>
                            <h3>Description:</h3>
                            <ul className="description">
                                <li>{project?.description1}</li>
                                <li>{project?.description2}</li>
                                <li>{project?.description3}</li>
                            </ul>
                            <ul className="project-link">
                                <li><a href={project?.live}>Live Site</a></li>
                                <li><a  href={project?.client}>Client Code</a></li>
                                {project?.server && <li><a href={project?.server}>Server Code</a></li>}
                            </ul>
                        </div>
                        
                    </div>
                </InnerLayout>
            </ProjectPageStyled>
        </MainLayout>
    );
};

const ProjectPageStyled = styled.div`
    .left {
        h3{
            text-align: center;
            font-size: 1.4rem;
            color: var(--white-color);
            margin-bottom: 1rem;
        }
        .images {
            width: 100%;
            .image {
                height: 250px;
                overflow: hidden;
                
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: all .5s ease-in-out;
                    border-top: 1px solid var(--border-color);
                    &:hover {
                        cursor: pointer;
                    }
                }
                &:hover{
                    img {
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
    .right {
        h2 {
            color: var(--white-color);
            font-size: 1.8rem;
        }
        p {
            font-size: .9rem;
            font-weight: 300;
        }
        h3 {
            font-size: 1.2rem;
            font-weight: 700;
        }
        .description li{
            list-style-type: disc;
        }
        .project-link {
            display: flex;
            li {
                &:nth-child(2) {
                    margin: 0 1rem;
                }
                a {
                    background-color: var(--primary-color);
                    padding: .5rem 1rem;
                    color: var(--white-color);
                    position: relative;
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
        }   
    }
    
`;

export default Project;