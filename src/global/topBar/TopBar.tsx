
import { useState } from 'react';
import { BiWindow, BiWindows, BiMinus, BiX } from 'react-icons/bi';
import './TopBar.css'
import DropDownMenu from './dropdownmenus/DropDown';
import { windowAction } from '../../scripts/windowFunctions';

function Topbar() {

    const maximazeTitleMaximaze = 'Maximaze'
    const maximazeTitleRestore = 'Restore'
    const maximizeIconWindow = <BiWindow/>
    const maximizeIconWindows = <BiWindows/>

    const [maximizeBtnIcon, setIcon] = useState(maximizeIconWindow);
    const [maximizeBtnText, setText] = useState(maximazeTitleMaximaze); 

    function setWindowSize(): void {
        const windowSize = window.api.windowSize()
        if(windowSize == 'Restored'){
            setIcon(maximizeIconWindow)
            setText(maximazeTitleMaximaze)   
        } else {
            setIcon(maximizeIconWindows)
            setText(maximazeTitleRestore)      
        }  
    }

    return (
        <div className='topBar'>
            <div className='topBar-menu-div'>
                <div id='icon' className='topBar-menu-btn-icon'>AP</div>
                <div className='topBar-menu-btn'>
                    <DropDownMenu/>
                </div>
            </div>
            <div className='topBar-control-div'>
                <div className='topBar-control-button' onClick={()=> windowAction('minimize')} title='Minimize'><BiMinus id='react-icons'/></div>
                <div className='topBar-control-button' id='maximizeBtn' onClick={()=> setWindowSize()} title={maximizeBtnText}>{maximizeBtnIcon}</div>
                <div className='topBar-control-button-close' onClick={()=> windowAction('close')} title='Close'><BiX id='react-icons-close'/></div>
            </div>
        </div>
    );
}

export default Topbar;


