import { Box, Dialog, styled } from "@mui/material";
import { Menu } from "./chatMenu/Menu";
import { EmptyChatBox } from "./chatBox/EmptyChatBox";
import { ChatBox } from "./chatBox/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

const dialogStyle = {
  height: "95%",
  width: "100%",
  boxShadow: "none",
  maxWidth: "100%",
  maxHeight: "100%",
  overflow: "hidden",
  margin: "20px",
  borderRadius: 0,
};

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 450px;
`;

const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

export const ChatDialog = () => {
  const { person } = useContext(AccountContext);

  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      maxWidth={"md"}>
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          {Object.keys(person).length ? <ChatBox /> : <EmptyChatBox />}
        </RightComponent>
      </Component>
    </Dialog>
  );
};
