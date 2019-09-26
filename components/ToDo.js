import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Keyboard, TouchableWithoutFeedback, } from 'react-native';
import { addTask } from '../store/store';
import Content from './Content';
import InputTask from './InputTask';
import Navigation from './Navigation';

const mapStateToProps = ({ tasks, currentScreen }) => ({
  tasks: tasks,
  currentScreen: currentScreen,
});

const mapDispatchToProps = (dispatch) => ({
  addTaskDispatch: (text) => {
    dispatch(addTask(text));
  },
});

class ToDo extends Component {
  render() {
    const { currentScreen } = this.props;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Fragment>
          <Text style={styles.title}>{currentScreen}</Text>
          <InputTask />
          <Content />
          <Navigation />
        </Fragment>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
    fontWeight: '600',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
