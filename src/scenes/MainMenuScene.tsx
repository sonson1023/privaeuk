import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useState } from 'react';
import { FlatList, Image, FlatListProps, SafeAreaView, StyleSheet, View, StyleProp, Route, ScrollView } from 'react-native';

import { List, Text } from 'react-native-paper';
import { StackNavProp, StackParamList, StackRouteProp } from '../types/Navigation';
import { CategoryItem, MainMenuItem } from '../types/types';

// export type MainMenuSceneProps = StackScreenProps<StackParamList, "MainMenu">;

const MainMenuScene = () => {
  let { navigate } = useNavigation<StackNavProp<'MainMenu'>>();
  let { params: { menu } } = useRoute<StackRouteProp<'MainMenu'>>();
  const items = menu.items;
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);


  return <SafeAreaView style={styles.flex}>
    <ScrollView>
      <List.Section title="MainMenu">

        {/* {items.map((item, idx) => {
        return <List.Accordion
          key={idx}
          title={item.title}
          left={props => <List.Icon {...props} icon="folder" />}
        >

        </List.Accordion>
      })} */}
        {items.map((item, idx) => {
          return (<List.Accordion
            key={idx}
            title={item.title}
            expanded={expanded}
            onPress={handlePress}
            left={props => <List.Icon {...props} icon="folder" />}>
            {item.items.map((_item, idx) => {

              return <List.Item key={idx} title={_item.title} />
            })}
          </List.Accordion>)
        })}

      </List.Section>
    </ScrollView>

  </SafeAreaView>

}


const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
})
export default MainMenuScene;