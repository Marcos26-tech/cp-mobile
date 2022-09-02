import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function Tarefas() {
  const [tarefa, setTarefa] = useState();
  const [listaTarefas, setListaTarefas] = useState([]);

  const STORAGE_KEY = "TAREFA";

  handleTextChanged = (tarefa) => {
    setTarefa(tarefa);
  };

  handleSubmit = () => {
    setListaTarefas((listaTarefas) => [...listaTarefas, tarefa]);
    saveName(listaTarefas, STORAGE_KEY);
  };

  saveName = async (value, key, callback = null) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value), callback);
    } catch (e) {
      throw new Error("Não foi possível salvar a tarefa");
    }
  };

  function conclusion(index) {
    if (index !== -1) {
      setListaTarefas([
        ...listaTarefas.slice(0, index),
        ...listaTarefas.slice(index + 1),
      ]);
    }
    saveName(listaTarefas, STORAGE_KEY);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Nova tarefa aqui"
        maxLength={20}
        onBlur={Keyboard.dismiss}
        onChangeText={this.handleTextChanged}
      />
      <TouchableOpacity style={styles.saveButton} onPress={this.handleSubmit}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
      <Text>Lista de tarefas</Text>

      {listaTarefas.length >= 1 ? (
        listaTarefas.map((tarefa, index) => (
          <TouchableOpacity key={index} onPress={() => conclusion(index)}>
            <Text key={index} style={styles.text}>
              {index} {tarefa}
            </Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text>Lista vazia...</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textInput: {
    borderColor: "#babaca",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  saveButton: {
    borderWidth: 1,
    borderColor: "#007bff",
    backgroundColor: "#007bff",
    padding: 15,
    margin: 5,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    color: "black",
  },
  concluido: {
    color: "blue",
  },
});
