import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SearchBar = (props) => {
	return (
		<View style={styles.searchBox}>
			<FontAwesome5
				name='search'
				size={30}
				color='black'
				style={styles.button}
			/>
			<TextInput
				style={styles.textInput}
				placeholder='Search'
				placeholderTextColor='darkgray'
				value={props.term}
				onChangeText={props.onTermChange}
				onEndEditing={props.onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	searchBox: {
		flexDirection: "row",
		backgroundColor: "rgb(220,220,220)",
		marginTop: 10,
		marginHorizontal: 10,
		borderRadius: 10,
	},
	textInput: {
		flex: 1,
		fontSize: 15,
	},
	button: {
		alignSelf: "center",
		marginHorizontal: 15,
		marginVertical: 10,
	},
});

export default SearchBar;
