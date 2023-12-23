import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from "react-native";
import { Button as PaperButton } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const navigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Go To</Text>
      <View style={styles.button}>
        <PaperButton
          icon="image-multiple"
          mode="contained"
          onPress={() => navigate("Post")}
        >
          Post
        </PaperButton>
      </View>
      <View style={styles.button}>
        <PaperButton
          icon="account"
          mode="contained"
          onPress={() => navigate("User")}
        >
          User
        </PaperButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 28,
    fontWeight: "500",
    color: "#6a5acd",
  },
  button: {
    width: 300,
    marginTop: 10,
  },
});
