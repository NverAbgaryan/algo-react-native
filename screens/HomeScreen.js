import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import listStore from '../store/listStore';

import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { observer } from "mobx-react";

@observer
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Notes'
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View>
            {listStore.getNotes.map((note, key) => {
              return (
                <Touchable key={key}
                           style={styles.option}
                           background={Touchable.Ripple('#ccc', false)}
                           onPress={() => this._handlePressNotePage(key)}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.optionIconContainer}>
                      <Ionicons name="ios-chatboxes" size={22} color="#ccc"/>
                    </View>
                    <View style={styles.optionTextContainer}>
                      <Text style={styles.optionText}>
                        {note}
                      </Text>
                    </View>
                  </View>
                </Touchable>);
            })}
          </View>

        </ScrollView>
      </View>
    );
  }

  _handlePressNotePage = (key) => {
    this.props.navigation.navigate('UpdateNotes', { key: key });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A5B9BE'
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12
  },
  optionIconContainer: {
    marginRight: 9
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#424A4C'
  },
  optionText: {
    fontSize: 15,
    marginTop: 1
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
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
  }
});
