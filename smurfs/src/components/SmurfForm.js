import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurf, fetchSmurf} from '../store/actions';

const SmurfForm = (props) => {
    //onchange to handle the typing inputs
    //onsubmit to submit the object as a new smurf
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });

    const handleChanges = (e) => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(newSmurf);
        props.addSmurf(newSmurf);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
              Name:  
              <input id='name' name='name' value={newSmurf.name} type="text" onChange={handleChanges}/>
            </label>
            <label>
              Age:  <input id='age' name='age' value={newSmurf.age} type="text" onChange={handleChanges}/>
            </label>
            <label>
                Height:  <input id='height' name='height' value={newSmurf.height} type="text" onChange={handleChanges}/>
          </label>
          <button>Submit</button>
        </form>

    )
}

// export default SmurfForm;

export default connect(null, {addSmurf, fetchSmurf})(SmurfForm)