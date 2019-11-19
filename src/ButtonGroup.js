import React from 'react';
import {store} from './store';
import setTechnology from './actions';

const ButtonGroup = ({technologies}) => {

    const dispatchBtnAction = (e) => {
        const tech = e.target.dataset.tech;


        store.dispatch(setTechnology(tech));
    }
        return (
            <div>
    {technologies.map((tech, i) => <button onClick={dispatchBtnAction} data-tech={tech} key={i}>{tech}</button>)}
            </div>
        )
    }

 export default  ButtonGroup;

