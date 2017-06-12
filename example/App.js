import React from 'react';
import { StyleSheet, Text, View, Image, Switch, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      message: 'Hello World!',
      switchValue: false
    }
  }

  onSwitchChange (val) {
    this.setState({
      message: !this.state.switchValue ? 'Goodbye World!' : 'Hello World!',
      switchValue: val
    })
  }

  buttonPress () {
    alert('You pressed me!')
  }

  buttonLongPress () {
    alert('You long pressed me!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.message}</Text>
        <Image style={styles.image} source={{uri: 'https://www.kenyabuzz.com/media/image-uploads/2016/04/27/landscape-1457107485-gettyimages-512366437.jpg'}} />
        <Switch value={this.state.switchValue} onValueChange={(val) => this.onSwitchChange(val)} />
        <View style={styles.vContainer}>
          <TouchableOpacity onPress={this.buttonPress} onLongPress={this.buttonLongPress}>
            <View style={styles.v1}>
              <Text>Touch me!</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.v2}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 200
  },
  vContainer: {
    flexDirection: 'row'
  },
  v1: {
    backgroundColor: 'pink',
    height:100,
    width: 100
  },
  v2: {
    backgroundColor: 'orange',
    height: 50,
    width: 50
  }
});
