import TaskList from "@/components/TaskList";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-secondary">
      <StatusBar barStyle={"light-content"} />
      <Text className="text-white text-center text-xl mt-5">
        Minhas Tarefas
      </Text>
      <TaskList />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
