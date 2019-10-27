import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
interface Props {
}

interface State {
  current: number
}

export default class User extends Component<Props, State> {
    render() {
        return (
            <Text>我的页面</Text>
        )
    }
}