import { useEffect } from "react";
import "./Example.css"; 
export const Examples = () => {
    useEffect(() => {
            document.title = 'Form Generator | Examples';
        }
    , []);
    return (
        <div >
            <p className="main-text">Examples</p>
        </div>
    );
}