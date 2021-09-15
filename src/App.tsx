/**  Add the import for react, changeEvent
 *   The useState Method is the react hook that allows you to
 *   use state in functional component.
*/
import React, { ChangeEvent, useState } from 'react'


function App(){
    // The note variables here represents the state and the setNote method represents 
    //  the method for adding states
    const [note, setNote] = useState("")
    // The notes is an array and the setNotes is represents how the method for adding array
    // Notice the syntax for useState method. 
    
    const [notes, setNotes] = useState<string[]>([])

    const updateNote = (event: ChangeEvent<HTMLInputElement>) =>{
            setNote(event.target.value)
    }

    function populateArray(){
        setNotes([
            ...notes,
            note
        ])
        setNote("")
    }

    return(
        <div>
            <div className="input-section">
                <input
                    onChange={updateNote}
                    value={note}
                    type="text"
                    name="note"
                    placeholder="Note"
                />
                <button onClick={populateArray}>Add String</button>
            </div>
            <hr/>
            <ul>
                {
                    notes.map((note) => 
                            <li key={note} >{note}</li>
                    )
                }
            </ul>
            
        </div>
    )
}

export default App;