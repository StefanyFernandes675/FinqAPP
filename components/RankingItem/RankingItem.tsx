import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';

import Badge1 from '../../assets/badge-ranking.png';
import Badge2 from '../../assets/badge-ranking2.png';
import Badge3 from '../../assets/badge-ranking3.png';

const badges = [Badge1, Badge2, Badge3];

export default function RankingItem({ item, index }) {
  const badge = badges[index] || null;

  return item.me === 1 ? (
    <LinearGradient
      colors={['#8762FF', '#6A5ACD']}
      style={[styles.row, styles.rowMe]}
    >
      {badge ? (
        <Image source={badge} style={styles.badge} />
      ) : (
        <Text style={styles.textBadge}>{index + 1}</Text>
      )}
      <Text style={styles.textName}>{item.name}</Text>
      <Text style={styles.textXP}>{item.experience} XP</Text>
    </LinearGradient>
  ) : (
    <View style={styles.row}>
      {badge ? (
        <Image source={badge} style={styles.badge} />
      ) : (
        <Text style={styles.textBadge}>{index + 1}</Text>
      )}
      <Text style={styles.textName}>{item.name}</Text>
      <Text style={styles.textXP}>{item.experience} XP</Text>
    </View>
  );
}
