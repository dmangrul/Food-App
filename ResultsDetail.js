import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = (props) => {
	return (
		<View>
			<Image
				style={styles.img}
				source={{ uri: props.result.image_url }}
			></Image>
			<Text style={styles.maintext}>{props.result.name}</Text>
			<Text style={styles.subtext}>
				{props.result.rating} stars, {props.result.review_count} reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		fontSize: 30,
		fontWeight: "bold",
	},
	img: {
		height: 150,
		width: 250,
		borderRadius: 4,
		marginHorizontal: 1,
		alignSelf: "center",
	},
	maintext: {
		alignSelf: "center",
		fontWeight: "bold",
	},
	subtext: {
		alignSelf: "center",
	},
});

export default ResultsDetail;
