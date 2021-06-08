import React from 'react';

function TeamMemberForm({ addToTeam, setFormData, formData }) {


    const onFormInputChange = e => {
        setFormData({ ...formData, [e.target.id]: e.target.value, })
    }


    return (<div> <form onSubmit={addToTeam}>
        <label>Name:
        <input id="name" type="text" placeholder="Your Name Here" value={formData.name} onChange={onFormInputChange} />
        </label>
        <label>Email:
        <input id="email" type="text" placeholder="youremail@email.com" value={formData.email} onChange={onFormInputChange} />
        </label>
        <label> Role:
        <select id="role" onChange={onFormInputChange} >
                <option value="">-- select your role --</option>
                <option value="Backend">Backend Engineer</option>
                <option value="FrontEnd">Front End Engineer</option>
                <option value="UX">UX Designer</option>
                <option value="Wordpress">Wordpress Specialist</option>
                <option value="Wireframe">Wireframe Creator</option>
                <option value="AWS">AWS Certified</option>
            </select>
        </label>
        <button >Join Our Team!</button>
    </form>

        {/* <h3>The User's Name is {formData.name} and their email is {formData.email} and their role is {formData.role}!</h3> */}

    </div>)
}

export default TeamMemberForm;