import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as icons from '../../assets/icons'


function Rating (props) {
	const changeRating = n => {
		props.onRatingChange && props.onRatingChange(n)
	}

	const {
		total,
		ratedImg=icons.starred, // default image
		nonRatedImg=icons.star, // default image
		imgStyle,
		orientation='horizontal',
		rating,
		size=50
	} = props;

	return (
		<View
			style={[
				styles.container,
				{flexDirection: directions[orientation]},
			]}
		>
			{
				Array(total).fill().map((_, i) => (
					<TouchableOpacity
						key={i}
						onPress={() => changeRating(i+1)}
					>
						<Image
							source={i < rating ? ratedImg : nonRatedImg}
							style={[
								{width: size, margin: 5, height: size},
								imgStyle,
								!i ? styles.first : {},
								i === total-1 ? styles.last : {},
							]}
						/>

					</TouchableOpacity>
				))
			}
		</View>
	)
};

const directions = {
	vertical: 'column',
	horizontal: 'row'
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},

	// img: {
	// 	margin: 5,
	// 	width: dpi.s - 2,
	// 	height: dpi.s - 2,
	// },

	first: {
		marginLeft: 0,
	},

	last: {
		marginRight: 0,
	}
});

export default Rating;
