import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function PaymentSuccessScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* BACK BUTTON */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>

        {/* IMAGE */}
        <Image
          source={require("../assets/images/Group 167.png")}
          style={styles.image}
        />

        {/* TITLE */}
        <Text style={styles.title}>Payment Success, Yayy!</Text>

        {/* DESCRIPTION */}
        <Text style={styles.desc}>
          We will send order details and invoice in your contact and registered
          email
        </Text>

        {/* DETAILS BUTTON */}
        <TouchableOpacity style={styles.detailsBtn}>
          <Text style={styles.detailsText}>Check Details →</Text>
        </TouchableOpacity>

        {/* DOWNLOAD BUTTON */}
        <TouchableOpacity style={styles.downloadBtn}>
          <Text style={styles.downloadText}>Download Invoice</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default PaymentSuccessScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 70,
  },

  /* BACK BUTTON */
  backBtn: {
    position: "absolute",
    top: 40,
    left: 10,

    width: 44,
    height: 44,
    borderRadius: 12,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,

    zIndex: 10,
  },

  backIcon: {
    fontSize: 20,
  },

  /* IMAGE */
  image: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginVertical: 30,
  },

  /* TEXT */
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
  },

  desc: {
    textAlign: "center",
    color: "#777",
    marginBottom: 30,
  },

  /* BUTTONS */
  detailsBtn: {
    marginBottom: 20,
  },

  detailsText: {
    color: "#4C6EF5",
    fontWeight: "600",
  },

  downloadBtn: {
    backgroundColor: "#5A6BEF",
    padding: 18,
    borderRadius: 14,
    width: "100%",
    alignItems: "center",
  },

  downloadText: {
    color: "#fff",
    fontWeight: "600",
  },
});
