import { MoreVert, Search } from "@mui/icons-material";
import { styled, Box, Typography } from "@mui/material";
import { defaultProfilePicture } from "../../../constants/data";

const Header = styled(Box)`
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
  objectFit: "cover",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;
const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 8px;
    font-size: 24px;
    color: #000;
  }
`;

export const ChatHeader = ({ person }) => {
  return (
    <Header>
      <Image src={person.picture} alt="profile" />
      <Box>
        <Name>{person.name}</Name>
        <Status>online</Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
};
