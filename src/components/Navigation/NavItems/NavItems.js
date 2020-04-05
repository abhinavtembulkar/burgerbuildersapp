import React from 'react'
import classes from './NavItems.css'
import NavItem from '../NavItems/NavItem/NavItem'

const NavItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/" active={true}>BUILDER</NavItem>
        <NavItem link='/'>Checkout</NavItem>
    </ul>
)

export default NavItems