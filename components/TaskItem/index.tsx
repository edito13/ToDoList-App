import React, { memo } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { Text, TouchableOpacity, View } from "react-native";

interface TaskItemProps {
  item: TaskI;
  handleEdit: (key: number) => void;
  handleDelete: (key: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = (props) => {
  const { item, handleEdit, handleDelete } = props;

  return (
    <Animatable.View
      className="bg-dark flex-row justify-between w-[85%] p-4 self-center mt-3 rounded-lg"
      animation="bounceIn"
      useNativeDriver
      delay={150 * item.key}
    >
      <View className="flex-row gap-x-2 items-center">
        {/* <Ionicons color="#8b57f6" name="checkbox-outline" size={25} /> */}
        <Text className="text-white overflow-hidden text-base">
          {item.task}
        </Text>
      </View>
      <View className="flex-row gap-2">
        <TouchableOpacity onPress={() => handleEdit(item.key)}>
          <Ionicons color="#8b57f6" name="create-outline" size={27} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.key)}>
          <Ionicons color="#8b57f6" name="trash-outline" size={27} />
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};

export default memo(TaskItem);
