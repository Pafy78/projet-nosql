import React, { Component } from 'react';

class App extends Component {
    render() {
        const rows = [];

        this.props.emails.forEach((email) => {
            rows.push(
                <tr>
                <td>{email}</td>
                </tr>
            );
        });

        return (
            <table>
            <thead>
            <tr>
            <th>Email</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default App;