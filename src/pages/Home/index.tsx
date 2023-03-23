import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Button } from '../../components/Button/Button';
import { SkillCard } from '../../components/SkillCard';

interface SkillData {
id: string;
name: string;
}

export function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);

    function handleAddNewSkill(){

      const data = {
        id: String(new Date().getTime()),
        name: newSkill
      }
        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string){
      setMySkills(oldState => oldState.filter(
        skill => skill.id !== id
      ));
    }
 
  return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Welcome, Jeymes
          </Text>
          <TextInput
          style={styles.input}
          placeholder='New skill'
          placeholderTextColor='#555'
          onChangeText={setNewSkill}
          />

          <Button
          onPress={handleAddNewSkill}
          title="Add"
          />

          <Text style={[styles.title, {marginVertical: 50}]}>
            My Skills
          </Text>

          <FlatList
          showsVerticalScrollIndicator={false}
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard
            onPress={() => handleRemoveSkill(item.id)}
            skill={item.name}
            />
          )}
          />

        </View>
  );
}

