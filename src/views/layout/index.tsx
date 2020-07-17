import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { baseAxios } from '../../util/axios';
import OpenNotificationWithIcon from '../../util/notification';
import { TriviaToken } from '../../util/type/triviaToken';
import Quiz from '../quiz/index';
import TokenContext from './context';
import * as css from './style';

type Props = {
    title: string,
    height?: string,
    children?: React.ReactElement,
};

/**
 * Navigation bar render at the top of the application
 * @param {object }props React props sent to component.
 * @param {string} props.title text to display as title of the application
 * @param {string} props.height height property to manage nav bar size
 * @param {ReactElement} props.children render additional html pass along with children
 */
const NavBar = (props: Props) => {
    return (
        <css.Nav height={props.height}>
            {props.title && <css.Title >{props.title}</css.Title>}
            {props.children}
        </css.Nav>
    );
};

/**
 * Layout component to render NavBar and the Quiz component
 */
const Layout = () => {
    const [token, setToken] = useState<TriviaToken>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        baseAxios.get('api_token.php?command=request').then(function (response) {
            if (response.status === 200 && response.data.response_code === 0)
                setToken({ token: response.data.token });
            else {
                OpenNotificationWithIcon({
                    type: 'error',
                    title: 'Something went wrong. Please try again.',
                }, () => { })
            }
            setLoading(false);
        })
    }, []);

    return (
        <css.AppWrapper>
            <css.Body>
                <Spin tip="Loading..." spinning={loading}>
                    {token &&
                        <TokenContext.Provider value={token}>
                            <NavBar title={'Quiz'}></NavBar>
                            <Quiz></Quiz>
                        </TokenContext.Provider>}
                </Spin>
            </css.Body>
        </css.AppWrapper>
    )
};
export default Layout;
