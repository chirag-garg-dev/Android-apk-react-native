import  React ,{ memo }    from 'react'
import {View,Text} from 'react-native'
const Child = ({child,myChild}) => {
	console.log('hello peter')
	return (
	  <View>
			<Text>Hello peter</Text>
		</View>
		)
}
export default memo(Child);