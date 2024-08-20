import React, { useCallback, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";

import TaskItem from "../TaskItem";

interface TaskListProps {
  tasks: TaskI[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
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
      {tasks.length ? (
        <FlatList
          data={tasks}
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
