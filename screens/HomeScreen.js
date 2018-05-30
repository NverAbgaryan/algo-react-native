import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Notes',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={this._handlePressNotePage}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require('../assets/images/splash.png')}
                    resizeMode="contain"
                    fadeDuration={0}
                    style={{ width: 20, height: 20, marginTop: 1 }}
                  />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionText}>
                    Read the Expo documentation
                  </Text>
                </View>
              </View>
            </Touchable>

            <Touchable
              background={Touchable.Ripple('#ccc', false)}
              style={styles.option}
              onPress={this._handlePressNotePage}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require('../assets/images/splash.png')}
                    fadeDuration={0}
                    style={{ width: 20, height: 20 }}
                  />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionText}>
                    Join us on Slack
                  </Text>
                </View>
              </View>
            </Touchable>

            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={this._handlePressNotePage}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionIconContainer}>
                  <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionText}>
                    Ask a question on the Expo forums
                  </Text>
                </View>
              </View>
            </Touchable>
          </View>

        </ScrollView>
      </View>
    );
  }

  _handlePressNotePage = () => {
    this.props.navigation.navigate('UpdateNotes')
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
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
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
