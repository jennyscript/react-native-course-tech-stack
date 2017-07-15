import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'

import LibraryItem from './LibraryItem'

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    this.dataSource = ds.cloneWithRows(this.props.libraries)
  }
  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={library => <LibraryItem library={library} />}
      />
    )
  }
}

const mapStateToProps = state => ({
  libraries: state.libraries
})

export default connect(mapStateToProps)(LibraryList)
