import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button, Form, Alert} from 'react-native';

export default class AddTodo extends Component{
    constructor(){
        super()
            this.state = {
                input: ''
            }
        this.addItem = this.addItem.bind(this);
    }
    addItem(){
        this.props.addItem(this.state.input);
        this.setState({
            input:''
        })
        // this.refs.newList().reset();
        // console.log(this.refs.newList.value)
    }
    render(){
        // const addItem = this.addItem;
        return (
            <View style={{padding: 10}}>
                <TextInput
                ref="newList"
                style={{height: 40, width:220}}
                placeholder="Add Todo Here!"
                value={this.state.input}
                onChangeText={(input) => this.setState({input})}
                />
                <Button
                onPress={this.addItem}
                title="Add"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
}