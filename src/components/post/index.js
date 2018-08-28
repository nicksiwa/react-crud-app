import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPost } from '../../actions/post'

class Post extends Component {
  componentDidMount() {
    this.props.getAllPost()
  }

  render() {
    const { posts } = this.props
    return (
      <div>
        <h1>Post Component</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {posts && posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.post
})

const mapDispatchToProps = (dispatch) => ({
  getAllPost: () => dispatch(getAllPost())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
