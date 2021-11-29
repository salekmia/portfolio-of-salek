import React from 'react';
import styled from 'styled-components';
// import service1 from '../images/img1.jpg';
// import service2 from '../images/img2.jpg';
// import service3 from '../images/img3.jpg';
import { InnerLayout } from '../style/Layouts';
import ServiceCard from './ServiceCard';
import Title from './Title';
const MySkills = () => {
    return (
        <InnerLayout>
            <MySkillsSectionStyled>
                <Title title={'Services'} span={'Services'}></Title>
                <div className="services">
                    <ServiceCard 
                    // image={service1} 
                    title={'Service One'} 
                    paragraph={'This is service one.This is service one.This is service one.This is service one.'}
                    ></ServiceCard>

                    <div className="mid-card">
                    <ServiceCard 
                    // image={service2} 
                    title={'Service Two'} 
                    paragraph={'This is service Two.This is service Two.This is service Two.This is service Two.'}
                    ></ServiceCard>
                    </div>

                    <ServiceCard 
                    // image={service3} 
                    title={'Service Three'} 
                    paragraph={'This is service Three.This is service Three.This is service Three.This is service Three.'}
                    ></ServiceCard>
                </div>
            </MySkillsSectionStyled>
        </InnerLayout>
    );
};

const MySkillsSectionStyled = styled.section`
    .services {
        margin-top: 5rem;
        display: flex;
        justify-content: space-evenly;
        .mid-card {
            margin: 0 1.2rem;
        }
    }
`;

export default MySkills;