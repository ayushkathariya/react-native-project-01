import { View, Text, Image, StyleSheet } from "react-native";

export default function UserProfileCard({ user }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: user?.item.image }} style={styles.profileImage} />
      <Text
        style={styles.userName}
      >{`${user?.item.firstName} ${user?.item.lastName}`}</Text>
      <Text style={styles.userDetails}>{`Age: ${user?.item.age}`}</Text>
      <Text style={styles.userDetails}>{`Gender: ${user?.item.gender}`}</Text>
      <Text style={styles.userDetails}>{`Email: ${user?.item.email}`}</Text>
      <Text style={styles.userDetails}>{`Phone: ${user?.item.phone}`}</Text>
      <Text
        style={styles.userDetails}
      >{`Username: ${user?.item.username}`}</Text>
      <Text
        style={styles.userDetails}
      >{`Birth Date: ${user?.item.birthDate}`}</Text>
      <Text
        style={styles.address}
      >{`Address: ${user?.item.address.address}, ${user?.item.address.city}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 16,
    alignItems: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  userDetails: {
    fontSize: 16,
    marginBottom: 6,
    color: "#666",
  },
  address: {
    fontSize: 16,
    color: "#333",
  },
});
