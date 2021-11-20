import React, { useState } from 'react';
import uuid from 'react-native-uuid'

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
    const id = uuid.v4();
    setTasks((oldValue) => [...oldValue, { id, title: taskTitle, done: false }]);
    setTaskTitle('');
  }

  function handleDeleteTask(id) {
    setTasks((oldValue) => oldValue.filter((task) => task.id !== id));
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
          <TaskTitle>{item.title}</TaskTitle>
          <RemoveButtonContainer onPress={() => handleDeleteTask(item.id)}>
            <Icon name="trash-alt" />
          </RemoveButtonContainer>
        </TaskContainer>
      )} keyExtractor={(item) => item.id} />
    </Container>
  );
}
