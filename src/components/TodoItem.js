import React, { Component } from "react";
import { Text, View, CheckBox, StyleSheet, Alert, Button } from "react-native";
import setTodo from "../libs/setTodo";
import delteTodo from "../libs/deleteTodo";
import deleteTodo from "../libs/deleteTodo";

export class TodoItem extends Component {
  setComplete() {
    setTodo(`todos/${this.props.todo.id}/complete`, !this.props.todo.complete);
  }
  complete() {
    return this.props.todo.complete ? style.complete : style.inComplete;
  }
  render() {
    return (
      <View style={style.container}>
        <CheckBox
          value={this.props.todo.complete}
          onValueChange={() => this.setComplete()}
        />
        <Text style={this.complete()} onPress={() => this.setComplete()}>
          {" "}
          {this.props.todo.title}{" "}
        </Text>
        <Button
          style={style.deleteButton}
          title="x"
          onPress={() => deleteTodo("todos/" + this.props.todo.id)}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  inComplete: {
    color: "#000000",
    fontSize: 20
  },
  complete: {
    textDecorationLine: "line-through",
    textDecorationStyle: 'double',
    color: "#000000",
    fontSize: 20,
    color: "#4ad420"
  },
  container: {
    padding: 8,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  deleteButton: {
    textAlign: "right"
  }
});

export default TodoItem;
