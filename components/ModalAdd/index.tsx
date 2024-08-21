import {
  Alert,
  Modal,
  ModalProps,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TaskAtom } from "@/atom";

interface ModalAddProps extends ModalProps {
  onClose: () => void;
}

const ModalAdd: React.FC<ModalAddProps> = ({ onClose, ...props }) => {
  const [Tasks, setTasks] = useAtom(TaskAtom);
  const [TaskText, setTaskText] = useState("");

  const handleAddTask = async (task: string) => {
    if (task.trim() === "") {
      Alert.alert("Erro", "A tarefa não pode estar vazia.");
      return;
    }

    const newTasks = [...Tasks, { key: Date.now(), task }];

    try {
      setTasks(newTasks);
      await AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
      Alert.alert("Nova Tarefa", "Sua tarefa foi adicionada com sucesso.");
    } catch (error) {
      console.log("Erro ao salvar a tarefa: ", error);
    } finally {
      setTaskText("");
      onClose();
    }
  };

  return (
    <Modal animationType="slide" {...props}>
      <SafeAreaView className="h-full bg-secondary">
        <View className="items-center mt-5">
          <Text className="text-2xl text-white">Adicionar nova tarefa</Text>
          <TextInput
            multiline
            value={TaskText}
            onChangeText={setTaskText}
            className="bg-white h-20 w-[80%] p-3 text-xl rounded-md placeholder:text-gray-500 mt-5"
            placeholder="Descreva a sua tarefa..."
          />
          <View className="w-full max-w-[80%] flex-row items-center justify-between mt-6">
            <TouchableOpacity
              onPress={() => handleAddTask(TaskText)}
              className="flex-row items-center justify-center p-3 bg-primary text-white rounded-lg"
            >
              <Ionicons color="#fff" name="add-circle" size={28} />
              <Text className="text-white text-xl ml-2">Nova Tarefa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onClose}
              className="p-3 bg-dark text-white rounded-lg"
            >
              <Text className="text-white text-xl ml-2">Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalAdd;
