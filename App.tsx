//에러 화면 방지
import {LogBox} from 'react-native';
console.error = error => error.apply;
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Property ']);
LogBox.ignoreLogs(['it is un']);
LogBox.ignoreLogs(['The title']);
LogBox.ignoreLogs(['']);
//

import 'react-native-gesture-handler';
import React, {useState, useCallback} from 'react';

import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {ToggleThemeProvider} from './src/contexts';

import MainNavigator from './src/screens/MainNavigator';

enableScreens();

export default function App() {
  const scheme = useColorScheme(); // 'dark' 혹은 'light'
  const [theme, setTheme] = useState(
    scheme === 'dark' ? DarkTheme : DefaultTheme,
  );

  const toggleTheme = useCallback(
    () => setTheme(({dark}) => (dark ? DefaultTheme : DarkTheme)),
    [],
  );
  return (
    <ToggleThemeProvider toggleTheme={toggleTheme}>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ToggleThemeProvider>
  );
}
