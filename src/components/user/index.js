import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUser } from '../../actions/user'

class User extends Component {
  componentDidMount() {
    this.props.getAllUser()
  }
  render() {
    const { users } = this.props
    return (
      <div>
        <h1>User Component</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.user
})

const mapDispatchToProps = (dispatch) => ({
  getAllUser: () => dispatch(getAllUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
