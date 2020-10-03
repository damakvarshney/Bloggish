import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppButton from "./../component/AppButton";

// import {Context} from "../context/ImageContext";
import ListItem from "./../component/lists/ListItem";
import ListItemSeparator from "./../component/lists/ListItemSeparator";
import ListItemDeleteAction from "./../component/lists/ListItemDeleteAction";

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        ItemSeparatorComponent={ListItemSeparator}
        key={(blogPost, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <ListItem
              materialIconName="chevron-right"
              title={item.title}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => deleteBlogPost(item.id)} />
              )}
              onPress={() => navigation.navigate("Show", { id: item.id })}
            />
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} style={{ margin: 10 }} />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
});

export default IndexScreen;
