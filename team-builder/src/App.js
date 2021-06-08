import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TeamMemberForm from './components/teamMemberForm';
import TeamMember from './components/teamMember';

function App() {
  const [team, setTeamMembers] = useState([]); // need this to display all team members in window
  const [formData, setFormData] = useState({ name: '', email: '', role: '' }); // need this to collect data from user; will then have to submit this to the database and state hook


  const addToTeam = e => {
    e.preventDefault()
    const newTeamMember = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      role: formData.role.trim(),
    }
    // add new team member to state...with a server we would want to send team member to database
    setTeamMembers([...team, newTeamMember])
    setFormData({ name: '', email: '', role: '' });
  }


  return (
    <div className="App">
      <TeamMemberForm addToTeam={addToTeam} setFormData={setFormData} formData={formData} ></TeamMemberForm>
      {
        team.map(mem => {
          return (
            <TeamMember details={mem} />
          )
        })
      }

    </div>
  );
}

export default App;
