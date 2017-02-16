/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,NavigatorIOS,
  Alert,
  View
} from 'react-native';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

export default class nav extends Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {text: "learn react native",done: false},
        {text: "build webRTC embedded app on top",done: false},
        {text: "find team and idea for hackathon",done: false},
      ]
    }
    this.addItem = this.addItem.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
  }
  checkTodo(id){
    let tempArray = this.state.todos;
    tempArray[id].done = (!tempArray[id].done);
    this.setState({
      todos : tempArray
    })
  }
  addItem(text){
    if (text.length > 0){
      let newList = {
        text,
        done:false
      }
      this.setState({
        todos: this.state.todos.concat([newList])
      })
    }else{
      Alert.alert('Please put some text')
    }
  }
  render() {
    const todos = this.state.todos
    return (
      <View style={styles.container}>
        <AddTodo addItem={this.addItem}/>
        <TodoList checkTodo={this.checkTodo} todos={this.state.todos}/>
      </View>
    );
  }
}

class todo extends Component{
  render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{component: nav, title: 'TO DOs'}}/>
        );
    }
}


const styles = StyleSheet.create({
  navigator: {flex: 1},
  container: {
    flex: 1,
    paddingTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('todo', () => todo);
