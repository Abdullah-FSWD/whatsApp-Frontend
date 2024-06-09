import { Box, styled } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import {
  Chat as MessageIcon,
  HistoryToggleOffIcon as Story,
} from "@mui/icons-material";
import { HeaderMenu } from "./HeaderMenu";
import { InfoDrawer } from "../../drawer/InfoDrawer";

const Component = styled(Box)`
  height: 44px;
  padding: 8px 16px;
  background: #ededed;
  display: flex;
  align-items: center;
`;
const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});

const Wrapper = styled(Box)`
  margin-left: auto;

  & > * {
    margin-left: 2px;
    padding: 8px;
  }
  &:first-of-type {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;

export const Header = () => {
  
  const { account } = useContext(AccountContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleToggle = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Component>
        <Image src={account.picture} alt="Profile" onClick={handleToggle} />
        <Wrapper>
          <MessageIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
};
