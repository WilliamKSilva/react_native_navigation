import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./StackNavigation";
import { TabBarNavigation } from "./TabBarNavigation";


export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}