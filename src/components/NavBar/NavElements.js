import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
background :#000;
height: 80px;
display: flex;
justify-content: space-between;
padding :0.5rem calc ((100vw -1000px) / 2);
z-index :10;
`
export const NavLink=styled(Link)`
color:#FE4880;
display: flex;
align-items :center;
text-decoration:none;
padding: 0 1rem;
cursor:pointer;
a {
    text-decoration:none;
}

&.active{
    color:#FE4880
}
`;

export const Bars =styled(FaBars)`
display:none;
color:#FE4880;
text-decoration:none;
@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;

}

`;


export const NavMenu = styled.div`
display: flex;
margin-right: 0px;
margin-left: -10rem;

@media screen and (max-width: 768px){
    display: none;
}


`
;
export const NavBtn = styled.nav `
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display :none;
}
`
;

export const NavBtnLink=styled(Link)`
border-radius: 4px;
background: #FE4880;
padding: 10px 22px;
color: #FFF;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 1rem;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}


`
;

 
