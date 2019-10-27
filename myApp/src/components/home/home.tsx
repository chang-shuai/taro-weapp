import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
interface Props {
}

interface State {
  current: number
}

export default class Home extends Component<Props, State> {
    render() {
        return (
            <Text>Home页面</Text>
        )
    }
}