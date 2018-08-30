import React, { Component } from 'react'

class PostTable extends Component {
  render() {
    const { posts, deletePost } = this.props
    return (
      <table className="table">
        <thead className="tableHead">
          <tr className="tableRow">
            <th className="tableHeadCol --alignCenter">ID</th>
            <th className="tableHeadCol">Title</th>
            <th className="tableHeadCol">Author</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {posts && posts.map((post) => (
            <tr key={post.id} className="tableRow">
              <td className="tableCol --alignCenter">{post.id}</td>
              <td className="tableCol">{post.title}</td>
              <td className="tableCol">{post.author}</td>
              <td className="tableCol">
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default PostTable
