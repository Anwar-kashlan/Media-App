import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetsWrapper from "components/widgetsWrapper";

const AdvertisementWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  return (
    <WidgetsWrapper>
      <FlexBetween>
        <Typography variant="h5" fontWeight="500" color={dark}>
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        alt="ad"
        width="100%"
        height="auto"
        src={"http://localhost:3001/assets/info4.jpeg"}
        style={{
          borderRadius: "0.75rem",
          margin: "0.75rem 0",
        }}
      />
      <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light.
      </Typography>
    </WidgetsWrapper>
  );
};

export default AdvertisementWidget;
