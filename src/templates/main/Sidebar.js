import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hideSidebar } from '../../actions/sidebar'

class Sidebar extends Component {
  render() {
    const {
      children,
      title,
      isActive,
      hideSidebar
    } = this.props
    return (
      <div
        className={isActive ? 'sideBar --active' : 'sideBar'}
        onClick={hideSidebar}
      >
        <div className="sideBar-pusher">
          <div className="sideBar-title">{title}</div>
          <div className="sideBar-content">
            {children}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isActive: state.sidebar.isActive
})

const mapDispatchToProps = (dispatch) => ({
  hideSidebar: (e) => dispatch(hideSidebar(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
