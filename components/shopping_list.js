import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class ShoppingList extends Component {

  constructor(props) {
    super(props);
    this.state = {list: props.list};
  }

  componentWillReceiveProps(props) {
    this.setState({list: props.list});
  }

  renderFlatListItem(item) {
    return (
      <ShoppingListItem item={item} onItemCheckChanged={this.props.onItemCheckChanged} onItemDeleted={this.props.onItemDeleted}/>
    );
  }
  
  render() {
    let len = this.state.list.items ? this.state.list.items.length : 0;
    return (
      <TouchableHighlight underlayColor='transparent' style={styles.container} onPress={() => this.props.onListPressed(this.state.list)}>
        <View>
          <Text>{this.state.list.name}</Text>
          <Text>{`${len} item(s)`}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  }
});