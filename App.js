import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Store from "./src/store";
import StoreContext from "./src/context/store";
import Comp from "./src/components/Comp";
export default function App() {
  const rootStore = new Store();
  return (
    <View style={styles.container}>
      <StoreContext.Provider value={rootStore}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>{rootStore.user.name}</Text>
        <StatusBar style="auto" />
      </StoreContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
