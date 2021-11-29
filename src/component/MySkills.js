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
                <Title title={'My Skills'} span={'My Skills'}></Title>
                <div className="services row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    <div className="col">
                    <ServiceCard
                    icon={'fab fa-html5'}
                    title={'HTML'} 
                    percentage={'95'}
                    ></ServiceCard>
                    </div>
                    
                    <div className="col">
                    <ServiceCard 
                    icon={'fab fa-css3-alt'}
                    title={'CSS'} 
                    percentage={'90'}
                    ></ServiceCard>
                    </div>

                    <div className="col">
                    <ServiceCard 
                    icon={'fab fa-js-square'}
                    title={'Javascript'} 
                    percentage={'70'}
                    ></ServiceCard>
                    </div>

                    <div className="col">
                    <ServiceCard 
                    icon={'fab fa-react'}
                    title={'React'} 
                    percentage={'90'}
                    ></ServiceCard>
                    </div>

                    <div className="col">
                    <ServiceCard 
                    icon={'fab fa-bootstrap'}
                    title={'Bootstrap'} 
                    percentage={'98'}
                    ></ServiceCard>
                    </div>

                    <div className="col">
                    <ServiceCard 
                    icon={'fab fa-node'}
                    title={'Node'} 
                    percentage={'50'}
                    ></ServiceCard>
                    </div>

                    <div className="col">
                    <ServiceCard 
                    icon={'fas fa-code-branch'}
                    title={'Github'} 
                    percentage={'70'}
                    ></ServiceCard>
                    </div>

                    <div className="col">
                    <ServiceCard 
                    icon={'fas fa-fire'}
                    title={'Firebase'} 
                    percentage={'75'}
                    ></ServiceCard>
                    </div>
                </div>
            </MySkillsSectionStyled>
        </InnerLayout>
    );
};

const MySkillsSectionStyled = styled.section`
    .services {
        margin-top: 5rem;
    }
`;

export default MySkills;