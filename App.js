import React from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY(0,0);
    
  }

  componentDidMount() {
    this.myAnimation()
  }

  myAnimation() {
    this.position.setValue({x:0,y:0});
     Animated.timing(this.position, {
       toValue:{x:200,y:300},
      // duration:1000,
       easing:Easing.back(2)
     }).start(()=>this.myAnimation())
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "red"
  }
});
