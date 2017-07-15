import React, { Component } from 'react'
import { LayoutAnimation, Text, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'

import * as actions from '../actions'
import { CardSection } from './common'

class LibraryItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.linear()
  }
  renderDescription() {
    const { expanded, library } = this.props
    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.text}>
            {library.description}
          </Text>
        </CardSection>
      )
    }
  }
  render() {
    const { id, title } = this.props.library
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={styles.title}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  text: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => ({
  expanded: ownProps.library.id === state.selectedLibraryId
})

export default connect(mapStateToProps, actions)(LibraryItem)
