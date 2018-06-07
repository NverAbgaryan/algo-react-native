import React from 'react';
import { StyleSheet, Platform, AsyncStorage, Text, View, TouchableWithoutFeedback } from 'react-native';

import listStore from '../store/listStore';
import Swipeout from 'react-native-swipeout';

import { Ionicons } from '@expo/vector-icons';
import { observer, } from "mobx-react";
import { autorun } from "mobx";

@observer
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Notes'
  };

  constructor(props) {
    super(props);

    this._handlePressNotePage = this._handlePressNotePage.bind(this)
  }

  componentWillMount(){
    autorun(async ()=>{
      const notes = await  AsyncStorage.getItem('AlgoNotes')
      listStore.setNotes(notes)
    })
  }


  render() {
    return (
      <View style={styles.container}>
        {listStore.getNotes.map((row, key) => {
          return (
            <Swipeout key={key}
                      left={row.left}
                      right={row.right.map(item => item)}
                      rowID={key}
                      autoClose={true}
            >
              <TouchableWithoutFeedback onPress={()=>this._handlePressNotePage(row)}>
                <View style={styles.li}>
                  <Text style={styles.liText}>{row.title}</Text>
                </View>
              </TouchableWithoutFeedback>
            </Swipeout>
          );
        })}
      </View>
    );
  }

  _handlePressNotePage = (key) => {
    this.props.navigation.navigate('UpdateNotes', { key: key });
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1
  },
  listview: {
    flex: 1
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16
  },
  liContainer: {
    flex: 2
  },
  liText: {
    color: '#333',
    fontSize: 16
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  },
  textAreaContainer: {
    borderColor: '#ffffff',
    borderWidth: 1,
    padding: 5
  }
});