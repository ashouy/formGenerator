import { useEffect } from "react";
import "./CreateForm.css"; // Assuming you will style it in a CSS file

export const CreateForm = () => {
    useEffect(() => {
        document.title = 'Form Generator | Create Form';
    }
    , []);
    
    return (
        <>
            <p className="main-text">Create Your Own Form Structure</p>
            <div className="create-form-container">
                <div className="column-form column-left">Inputs</div>
                <div className="column-form column-middle">Sections</div>
                <div className="column-form column-right">Preview Result</div>
            </div>
        </>
    );
};
