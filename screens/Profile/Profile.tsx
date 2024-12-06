import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style';
import * as Progress from 'react-native-progress';

import {COLORS} from '../../assets/colors/colors';

import Books from '../../assets/books.png';
import Badge from '../../assets/badge-3.png';
import Coffee from '../../assets/coffee.png';
import Money from '../../assets/money.png';
import Award from '../../assets/badge-ranking3.png';

export default function Profile({ navigation }) {
  const [total, setTotal] = useState(7);
  const [watched, setWatched] = useState(5);
  const progress = (watched) / total;

  return (
    <View style={styles.container}>
      <View>
        <Image source={Badge} />
      </View>
      <View>
        <View style={styles.containerNameFlag}>
          <Text style={styles.textName}>Otávio Alexandre</Text>
          <FontAwesome name="flag" size={24} color={COLORS.purpleDark} />
        </View>
        <View>
          <View style={styles.watched}>
            <View style={styles.watchedRow}>
              <Text style={styles.watchedText}>Watched classes</Text>
              <Text>📚</Text>
            </View>
            <Text style={styles.watchedTotal}>{watched} of {total}</Text>
            <Progress.Bar
              progress={progress}
              width={200}
              color="#6A5ACD"
              unfilledColor="#D3D3D3"
              borderColor="#6A5ACD"
            />
          </View>
          <View style={styles.stats}>
            <Text style={styles.textName}>Statistics</Text>
            <View style={styles.rowStats}>
              <View style={styles.itemStats}>
                <Image source={Coffee} style={styles.imgStats}/>
                <View>
                  <Text style={styles.textStats}>192</Text>
                  <Text style={styles.descStats}>Day Streak</Text>
                </View>
              </View>
              <View style={styles.itemStats}>
                <Image source={Money} style={styles.imgStats}/>
                <View>
                  <Text style={styles.textStats}>$3993</Text>
                  <Text style={styles.descStats}>Total Money</Text>
                </View>
              </View>
            </View>

            <View style={styles.rowStats}>
              <View style={styles.itemStats}>
                <Image source={Award} style={styles.imgStats}/>
                <View>
                  <Text style={styles.textStats}>MD</Text>
                  <Text style={styles.descStats}>League</Text>
                </View>
              </View>
              <View style={styles.itemStats}>
                <Image source={Books} style={styles.imgStats}/>
                <View>
                  <Text style={styles.textStats}>Prep</Text>
                  <Text style={styles.descStats}>Top Course</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}