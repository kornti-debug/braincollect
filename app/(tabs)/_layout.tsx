import { SymbolView } from 'expo-symbols';
import { Tabs } from 'expo-router';

const accent = '#29675d';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: accent,
        tabBarInactiveTintColor: '#858b87',
        tabBarStyle: {
          backgroundColor: '#fffdf8',
          borderTopColor: '#e9e7df',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'house.fill', android: 'home', web: 'home' }}
              tintColor={color}
              size={22}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          title: 'Collection',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'square.stack.3d.up.fill', android: 'collections', web: 'collections' }}
              tintColor={color}
              size={22}
            />
          ),
        }}
      />
    </Tabs>
  );
}
