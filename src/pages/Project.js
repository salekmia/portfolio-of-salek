import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
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
                            <div className="images">
                                <div className="image">
                                    <img src={project?.img1} alt="project-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <h2>{project?.name}</h2>
                            <p>{project?.subtitle}</p>
                            <h3>Description:</h3>
                            <ul>
                                <li>{project?.description1}</li>
                                <li>{project?.description2}</li>
                                <li>{project?.description3}</li>
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
        .images {
            width: 100%;
            .image {
                width: 100%;
                img {
                    width: 100%;
                }
            }
        }
    }
    .right {
        ul li{
            list-style-type: disc;
        }   
    }
    
`;

export default Project;