import React, { Component } from 'react'
import Auxi from '../../../hoc/Auxi/Auxi'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{
   
    componentWillUpdate () {
        console.log('[OrderSummary] Updating')
    }

    render(){
        const ingreSumm = Object.keys(this.props.ingredient)
            .map(igKey => {
                return <li key={igKey}>{igKey} : {this.props.ingredient[igKey]}</li>
            })
        
        return (
            <Auxi>
                <h3>Your Order</h3>
                <h4>Your Burger :: </h4>
                <ul>
                    {ingreSumm}
                </ul>
                <p>Continue to Checkout ? </p>
                <p>Your Bill : <strong>{this.props.totalPrice.toFixed(2)}</strong> </p>
                <Button clicked={this.props.purchaseCancel} btnType={"Danger"}>CANCEL</Button>
                <Button clicked={this.props.purchaseContinue} btnType={"Success"}>CONTINUE</Button>
            </Auxi>
        )
    }
}

export default OrderSummary