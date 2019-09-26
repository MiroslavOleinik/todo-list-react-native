import React, {Component} from 'react';
import { connect } from 'react-redux';
import { completeTask, deleteTask } from '../store/store';
import { StyleSheet, Text, View, Button } from 'react-native';

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks,
});

const mapDispatchToProps = (dispatch) => ({
  completeTaskDispatch: (id) => {
    dispatch(completeTask(id));
  },
  deleteTaskDispatch: (id) => {
    dispatch(deleteTask(id));
  },
});

class Task extends Component {
  state = {
    task: this.props.tasks[this.props.id],
  }

  onComlete(id) {
    const { completeTaskDispatch } = this.props;
    completeTaskDispatch(id);
  }

  onDelete(id) {
    const { deleteTaskDispatch } = this.props;
    deleteTaskDispatch(id);
  }

  render() {
    const { id } = this.props;
    const { task } = this.state;

    return <View style={styles.container}>
      <Text
        style={task.isCompleted ? styles.completed :
          task.isDeleted ? styles.deleted : styles.normal}
        >{task.contex}</Text>
      <View>
        <Button
          onPress={() => {this.onComlete(id)}}
          title='V' />
      </View>
      <View>
        <Button
          onPress={() => {this.onDelete(id)}}
          title='X' />
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  completed: {
    alignSelf: 'stretch',
    color: '#47af7e',
    flex: 1,
    fontSize: 20,
  },
  deleted: {
    alignSelf: 'stretch',
    color: '#be2c36',
    flex: 1,
    fontSize: 20,
  },
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: 20,
    height: 40,
  },
  normal: {
    alignSelf: 'stretch',
    color: '#000',
    flex: 1,
    fontSize: 20,
  }, 
  text: {
    fontSize: 30,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
