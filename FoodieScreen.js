import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import FoodList from "../components/FoodList";

const FoodieScreen = ({ navigation }) => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);
	const [error, setError] = useState("");

	const foodApi = async (searchTerm) => {
		console.log(term);
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50, //limit of results
					term: searchTerm, //search term
					location: "south riding va",
				},
			});
			setError("");
			setResults(response.data.businesses);
		} catch (err) {
			console.log(err);
			setError("ERROR: Something went wrong.");
		}
	};

	const filterResultsByPrice = (target) => {
		const filteredPrices = [];
		results.forEach((restaurant) => {
			if (restaurant.price == target) {
				filteredPrices.push(restaurant);
			}
		});
		return filteredPrices;
	};

	useEffect(() => {
		foodApi("food");
	}, []);

	//console.log(results);

	return (
		<ScrollView>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => foodApi(term)}
			/>
			<Text style={{ alignSelf: "center" }}>
				{results.length} Results Found:
			</Text>

			<FoodList title={"Low Price - $"} results={filterResultsByPrice("$")} />
			<FoodList title={"Mid Price - $$"} results={filterResultsByPrice("$$")} />
			<FoodList
				title={"High Price - $$$"}
				results={filterResultsByPrice("$$$")}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default FoodieScreen;
