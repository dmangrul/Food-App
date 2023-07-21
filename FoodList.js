import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const FoodList = (props) => {
	return (
		<View>
			<Text style={styles.header}>{props.title}</Text>
			<FlatList
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				data={props.results}
				keyExtractor={(results) => results.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								props.navigation.navigate("ResultsScreen", { id: item.id })
							}
						>
							<ResultsDetail result={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		fontSize: 30,
		fontWeight: "bold",
	},
});

export default withNavigation(FoodList); ////ASK: call props.navigation.nagivate in here or in results (and pass this into the component)?
