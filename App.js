import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert, Image} from 'react-native';
import {Platform} from 'react-native'
import Component2 from './Component2'
import Component1 from './Component1'

export default class App extends Component<Props> {

constructor(props){
  super(props);
  this.state = {email: '', password: ''};
  
}
_onClick = (elemail, thepassword) => {
  this.setState({email:elemail, password:thepassword})
  Alert.alert(this.state.email + ' ' + this.state.password);
}
  render() {
    return (
			<Component1 
      style={styles.container} 
      _onClick={this._onClick} 
      image={{uri:'http://pngimg.com/uploads/android_logo/android_logo_PNG23.png'}}>
         
        

       </Component1>

      

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

});
