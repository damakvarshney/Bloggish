import React, { useContext, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListItem from "./../component/lists/ListItem";
import ListItemSeparator from "./../component/lists/ListItemSeparator";
import ListItemDeleteAction from "./../component/lists/ListItemDeleteAction";
import NavigationService from "../context/NavigationService";

const IndexScreen = ({ navigation }) => {
  const { state, getBlogPost, deleteBlogPost } = useContext(Context);

  useEffect(() => {
    getBlogPost();
    const listener = navigation.addListener("didFocus", () => {
      getBlogPost();
    });
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        ItemSeparatorComponent={ListItemSeparator}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <ListItem
              materialIconName="chevron-right"
              title={item[index].title}
              renderRightActions={() => (
                <ListItemDeleteAction
                  onPress={() => deleteBlogPost(item[index].id)}
                />
              )}
              onPress={() =>
                NavigationService.navigate("Show", { blogPost: item[index] })
              }
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
