import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  console.log('Color Scheme:', colorScheme);
  //console.log('Colors:', Colors[colorScheme]); // Check if the colors are defined correctly
  
  return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault, // Ensure this isn't causing issues
          headerShown: true,
          tabBarButton: HapticTab,
          // tabBarBackground: TabBarBackground,  <-- Comment this out temporarily
          // tabBarStyle: {
          //   backgroundColor: Colors[colorScheme ?? 'light'].tint, // Force orange background
          // },
        }}
        
      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (<IconSymbol size={28} name="house.fill" color={color} />),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact us',
          tabBarIcon: ({ color }) => (<Ionicons name="people-circle" size={28} color={color}/>)
        }}
      />

    </Tabs>
  );
}
