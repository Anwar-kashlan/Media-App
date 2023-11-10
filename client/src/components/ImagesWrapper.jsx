import { Box } from "@mui/material";

const ImagesWrapper = ({ size = "60px", image }) => {
  return (
    <Box width={size} height={size}>
      <img
        src={`http://localhost:3001/assets/${image}`}
        alt="user"
        width={size}
        height={size}
        style={{
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
    </Box>
  );
};

export default ImagesWrapper;
