import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Image = styled("img")({
  height: 200,
  width: 200,
  padding: "25px 0",
  borderRadius: "50%",
});

const BoxWrapper = styled(Box)`
  background: #ffffff;
  padding: 12px 30px 2px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);

  & :first-of-type {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }
  & :last-child {
    margin: 14px;
    color: 4a4a4a;
  }
`;

const DiscriptionContainer = styled(Box)`
  padding: 15px 20px 28px 30px;
  & > p {
    font-size: 13px;
    color: #8696a0;
  }
`;

export const Profile = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="Profile" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <DiscriptionContainer>
        <Typography>
          This is not your username or PIN. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </DiscriptionContainer>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Eat sleep repeat</Typography>
      </BoxWrapper>
    </>
  );
};
