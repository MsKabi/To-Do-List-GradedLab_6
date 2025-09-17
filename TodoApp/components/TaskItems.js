import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TaskItem({ task, onDelete }) {
  return (
    <View style={styles.item}>
      <Text>{task.text}</Text>
      <Button title="Delete" onPress={() => onDelete(task.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1
  }
});
