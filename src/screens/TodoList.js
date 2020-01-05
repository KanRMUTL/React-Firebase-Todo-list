import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  FlatList
} from "react-native"
import pushTodo from "../libs/pushTodo"
import getDatabase from "../libs/getDatabase"
import TodoItem from "../components/TodoItem"

export class TodoList extends Component {
  state = {
    todoLists: [],
    todoText: ""
  }

  setTodoText(text) {
    this.setState({ todoText: text })
  }

  // ฟังชั่นสำหรับเรียกรายการ Todo มาเก็บไว้ใน todoLists
  getTodoLists = async () => {
    await getDatabase("todos", data => {
      const promise = Object.keys(data).map(todoId => {
        return new Promise(resolve => {
          getDatabase(`todos/${todoId}`, todo => {
            resolve({
              id: todoId,
              title: todo.title,
              complete: todo.complete
            })
          })
        })
      })
      Promise.all(promise).then(todo => {
        this.setState({ todoLists: todo })
      })
    })
  }

  newTodo() {
    if (this.state.todoText !== "") {
      pushTodo({
        title: this.state.todoText,
        complete: false
      })
      this.setTodoText("")
    } else {
      Alert.alert("อ๊ะ! กรุณาพิมพ์ Todo list ก่อนบันทึก")
    }
  }

  componentDidMount() {
    this.getTodoLists()
  }

  render() {
    return (
      <View style={style.container}>
        <TextInput
          style={style.textInput}
          placeholder="Add todo hear!"
          value={this.state.todoText}
          onChangeText={text => this.setTodoText(text)}
        ></TextInput>
        <Button title="Save Todo" onPress={() => this.newTodo()}></Button>
        <View>
          <FlatList
            style={{ width: "100%" }}
            data={this.state.todoLists}
            // renderItem={({ item }) => <Text>{ item.complete ? item.title : 'incomplete'}</Text>}
            renderItem={({ item }) => <TodoItem todo={item} />}
          ></FlatList>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  textInput: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#6e6d6d",
    width: 150,
    marginBottom: 8
  },
  container: {
    padding: 25,
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  }
})

export default TodoList
