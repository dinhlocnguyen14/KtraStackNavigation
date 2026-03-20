import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 20 }}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Your Cart 👍🏻</Text>

      {/* ITEM 1 */}

      <View style={styles.item}>
        <Image
          source={require("../assets/icons/Juice.png")}
          style={styles.productImg}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.brand}>Lauren's</Text>
          <Text style={styles.product}>Orange Juice</Text>
          <Text style={styles.price}>₹ 149</Text>
        </View>

        <View style={styles.qtyBox}>
          <Text style={styles.qtyBtn}>-</Text>
          <Text style={styles.qty}>2</Text>
          <Text style={styles.qtyBtn}>+</Text>
        </View>
      </View>

      {/* ITEM 2 */}

      <View style={styles.item}>
        <Image
          source={require("../assets/icons/Rectangle 31.png")}
          style={styles.productImg}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.brand}>Baskin's</Text>
          <Text style={styles.product}>Skimmed Milk</Text>
          <Text style={styles.price}>₹ 129</Text>
        </View>

        <View style={styles.qtyBox}>
          <Text style={styles.qtyBtn}>-</Text>
          <Text style={styles.qty}>2</Text>
          <Text style={styles.qtyBtn}>+</Text>
        </View>
      </View>

      {/* ITEM 3 */}

      <View style={styles.item}>
        <Image
          source={require("../assets/icons/Amber Bottle.png")}
          style={styles.productImg}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.brand}>Marley's</Text>
          <Text style={styles.product}>Aloe Vera Lotion</Text>
          <Text style={styles.price}>₹ 1249</Text>
        </View>

        <View style={styles.qtyBox}>
          <Text style={styles.qtyBtn}>-</Text>
          <Text style={styles.qty}>2</Text>
          <Text style={styles.qtyBtn}>+</Text>
        </View>
      </View>

      {/* TOTAL */}

      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>₹ 1,527</Text>
      </View>

      <TouchableOpacity
        style={styles.checkoutBtn}
        onPress={() => navigation.navigate("Checkout")}
      >
        <Text style={styles.checkoutText}>Proceed to checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  back: {
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 30,
  },

  item: {
    flexDirection: "row",
    backgroundColor: "#ECECF1",
    padding: 15,
    borderRadius: 16,
    marginBottom: 15,
    alignItems: "center",
  },

  productImg: {
    width: 50,
    height: 50,
    marginRight: 15,
    resizeMode: "contain",
  },

  brand: {
    fontSize: 12,
    color: "#999",
  },

  product: {
    fontSize: 15,
    fontWeight: "600",
  },

  price: {
    color: "#F07C4A",
    marginTop: 5,
    fontWeight: "600",
  },

  qtyBox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 10,
  },

  qtyBtn: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: "#F07C4A",
  },

  qty: {
    fontSize: 16,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  totalText: {
    fontSize: 18,
    fontWeight: "600",
  },

  totalPrice: {
    fontSize: 18,
    color: "#F07C4A",
    fontWeight: "700",
  },

  checkoutBtn: {
    backgroundColor: "#F28C5B",
    padding: 18,
    borderRadius: 20,
    marginTop: 30,
    alignItems: "center",
  },

  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
