import { Box, Drawer, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Profile } from "./Profile";

const drawerStyle = {
  left: 20,
  top: 17,
  width: "30%",
  height: "95%",
  boxShadow: "none",
};

const Header = styled(Box)`
  display: flex;
  background: #008069;
  height: 107px;
  color: #ffffff;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 550;
  }
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

export const InfoDrawer = ({ openDrawer, setOpenDrawer }) => {
  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Drawer
      open={openDrawer}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}>
      <Header>
        <ArrowBack onClick={() => setOpenDrawer(false)} />
        <Typography style={{ fontSize: "18px" }}>Profile</Typography>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};
