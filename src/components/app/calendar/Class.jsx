import React from "react";

// Dependencies
import { StyleSheet, Text, View } from "react-native";

const Class = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Class</Text>
    </View>
  );
};

export default Class;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
