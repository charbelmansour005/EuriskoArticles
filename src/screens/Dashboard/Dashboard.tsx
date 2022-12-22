import {StyleSheet, Text, View} from 'react-native';
import {DashboardProps} from './types';
import {
  storeFilteredArticles,
  storeArticles,
} from '../../features/article/articlesSlice';
import {FlatList} from 'react-native'; //magic sauce
import React from 'react';

const Dashboard = (props: DashboardProps) => {
  
  return (
    <View>
      <Text>Hello, u made it to the dashboard </Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
