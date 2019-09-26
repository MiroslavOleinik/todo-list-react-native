import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { addTask } from '../store/store';
import Task from './Task';
import InputTask from './InputTask';

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks,
});

const mapDispatchToProps = (dispatch) => ({
  addTaskDispatch: (text) => {
    dispatch(addTask(text));
  },
});

class Complited extends Component {
  render() {
    const { tasks } = this.props;
    return <View style={styles.container}>
      <InputTask />
      <View>
        {tasks.map(({ taskName, isCompleted }, index) => {
          if (isCompleted === true) {
            return <Task key={index} task={taskName} id={index}/>
          }
        })}
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 30,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Complited);
