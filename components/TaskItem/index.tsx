import React, { memo, useCallback, useState } from "react";

import { useAtom } from "jotai";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { Text, TouchableOpacity, View } from "react-native";

import ModalEdit from "../ModalEdit";
import { SelectedTaskAtom } from "@/atom";

interface TaskItemProps {
  item: TaskI;
  index: number;
  handleDelete: (key: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = (props) => {
  const { item, index, handleDelete } = props;
  const [_, setTask] = useAtom(SelectedTaskAtom);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setTask(item);
    setIsOpen(true);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Animatable.View
      className="bg-dark flex-row justify-between w-[85%] p-4 self-center mt-3 rounded-lg"
      animation="bounceIn"
      delay={150 * index}
      useNativeDriver
    >
      <View className="flex-row gap-x-2 items-center">
        {/* <Ionicons color="#8b57f6" name="checkbox-outline" size={25} /> */}
        <Text className="text-white text-base">{item.task}</Text>
      </View>
      <View className="flex-row gap-2">
        <TouchableOpacity onPress={() => handleOpen()}>
          <Ionicons color="#8b57f6" name="create-outline" size={27} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.key)}>
          <Ionicons color="#8b57f6" name="trash-outline" size={27} />
        </TouchableOpacity>
      </View>
      <ModalEdit visible={isOpen} onClose={handleClose} />
    </Animatable.View>
  );
};

export default memo(TaskItem);
