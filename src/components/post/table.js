import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PostItem from './item'

class PostTable extends Component {
  render() {
    const {
      posts,
      onDelete
    } = this.props
    if (posts.length === 0) {
      return (
        <div>No data</div>
      )
    } else {
      return (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <PostItem posts={posts} onDelete={onDelete} />
          </Table>
        </Paper>
      )
    }
  }
}

export default PostTable
