import React from 'react'
import burgerLogo from '../../assets/images/original.png'

const logo = (props) => (
    <div style={
        {backgroundColor : "beige",
         height: props.height,
         padding : "5px",
         paddingTop : "10px",
         boxSizing:"border-box"}}>
         
        <img style={{height : "80%"}} src={burgerLogo} alt="BURGER"/>
    </div>
)

export default logo