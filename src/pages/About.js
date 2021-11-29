import React from 'react';
import styled from 'styled-components';
import ImageSection from '../component/ImageSection';
import MySkills from '../component/MySkills';
import Title from '../component/Title';
import { MainLayout } from '../style/Layouts';


const About = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
            </AboutStyled>
            <ImageSection></ImageSection>
            <MySkills></MySkills>
        </MainLayout>
    );
};

const AboutStyled = styled.section`
    
`;
export default About;