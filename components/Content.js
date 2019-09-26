import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { addTask } from '../store/store';
import Task from './Task';

const mapStateToProps = ({ tasks, currentScreen }) => ({
  tasks: tasks,
  currentScreen: currentScreen,
});

const mapDispatchToProps = (dispatch) => ({
  addTaskDispatch: (text) => {
    dispatch(addTask(text));
  },
});

class Content extends Component {
  render() {
    const { tasks, currentScreen } = this.props;
    return (
      <ScrollView style={styles.container}>
        {currentScreen === 'Home' ? 
          tasks.map(({ taskName, isDeleted }, index) => {
            if (!isDeleted) {
              return <Task key={index} task={taskName} id={index}/>
            }
          })
          : currentScreen === 'Completed' ?
          tasks.map(({ taskName, isCompleted, isDeleted }, index) => {
            if(isCompleted && !isDeleted) {
              return <Task key={index} task={taskName} id={index}/>
            }
          })
          :
          tasks.map(({ taskName, isDeleted }, index) => {
            if(isDeleted) {
              return <Task key={index} task={taskName} id={index}/>
            }
          })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  }, 
  block: {
    flex: 1,
    overflow: 'scroll',
  }, 
  title: {
    fontSize: 25,
    fontWeight: '600',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
