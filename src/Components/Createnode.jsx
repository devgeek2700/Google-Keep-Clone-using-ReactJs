import React, { useState } from "react";
import '../App.css';

const Createnode = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNode] = useState({
        title: '',
        content: '',
    });

    const InputEvent = (event) => {

        // const value = event.target.value;
        // const name = event.target.name;

        const { name, value } = event.target;


        setNode((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
        console.log(note);
    };

    const AddEvent = () => {
        props.passNote(note);
        setNode({
            title: '',
            content: '',
        });

    }

    const ShowBox = () => {
        setExpand(true);
    }

    const CloseBox = () => {
        setExpand(false);
    }

    return (
        <>
            <div className="text_box">
                <form>

                    <div className="text_row">
                        <input
                            type="text"
                            // onClick={ShowmsgBar} 
                            name="title"
                            placeholder="Title"
                            autoComplete="off"
                            value={note.title}
                            onChange={InputEvent}
                            onClick={ShowBox}
                            onDoubleClick={CloseBox}
                        />
                        <i class="fa-solid fa-square-check"></i>
                        <i class="fa-solid fa-paintbrush"></i>
                        <i class="fa-solid fa-image"></i>
                    </div>

                    <div className="Big_txt_box">

                        {expand ?
                            <textarea
                                row=""
                                column=""
                                name="content"
                                placeholder="Take a note..."
                                value={note.content}
                                onChange={InputEvent}
                            >
                            </textarea> : null}

                        {expand ?
                            <div className="Btn_txt_box">
                                <button type="button" class="btn btn-primary createbtn" onClick={AddEvent}>Create</button>
                            </div> : null}
                    </div>
                </form>
            </div>
        </>

    );
}

export default Createnode;