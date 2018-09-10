import React, { Component } from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

class PostItem extends Component {
  render() {
    const {
      posts,
      onDelete,
      getPostById
    } = this.props
    return (
      <TableBody>
        {posts && posts.map((post) => (
          <TableRow key={post.id}>
            <TableCell>{post.id}</TableCell>
            <TableCell>{post.title}</TableCell>
            <TableCell>{post.author}</TableCell>
            <TableCell>
              <Button
                mini
                variant='fab'
                color='default'
                onClick={() => getPostById(post.id)}
              >
                <CreateIcon />
              </Button>
              <Button
                mini
                variant='fab'
                color='secondary'
                onClick={() => onDelete(post.id)}
              >
                <DeleteIcon />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    )
  }
}

export default PostItem
