import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  TextInput
} from 'react-native';
import listStore from '../store/listStore';
import { observer } from "mobx-react";

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: '#ffffff',
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  }
})

@observer
export default class EditNotes extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Edit Note'
      // headerRight: (<Button onPress={() => params.handleSave()} title={params.title ? params.title : ''}/>)
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      note: ''
    };
  }

  componentDidMount() {
    const { state } = this.props.navigation;
    this.setState({ note: state.params.key });
  }

  // saveDetails() {
  //   alert('Save Details');
  // }

  // componentDidMount() {
  //   this.props.navigation.setParams({ handleSave: this.saveDetails });
  // }
  onChange() {

  }

  render() {
    return (
      <View style={styles.textAreaContainer}>
        <TextInput
          onChangeText={this.onChange}
          value={this.state.note.text}
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder={"Type something"}
          placeholderTextColor={"grey"}
          numberOfLines={10}
          multiline={true}
        />
      </View>
    );
  }
}
