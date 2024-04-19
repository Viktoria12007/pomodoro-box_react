import {FC, useEffect, useState} from "react";
import {createPortal} from "react-dom";
import {DropdownProps} from "../../../types/types";
import './index.css';

const Dropdown: FC<DropdownProps> = ({parentOpen, newStyle, children}) => {
  const [childOpen, setChildOpen] = useState<boolean | undefined>(false);
  useEffect(() => {
    setChildOpen(parentOpen);
  }, [parentOpen]);

  const node = document.querySelector('body');
  return (
    childOpen && createPortal(
      <div className='dropdown' style={{ top: `${newStyle?.top}px`, left: `${newStyle?.left}px` }}>
        {children}
      </div>, node)
  )
}
export default Dropdown;
