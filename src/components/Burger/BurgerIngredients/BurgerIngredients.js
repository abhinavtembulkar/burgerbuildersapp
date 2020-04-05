import React, { Component } from 'react'
import classes from './BurgerIngredients.css'
import propTypes from 'prop-types'

class BurgerIngrds extends Component{
    
    render(){
    let ingredient = null

    switch(this.props.type){
        case('bread-bottom') :
            ingredient = <div className={classes.BreadBottom} onMouseOver={()=>{console.log('HOVER')}}/>
            break
        case('bread-top') :
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
                )
            break
        case('meat') : 
            ingredient = <div className={classes.Meat} />
            break

        case('cheese') : 
        ingredient = <div className={classes.Cheese} />
        break
    
        case('bacon') : 
        ingredient = <div className={classes.Bacon} />
        break
    
        case('salad') : 
        ingredient = <div className={classes.Salad} />
        break
    
        default :
        ingredient = null
    }

    return ingredient
    }
}

BurgerIngrds.propTypes={
    type: propTypes.string.isRequired
}

export default BurgerIngrds 