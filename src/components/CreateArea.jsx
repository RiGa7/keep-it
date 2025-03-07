import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [checked, setChecked] = useState(false);

  function handleCheck() {
    setChecked((prev) => !prev);
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {checked && (

          <Fade in={checked} >
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
          </Fade>
        )}
        <textarea
          onClick={setChecked}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {checked? 3:1}
        />
        <Zoom in={checked}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
