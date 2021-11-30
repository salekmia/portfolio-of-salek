import React from 'react';
import styled from 'styled-components';


const ContactItem = ({icon, title, contact1, contact2}) => {
    return (
        <ContactItemStyled>
            <div className="contact">
            <div className="left-content">
                    {icon}
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact1}</p>
                <p>{contact2}</p>
            </div>
            </div>
        </ContactItemStyled>
    );
};

const ContactItemStyled = styled.div`
    .contact {
       padding: 1rem 2rem;
        background-color: var(--background-dark-color-2);
        display: flex;
    }
    
    &:not(:last-child) {
        margin-bottom: 2rem;
    }
    .left-content {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        i {
            padding: 1.5rem;
            font-size: 2.3rem;
            border: 1px solid var(--border-color);
        }
    }
    @media only screen and (max-width: 600px) {
        .contact {
            padding: .5rem 1rem;
            flex-direction: column;
        }
        .left-content {
            margin-right: 0;
            justify-content: left;
            margin-bottom: 1.5rem;
        }
    }
    .right-content {
        h6 {
            color: var(--white-color);
            font-size: 1.2rem;
        }
    }
`;

export default ContactItem;