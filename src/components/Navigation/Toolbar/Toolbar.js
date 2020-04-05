import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.toggleClicked}/>
        <Logo height="100%"/>
        <nav>
            <NavItems />
        </nav>
    </header>
)

export default Toolbar