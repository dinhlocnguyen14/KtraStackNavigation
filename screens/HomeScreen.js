import React from "react";
import BottomNav from "../components/BottomNav";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F7F7" />

      <View style={styles.container}>
        {/* CONTENT */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/* HEADER */}
          <View style={styles.header}>
            <View>
              <Text style={styles.hello}>Hello 👋</Text>
              <Text style={styles.name}>Christie Doe</Text>
            </View>

            <Image
              source={require("../assets/avatars/Mask Group.png")}
              style={styles.avatar}
            />
          </View>

          {/* INSIGHTS */}
          <Text style={styles.sectionTitle}>Your Insights</Text>

          <View style={styles.grid}>
            {/* SCAN */}
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Scan")}
            >
              <View style={[styles.iconBox, { backgroundColor: "#E7ECFF" }]}>
                <Image
                  source={require("../assets/icons/Group 157.png")}
                  style={styles.icon}
                />
              </View>

              <Text style={styles.cardTitle}>Scan new</Text>
              <Text style={styles.cardSub}>Scanned 483</Text>
            </TouchableOpacity>

            {/* COUNTERFEITS */}
            <View style={styles.card}>
              <View style={[styles.iconBox, { backgroundColor: "#FFE8DE" }]}>
                <Image
                  source={require("../assets/icons/Frame.png")}
                  style={styles.icon}
                />
              </View>

              <Text style={styles.cardTitle}>Counterfeits</Text>
              <Text style={styles.cardSub}>Counterfeit 32</Text>
            </View>

            {/* SUCCESS */}
            <View style={styles.card}>
              <View style={[styles.iconBox, { backgroundColor: "#DFF3EE" }]}>
                <Image
                  source={require("../assets/icons/Group 158.png")}
                  style={styles.icon}
                />
              </View>

              <Text style={styles.cardTitle}>Success</Text>
              <Text style={styles.cardSub}>Checkouts 8</Text>
            </View>

            {/* DIRECTORY */}
            <View style={styles.card}>
              <View style={[styles.iconBox, { backgroundColor: "#E3F3FA" }]}>
                <Image
                  source={require("../assets/icons/Group 151.png")}
                  style={styles.icon}
                />
              </View>

              <Text style={styles.cardTitle}>Directory</Text>
              <Text style={styles.cardSub}>History 26</Text>
            </View>
          </View>

          {/* EXPLORE */}
          <View style={styles.exploreHeader}>
            <Text style={styles.sectionTitle}>Explore More</Text>
            <Text style={styles.arrow}>→</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.exploreCard}>
              <Image
                source={require("../assets/icons/Rectangle 31.png")}
                style={styles.exploreImage}
              />
            </View>

            <View style={styles.exploreCard}>
              <Image
                source={require("../assets/icons/Amber Bottle.png")}
                style={styles.exploreImage}
              />
            </View>

            <View style={styles.exploreCard}>
              <Image
                source={require("../assets/icons/Rectangle 45.png")}
                style={styles.exploreImage}
              />
            </View>
          </ScrollView>
        </ScrollView>

        {/* BOTTOM NAV */}
        <BottomNav navigation={navigation} active="home" />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
  },

  hello: {
    fontSize: 26,
    fontWeight: "700",
    color: "#000",
  },

  name: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#ECECF1",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  cardSub: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },

  exploreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  arrow: {
    fontSize: 22,
    color: "#000",
  },

  exploreCard: {
    width: 110,
    height: 110,
    backgroundColor: "#ECECF1",
    borderRadius: 20,
    marginRight: 15,
    marginTop: 20,
    overflow: "hidden",
  },

  exploreImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
