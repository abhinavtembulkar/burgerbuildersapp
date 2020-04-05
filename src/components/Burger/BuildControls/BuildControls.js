import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label : 'Salad',type:'salad'},
    {label : 'Bacon',type:'bacon'},
    {label : 'Meat',type:'meat'},
    {label : 'Cheese',type:'cheese'}
]

const BuildControls = (props) => {
    return (
    <div className={classes.BuildControls}>
        <h2>Total Price : {props.price.toFixed(2)}</h2>
        {controls.map((ctrl)=>(
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={()=>props.ingresAdded(ctrl.type)}
                removed={()=>props.ingresRemoved(ctrl.type)}

            />
        ))}

        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.purchasing}>ORDER NOW</button>
    </div>
    )
}

export default BuildControls