import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import {Platform} from 'react-native'



export default class Component2 extends Component<Props> {

constructor(props){
  super(props);
  this.state = {email: '', password: ''};
}


_onChangeEmail = (value) => {
  this.setState({email: value})
}

_onChangePassword = (value) => {
  this.setState({password: value})
}

_onClick = () => {
  Alert.alert(this.state.email + ' ' + this.state.password);
}
_onClickNeedHelp = () => {
  Alert.alert('You are needing help!');
}
  render() {
    return (
				<View style={styles.form}>
						<TextInput style={styles.textinputds} placeholder='Email' value={this.state.email} onChangeText={this._onChangeEmail}></TextInput>
						<TextInput style={styles.textinputds} placeholder='Password' value={this.state.password} onChangeText={this._onChangePassword}></TextInput>
						<View style={styles.buttonSignIn}>
							<Button title="Sign In" onPress={this._onClick}>
              </Button>

						</View>
						<Text style={{fontSize:15, color:'blue', textAlign:'left'}} onPress={this._onClickNeedHelp}>
		              Need help?
		        </Text>

					

				<View style={styles.foot}>

						<Text style={{fontSize:15, color:'blue'}}>
									Create an account
						</Text>


				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form:{
		 flex: 1,
		 backgroundColor: 'gray',
		 alignItems:'center',
		 fontWeight:'bold',
     paddingHorizontal:10,
		 marginLeft:90,
		 marginRight:90,
		 //marginTop:30,
		 justifyContent: 'center',
	},

  textinputds:{
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',
	  marginLeft:0,
    width:340,
		marginRight:0,
		justifyContent: 'center',
       
  },

	 foot: {
		flex: 1,
		alignItems:'center',
		justifyContent: 'center',
		backgroundColor:'gray',
    marginLeft:10,
	 },
   buttonSignIn: {
		 flex:1,
		 marginLeft:90,
		 marginRight:90,		 
		 marginTop:30,
		 aspectRatio:8,
		 borderRadius:5,
     justifyContent:'center',  		 

	 },

});