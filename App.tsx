import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native'
import { SkillCard } from './components/SkillCard'
import { ProjectCard } from './components/ProjectCard'

interface ContactInfo {
  icon: string
  label: string
  value: string
}

interface Skill {
  id: string
  emoji: string
  name: string
}

interface Project {
  id: string
  emoji: string
  title: string
  description: string
  tags: string[]
}

const personalInfo = {
  name: 'Manuela Alejandra Marroquín',
  title: 'Desarrolladora de Software',
  avatar: 'https://i.pravatar.cc/150?img=33',
  bio: 'Soy una desarrolladora apasionada por crear apps móviles intuitivas y funcionales.',
}

const contacts: ContactInfo[] = [
  { icon: '📧', label: 'Email', value: 'marroquinbasabm75@gmail.com' },
  { icon: '📍', label: 'Ubicación', value: 'Bogotá, Colombia' },
  { icon: '🔗', label: 'GitHub', value: '' },
]

const skills: Skill[] = [
  { id: '1', emoji: '⚛️', name: 'React Native' },
  { id: '2', emoji: '📘', name: 'TypeScript' },
  { id: '3', emoji: '🎨', name: 'TailwindCSS' },
  { id: '4', emoji: '📱', name: 'Expo' },
  { id: '5', emoji: '🔥', name: 'JavaScript' },
  { id: '6', emoji: '🎯', name: 'Git & GitHub' },
]

const projects: Project[] = [
  {
    id: '1',
    emoji: '👤',
    title: 'App de Perfil Personal',
    description: 'Aplicación que muestra mi información y habilidades con diseño moderno.',
    tags: ['React Native', 'TypeScript'],
  },
  {
    id: '2',
    emoji: '📋',
    title: 'Lista de Contactos',
    description: 'App para gestionar contactos y visualizar detalles básicos.',
    tags: ['React Native', 'FlatList'],
  },
  {
    id: '3',
    emoji: '🎯',
    title: 'TODO List',
    description: 'Gestor de tareas con estado local y funcionalidad CRUD.',
    tags: ['React Native', 'useState'],
  },
]

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View className="bg-blue-600 h-48 items-center justify-end pb-10">
          <Text className="text-white text-3xl font-bold">MI APP PERSONAL</Text>
        </View>

        <View className="items-center -mt-16">
          <Image
            source={{ uri: personalInfo.avatar }}
            className="w-32 h-32 rounded-full border-4 border-white"
          />
        </View>

        <View className="items-center mt-4 px-5">
          <Text className="text-3xl font-bold text-gray-900">{personalInfo.name}</Text>
          <Text className="text-lg text-gray-600 mt-1">{personalInfo.title}</Text>
        </View>

        <View className="mx-5 mt-6 bg-white rounded-xl p-5 border border-gray-200">
          {contacts.map((contact, index) => (
            <View key={index} className="flex-row items-center mb-3">
              <Text className="text-2xl mr-3">{contact.icon}</Text>
              <View className="flex-1">
                <Text className="text-sm text-gray-500">{contact.label}</Text>
                <Text className="text-base text-gray-900 font-medium">{contact.value}</Text>
              </View>
            </View>
          ))}
        </View>

        <View className="mx-5 mt-6 bg-white rounded-xl p-5 border border-gray-200">
          <Text className="text-xl font-bold text-gray-900 mb-3">Sobre Mí</Text>
          <Text className="text-base text-gray-600 leading-6">{personalInfo.bio}</Text>
        </View>

        <View className="mx-5 mt-8">
          <Text className="text-2xl font-bold text-gray-900 mb-4">💪 Mis Habilidades</Text>
          {skills.map((skill) => (
            <SkillCard key={skill.id} emoji={skill.emoji} name={skill.name} />
          ))}
        </View>

        
        <View className="mx-5 mt-8 mb-10">
          <Text className="text-2xl font-bold text-gray-900 mb-4">🚀 Mis Proyectos</Text>
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
  )
}
