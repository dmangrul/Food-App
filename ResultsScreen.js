import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsScreen = (props) => {
	const id = props.navigation.getParam("id");
	const [result, setResult] = useState(null);

	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};

	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		console.log("Waiting for Results...");
		return null;
	}

	let openNow = "";
	if (result.is_closed) {
		openNow = "Closed Now.";
	} else if (!result.is_closed) {
		openNow = "Open Now!";
	}

	return (
		<View>
			<Text style={styles.restaurantName}>{result.name}</Text>
			<Text></Text>
			<Text style={styles.open}>{openNow}</Text>
			<Text></Text>
			<FlatList
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image style={styles.img} source={{ uri: item }}></Image>;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	restaurantName: {
		alignSelf: "center",
		fontSize: 30,
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
	open: {
		alignSelf: "center",
		fontSize: 20,
		color: "red",
	},
	img: {
		height: 200,
		width: "80%",
		alignSelf: "center",
		marginVertical: 5,
	},
});

export default ResultsScreen;
