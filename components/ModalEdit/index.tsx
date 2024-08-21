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
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SelectedTaskAtom, TaskAtom } from "@/atom";

interface ModalEditProps extends ModalProps {
  onClose: () => void;
}

const ModalEdit: React.FC<ModalEditProps> = ({ onClose, ...props }) => {
  const [Tasks, setTasks] = useAtom(TaskAtom);
  const [TaskSelected, setTaskSelected] = useAtom(SelectedTaskAtom);
  const [TaskText, setTaskText] = useState(TaskSelected?.task ?? "");

  useEffect(() => {
    setTaskText(TaskSelected?.task ?? "");
  }, [TaskSelected]);

  const handleEditTask = async (key: number) => {
    if (!key) return;

    const newTasks = Tasks.map((item) =>
      item.key === key ? { ...item, task: TaskText } : item
    );

    try {
      setTasks(newTasks);
      await AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
      Alert.alert("Tarefa Editada", "Sua tarefa foi editada com sucesso.");
    } catch (error) {
      console.log("Erro ao editar a tarefa: ", error);
    } finally {
      setTaskText("");
      setTaskSelected(null);
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
              onPress={() => handleEditTask(TaskSelected?.key ?? 0)}
              className="flex-row items-center justify-center p-3 bg-primary text-white rounded-lg"
            >
              <Ionicons color="#fff" name="create-outline" size={28} />
              <Text className="text-white text-xl ml-2">Editar Tarefa</Text>
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

export default ModalEdit;
