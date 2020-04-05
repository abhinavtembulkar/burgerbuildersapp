import React,{Component} from 'react'
import Auxi from '../Auxi/Auxi'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component{

    state = {
        showSideDrawer : false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer : false})
    }

    toggleHandler = () => {
        console.log('HI')
        this.setState((prevState)=>{
            return {showSideDrawer : !prevState.showSideDrawer}
        })
    }

    render(){
        return(
        <Auxi>
            <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <Toolbar toggleClicked={this.toggleHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auxi>)
    }
}

export default Layout