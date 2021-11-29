import React from 'react';
import styled from 'styled-components';
const ServiceCard = ({image, title, paragraph}) => {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img src={image} alt="serviceImage" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    );
};

const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-color-2);
    border-left: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all .5s ease;
    &:hover {
        border-top: 8px solid var(--primary-color);
        transform: translateY(-5px);
    }
    .container {
        text-align: center;
        padding: 1.2rem;
        h4 {
            text-align: left;
            font-size: 1.4rem;
            color: var(--white-color);
            margin: .5rem 0;
            padding: .5rem 0;
            position: relative;
            &::after{
                content: '';
                position: absolute;
                width: 4rem;
                height: 3px;
                background-color: var(--border-color);
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }
        p {
            text-align: left;
            padding: .8rem 0;
        }
    }
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
`;

export default ServiceCard;