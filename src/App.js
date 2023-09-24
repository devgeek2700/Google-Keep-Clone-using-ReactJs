import React, { useState } from "react";
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import Footer from "./Components/Footer"
import Createnode from "./Components/Createnode"
import Note from "./Components/Note"
import './App.css';

function App() {

  const [addiem, setAdditem] = useState([]);

  const addNote = (note) => {
    // alert("Note Created!");
    setAdditem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  const onDelete = (id) =>{
    setAdditem((oldData) =>
      oldData.filter((curVal, index) =>{
        return index  !== id;
      })
    )
  }

  return (
    <>
      <div className="Nav_box">
        <Navbar />
      </div>

      <div className="Main_box">
        <div className="col1">
          <Sidebar />
        </div>
        <div className="col2">
          <Createnode
            passNote={addNote}
          />
          {/* <Note/> */}

          <div className="Note_row">
            {addiem.map((val, idx) => {
              return <Note
                key={idx}
                id={idx}
                title={val.title}
                content={val.content}
                RemoveItems = {onDelete}
              />
            })}
          </div>

        </div>
      </div>






      <div className="foot_box">
        <Footer />
      </div>
    </>

  );
}

export default App;