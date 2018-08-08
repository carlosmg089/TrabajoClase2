import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert, Image} from 'react-native';
import {Platform} from 'react-native'
import Component2 from './Component2'
import {email, password} from './Component2.js'


export default class Component1 extends Component<Props> {

constructor(props){
  super(props);
  this.state = {email: '', password: ''};
}
_onClickNeedHelp = () => {
  Alert.alert('You are needing help!');
}
  _onClick = () => {
  Alert.alert(this.state.email + ' ' + this.state.password);
}

 render() {
    return (
			<View style={styles.container}>
	        <Text style={{fontSize:20, fontWeight:'bold'}}>
	              Sign in to continue to Gmail
	        </Text>
					<View style={styles.pic}>
          <Image style={{width: 100, height: 80}} source={this.props.image}/>
        	</View>

        <Component2 _onClickNeedHelp={this._onClickNeedHelp} _onClick={this._onClick}>
        </Component2>
             
			</View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',
		fontWeight:'bold',
		marginLeft:10,
		marginRight:10,
		//marginTop:30,
    justifyContent: 'center',
    marginTop: (Platform.OS) === 'android' ? 20 : 0,
  },
 		pic: {
	 aspectRatio:1,
   borderRadius:100,
	 borderWidth:4,
	 //height:'30',
	  borderColor:'grey',
		width:'40%',
		//height:'100',
	  padding:20,
    marginTop:50,

	 },

});

