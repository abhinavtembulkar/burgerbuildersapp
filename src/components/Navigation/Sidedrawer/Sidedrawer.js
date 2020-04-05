import React from 'react'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import classes from './Sidedrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxi from '../../../hoc/Auxi/Auxi'

const Sidedrawer = (props) => {
    let allClasses = [classes.SideDrawer,classes.Close]
    if(props.show){
        allClasses = [classes.SideDrawer,classes.Open]
    }

    return (
        <Auxi>
        <Backdrop show={props.show} clicked={props.closed}/>
        <div className={allClasses.join(' ')}>
            <Logo height="11%"/>
            <nav>
                <NavItems />
            </nav>
        </div>
        </Auxi>
    )
}

export default Sidedrawer