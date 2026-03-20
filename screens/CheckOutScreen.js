import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

function CheckoutScreen({ navigation }) {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <View style={styles.container}>
      {/* BACK */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

      {/* HEADER */}
      <View style={styles.topRow}>
        <Text style={styles.title}>Checkout 💳</Text>

        <View>
          <Text style={styles.price}>₹ 1,527</Text>
          <Text style={styles.tax}>Including GST (18%)</Text>
        </View>
      </View>

      {/* PAYMENT TYPE */}
      <View style={styles.payRow}>
        <TouchableOpacity
          style={[styles.card, paymentMethod === "card" && styles.cardActive]}
          onPress={() => setPaymentMethod("card")}
        >
          <Text
            style={[
              styles.payText,
              paymentMethod === "card" && styles.payTextActive,
            ]}
          >
            💳 Credit card
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, paymentMethod === "apple" && styles.cardActive]}
          onPress={() => setPaymentMethod("apple")}
        >
          <View style={styles.appleRow}>
            <Image
              source={require("../assets/icons/Apple icon.png")}
              style={styles.appleIcon}
            />
            <Text
              style={[
                styles.payText,
                paymentMethod === "apple" && styles.payTextActive,
              ]}
            >
              Apple Pay
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* CARD NUMBER */}
      <Text style={styles.label}>Card number</Text>

      <View style={styles.inputWrapper}>
        {/* LEFT ICON (MasterCard) */}

        {/* INPUT */}
        <TextInput
          style={styles.input}
          placeholder="5261 4141 0151 8472"
          placeholderTextColor="#999"
        />

        {/* RIGHT ICON (Scan) */}

        <Image
          source={require("../assets/icons/Master card.png")}
          style={styles.leftIcon}
        />
        <Image
          source={require("../assets/icons/Card icon.png")}
          style={styles.rightIcon}
        />
      </View>

      {/* NAME */}
      <Text style={styles.label}>Card holder name</Text>
      <TextInput style={styles.inputNormal} placeholder="Christie Doe" />

      {/* DATE + CVV */}
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Expiry date</Text>
          <TextInput style={styles.inputNormal} placeholder="06 / 2026" />
        </View>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.label}>CVV / CVC</Text>
          <TextInput
            style={styles.inputNormal}
            placeholder="915"
            keyboardType="numeric"
          />
        </View>
      </View>

      {/* PAY BUTTON */}
      <TouchableOpacity
        style={styles.payButton}
        onPress={() => navigation.navigate("Success")}
      >
        <Text style={styles.payBtnText}>🔒 Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    padding: 20,
  },

  back: {
    fontSize: 22,
    marginTop: 30,
    marginBottom: 10,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
  },

  price: {
    color: "#23B26D",
    fontWeight: "700",
    fontSize: 18,
  },

  tax: {
    fontSize: 12,
    color: "#777",
  },

  payRow: {
    flexDirection: "row",
    marginBottom: 30,
  },

  card: {
    flex: 1,
    backgroundColor: "#f1efed",
    padding: 18,
    borderRadius: 20,
    alignItems: "center",
    marginRight: 10,
  },

  cardActive: {
    backgroundColor: "#27AE60",
  },

  payText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  payTextActive: {
    color: "#fff",
  },

  appleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  appleIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
    resizeMode: "contain",
  },

  label: {
    marginBottom: 5,
    color: "#444",
  },

  /* INPUT CÓ ICON */
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
    marginBottom: 15,
  },

  input: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingVertical: 14,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 16,
  },

  leftIcon: {
    position: "absolute",
    right: 50,
    width: 24,
    height: 24,
    resizeMode: "contain",
    top: "50%",
    transform: [{ translateY: -12 }],
  },

  rightIcon: {
    position: "absolute",
    right: 15,
    width: 24,
    height: 24,
    resizeMode: "contain",
    top: "50%",
    transform: [{ translateY: -12 }],
  },

  /* INPUT THƯỜNG */
  inputNormal: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
  },

  payButton: {
    backgroundColor: "#27ae60",
    padding: 18,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
  },

  payBtnText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
