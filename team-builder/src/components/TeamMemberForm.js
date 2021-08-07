import React from 'react'


export default function TeamMemberForm({ formValues, submitForm, updateForm }) {
  //submit Handler for Form - posts form to databas
  function submitHandler(e) {
    e.preventDefault();
    submitForm();
  }

  //ChangeHandler for all inputs
  const changeHandler = e => {
    const { name, value } = e.target;
    updateForm(name, value);
  }
  return (
    <form onSubmit={submitHandler}>
      {/* we want this to be a controlled form */}
      <div>
        <label> NAME:
          <input type="text" name="name" value={formValues.name} required="true" onChange={changeHandler} />
        </label>
      </div>
      <div>
        <label>JOB ROLE:
          <select style={{ backgroundColor: "yellow", color: 'black' }} value={formValues.role} name="role" required="true" onChange={changeHandler} >
            <option value="FE Developer">FE Developer</option>
            <option value="BE Developer">Back End Developer</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Hype Man">Hype Man</option>
            <option value="Coffee Maker">Coffee Maker</option>
          </select>
        </label>
      </div>
      <div>
        <label>EMAIL:
          <input type="email" name="email" value={formValues.email} required="true" onChange={changeHandler} />
        </label>
      </div>
      <button>Submit</button>
    </form>
  )

}