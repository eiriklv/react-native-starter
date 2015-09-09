'use strict';

import React from 'react-native';
import Camera from 'react-native-camera';

const Info = require('./product-info');

let {
  ActivityIndicatorIOS,
  Modal,
  Dimensions,
  StyleSheet,
  ScrollView,
  NavigatorIOS,
  Text,
  TouchableHighlight,
  View
} = React;

let Main = React.createClass({
  getInitialState() {
    return {
      scanning: false,
      modalVisible: false
    }
  },
  _onBarCodeRead(res) {
    this.setState({
      scanning: true,
      modalVisible: false
    });

    fetch('http://www.walmart.com/product/mobile/api/upc/' + res.data)
      .then((response) => response.text())
      .then((responseText) => {
        this.setState({
          scanning: false
        });
        this.props.navigator.push({
          title: 'Product Info',
          component: Info,
          passProps: {
            product: JSON.parse(responseText)
          }
        });
      })
      .catch((error) => {
        this.setState({
          scanning: false
        });
        alert(error);
      });
  },
  _onCloseModal() {
    this.setState({
      modalVisible: false
    })
  },
  _onOpenModal() {
    this.setState({
      modalVisible: true
    })
  },
  render() {
    return this.state.scanning ?
      <View style={styles.wrapper}>
        <View style={styles.centering}>
          <ActivityIndicatorIOS
            animating={this.state.scanning}
            size="large"
          />
        </View>
      </View> :
      <View style={styles.wrapper}>
        <View style={styles.centering}>
          <TouchableHighlight
            style={styles.button}
            onPress={this._onOpenModal}>
            <Text
              style={styles.buttonText}>
              Scan A Barcode
            </Text>
          </TouchableHighlight>
        </View>
        <Modal animated={true}
          visible={this.state.modalVisible}>
          <Camera
            ref="cam"
            style={[styles.wrapper, styles.camera]}
            aspect={Camera.constants.Aspect.fill}
            onBarCodeRead={this._onBarCodeRead}>
            <View style={[styles.overlay]}/>
            <View style={styles.cancel}>
              <TouchableHighlight
                onPress={this._onCloseModal}
                style={styles.button}>
                <Text style={styles.buttonText}>
                  Cancel
                </Text>
              </TouchableHighlight>
            </View>
          </Camera>
        </Modal>
      </View>
  }
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  centering: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  overlay: {
    backgroundColor: 'transparent',
    borderStyle: 'dashed',
    borderWidth: 5,
    borderColor: 'green',
    height: 150,
    width: 250,
    flex: 0,
    marginTop: -64
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: 3,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  cancel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    paddingBottom: 20
  }
});

export default Main;