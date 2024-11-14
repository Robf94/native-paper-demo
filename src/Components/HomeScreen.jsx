import globalStyles from "../styles/GlobalStyles";
import * as React from "react";
import { ScrollView, View } from "react-native";
import { Surface, Text, Button, Avatar, Card, Appbar, useTheme } from "react-native-paper";
import ThemedText from "../themes/ThemedText";

const LeftContent = (props) => (
  <Avatar.Icon
    {...props}
    icon="folder"
  />
);

function HomeScreen() {
  // const { colors, elevation } = useTheme();

  return (
    <>
      <Appbar.Header
        style={[
          globalStyles.appbar,
          // { backgroundColor: colors.primary }
        ]}
      >
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content
          title="Appbar"
          // titleStyle={{ color: colors.text }}
        />
        <Appbar.Action
          icon="calendar"
          onPress={() => {}}
        />
        <Appbar.Action
          icon="magnify"
          onPress={() => {}}
        />
      </Appbar.Header>

      <ScrollView>
        <View
          style={[
            globalStyles.container,
            // { backgroundColor: colors.background }
          ]}
        >
          <ThemedText variant="displayLarge">Display Large</ThemedText>
          <ThemedText variant="displayMedium">Display Medium</ThemedText>
          <ThemedText variant="displaySmall">Display small</ThemedText>

          <ThemedText variant="headlineLarge">Headline Large</ThemedText>
          <ThemedText variant="headlineMedium">Headline Medium</ThemedText>
          <ThemedText variant="headlineSmall">Headline Small</ThemedText>

          <ThemedText variant="titleLarge">Title Large</ThemedText>
          <ThemedText variant="titleMedium">Title Medium</ThemedText>
          <ThemedText variant="titleSmall">Title Small</ThemedText>

          <ThemedText variant="bodyLarge">Body Large</ThemedText>
          <ThemedText variant="bodyMedium">Body Medium</ThemedText>
          <ThemedText variant="bodySmall">Body Small</ThemedText>

          <ThemedText variant="labelLarge">Label Large</ThemedText>
          <ThemedText variant="labelMedium">Label Medium</ThemedText>
          <ThemedText variant="labelSmall">Label Small</ThemedText>

          <Button
            icon="french-fries"
            mode="elevated"
            onPress={() => console.log("Pressed")}
          >
            Press me
          </Button>

          <Card elevation={5}>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={LeftContent}
            />
            <Card.Content>
              <ThemedText variant="titleLarge">Card title</ThemedText>
              <ThemedText variant="bodyMedium">Card content</ThemedText>
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
