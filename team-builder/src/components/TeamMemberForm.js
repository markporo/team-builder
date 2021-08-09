import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  text-align: center;
  color: black;
  backgroundColor: white;
  border: 1px solid black;
  width: 200px;
  height: 50px;
`;

const Input = styled.input`
  width: 80%;
  margin: 0 auto;
  height: 40px;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  width: 80%;
  margin: 0 auto;
  height: 40px;
  margin-bottom: 1rem;
  text-align: center;
`;



export default function TeamMemberForm({ formValues, submitForm, updateForm, }) {
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
        <div>NAME:</div>
        <Input type="text" name="name" value={formValues.name} required="true" onChange={changeHandler} />

      </div>
      <div>
        <div>JOB ROLE:</div>
        <Select value={formValues.role} name="role" required="true" onChange={changeHandler} >
          <option value="----Choose a Role----">----Choose a Role----</option>
          <option value="FE Developer">FE Developer</option>
          <option value="BE Developer">BE Developer</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Hype Man">Hype Man</option>
          <option value="Coffee Maker">Coffee Maker</option>
        </Select>

      </div>
      <div>
        <div>EMAIL:</div>
        <Input type="email" name="email" value={formValues.email} required="true" onChange={changeHandler} />

      </div>
      <Button>Submit</Button>
    </form>
  )

}