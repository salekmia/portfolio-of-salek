import emailjs from 'emailjs-com';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import ContactItem from '../component/ContactItem';
import Title from '../component/Title';
import { InnerLayout, MainLayout } from '../style/Layouts';

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_b81x63l', 'template_tdhzzrm', e.target, 'user_QwWlFLPLtdbBenGDfLbaC')
        .then(res => {
            if(res.status === 200) {
                toast.success('Your email send successfully', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        })
        .catch(err => {
            console.log(err)
        })
        e.target.reset()
    }
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'}></Title>
            <ContactPageStyled>
            <InnerLayout className="contact-section row row-cols-1 row-cols-md-2 g-4">
                <div className="left-content col">
                    <div className="contact-title">
                        <h2>Get In Touch</h2>
                    </div>
                    <form onSubmit={sendEmail} className="form"> 
                        <div className="form-field">
                            <label htmlFor="name">Enter Your Name*</label>
                            <input required type="text" id="name" name="name" />
                        </div>
                        
                        <div className="form-field">
                            <label htmlFor="email">Enter Your Email*</label>
                            <input required type="email" id="email" name="email" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="subject">Enter Your Subject*</label>
                            <input required type="text" id="subject" name="subject" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="message">Enter your message*</label>
                            <textarea required id="message" name="message" cols="30" rows="5"></textarea>
                        </div>
                        {/* <input type="submit" value="Submit" /> */}
                        <button className="custom-btn" type="submit">Send Email</button>
                        
                    </form>
                </div>
                <div className="right-content col">
                    <ContactItem 
                        icon={<i className="fas fa-phone"></i>}
                        title={'Phone'}
                        contact1={'01759611778'}
                        contact2={'01859650251'}
                    ></ContactItem>
                    <ContactItem 
                        icon={<i className="fas fa-envelope"></i>}
                        title={'Email'}
                        contact1={'mdsalekmia2003@gmail.com'}
                        contact2={'bhairabbari330@gmail.com'}
                    ></ContactItem>
                    <ContactItem 
                        icon={<i className="fas fa-map-marker-alt"></i>}
                        title={'Location'}
                        contact1={'Bhairab, Dhaka'}
                        contact2={'Bangladesh'}
                    ></ContactItem>
                </div>
            </InnerLayout>
            </ContactPageStyled>
            <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        </MainLayout>
    );
};

const ContactPageStyled = styled.section`
    .contact-section {
        display: flex;
        align-items: center;
        .contact-title h4 {
            color: var(--font-light-color)
        }
        .right-content {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
        .form {
            width: 100%;
            .form-field {
                margin-top: 2rem;
                position: relative;
                label {
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    color: inherit;
                    padding: 0 .5rem;
                    font-size: .95rem;
                }
                input {
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: .8rem 15px;
                    width: 100%;
                    color: inherit;
                    &:focus {
                        background-color: transparent;
                    }
                }
                textarea {
                    background-color: transparent;
                    outline: none;
                    color: inherit;
                    border: 1px solid var(--border-color);
                    padding: .8rem 15px;
                    width: 100%;
                }
            }
            .custom-btn {
                background-color: var(--primary-color);
                color: white;
                padding: 1rem 2.5rem;
                display: inline-block;
                text-transform: uppercase;
                font-size: inherit;
                position: relative;
                cursor: pointer;
                transition: all .4s ease;
                border: 0;
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
            }
        }
    }
`;

export default Contact;



// <i className="fas fa-phone"></i>
// <i className="fas fa-envelope"></i>
// <i className="fas fa-map-marker-alt"></i>