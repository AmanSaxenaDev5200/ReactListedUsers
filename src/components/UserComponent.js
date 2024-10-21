import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {
    constructor(props) {
        super(props); // Correctly calling super in constructor
        this.state = {
            users: []
        };
    }

    // Correct spelling of componentDidMount
    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data });
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">User List</h1> {/* Corrected text-centre to text-center */}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>User First Name</td>
                            <td>User Last Name</td>
                            <td>User Email Id</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user => ( // Correct map syntax
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table> {/* Closed the table tag correctly */}
            </div>
        );
    }
}

export default UserComponent;
