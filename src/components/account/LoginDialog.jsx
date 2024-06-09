import { Dialog, Typography, Box, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import { addUser } from "../services/api";

const Component = styled(Box)`
  display: flex;
  justify-content: space-evenly;
`;

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Box1Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;
const dialogStyle = {
  height: "96%",
  width: "60%",
  boxShadow: "none",
  marginTop: "12%",
  maxWidth: "100%",
  maxHeight: "100%",
  overflow: "hidden",
};

const StyledList = styled(List)`
  & > li {
    padding: 0px;
    margin-top: px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

export const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  };

  const onLoginFailure = (res) => {
    console.log("login failed", res);
  };
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Box1Container>
          <Title>To use Whatsapp on your computer:</Title>
          <StyledList>
            <ListItem>1. Open Whatsapp on your phone</ListItem>
            <ListItem>2. Tap menu settings and select whatsapp web</ListItem>
            <ListItem>
              3. Point you phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Box1Container>
        <Box style={{ position: "relative" }}>
          <QRCode src={qrCodeImage} alt="QR code" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateX(25%)",
            }}>
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginFailure} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};
