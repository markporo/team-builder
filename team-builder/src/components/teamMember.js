import React from 'react';

export default function TeamMember({ details, }) {
    const { name, email, role } = details;

    // if (!props) {
    //     return <h3>Fetching your team Member&apos;s details...</h3>
    // }

    return (
        <div className='teamMemberContainer'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    )
}