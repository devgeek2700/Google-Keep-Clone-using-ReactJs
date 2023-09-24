import React from "react";
import '../App.css';

const Note = (props) => {

    const DeleteNote = () => {
        props.RemoveItems(props.id);
    }

    return (
        <>
            <div className="Note_cont">
                <div className="Note_box">
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                    <i class="fa-solid fa-trash trashBtn" id="" onClick={DeleteNote}></i>
                </div>
            </div>
        </>
    );
}

export default Note;
