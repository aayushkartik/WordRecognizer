import React from 'react';
import './InputForm.css';
function proBar(props){
    return(
        <div className='container-sm prog-container'>
        <div className="progress"style={{height: "17px"}}>
        <div className="progress-bar" role="progressbar" style={{width: props.prog*100+"%"}} aria-valuenow={props.prog*100} aria-valuemin="0" aria-valuemax="100">Progress...</div>
        </div>
        </div>
    )
}
export default proBar;