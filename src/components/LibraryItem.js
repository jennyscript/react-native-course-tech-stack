import React, { Component } from 'react'
import { Text } from 'react-native'

import { CardSection } from './common'

export default class LibraryItem extends Component {
  render() {
    const { title } = this.props.library
    return (
      <CardSection>
        <Text style={styles.title}>{title}</Text>
      </CardSection>
    )
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
}
