import { AppBar, Box, Toolbar, styled } from "@mui/material";
import { LoginDialog } from "./account/LoginDialog";
import { AccountContext } from "./context/AccountProvider";
import { useContext } from "react";
import { ChatDialog } from "./chat/ChatDialog";

const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  box-shadow: none;
  background-color: #00bfa5;
`;

const ChatHeader = styled(AppBar)`
  height: 125px;
  box-shadow: none;
  background-color: #00a884;
`;

export const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      <Component>
        {account ? (
          <>
            <ChatHeader>
              <Toolbar />
            </ChatHeader>
            <ChatDialog />
          </>
        ) : (
          <>
            <LoginHeader>
              <Toolbar />
            </LoginHeader>
            <LoginDialog />
          </>
        )}
      </Component>
    </>
  );
};
