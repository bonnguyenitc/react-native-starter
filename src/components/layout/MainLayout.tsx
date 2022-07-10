import { MotiView } from 'moti';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@shopify/restyle';
import { styles, transitions } from '@/global';
import { useThemeStore } from '@/stores';

type MainLayoutProps = {
  children: React.ReactNode;
  safe?: boolean;
};

export const MainLayout: React.FC<MainLayoutProps> = function ({ children, safe = false }) {
  const { isDarkMode } = useThemeStore();
  const { colors } = useTheme();
  if (!safe)
    return (
      <MotiView
        style={styles.flex_1}
        transition={transitions.screen}
        from={{
          backgroundColor: isDarkMode ? colors.dark : colors.light,
        }}
        animate={{
          backgroundColor: isDarkMode ? colors.dark : colors.light,
        }}>
        {children}
      </MotiView>
    );
  return (
    <SafeAreaView style={styles.flex_1}>
      <MotiView
        style={styles.flex_1}
        transition={transitions.screen}
        from={{
          backgroundColor: isDarkMode ? colors.dark : colors.light,
        }}
        animate={{
          backgroundColor: isDarkMode ? colors.dark : colors.light,
        }}>
        {children}
      </MotiView>
    </SafeAreaView>
  );
};
