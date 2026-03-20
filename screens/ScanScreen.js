import React from "react";
import BottomNav from "../components/BottomNav";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScanScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* BACK BUTTON */}
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        {/* PRODUCT IMAGE */}
        <Image
          source={require("../assets/icons/glass-bottle.png")}
          style={styles.backgroundImage}
        />

        {/* SCAN FRAME */}
        <Image
          source={require("../assets/icons/Group 5.png")}
          style={styles.overlayFrame}
        />

        {/* CARD OVERLAY */}
        <Image
          source={require("../assets/icons/Rectangle 26.png")}
          style={styles.overlayFrame1}
        />

        {/* PRODUCT CARD */}
        <View style={styles.productCard}>
          <Image
            source={require("../assets/icons/Juice.png")}
            style={styles.smallImage}
          />

          <View>
            <Text style={styles.brand}>Lauren's</Text>
            <Text style={styles.title}>Orange Juice</Text>
          </View>

          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => navigation.navigate("Cart")}
          >
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* BOTTOM NAV nếu cần */}
      {/* <BottomNav /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#D9CDBE",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  overlayFrame: {
    position: "absolute",
    top: "12%",
    width: "90%",
    height: "70%",
    resizeMode: "contain",
  },

  overlayFrame1: {
    position: "absolute",
    top: "28%",
    width: "80%",
    height: "70%",
    resizeMode: "contain",
  },

  productCard: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 20,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  smallImage: {
    width: 40,
    height: 60,
    resizeMode: "contain",
  },

  brand: {
    color: "#999",
    fontSize: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  back: {
    position: "absolute",
    top: 10, // SafeArea đã xử lý phần trên rồi
    left: 20,
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 12,
    zIndex: 10,
    elevation: 10,
  },

  backText: {
    fontSize: 22,
  },

  addBtn: {
    backgroundColor: "#5B6CFF",
    width: 45,
    height: 45,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  addText: {
    fontSize: 28,
    color: "#fff",
  },
});
