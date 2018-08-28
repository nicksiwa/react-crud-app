import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllPost } from './actions/post'

class App extends Component {
  componentDidMount() {
    this.props.getAllPost()
  }

  render() {
    console.log(this.props.posts)
    return (
      <div>
        
      </div>
    );
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
)(App);
