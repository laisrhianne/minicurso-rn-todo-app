import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import Checkbox from 'expo-checkbox';

import {
  Container,
  Header,
  Title,
  InputContainer,
  Input,
  AddButtonContainer,
  Icon,
  TasksFlatlist,
  TaskTitle,
  TaskContainer,
  RemoveButtonContainer
} from './styles';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  function handleAddTask() {
    if (!taskTitle) {
      return;
    }

    const id = uuid.v4();
    setTasks((oldValue) => [...oldValue, { id, title: taskTitle, done: false }]);
    setTaskTitle('');
  }

  function handleDeleteTask(id) {
    setTasks((oldValue) => oldValue.filter((task) => task.id !== id));
  }

  function handleToggleTask(id) {
    setTasks((oldTasks) => {
      const newTasks = [...oldTasks];
      const index = newTasks.findIndex((task) => task.id === id);
      newTasks[index].done = !newTasks[index].done;
      return newTasks;
    });
  }

  return (
    <Container>
      <Header>
        <Title>Lista de Tarefas</Title>
      </Header>
      <InputContainer>
        <Input placeholder='Tarefa' value={taskTitle} onChangeText={setTaskTitle} />
        <AddButtonContainer onPress={handleAddTask}>
          <Icon name="plus" />
        </AddButtonContainer>
      </InputContainer>
      <TasksFlatlist data={tasks} renderItem={({item}) => (
        <TaskContainer>
          <Checkbox value={item.done} onValueChange={() => handleToggleTask(item.id)}/>
          <TaskTitle>{item.title}</TaskTitle>
          <RemoveButtonContainer onPress={() => handleDeleteTask(item.id)}>
            <Icon name="trash-alt" />
          </RemoveButtonContainer>
        </TaskContainer>
      )} keyExtractor={(item) => item.id} />
    </Container>
  );
}
