import React, { ChangeEvent, CSSProperties, HTMLInputTypeAttribute, ReactChild } from "react";
import classes from './MyButton.module.css'

type InputBaseProps = {
    children?: ReactChild,
    className?: string;
    id?: string;
    onClick: () => void;
    style?: CSSProperties;
}

const MyButton = ({...props}: InputBaseProps) => {
    return(
        <button className={classes.MyButton} {...props}>{props.children}</button>
    )
}

export default MyButton;