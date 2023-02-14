import { ReactElement } from 'react';
import ReactDOMServer from 'react-dom/server';
import { BiWindow, BiWindows, BiMinus, BiX } from 'react-icons/bi';
import './global.css'

const maximazeTitle = 'Maximaze'
const maximizeIcon = <BiWindow/>

function setWindowSize(): void {
    const windowSize = window.api.windowSize()
    if(windowSize == 'Restored'){
        updateMaximizeBtn('Maximaze', <BiWindow/>)   
    } else {
        updateMaximizeBtn('Restore', <BiWindows/>)  
    }  
}

function updateMaximizeBtn(title: string, icon: ReactElement): void {
    const element = document.getElementById('maximizeBtn')
    element.title = title
    element.innerHTML =  ReactDOMServer.renderToString(icon);
}

function windowAction(action: string): void {
    window.api.windowAction(action);    
}


function Topbar(){
    return (
        <div className='topBar'>
            <div className='topBar-logo-div'>
                AP
            </div>
            <div className='topBar-control-div'>
                <div className='topBar-control-button' onClick={()=> windowAction('minimize')} title='Minimize'><BiMinus id='react-icons'/></div>
                <div className='topBar-control-button' id='maximizeBtn' onClick={()=> setWindowSize()} title={maximazeTitle}>{maximizeIcon}</div>
                <div className='topBar-control-button-close' onClick={()=> windowAction('close')} title='Close'><BiX id='react-icons-close'/></div>
            </div>
        </div>
    );
}

export default Topbar;


