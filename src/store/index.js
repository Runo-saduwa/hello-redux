import {createStore} from 'redux';
import reducer from '../reducers';

const initialState = {tech: 'react'};

const store = createStore(reducer, initialState);