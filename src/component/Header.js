import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../src/images/logo.png';

const Header = () => {
    return (
        <NavStyled>
            <nav class="navbar navbar-expand-lg">
            <div class="container">
                <Link class="navbar-brand" to="/"><img src={logo} alt="Salek Mia" /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active-class">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" exact activeClassName="active-class">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume" exact activeClassName="active-class">Resume</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolios" exact activeClassName="active-class">Portfolios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" exact activeClassName="active-class">Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" exact activeClassName="active-class">Contact</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </NavStyled>
    );
};

const NavStyled = styled.nav`
    background-color: var(--background-dark-color);
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    z-index: 3;
    top: 0;
    .navbar-toggler-icon {
        color: var(--font-light-color);
    }
    
    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 2px solid var(--border-color);
    }
    
    .nav-items {
        .active-class{
            background-color: var(--primary-color);
        }
        li {
            a {
                padding: .5rem 1.2rem;
                position: relative;
                text-transform: uppercase;
                &:hover {
                    cursor: pointer;
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 100%;
                    background-color: var(--primary-color);
                    transition: all .3s cubic-bezier(1,-0.2,.25,.95);
                    opacity: 0.21;
                    color: var(--white-color)
                }
                &:hover::before {
                    width: 100%;
                }
            }
        }
    }

    footer {
        width: 100%;
        text-align: center;
        border-top: 2px solid var(--border-color);
        padding: 1rem 0;
        p {
            font-size: .8rem;
        }
    }

`;

export default Header;