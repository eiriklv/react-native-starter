'use strict';

import React from 'react-native';
import _ from 'lodash';

let {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet
} = React;

const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center'
  },
  img: {
    width: 300,
    height: 300,
    borderWidth: 5,
    borderColor: '#eee',
    margin: 10
  },
  title: {
    margin: 10,
    fontSize: 18
  }
});

const ProductInfo = React.createClass({
  render: function() {
    console.log(this.props.product)
    if (this.props.product) {
      var markup = (
        <ScrollView contentContainerStyle={styles.wrapper}>
          <Image source={{uri: _.get(this.props.product, 'product.primaryImageUrl', '')}} style={styles.img}/>
          <Text style={styles.title}>{this.props.product.product.productName}</Text>
        </ScrollView>
      );
    } else {
      var markup = (
        <View style={styles.wrapper}>
          <Text>No Product Data Found</Text>
        </View>
      )
    }
    return markup;
  }
});

export default ProductInfo;