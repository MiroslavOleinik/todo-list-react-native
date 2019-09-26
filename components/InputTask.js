import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { addTask } from '../store/store';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks,
});

const mapDispatchToProps = (dispatch) => ({
  addTaskDispatch: (text) => {
    dispatch(addTask(text));
  },
});

class InputTask extends Component {
  state = {
    inputValue: '',
  }

  onChangeHandler(text) {
    this.setState({
      inputValue: text,
    });
  }

  onPressHandler(text) {
    const { addTaskDispatch } = this.props;
    if(text.length !== 0) {
      addTaskDispatch(text);
      this.setState({
        inputValue: '',
      });
    } else {
      this.setState({
        message: 'Error. Input value empty.',
      });
    }
  }

  render() {
    const { inputValue, message } = this.state;
    return <View style={styles.container}>
      <View style={styles.message}>
        <Text>{message}</Text>
      </View>
      <View style={styles.enterValue}>
        <TextInput 
          style={styles.input}
          onChangeText={(text) => {this.onChangeHandler(text)}}
          value={inputValue}
        />
        <Button
          title='OK'
          onPress={() => {this.onPressHandler(inputValue)}}
        />
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  input: {
    flex: 1,
    alignSelf: 'stretch',
    borderColor: '#000',
    borderWidth: 1,
    height: 40,
    padding: 10,
  },
  enterValue: {
    alignSelf: 'stretch',
    flexDirection: 'row',
  }, 
  message: {
    marginTop: 20,
    marginBottom: 20,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InputTask);
