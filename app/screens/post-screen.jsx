import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Post from "../components/post";
import { useEffect, useState } from "react";

export default function PostScreen() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/posts");
      const resData = await res.json();
      setData(resData.posts);
    } catch (error) {
      console.log("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <ActivityIndicator style={styles.loading} size={"large"} />}
      {data && (
        <FlatList
          data={data}
          renderItem={(data) => {
            return <Post post={data} />;
          }}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 26,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
