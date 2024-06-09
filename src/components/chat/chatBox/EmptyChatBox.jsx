import { Box, Divider, Typography, styled } from "@mui/material";
import { emptyChatImage } from "../../../constants/data";

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;

const Container = styled(Box)`
  padding: 0 200px;
`;

const Image = styled("img")({
  width: 400,
  marginTop: 100,
});

const Title = styled(Typography)`
  font-size: 30px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #41515d;
`;

const Subtitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`;
export const EmptyChatBox = () => {
  
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="image" />
        <Title>WhatsApp Web </Title>
        <Subtitle>
          Now send and recieve messages without keeping you phone online.
        </Subtitle>
        <Subtitle>
          Use WhatsApp on upto 4 linked devices and 1 phone at the same time.
        </Subtitle>
        <Divider
          style={{
            margin: "40px 0",
            opacity: "0.4",
          }}
        />
      </Container>
    </Component>
  );
};
