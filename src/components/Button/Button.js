import React from 'react'

const Button = ({ handleClick, children }) => (
    <Button onClick={handleClick} >{children}</Button> 
)

export default Button