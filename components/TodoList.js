import React, { Component } from 'react';
import CheckBox from 'react-native-checkbox';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  ListView,
  View,
  Text,
} from 'react-native';

export default class TodoList extends Component{
    constructor(){
        super();
        this.checkList = this.checkList.bind(this);
    }
    checkList(sectionID,checked){
        // Alert.alert(sectionID);
        this.props.checkTodo(sectionID);
    }
    render(){
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1,row2) => row1 !== row2
        });
        var dataSource = this.dataSource.cloneWithRows(this.props.todos);
        return (
            <ListView 
                dataSource={dataSource}
                renderRow={(rowData,rowID,sectionID) => 
                    <View style={styles.rowContainer}>
                        <CheckBox         
                            // checked={rowData.done === true? true:false}
                            // checked={true}
                            labelStyle={rowData.done ? styles.labelStyle:styles.lableNoStyle}
                            label={rowData.text}
                            onChange={checked=> this.checkList(sectionID,checked)}
                        />
                    </View>
            } />
        )
    }
}

const styles =  StyleSheet.create({
    rowContainer: {
        padding:10,
        flexDirection:"row",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    listText: {
        fontSize: 18,
    },
    labelStyle: {
        textDecorationLine: "line-through",
    },
    labelNoStyle: {
        textDecorationLine: "none",
    }
})