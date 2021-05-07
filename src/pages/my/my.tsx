import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './my.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>我的页面</Text>
      </View>
    )
  }
}
