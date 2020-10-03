import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppText from "./../component/AppText";
import AppTextInput from "./../component/AppTextInput";
import AppButton from "../component/AppButton";

const BlogPostForm = ({
  title,
  content,
  onPress,
  onTitleChange,
  onContentChange,
}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <AppText>Enter Title : </AppText>
        <AppTextInput value={title} onChangeText={onTitleChange} />
        <AppText>Enter Content : </AppText>
        <AppTextInput
          style={{ height: 300, textAlignVertical: "top", fontSize: 18 }}
          value={content}
          multiline={true}
          underlineColorAndroid="transparent"
          noOfLines={2000}
          onChangeText={onContentChange}
        />
        <AppButton title="Save the Post" onPress={onPress} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    justifyContent: "flex-start",
    padding: 20,
  },
});

export default BlogPostForm;
