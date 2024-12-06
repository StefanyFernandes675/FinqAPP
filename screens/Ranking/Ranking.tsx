import React from 'react';
import { View, SafeAreaView, Text, FlatList, Image } from 'react-native';
import { styles } from './style';
import rankingData from '../../assets/ranking/ranking';
import RankingItem from '../../components/RankingItem/RankingItem';

import Badge from '../../assets/badge-ranking.png';

export default function Ranking() {
  const ranking = [...rankingData].sort((a, b) => b.experience - a.experience);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textRanking}>Ranking</Text>
      <Image source={Badge} style={styles.image}/>
      <FlatList
        data={ranking}
        renderItem={({ item, index }) => (
          <RankingItem item={item} index={index} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
