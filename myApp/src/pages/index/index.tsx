import Taro, { Component, Config } from '@tarojs/taro'
import './index.scss'
import { AtTabBar }  from 'taro-ui'
import RouterMap from '../../components/RouterMap'

interface Props {

}

interface State {
  current: number;
}

export default class Index extends Component<Props, State> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
    return (
      <div>
        <RouterMap current={this.state.current}/>
        <AtTabBar
          fixed
          tabList={[
            { title: '主页', iconType: 'home', text: 'new' },
            { title: '拍照', iconType: 'camera' },
            { title: '我的', iconType: 'user', text: '100', max: 99 }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </div>
    )
  }
}
