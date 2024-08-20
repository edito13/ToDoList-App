import { useEffect } from "react";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";

export default function HomeScreen() {
  useEffect(() => {
    setTimeout(() => router.push("/home"), 1500);
  }, []);

  return (
    <SafeAreaView className="h-full justify-center items-center bg-secondary">
      <StatusBar barStyle={"light-content"} />
      <View className="flex-row gap-2 items-center">
        <LottieView
          source={require("@/assets/animations/lottieflow-checkbox-05-8b57f6-easey.json")}
          autoPlay
          loop
          style={{ width: 50, height: 50 }}
        />
        <Text className="text-3xl font-normal text-primary">
          Lista de Tarefas
        </Text>
      </View>
    </SafeAreaView>
  );
}
