import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [menu, setMenu] = useState(false);
    const [barStatus, setBarStatus] = useState(true);
    const [show, setShow] = useState(false);
    const [burgerstatus, setBurgerStatus] = useState(true)
  return (
    <Container>
        <Logo src='/images/logo.svg'/>
        {menu} ? 
        (
            <NavMenu menu={menu}>
            <a href='/'>
                <img src='/images/home-icon.svg' alt='home'/>
                <span>home</span>
            </a>
            <a href='/'>
                <img src='/images/search-icon.svg' alt='home'/>
                <span>search</span>
            </a><a href='/'>
                <img src='/images/original-icon.svg' alt='home'/>
                <span>original</span>
            </a><a href='/'>
                <img src='/images/movie-icon.svg' alt='home'/>
                <span>movies</span>
            </a>
            <a href='/'>
                <img src='/images/series-icon.svg' alt='home'/>
                <span>series</span>
            </a>
            <a href='/'>
                <img src='/images/watchlist-icon.svg' alt='home'/>
                <span>watchlist</span>
            </a>
        </NavMenu>
        ) :
        {burgerstatus ? (
        <CustomMenuIcon barStatus={barStatus} onClick={() =>setBurgerStatus(false)}>
            <MenuIcon color='info'/>
        </CustomMenuIcon>
        ): 
        (
        <CustomCloseIcon barStatus={barStatus} onClick={() =>setBurgerStatus(true)} >
        <CloseIcon color='info'/>
        </CustomCloseIcon>
    
        )
        }

        <CustomAvatar menu={menu} >
            <Avatar/>
        </CustomAvatar>   

        <BurgerNav barStatus={barStatus}  show={burgerstatus}>
          <CustomProfile>
              <Avatar/>
              <p>Account</p>
          </CustomProfile>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Search</a></li>
          <li><a href='/'>Original</a></li>
          <li><a href='/'>Movies</a></li>
          <li><a href='/'>Series</a></li>
          <li><a href='/'>WatchList</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    justify-content: space-between;
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 50px;
    opacity: 0.97;
`
const Logo = styled.img`
    width: 80px;
    cursor: pointer;
`
const NavMenu = styled.div<{menu: boolean}>`
    display: flex;
    flex: 1;
    margin-left: 50px;
    @media (max-width: 995px) {
        display: ${props => props.menu ? 'flex': 'none'};
    }
    a {
        display: flex;
        align-items: center;
        padding: 0 20px;

        img {
            height: 20px;
        }

        span {
            font-size: 14px;
            letter-spacing: 1.5px;
            position: relative;
            text-transform: capitalize;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                position: absolute;
                background: whitesmoke;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms ease-in; 

            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const CustomAvatar = styled.div<{menu: boolean}>`
    @media (max-width: 995px) {
        display: ${props => props.menu ? 'flex': 'none'};
    }
`
const CustomMenuIcon = styled.div<{barStatus: boolean}>`
    cursor: pointer;
    @media (min-width: 995px) {
        display: ${props => props.barStatus ? 'none': 'flex'};
    }
    
`
const CustomCloseIcon = styled.div<{barStatus: boolean}>`
    cursor: pointer;
    @media (min-width: 995px) {
        display: ${props => props.barStatus ? 'none': 'flex'};
    }
`
const CustomProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    cursor: pointer;

    p {
        padding: 5px 10px;
        border-bottom: 1px solid;
    }

    &:hover {
        p {
            font-weight: 500;
        }
      }  
`

const BurgerNav = styled.div<{show: boolean, barStatus: boolean}>`
    position: fixed;
    top: 0;
    bottom: 0;
    right: -85px;
    background-color: #090b13;
    width: 397px;
    list-style: none;
    padding: 20px;
    opacity: 0.97;
    margin-top: 71px;
    border-radius: 20px;
    transform: ${props => props.show ? 'translateX(100%)' : 'translateX(0)'};
    transition: transform 0.2s ease-in;
    @media (min-width: 995px) {
        display: ${props => props.barStatus ? 'none': 'flex'};
    }

    li {
      margin: 10px;
      padding: 10px;
      cursor: pointer;
      font-weight: 300;
      position: relative;

      &:after {
                content: "";
                height: 1px;
                position: absolute;
                background: whitesmoke;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0.2;

        }
    }

    a {
        color: whitesmoke;

    }

    p {
        color: whitesmoke;
        font-weight: 100;
    }

    &:hover {
        li {
            font-weight: 200;
        }
      }  
`