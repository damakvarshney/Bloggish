import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";
const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <Text>IndexScreen</Text>
      <Button title="Add Post" onPress={() => addBlogPost()} />
      <FlatList
        data={data}
        key={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default IndexScreen;
