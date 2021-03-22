import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#283048", "#859398"],
    title: "Clouds",
    sub: "Like Gloomy Sunday",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#77A1D3", "#79CBCA", "#E684AE"],
    title: "Haze",
    sub: "Like Gloomy Sunday",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#135058", "#F1F2B5"],
    title: "Thunderstorm",
    sub: "Like Gloomy Sunday",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    sub: "Like Gloomy Sunday",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Rain",
    sub: "Like Gloomy Sunday",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    sub: "Like Gloomy Sunday",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#D3959B", "#BFE6BA"],
    title: "Clear",
    sub: "Like Gloomy Sunday",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist",
    sub: "Like Gloomy Sunday",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#16222A", "#3A6073"],
    title: "Smoke",
    sub: "Like Gloomy Sunday",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dust",
    sub: "Like Gloomy Sunday",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#403B4A", "#E7E9BB"],
    title: "Fog",
    sub: "Like Gloomy Sunday",
  },
  Sand: {
    iconName: "weather-windy",
    gradient: ["#4BC0C8", "#C779D0", "#FEAC5E"],
    title: "Sand",
    sub: "Like Gloomy Sunday",
  },
  Ash: {
    iconName: "weather-cloudy-alert",
    gradient: ["#3f4c6b", "#606c88"],
    title: "Ash",
    sub: "Like Gloomy Sunday",
  },
  Squall: {
    iconName: "weather-hurricane",
    gradient: ["#00223E", "#FFA17F"],
    title: "Squall",
    sub: "Like Gloomy Sunday",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#2E1437", "#948E99"],
    title: "Tornado",
    sub: "Like Gloomy Sunday",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textcontainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].sub}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textcontainer: {
    paddingHorizontal: 20,
  },
});
