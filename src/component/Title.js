import React from 'react';
import styled from 'styled-components';

const Title = ({title, span}) => {
    return (
        <TitleStyled>
            <h2>{title} <b><span>{span}</span></b></h2>
        </TitleStyled>
    );
};

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 3rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .2rem;
        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            width: 7rem;
            height: .31rem;
            background-color: var(--background-light-color-2);
            left: 0;
        }
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            width: 2rem;
            height: .31rem;
            background-color: var(--primary-color);
            left: 0;
        }
        
        span{
            color: rgba(25, 29, 43, .44);
            font-size: 5rem;
            font-weight: 600;
            text-transform: uppercase;
            position: absolute;
            left: 0;
            top: 20%;
            z-index: -1;
        }
    }
`;

export default Title;