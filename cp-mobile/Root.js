import { createStackNavigator } from "@react-navigation/stack";
import Tarefas from "./screen/Tarefas";
import Home from "./screen/Home";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tarefas" component={Tarefas} />
    </Stack.Navigator>
  );
}
