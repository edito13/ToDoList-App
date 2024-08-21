import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

interface AddButtonProps {
  delay: number;
  onPress: () => void;
}

const Button = Animatable.createAnimatableComponent(TouchableOpacity);

const AddButton: React.FC<AddButtonProps> = ({ delay, onPress }) => {
  return (
    <Button
      className="absolute right-8 bottom-12 w-14 h-14 bg-primary rounded-full justify-center items-center"
      animation="fadeInUp"
      useNativeDriver
      delay={delay}
      onPress={onPress}
    >
      <Ionicons name="add" size={30} color="#fff" />
    </Button>
  );
};

export default AddButton;
