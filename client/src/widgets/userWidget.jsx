import {
  EditOutlined,
  ManageAccountsOutlined,
  RoomOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import ImagesWrapper from "components/ImagesWrapper";
import WidgetsWrapper from "components/widgetsWrapper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserWidget = ({ userId, picturePath }) => {
  const theme = useTheme();
  const dark = theme.palette.neutral.dark;
  const medium = theme.palette.neutral.medium;
  const main = theme.palette.neutral.main;
  const light = theme.palette.primary.light;
  const [user, setUser] = useState(null);
  const token = useSelector((state) => state.token);
  const getUser = async () => {
    const res = await fetch(
      `https://media-app-back-end-y90k.onrender.com/users/${userId}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await res.json();
    setUser(data);
  };
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!user) return null;

  const {
    firstName,
    lastName,
    location,
    occupation,
    friends,
    viewedProfile,
    impressions,
  } = user;

  return (
    <WidgetsWrapper>
      <Box display="flex" flexDirection="column">
        {/* row 1 */}
        <FlexBetween gap="0.5rem" pb="1.1rem">
          <Box display="flex" alignItems="center" gap="1rem">
            <ImagesWrapper image={picturePath} />
            <Box>
              <Typography
                variant="h4"
                sx={{
                  transition: "0.1s",
                  cursor: "pointer",
                  fontWeight: "500",
                  color: dark,
                  "&:hover": {
                    color: light,
                  },
                }}
              >
                {firstName} {lastName}
              </Typography>
              <Typography
                component="p"
                sx={{
                  color: medium,
                }}
              >
                {friends.length} friends
              </Typography>
            </Box>
          </Box>
          <IconButton>
            <ManageAccountsOutlined
              sx={{
                color: dark,
              }}
            />
          </IconButton>
        </FlexBetween>
        <Divider />
        {/* row 2 */}
        <Box p="1rem 0">
          <Box gap="1rem" display="flex" alignItems="center" mb="0.5rem">
            <RoomOutlined
              fontSize="large"
              sx={{
                color: main,
              }}
            />
            <Typography
              component="p"
              sx={{
                color: medium,
              }}
            >
              {location}
            </Typography>
          </Box>
          <Box gap="1rem" display="flex" alignItems="center">
            <WorkOutlineOutlined
              fontSize="large"
              sx={{
                color: main,
              }}
            />
            <Typography
              component="p"
              sx={{
                color: medium,
              }}
            >
              {occupation}
            </Typography>
          </Box>
        </Box>
        <Divider />
        {/* row 3 */}
        <Box p="1rem 0">
          <FlexBetween mb="0.5rem">
            <Typography
              component="p"
              sx={{
                color: medium,
              }}
            >
              Who's viewed your profile
            </Typography>
            <Typography
              component="p"
              sx={{
                color: main,
                fontWeight: "500",
              }}
            >
              {viewedProfile}
            </Typography>
          </FlexBetween>

          <FlexBetween>
            <Typography
              component="p"
              sx={{
                color: medium,
              }}
            >
              Impressions of your post
            </Typography>
            <Typography
              component="p"
              sx={{
                color: main,
                fontWeight: "500",
              }}
            >
              {impressions}
            </Typography>
          </FlexBetween>
        </Box>
        <Divider />
        {/* row 4 */}
        <Box p="1rem 0">
          <Typography
            sx={{
              color: main,
              fontWeight: "500",
              mb: "1rem",
              fontSize: "1rem",
            }}
          >
            Social Profiles
          </Typography>
          <FlexBetween mb="0.5rem">
            <Box gap="1rem" display="flex" alignItems="center">
              <img src="../assets/x.png" alt="x" />
              <Box>
                <Typography sx={{ color: main }}>X</Typography>
                <Typography sx={{ color: medium }}>Social Network</Typography>
              </Box>
            </Box>
            <IconButton>
              <EditOutlined />
            </IconButton>
          </FlexBetween>
          <FlexBetween>
            <Box gap="1rem" display="flex" alignItems="center">
              <img src="../assets/linkedin.png" alt="x" />
              <Box>
                <Typography sx={{ color: main }}>Linkedin</Typography>
                <Typography sx={{ color: medium }}>Network Platform</Typography>
              </Box>
            </Box>
            <IconButton>
              <EditOutlined />
            </IconButton>
          </FlexBetween>
        </Box>
      </Box>
    </WidgetsWrapper>
  );
};

export default UserWidget;
