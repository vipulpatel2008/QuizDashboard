import React from 'react';
import { TriviaToken } from '../../util/type/triviaToken';

const Context = React.createContext<TriviaToken>({ token: '' });

export default Context
