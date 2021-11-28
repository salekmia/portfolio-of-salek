import React from 'react';
import styled from 'styled-components';
const PrimaryButton = ({title}) => {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    );
};

const PrimaryButtonStyled = styled.a`
    background-color: var(--primary-color);
    color: white;
    padding: 1rem 2.5rem;
    display: inline-block;
    text-transform: uppercase;
    font-size: inherit;
    position: relative;
    cursor: pointer;
    transition: all .4s ease;
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
`;

export default PrimaryButton;