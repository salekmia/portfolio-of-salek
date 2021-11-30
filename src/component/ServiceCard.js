import React from 'react';
import styled from 'styled-components';
const ServiceCard = ({icon, title, percentage}) => {
    return (
        <ServiceCardStyled>
            <div className="container">
                <span><i className={icon}></i></span>
                <br />
                <h5>{title}</h5>
                <h3>{percentage}<span>%</span></h3>
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
        h5 {
            text-align: left;
            font-size: 1.4rem;
            color: var(--white-color);
            margin: .2rem 0;
            padding: .2rem 0;
            position: relative;
            display: inline-block;
            &::after{
                content: '';
                position: absolute;
                width: 0;
                height: 3px;
                background-color: var(--border-color);
                left: 0;
                bottom: 0;
                border-radius: 10px;
                transition: all .3s ease-in-out;
            }

        }
        h3 {
            text-align: center;
            font-size: 2.5rem;
        }
        h3 span {
            font-size: 1.5rem;
        }
    }
    &:hover h5::after {
        width: 100%;
    }

    i {
        font-size: 3rem;
    }
`;

export default ServiceCard;