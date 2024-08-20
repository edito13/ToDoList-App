import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";

import TaskList from "@/components/TaskList";

const Home = () => {
  const [tasks, setTasks] = useState<TaskI[]>([
    { key: 1, task: "Comprar pão" },
    { key: 2, task: "Estudar React native" },
    { key: 3, task: "Ir na academia hoje" },
    { key: 4, task: "Comprar chocolate" },
    { key: 5, task: "Assistir o 1 video do sujeito" },
  ]);

  return (
    <SafeAreaView className="h-full bg-secondary">
      <StatusBar barStyle={"light-content"} />
      <Text className="text-white text-center text-xl mt-5">
        Minhas Tarefas
      </Text>
      <TaskList tasks={tasks} />
      <TouchableOpacity className="absolute right-8 bottom-12 w-14 h-14 bg-primary rounded-full justify-center items-center">
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
