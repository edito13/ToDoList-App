import React, { useCallback, useEffect, useState } from "react";

import { useAtom } from "jotai";
import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TaskAtom } from "@/atom";

import ModalAdd from "@/components/ModalAdd";
import TaskList from "@/components/TaskList";
import AddButton from "@/components/AddButton";

const Home = () => {
  const [tasks, setTasks] = useAtom(TaskAtom);
  const [isOpen, setIsOpen] = useState(false);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("tasks");
        if (storedTasks) {
          const data = JSON.parse(storedTasks);
          setTasks(data);
        }
      } catch (error) {
        console.log("Erro ao carregar tarefas:", error);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    };

    loadTasks();
  }, []);

  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <SafeAreaView className="h-full bg-secondary">
      <StatusBar barStyle={"light-content"} />
      <View className="flex-row justify-center items-center gap-2 mt-5">
        <Ionicons color="#8b57f6" name="checkbox-outline" size={25} />
        <Text className="text-white text-center text-2xl">Minhas Tarefas</Text>
      </View>
      {IsLoading ? (
        <ActivityIndicator className="mt-5" color="#8b57f6" />
      ) : (
        <TaskList />
      )}
      <ModalAdd visible={isOpen} onClose={handleClose} />
      <AddButton onPress={() => setIsOpen(true)} delay={100 * tasks.length} />
    </SafeAreaView>
  );
};

export default Home;
