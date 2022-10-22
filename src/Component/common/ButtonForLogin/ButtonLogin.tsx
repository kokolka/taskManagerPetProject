import React, { ReactElement } from 'react';

type ButtonLoginType = {
    children: never[] | undefined | string | ReactElement<any, any>,
    login: any
}

const ButtonLogin: React.FC<ButtonLoginType> = (props) => {
    return (
        <div onClick={props.login}>
            {props.children}
        </div>
    );
}

export default ButtonLogin;