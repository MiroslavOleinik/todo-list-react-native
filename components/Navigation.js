import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Button, View } from 'react-native';
import { changeScreen } from '../store/store';

const mapStateToProps = ({ currentScreen }) => ({
  currentScreen: currentScreen,
});

const mapDispatchToProps = (dispatch) => ({
  changeScreenDispatch: (screen) => {
    dispatch(changeScreen(screen));
  },
});

class Navigation extends Component {
  changePage(screen) {
    const { changeScreenDispatch } = this.props;
    changeScreenDispatch(screen);
  }

  render() {
    return (
      <Fragment>
        <View style={styles.navigation}>
          <Button
            title='Home'
            onPress={() => {this.changePage('Home')}}
          />
          <Button
            title='Completed'
            onPress={() => {this.changePage('Completed')}}
          />
          <Button
            title='Deleted'
            onPress={() => {this.changePage('Deleted')}}
          />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  navigation: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
