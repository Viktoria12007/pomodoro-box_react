import {FC} from "react";
import {ButtonProps} from "../../../types/types";
import './index.css';

const Button: FC<ButtonProps> = ({ variant, children, ...props}) => {
  return (
      <button {...props} className={"button" + " " + props.className + " " + (variant ?? "primary")}>
        {children}
      </button>
  )
}
export default Button;
