import { View, Text } from "react-native";

interface ProjectCardProps {
  emoji: string;
  title: string;
  description: string;
  tags: string[];
}

export function ProjectCard({
  emoji,
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <View className="bg-white rounded-xl p-5 mb-4 border border-[#E9D5FF] shadow-md">
      {/* Header */}
      <View className="flex-row items-center mb-3">
        <Text className="text-3xl mr-3">{emoji}</Text>
        <Text className="text-xl font-bold text-[#5B21B6] flex-1">{title}</Text>
      </View>

      {/* Descripción */}
      <Text className="text-base text-gray-700 mb-3 leading-5 font-medium">
        {description}
      </Text>

      {/* Tags */}
      <View className="flex-row flex-wrap">
        {tags.map((tag, index) => (
          <View
            key={index}
            className="bg-[#DDD6FE] rounded-full px-3 py-1 mr-2 mb-2 shadow-sm"
          >
            <Text className="text-sm text-[#4C1D95] font-semibold">{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
