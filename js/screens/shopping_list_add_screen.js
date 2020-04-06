import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addList } from '../actions/index';

class ShoppingListAddScreen extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "New Shopping List",
    headerRight: (
      <TouchableHighlight underlayColor='transparent' onPress={() => navigation.state.params.save(navigation)}>
        <Text style={{ fontSize: 17, color: '#FFFFFF' }}>Save</Text>
      </TouchableHighlight>
    ),
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#99cb42',
      paddingRight: 10
    }
  });

  constructor(props) {
    super(props);
  }

  save(navigation) {
    this.props.addList(navigation.state.params.text);
    // TODO: - this should probably happen after the save is successful
    navigation.goBack();
  }

  componentDidMount() {
    this.props.navigation.setParams({ save: (navigation) => this.save(navigation), text: '' });
  }

  render() {
    let text = '';
    if (this.props.navigation && this.props.navigation.state && this.props.navigation.state.params && this.props.navigation.state.params.text) {
      text = this.props.navigation.state.params.text;
    }
    return (
      <TextInput
        style={styles.container}
        onChangeText={(text) => this.props.navigation.setParams({ text: text })}
        value={text}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 40,
    padding: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addList: addList
  }, dispatch);
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListAddScreen);