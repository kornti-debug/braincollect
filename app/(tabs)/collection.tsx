import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const colors = {
  ink: '#1f2926',
  muted: '#69746f',
  accent: '#29675d',
  accentSoft: '#e5f0eb',
  paper: '#f7f6f0',
  line: '#e5e4db',
  white: '#fffdf8',
};

export default function CollectionScreen() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
      contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.eyebrow} selectable>
          YOUR COMPANIONS
        </Text>
        <Text style={styles.title} selectable>
          Collection
        </Text>
        <Text style={styles.description} selectable>
          Every creature will stand for something you’ve learned.
        </Text>
      </View>

      <View style={styles.emptyCard}>
        <View style={styles.creaturePlaceholder}>
          <Text style={styles.sparkle} selectable>
            ✦
          </Text>
        </View>
        <Text style={styles.emptyTitle} selectable>
          A new friend is waiting.
        </Text>
        <Text style={styles.emptyDescription} selectable>
          Finish a study session to discover your first creature. Your collection will grow as you return to what you’ve learned.
        </Text>
        <Link href="/" asChild>
          <Pressable accessibilityRole="button" style={styles.button}>
            <Text style={styles.buttonLabel} selectable>
              Back to your study hub
            </Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  content: {
    flexGrow: 1,
    gap: 28,
    paddingHorizontal: 24,
    paddingTop: 38,
    paddingBottom: 36,
  },
  header: {
    gap: 10,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.3,
  },
  title: {
    color: colors.ink,
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: -1,
  },
  description: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 430,
  },
  emptyCard: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.line,
    borderCurve: 'continuous',
    borderRadius: 24,
    borderWidth: 1,
    gap: 14,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  creaturePlaceholder: {
    alignItems: 'center',
    backgroundColor: colors.accentSoft,
    borderCurve: 'continuous',
    borderRadius: 28,
    height: 88,
    justifyContent: 'center',
    width: 88,
  },
  sparkle: {
    color: colors.accent,
    fontSize: 38,
  },
  emptyTitle: {
    color: colors.ink,
    fontSize: 21,
    fontWeight: '700',
    textAlign: 'center',
  },
  emptyDescription: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 22,
    maxWidth: 310,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderCurve: 'continuous',
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: 4,
    minHeight: 50,
    paddingHorizontal: 18,
  },
  buttonLabel: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
});
