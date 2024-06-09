import { Box, styled } from "@mui/material";
import { Footer } from "./Footer";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { getMessages, newMessage } from "../../services/api";
import { Message } from "./Message";

const Wrapper = styled(Box)`
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

export const Messages = ({ person, conversation }) => {
  const { account } = useContext(AccountContext);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageFlag, setMessageFlag] = useState(false);
  const [file, setFile] = useState();

  useEffect(() => {
    const getMessageDetails = async () => {
      const data = await getMessages(conversation._id);
      setMessages(data);
    };
    conversation._id && getMessageDetails();
  }, [conversation._id, person._id, messageFlag]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        text: value,
        type: "text",
      };
      await newMessage(message);
      setMessageFlag((prev) => !prev);
      setValue("");
    }
  };

  return (
    <Wrapper>
      <Component>
        {console.log("messages", messages)}
        {messages &&
          messages.map((message) => (
            <Container>
              <Message message={message} key={message._id} />
            </Container>
          ))}
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
      />
    </Wrapper>
  );
};
