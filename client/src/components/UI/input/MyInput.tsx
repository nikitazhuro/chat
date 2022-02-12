import React, { ChangeEvent, CSSProperties, HTMLInputTypeAttribute, ReactChild } from "react";
import classes from './MyInput.module.css'

type InputBaseProps = {
    type?: HTMLInputTypeAttribute,
    children?: ReactChild,
    className?: string;
    id?: string;
    label?: string;
    name?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    style?: CSSProperties;
    value?: string;
}

const MyInput = ({...props}: InputBaseProps) => {
    return(
        <input className={classes.MyInput} {...props}/>
    )
}

export default MyInput;