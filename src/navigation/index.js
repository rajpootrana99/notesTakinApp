import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import ViewNotes from '../screens/ViewNotes'
import AddNotes from '../screens/AddNotes'
import UpdateNotes from '../screens/UpdateNotes'

const StackNavigator = createStackNavigator({
ViewNotes: {
    screen: ViewNotes
},
AddNotes:{
    screen: AddNotes
},
UpdateNotes:{
    screen: UpdateNotes
}
},
{
    initialRouteName: 'ViewNotes',
    headerMode : 'none',
    mode: 'modal'
}
)

export default createAppContainer(StackNavigator)