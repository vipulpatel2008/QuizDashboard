import * as React from 'react'
import * as css from './style';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children?: any,
    className?: string,
    onClick?: Function,
    styles?: {},
    to?: string;
    disabled?: boolean,
};


const CustomButton = (props: ButtonProps) => {
    const Child = () => (
        <css.Button
            style={props.styles}
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </css.Button>
    )

    return (
        <React.Fragment>
            {props.to ? (
                <Link style={{ textDecoration: 'none' }} to={props.to}><Child /></Link>
            ) : (
                    <Child />
                )}
        </React.Fragment>
    )
}

export default CustomButton;