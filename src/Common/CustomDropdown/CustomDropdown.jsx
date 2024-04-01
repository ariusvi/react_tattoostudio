import "./CustomDropdown.css";
import { useState } from "react";

export const CustomDropdown =({title, items}) => {

    const [open, setOpen] = useState(false);
    const toggleOppen = () => setOpen(!open);
    return(
        <>
        <button onClick={toggleOppen} className="dropdown-btn">{title}</button>
        {open && (
            <div className="dropdown-content">
                {items.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}

                </div>)}
        </>
    )
}