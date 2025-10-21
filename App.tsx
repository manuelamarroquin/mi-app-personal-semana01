import { SafeAreaView, ScrollView, View, Text, Linking, TouchableOpacity } from "react-native";
import { SkillCard } from "./components/SkillCard";
import { ProjectCard } from "./components/ProjectCard";
import ProfileSection from "./components/ProfileSection"; 

// Interfaces
interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface Skill {
  id: string;
  emoji: string;
  name: string;
}

interface Project {
  id: string;
  emoji: string;
  title: string;
  description: string;
  tags: string[];
}

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

// Datos personales
const personalInfo = {
  name: "Manuela Marroquín",
  title: "Desarrolladora 💻",
  bio: "Soy una desarrolladora apasionada por crear aplicaciones móviles modernas, con diseños atractivos y funcionales.",
};

// Contacto
const contacts: ContactInfo[] = [
  { icon: "📧", label: "Email", value: "marroquinbsabm75@gmail.com" },
  { icon: "📍", label: "Ubicación", value: "Bogotá, Colombia" },
  { icon: "🔗", label: "GitHub", value: "github.com/manuelamarroquin" },
];

// Habilidades
const skills: Skill[] = [
  { id: "1", emoji: "⚛️", name: "React Native" },
  { id: "2", emoji: "📘", name: "TypeScript" },
  { id: "3", emoji: "🎨", name: "TailwindCSS" },
  { id: "4", emoji: "📱", name: "Expo" },
  { id: "5", emoji: "🔥", name: "JavaScript" },
  { id: "6", emoji: "🎯", name: "Git & GitHub" },
];

// Experiencia laboral
const experiences: Experience[] = [
  {
    id: "1",
    role: "Desarrolladora Frontend",
    company: "TechNova",
    period: "2023 - Presente",
  },
  {
    id: "2",
    role: "Diseñadora UI/UX Junior",
    company: "SoftVision",
    period: "2022 - 2023",
  },
];

// Educación
const education: Education[] = [
  {
    id: "1",
    degree: "Técnica en Desarrollo de Software",
    institution: "SENA",
    year: "2023",
  },
  {
    id: "2",
    degree: "Diplomado en Diseño Web Moderno",
    institution: "Platzi",
    year: "2024",
  },
];

// Proyectos
const projects: Project[] = [
  {
    id: "1",
    emoji: "👤",
    title: "App de Perfil Personal",
    description: "Aplicación que muestra información personal con diseño moderno.",
    tags: ["React Native", "TypeScript"],
  },
  {
    id: "2",
    emoji: "📋",
    title: "Lista de Contactos",
    description: "App para gestionar contactos con búsqueda en tiempo real.",
    tags: ["React Native", "FlatList"],
  },
  {
    id: "3",
    emoji: "🎯",
    title: "TODO List",
    description: "Gestor de tareas con funcionalidad CRUD completa.",
    tags: ["React Native", "useState"],
  },
  {
    id: "4",
    emoji: "🛍️",
    title: "Tienda Virtual UI",
    description: "Diseño de interfaz para tienda de maquillaje con carrito y filtros.",
    tags: ["React Native", "UI Design", "Tailwind"],
  },
  {
    id: "5",
    emoji: "🧠",
    title: "Juego de Memoria",
    description: "Juego educativo con sistema de puntuación y ranking.",
    tags: ["React Native", "Hooks", "Animation"],
  },
];

// Redes sociales
const socialLinks = [
  {
    icon: "🐙",
    label: "GitHub",
    url: "https://github.com/manuelamarroquin",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    url: "https://linkedin.com/in/manuelamarroquin",
  },
  {
    icon: "📸",
    label: "Instagram",
    url: "https://instagram.com/manuelamarroquin",
  },
];

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-[#F5F3FF]">
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* 👤 Sección de perfil */}
        <ProfileSection />

        {/* Redes sociales */}
        <View className="flex-row justify-center mt-4">
          {socialLinks.map((social, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => Linking.openURL(social.url)}
              className="mx-3 bg-[#DDD6FE] rounded-full px-4 py-2 shadow-sm"
            >
              <Text className="text-lg text-[#4C1D95] font-semibold">
                {social.icon} {social.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Contacto */}
        <View className="mx-5 mt-6 bg-white rounded-xl p-5 border border-[#E9D5FF] shadow-md">
          {contacts.map((contact, index) => (
            <View
              key={index}
              className={`flex-row items-center ${index < contacts.length - 1 ? "mb-4" : ""}`}
            >
              <Text className="text-2xl mr-3">{contact.icon}</Text>
              <View className="flex-1">
                <Text className="text-sm text-[#6B21A8] font-semibold">
                  {contact.label}
                </Text>
                <Text className="text-base text-gray-800 font-medium">
                  {contact.value}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Experiencia */}
        <View className="mx-5 mt-8 bg-white rounded-xl p-5 border border-[#E9D5FF] shadow-md">
          <Text className="text-2xl font-bold text-[#5B21B6] mb-3">💼 Experiencia Laboral</Text>
          {experiences.map((exp) => (
            <View key={exp.id} className="mb-3">
              <Text className="text-lg font-semibold text-[#4C1D95]">{exp.role}</Text>
              <Text className="text-base text-gray-700">{exp.company}</Text>
              <Text className="text-sm text-[#6B21A8]">{exp.period}</Text>
            </View>
          ))}
        </View>

        {/* Educación */}
        <View className="mx-5 mt-8 bg-white rounded-xl p-5 border border-[#E9D5FF] shadow-md">
          <Text className="text-2xl font-bold text-[#5B21B6] mb-3">🎓 Educación</Text>
          {education.map((edu) => (
            <View key={edu.id} className="mb-3">
              <Text className="text-lg font-semibold text-[#4C1D95]">{edu.degree}</Text>
              <Text className="text-base text-gray-700">{edu.institution}</Text>
              <Text className="text-sm text-[#6B21A8]">{edu.year}</Text>
            </View>
          ))}
        </View>

        {/* Habilidades */}
        <View className="mx-5 mt-8">
          <Text className="text-2xl font-bold text-[#5B21B6] mb-4">💪 Mis Habilidades</Text>
          {skills.map((skill) => (
            <SkillCard key={skill.id} emoji={skill.emoji} name={skill.name} />
          ))}
        </View>

        {/* Proyectos */}
        <View className="mx-5 mt-8 mb-10">
          <Text className="text-2xl font-bold text-[#5B21B6] mb-4">🚀 Mis Proyectos</Text>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              emoji={project.emoji}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
