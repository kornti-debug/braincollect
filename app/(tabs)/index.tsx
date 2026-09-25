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

export default function HomeScreen() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
      contentContainerStyle={styles.content}>
      <View style={styles.brandRow}>
        <View style={styles.brandMark}>
          <Text style={styles.brandMarkText} selectable>
            B
          </Text>
        </View>
        <View>
          <Text style={styles.brandName} selectable>
            Braincollect
          </Text>
          <Text style={styles.brandCaption} selectable>
            STUDY · COLLECT · GROW
          </Text>
        </View>
      </View>

      <View style={styles.hero}>
        <Text style={styles.eyebrow} selectable>
          YOUR NOTES, REIMAGINED
        </Text>
        <Text style={styles.title} selectable>
          Make learning an adventure.
        </Text>
        <Text style={styles.description} selectable>
          Turn the things you need to study into short quizzes and a collection worth growing.
        </Text>
      </View>

      <View style={styles.sectionHeading}>
        <Text style={styles.sectionTitle} selectable>
          YOUR NEXT STEP
        </Text>
        <View style={styles.stepPill}>
          <Text style={styles.stepText} selectable>
            01 / BEGIN
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardIcon}>
          <Text style={styles.cardIconText} selectable>
            ✦
          </Text>
        </View>
        <Text style={styles.cardEyebrow} selectable>
          FIRST STUDY SET
        </Text>
        <Text style={styles.cardTitle} selectable>
          Your collection starts with one answer.
        </Text>
        <Text style={styles.cardDescription} selectable>
          We’re shaping the first study flow now. Your creatures will grow from the things you learn.
        </Text>
        <Link href="/collection" asChild>
          <Pressable accessibilityRole="button" style={styles.button}>
            <Text style={styles.buttonLabel} selectable>
              Preview your collection
            </Text>
            <Text style={styles.buttonArrow} selectable>
              →
            </Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.note}>
        <Text style={styles.noteTitle} selectable>
          Built around what you’re studying
        </Text>
        <Text style={styles.noteBody} selectable>
          Questions will include evidence from your own material, so you can review them before a quiz.
        </Text>
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
    paddingTop: 24,
    paddingBottom: 36,
  },
  brandRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  brandMark: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderCurve: 'continuous',
    borderRadius: 15,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  brandMarkText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '800',
  },
  brandName: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: '700',
  },
  brandCaption: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.1,
    marginTop: 3,
  },
  hero: {
    gap: 12,
    paddingTop: 14,
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
    lineHeight: 42,
    maxWidth: 340,
  },
  description: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 440,
  },
  sectionHeading: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: colors.ink,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.1,
  },
  stepPill: {
    backgroundColor: colors.accentSoft,
    borderCurve: 'continuous',
    borderRadius: 999,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  stepText: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  card: {
    backgroundColor: colors.white,
    borderColor: colors.line,
    borderCurve: 'continuous',
    borderRadius: 24,
    borderWidth: 1,
    gap: 12,
    padding: 22,
  },
  cardIcon: {
    alignItems: 'center',
    backgroundColor: colors.accentSoft,
    borderCurve: 'continuous',
    borderRadius: 14,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  cardIconText: {
    color: colors.accent,
    fontSize: 21,
    fontWeight: '700',
  },
  cardEyebrow: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.1,
    marginTop: 2,
  },
  cardTitle: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: -0.3,
    lineHeight: 28,
  },
  cardDescription: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderCurve: 'continuous',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    minHeight: 52,
    paddingHorizontal: 17,
  },
  buttonLabel: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  buttonArrow: {
    color: colors.white,
    fontSize: 20,
  },
  note: {
    borderLeftColor: '#dbb56b',
    borderLeftWidth: 3,
    gap: 5,
    paddingLeft: 14,
  },
  noteTitle: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: '700',
  },
  noteBody: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20,
  },
});
