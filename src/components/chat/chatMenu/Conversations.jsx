import { useEffect, useState } from "react";
import { getUsers } from "../../services/api";
import { Box, Divider, styled } from "@mui/material";
import { Conversation } from "./Conversation";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;
const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background: #e9edef;
  opacity: 0.6;
`;

export const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);
  const { account } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUsers();
      const filteredData = res.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredData);
    };

    fetchData();
  }, [text]);

  return (
    <Component>
      {users.map(
        (el) =>
          el.sub !== account.sub && (
            <div key={el._id}>
              <Conversation user={el} />
              <StyledDivider />
            </div>
          )
      )}
    </Component>
  );
};
