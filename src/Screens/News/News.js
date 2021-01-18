import * as React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

const News = () => (
  <Card style={{ padding: 10 }}>
    <Card.Cover
      source={{
        uri:
          "https://i.picsum.photos/id/304/700/700.jpg?hmac=Zg1rc0_HVSiIpYJ6Ph1Yq6X2WbE2rlnE4mysOngQBcU",
      }}
    />
    <Card.Content>
      <Title>Fresh news</Title>
      <Paragraph>News content</Paragraph>
    </Card.Content>
  </Card>
);

export default News;
