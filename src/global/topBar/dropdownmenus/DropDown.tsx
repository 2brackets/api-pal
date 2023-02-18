import { useState, useRef, useEffect } from 'react';
import './DropDownMenu.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { windowAction } from '../../../scripts/windowFunctions';

function DropDownMenu(){

    const [open, setOpen] = useState(false);
    const ref: React.MutableRefObject<any> = useRef()

    const handleOpen = () => {
        setOpen(!open);
    };
    
    useEffect(() => {
      const checkIfClickedOutside = (event: Event) => {
        if (open && ref.current && !ref.current.contains(event.target)) {
          setOpen(false)
        }
      }
      document.addEventListener("mousedown", checkIfClickedOutside)
      return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
      }
    }, [open])

    return (
      <div className='menu-btns' ref={ref}>
        <button onClick={handleOpen} id='menu-btn'><GiHamburgerMenu/></button>
        {open ? (
        <ul className='menu'>
          <li className='menu-item'>
            <button>New</button>
          </li>
          <li className='menu-item'>
            <button>Open</button>
          </li>
          <li className='menu-item'>
            <button>Save</button>
          </li>
          <li className='menu-item'>
            <button>Save As...</button>
          </li>
          <hr/>
          <li className='menu-item'>
            <button>Import</button>
          </li>
          <hr/>
          <li className='menu-item'>
            <button>Help</button>
          </li>
          <li className='menu-item'>
            <button>Settings</button>
          </li>
          <hr/>
          <li className='menu-item'>
            <button onClick={()=> windowAction('close')}>Exit</button>
          </li>
        </ul>
        ) : null}
      </div>
    );
}
export default DropDownMenu;