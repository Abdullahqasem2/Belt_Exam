import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Form = (props) => {
  const { initialFirstName, initialLastName,initialAge, onSubmitProp } = props;
    const [project, setproject] = useState(initialFirstName);
    const [due, setdue] = useState(initialLastName);
    const [age, setAge] = useState(initialAge);
    const [status, setstatus] = useState(1)
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({project, status,due});
        console.log(status);
    }
  const valid = () => {
    if(project.length < 3 || due.length <= 0){
      return(
        <p>fill the form right -_-</p>
      )
    }else{
      return(
        <input type="submit" value="Create|Update" />
      )
    }
  }
  return(
    <form onSubmit={onSubmitHandler}>
            <p>
                <label>project</label><br/>
                <input type="text" placeholder="project" onChange={(e)=>setproject(e.target.value)} value={project}/>
            </p>
            <p>
                <label>due</label><br/>
                <input type="date" placeholder="due date" onChange={(e)=>setdue(e.target.value)} value={due}/>
            </p>

            {valid()}
        </form>
  );
};
export default Form;
