import React, { useCallback, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import TaskItem from "./TaskItem";

interface TaskListProps {}

const TaskList: React.FC<TaskListProps> = () => {
  const [task, setTask] = useState<TaskI[]>([
    { key: 1, task: "Comprar pão" },
    { key: 2, task: "Estudar React native" },
    { key: 3, task: "Ir na academia hoje" },
    { key: 4, task: "Comprar chocolate" },
    { key: 5, task: "Assistir o 1 video do sujeito" },
  ]);

  const handleDelete = useCallback((key: number) => {
    // const newTasks = task.filter((item) => item.key !== key);
    // setTask(newTasks);
    Alert.alert("Deletado");
  }, []);

  const handleEdit = useCallback((key: number) => {
    Alert.alert("Editado");
  }, []);

  return (
    <View>
      {task.length ? (
        <FlatList
          data={task}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <TaskItem
              item={item}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )}
        />
      ) : (
        <Text>Nenhuma tarefa foi cadastrada ainda...</Text>
      )}
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({});
