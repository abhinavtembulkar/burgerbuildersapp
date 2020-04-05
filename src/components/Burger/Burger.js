import React from 'react'
import classes from './Burger.css'
import BurgerIngrds from './BurgerIngredients/BurgerIngredients'

const Burger = (props) => {
    
    let ingres = Object.keys(props.ingres).map(igKey => {
        return [...Array(props.ingres[igKey])].map((_,i)=>{
            return <BurgerIngrds key={igKey+i} type={igKey}/>
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[])
    
    if(ingres==0) ingres = <b><p>Please start adding ingredients</p></b>

    return (
        <div className={classes.Burger}>
            <BurgerIngrds type="bread-top"/>
            {ingres}
            <BurgerIngrds type="bread-bottom"/>
        </div>
    )
}

export default Burger