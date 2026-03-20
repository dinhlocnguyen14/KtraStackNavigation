import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

function BottomNav({ navigation, active }) {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image
          source={require("../assets/icons/Group 152.png")}
          style={[styles.icon, active === "home" && styles.active]}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require("../assets/icons/Group 153.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Scan")}>
        <Image
          source={require("../assets/icons/Vector.png")}
          style={[styles.icon, active === "scan" && styles.active]}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require("../assets/icons/Group 154.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <Image
          source={require("../assets/icons/Group 161.png")}
          style={[styles.icon, active === "cart" && styles.active]}
        />
      </TouchableOpacity>
    </View>
  );
}

export default BottomNav;

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  icon: {
    width: 26,
    height: 26,
    resizeMode: "contain",
    opacity: 0.5,
  },

  active: {
    opacity: 1,
  },
});
