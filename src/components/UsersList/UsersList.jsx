import PropTypes from 'prop-types'

export const UsersList = ({users,deleteUser,toggleJobStatus})=>{
    return (
        <ul> 
            {users.map(({id,name,email,hasJob})=>(
                <li key={id}>
                    <p>Name:{name}</p>
                    <p>Email:{email}</p>
                    <p>Has job:
                        <span onClick={()=>toggleJobStatus(id)}>{hasJob.toString()}</span>
                    </p>
                    <button type='button' onClick={()=>deleteUser(id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

UsersList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            email:PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    deleteUser:PropTypes.func.isRequired,
}