import { Card } from "react-native-paper";
import ThemedText from "../themes/ThemedText";

function CardDemo() {

  return (
    <>
      <ThemedText variant="titleLarge">Card Demo</ThemedText>
      <Card elevation={1}>
        <Card.Content>
          <ThemedText variant="titleLarge">Card title</ThemedText>
          <ThemedText variant="bodyMedium">Card content</ThemedText>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      </Card>
    </>
  );
}

export default CardDemo;
