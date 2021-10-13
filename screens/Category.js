import React from "react";
import {
    StyleSheet,
    View
} from "react-native";
import SearchBar from "../Components/SearchBar";
import Item1 from "../Components/Item1"


export default class Category extends React.Component {

    render() {
        return <View>
            <SearchBar />
            <Item1 />
        </View >;

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#f0f8ff`,
    }
});
