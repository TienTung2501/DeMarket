'use client'
import './Button.module.scss'
import React from 'react'
interface ButtonProps{
    children:React.ReactNode;
    className?:string;
}
const Button = ({children,className}:ButtonProps) => {
  return (
    <button className={className}>{children}</button>
  )
}

export default Button
