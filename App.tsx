import React from 'react';
import { 
    View, 
    Text
} from "react-native";
import {useState} from 'react';
import ToDoList from './components/ToDoList';

function App() : React.JSX.Element {
  const [list, setList] = useState<Array<string>>(
    [
      'Do laundry',
      'Go to gym',
      'Walk dog'
    ]);
  return (
    <View>
      <ToDoList tasks={list}/>
    </View>
  );
}

export default App;