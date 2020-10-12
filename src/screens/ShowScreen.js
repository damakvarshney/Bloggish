import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "../component/AppText";
import { Context } from "./../context/BlogContext";
import { MaterialIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const blogPost = navigation.getParam("blogPost");
  const { state } = useContext(Context);
  // const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View style={styles.container}>
      <AppText style={{ fontWeight: "bold", fontSize: 30 }}>
        {blogPost.title}
      </AppText>
      <AppText>{blogPost.content}</AppText>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", {
            blogPost: navigation.getParam("blogPost"),
          })
        }
      >
        <MaterialIcons name="edit" size={30} style={{ padding: 10 }} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
    padding: 10,
  },
});

export default ShowScreen;
