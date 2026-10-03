// src/components/ProfileCard.js
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileCard({ nama, nim, prodi, onPress }) {
  const inisial = nama
    .split(' ')
    .map((kata) => kata[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{inisial}</Text>
      </View>
      <Text style={styles.nama}>{nama}</Text>
      <Text style={styles.nim}>{nim}</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{prodi}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  nama: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  nim: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 4,
  },
  badge: {
    backgroundColor: '#e8f4f8',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginTop: 12,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3498db',
  },
});
