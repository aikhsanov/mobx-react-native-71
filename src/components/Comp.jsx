import { Text } from "react-native";
import { observer } from "mobx-react-lite";

function Comp() {
  return <Text>hehe</Text>;
}

export default observer(Comp);
