import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import avatar from "../assets/perfil.png";

const ProfileSection = () => {
  return (
    <LinearGradient
      colors={["#a78bfa", "#c4b5fd", "#ede9fe"]}
      className="p-6 items-center rounded-b-3xl shadow-md"
    >
      {/* Foto */}
      <Image
        source={avatar}
        className="w-32 h-32 rounded-full border-4 border-purple-300"
      />

      {/*  Nombre */}
      <Text className="text-2xl font-bold text-purple-900 mt-4">
        Manuela Marroquín
      </Text>

      {/*  Rol */}
      <Text className="text-base text-purple-700 font-semibold">
        Desarrolladora de Software
      </Text>

      {/*  Bio */}
      <Text className="text-center text-gray-600 mt-2">
        Apasionada por la tecnología, la innovación y el diseño de interfaces
        móviles.
      </Text>
    </LinearGradient>
  );
};

export default ProfileSection;
