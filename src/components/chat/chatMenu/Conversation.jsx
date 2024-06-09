import { Box, Typography, radioClasses, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { setConversation } from "../../services/api";

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  padding: "0 14px",
  borderRadius: "50%",
  objectFit: "cover",
});

export const Conversation = ({ user }) => {
  const { setPerson, account } = useContext(AccountContext);

  const getUserData = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  return (
    <Component onClick={() => getUserData()}>
      <Box>
        <Image src={user.picture} alt="image" />
      </Box>
      <Box>
        <Box>
          <Typography>{user.name}</Typography>
        </Box>
      </Box>
    </Component>
  );
};
