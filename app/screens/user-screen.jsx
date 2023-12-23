import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
  View,
  ActivityIndicator,
} from "react-native";
import User from "../components/user";
import { useEffect, useState } from "react";

export default function UserScreen() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const resData = await res.json();
      setData(resData.users);
    } catch (error) {
      console.log("Failed to fetch Data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size={"large"} />
        </View>
      )}
      <FlatList
        data={data}
        renderItem={(data) => <User user={data} />}
        keyExtractor={(data) => data.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 8,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
