import React from 'react';
import {
  View,
  Button
} from 'react-native';
export default class EditNotes extends React.Component {
  static navigationOptions = {
    header: ({ state }) => ({
      right: <Button title={"Save"} onPress={this.handleSave} />
    })
  };
  saveDetails() {
    alert('Save Details');
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.saveDetails });
  }

  render() {
    return(
      <View>Hello</View>
    );
  }
}
