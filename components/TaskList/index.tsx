import React, { useCallback } from "react";

import { useAtom } from "jotai";
import { Alert, FlatList, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TaskAtom } from "@/atom";
import TaskItem from "../TaskItem";

interface TaskListProps {}

const TaskList: React.FC<TaskListProps> = () => {
  const [Tasks, setTasks] = useAtom(TaskAtom);

  const handleDelete = useCallback(
    async (key: number) => {
      const newTasks = Tasks.filter((item) => item.key !== key);

      try {
        setTasks(newTasks);
        await AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
        Alert.alert("Deletada com sucesso");
      } catch (error) {
        console.log("Erro ao salvar a tarefa: ", error);
      }
    },
    [Tasks, setTasks]
  );

  return (
    <View>
      {Tasks.length ? (
        <FlatList
          data={Tasks}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item, index }) => (
            <TaskItem item={item} index={index} handleDelete={handleDelete} />
          )}
        />
      ) : (
        <Text className="text-white text-base mt-5 text-center">
          Nenhuma tarefa foi cadastrada ainda...
        </Text>
      )}
    </View>
  );
};

export default TaskList;
