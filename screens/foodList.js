import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
export default class FoodList extends Component {
  static navigationOptions = {
    title: 'FoodList',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'green',
    },
  };
  render() {
    console.log(this.props.route.params.deleteFood);
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.route.params.foodList}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={(data) => (
          <ListItem
            title={data.item.name}
            bottomDivider
            rightIcon={
              <Icon
                name="delete"
                size={36}
                onPress={() =>
                  this.props.route.params.deleteFood(data.item.key)
                }
              />
            }
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#dce2ff',
    padding: 16,
  },
  listText: {
    fontSize: 30,
  },
});
