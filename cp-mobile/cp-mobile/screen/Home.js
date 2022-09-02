import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Home(props) {
  function onPress() {
    props.navigation.navigate("Tarefas");
  }
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao app de tarefas!✅</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Tarefas</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
