import { View, Text } from "react-native";

interface SkillCardProps {
  emoji: string;
  name: string;
}

export function SkillCard({ emoji, name }: SkillCardProps) {
  return (
    <View className="bg-white rounded-lg p-4 mb-3 flex-row items-center border border-[#E9D5FF] shadow-sm">
      <Text className="text-3xl mr-3">{emoji}</Text>
      <Text className="text-lg font-semibold text-[#4C1D95]">{name}</Text>
    </View>
  );
}
