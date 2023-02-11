import React from 'react'
import { BiRectangle, BiMinus, BiX } from 'react-icons/bi';
import './global.css'


function windowAction(action: string): void {
   window.api.windowAction(action);
}

function Topbar(){
    return (
        <div className='topBar'>
            <div className='topBar-logo-div'>
                ApiPal
            </div>
            <div className='topBar-control-div'>
                <div className='topBar-control-button' onClick={()=> windowAction('minimize')} title='Minimize'><BiMinus id='react-icons'/></div>
                <div className='topBar-control-button'onClick={()=> windowAction('maximize')}><BiRectangle id='react-icons'/></div>
                <div className='topBar-control-button-close'onClick={()=> windowAction('close')} title='Close'><BiX id='react-icons-close'/></div>
            </div>
        </div>
    );
}

export default Topbar;