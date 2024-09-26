import { useState } from 'react'
import './App.css';
import TeamMemberForm from './components/TeamMemberForm';
//import Button from "/.components/Button"


// default form values
const defaultFormValues = { name: '', role: '', email: '' };

function App() {
  // form state - we need the state to hold values of the form
  const [formValues, setFormValues] = useState(defaultFormValues);

  // what would be the stat that holds the database array of the team
  const [team, setTeamMembers] = useState([]);

  //boolean - in current edit
  const [currentlyInEdit, setIsInCurrentEdit] = useState(false);

  //update the formValues of the instance of the user adding their info
  function updateForm(inputName, inputValue) {

    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  // the submitForm function that submits data from the form to post
  const submitForm = e => {

    // acquire info from form
    const newTeamMember = { name: formValues.name.trim(), role: formValues.role.trim(), email: formValues.email.trim() };

    // safeguard against updating form with not all inputs filled
    // I used required on inputs

    if (currentlyInEdit === true) {
      team.map(member => {
        console.log(member, "member that is in edit")
        let updatedMember;
        if (member.name === newTeamMember.name || member.email === newTeamMember.email) {
          updatedMember = newTeamMember;
        }
        return ([...team, updatedMember])
      })

    } else

      // update by sending old infor and new info to database with axios
      setTeamMembers([...team, newTeamMember]);

    //clear formValues
    setFormValues(defaultFormValues);
    setIsInCurrentEdit(false);
  }


  return (
    <div className="App">
      <h1>Our Team List</h1>
      <div>
        {team.map(eachMember =>
          <div>
            <p>{`Name: ${eachMember.name} Role: ${eachMember.role} Email: ${eachMember.email}`}
            </p>
            <button onClick={(e) => { setIsInCurrentEdit(!currentlyInEdit); currentlyInEdit ? setFormValues(eachMember) : setFormValues(defaultFormValues); }}>edit
            </button>
          </div>)}
      </div>
      <TeamMemberForm formValues={formValues} submitForm={submitForm} updateForm={updateForm} />
    </div>
  )
}

export default App;
