import React from 'react';
import { MotiView } from 'moti';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, transitions } from '@/global';
import { useTheme } from '@/themes';

type LayoutProps = {
  children: React.ReactNode;
  safe?: boolean;
};

export const Layout: React.FC<LayoutProps> = function ({ children, safe = false }) {
  const { colors } = useTheme();
  if (!safe)
    return (
      <MotiView
        style={styles.flex_1}
        transition={transitions.screen}
        from={{
          backgroundColor: colors.background,
        }}
        animate={{
          backgroundColor: colors.background,
        }}>
        {children}
      </MotiView>
    );
  return (
    <SafeAreaView style={[styles.flex_1, { backgroundColor: colors.background }]}>
      <MotiView
        style={styles.flex_1}
        transition={transitions.screen}
        from={{
          backgroundColor: colors.background,
        }}
        animate={{
          backgroundColor: colors.background,
        }}>
        {children}
      </MotiView>
    </SafeAreaView>
  );
};
