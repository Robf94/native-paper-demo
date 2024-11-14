import globalStyles from "../styles/GlobalStyles";
import * as React from "react";
import { ScrollView, View } from "react-native";
import { Text, Button, Avatar, Card, Appbar, useTheme } from "react-native-paper";

const LeftContent = (props) => (
  <Avatar.Icon
    {...props}
    icon="folder"
  />
);

function HomeScreen() {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Appbar" />
        <Appbar.Action
          icon="calendar"
          onPress={() => {}}
        />
        <Appbar.Action
          icon="magnify"
          onPress={() => {}}
        />
      </Appbar.Header>

      <ScrollView style={{ backgroundColor: theme.colors.secondary }}>
        <View style={globalStyles.container}>
          <Text variant="displayLarge">Display Large</Text>
          <Text variant="displayMedium">Display Medium</Text>
          <Text variant="displaySmall">Display small</Text>

          <Text variant="headlineLarge">Headline Large</Text>
          <Text variant="headlineMedium">Headline Medium</Text>
          <Text variant="headlineSmall">Headline Small</Text>

          <Text variant="titleLarge">Title Large</Text>
          <Text variant="titleMedium">Title Medium</Text>
          <Text variant="titleSmall">Title Small</Text>

          <Text variant="bodyLarge">Body Large</Text>
          <Text variant="bodyMedium">Body Medium</Text>
          <Text variant="bodySmall">Body Small</Text>

          <Text variant="labelLarge">Label Large</Text>
          <Text variant="labelMedium">Label Medium</Text>
          <Text variant="labelSmall">Label Small</Text>

          <Button
            icon="french-fries"
            mode="elevated"
            onPress={() => console.log("Pressed")}
          >
            Press me
          </Button>

          <Card style={globalStyles["width-100"]}>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={LeftContent}
            />
            <Card.Content>
              <Text variant="titleLarge">Card title</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
    </>
  );
}

export default HomeScreen;
