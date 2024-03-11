import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import LoginScreen from "./App/screen/LoginScreen";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    OutfitRegular: require("./assets/fonts/Outfit-Regular.ttf"),
    OutfitBlack: require("./assets/fonts/Outfit-Black.ttf"),
    OutfitExtraBold: require("./assets/fonts/Outfit-ExtraBold.ttf"),
    OutfitBold: require("./assets/fonts/Outfit-Bold.ttf"),
    OutfitExtraLight: require("./assets/fonts/Outfit-ExtraLight.ttf"),
    OutfitLight: require("./assets/fonts/Outfit-Light.ttf"),
    OutfitMedium: require("./assets/fonts/Outfit-Medium.ttf"),
    OutfitSemiBold: require("./assets/fonts/Outfit-SemiBold.ttf"),
    OutfitThin: require("./assets/fonts/Outfit-Thin.ttf"),
  });

  return (
    <View style={styles.container}>
  <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
});
