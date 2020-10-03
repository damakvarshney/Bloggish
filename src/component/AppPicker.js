import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import Screen from "./Screen";
import AppText from "./AppText";

import colors from "../config/colors";
import PickerItem from "./PickerItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "./Icon";

export default function AppPicker({
  //changing_state
  selectedItem,
  onSelectedItem,
  items,
  numberOfColumns = 1,
  //renderItem
  //Two types of pickerComponent default(PickerItem)
  PickerItemComponent = PickerItem,
  //before choosing item placeholder
  placeholder,
  icon,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <AppText
            style={{
              fontWeight: "900",
              color: colors.danger,
              alignSelf: "center",
            }}
            onPress={() => setModalVisible(false)}
          >
            Close
          </AppText>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },

  text: {
    flex: 1,
  },

  placeholder: {
    color: colors.medium,
    flex: 1,
  },
});
