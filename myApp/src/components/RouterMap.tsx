import Taro from '@tarojs/taro'
import Photo from './photo/photo'
import Home from './home/home'
import User from './user/user'

interface Props {
  current: number
}

interface State {
  
}

export default class RouterMap extends Taro.Component<Props, State> {
  constructor(props) {
    super(props)
  }

  render() {
    switch (this.props.current) {
      case 0: {
        return(<Home></Home>)
      }

      case 1: {
        return(<Photo></Photo>)
      }

      case 2: {
        return(<User></User>)
      }
            
    }
  }

}