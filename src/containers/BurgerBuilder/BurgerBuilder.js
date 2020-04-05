import React,{ Component } from "react";
import Auxi from '../../hoc/Auxi/Auxi'
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderSumm from '../../components/Burger/OrderSummary/OrderSummary'

const INGRES_PRICES = {
    salad : 0.5,
    cheese : 0.8,
    bacon : 1.4,
    meat : 1.2
}

class BurgerBuilder extends Component{
    state = {
        ingredient : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        totalPrice : 19,
        purchasable : false,
        purchasing : false,
    }
    
    updatePurchaseState = (ingredients) => {
        
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        }).reduce((sum,el)=>{
            return sum+el
        },0)

        this.setState({purchasable : sum > 0})
    }

    purchaseHandler = () =>{
        this.setState({purchasing : true})
        console.log('purchasing')
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type]
        const updatedCount = oldCount+1
        const updatedIngres = {
            ...this.state.ingredient
        }
        updatedIngres[type] = updatedCount

        const priceItem = INGRES_PRICES[type]
        const newPrice = priceItem+this.state.totalPrice

        this.setState({totalPrice : newPrice,ingredient : updatedIngres})
        this.updatePurchaseState(updatedIngres)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type]
        const updatedCount = oldCount-1
        if(updatedCount < 0){
            return;
        }

        const updatedIngres = {
            ...this.state.ingredient
        }
        updatedIngres[type] = updatedCount

        const priceItem = INGRES_PRICES[type]
        const newPrice = this.state.totalPrice-priceItem

        this.setState({totalPrice : newPrice,ingredient : updatedIngres})
        this.updatePurchaseState(updatedIngres)
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false})
        console.log('FIRED')
    }

    purchaseContinueHandler = () => {
        alert('LOCKDOWN HAI BHAI !')
    }

    

    render(){
        return (
            <Auxi>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSumm 
                        ingredient={this.state.ingredient}
                        purchaseContinue = {this.purchaseContinueHandler}
                        purchaseCancel = {this.purchaseCancelHandler}
                        totalPrice={this.state.totalPrice}
                        />
                </Modal>
                <Burger ingres={this.state.ingredient}/>
                <BuildControls 
                    ingresAdded={this.addIngredientHandler}
                    ingresRemoved={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasing={this.purchaseHandler}/>
            </Auxi>
            
        )
    }
}

export default BurgerBuilder