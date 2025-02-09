import { Box, Typography, styled } from "@mui/material";
import { formateDate } from "../../utils/common-utils";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Sent = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Received = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;
const Text = styled(Typography)`
font - size: 14px;
    padding: 0 25px 0 5px;

 `;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
`;

export const Message = ({ message }) => {
  const { account } = useContext(AccountContext);

  return (
    <>
      {account.sub === message.senderId ? (
        <Sent>
          <Text>{message.text}</Text>
          <Time>{formateDate(message.createdAt)}</Time>
        </Sent>
      ) : (
        <Received>
          <Text>{message.text}</Text>
          <Time>{formateDate(message.createdAt)}</Time>
        </Received>
      )}
    </>
  );
};
