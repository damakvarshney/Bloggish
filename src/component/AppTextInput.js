import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { TextInput } from "react-native-gesture-handler";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, width, ...otherProps }) => {
  return (
    <View
      style={[
        styles.container,
        { width, borderWidth: 1, borderColor: "black" },
      ]}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={[defaultStyles.text, { width: 300 }]} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 8,
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
