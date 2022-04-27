import React from 'react';
import eclipse from './../../assets/image/Eclipse-1s-200px.svg';
import classes from './Spinner.module.css'

const Spinner = () => {

    return (
        <div className={`${classes['wrapper-spinner']} d-flex justify-content-center align-items-center`}>
            <img src={eclipse} className="" alt="Loading..." />
        </div>
    )
}

export default Spinner;