import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Image,
  View
} from 'react-native';
import { OrderRowStyle } from './OrderRow.style';

export default class OrderRow extends Component {
	render() {
		const { order } = this.props;
		return (
			<View style={OrderRowStyle.row}>
				<Image
					style={OrderRowStyle.thumbnail}
					source={{ uri: order.restaurantId.image }}
				/>
				<View style={OrderRowStyle.textContainer}>
					<Text numberOfLines={1} ellipsizeMode="tail" style={OrderRowStyle.owner}>{`${order.by} está pedindo`}</Text>
					<Text style={OrderRowStyle.restaurant}>{order.restaurantId.name}</Text>
				</View>
      </View>
		);
	}
}

OrderRow.propTypes = {
	order: PropTypes.shape({})
};
