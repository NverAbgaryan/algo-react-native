import React from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet
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
});

@observer
class AddNotes extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Add Note',
      headerRight: (<Button onPress={() => params.handleSave()} title={params.title ? params.title : ''}/>)
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      note: ''
    };
    this.onChange = this.onChange.bind(this);
    this.saveDetails = this.saveDetails.bind(this);
  }

  componentWillMount() {
    this.props.navigation.setParams({ handleSave: this.saveDetails });
  }

  saveDetails = () => {
    const id = new Date();
    listStore.addNote({
      id: id,
      updated: id,
      title: this.state.note.substring(0,30) + ' ...',
      text: this.state.note,
      right: [
        {
          text: 'DELETE',
          onPress() {
            listStore.deleteNote(id);
          },
          type: 'delete'
        }
      ]
    });
    this.props.navigation.navigate('Home');
    this.setState({ note: '' });
  };

  onChange(text) {
    this.setState({ note: text });
    if (this.state.note.length) {
      this.props.navigation.setParams({ title: 'Done' });
    }
  }

  render() {
    return (
      <View style={styles.textAreaContainer}>
        <TextInput
          onChangeText={this.onChange}
          value={this.state.note}
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

export default AddNotes;
