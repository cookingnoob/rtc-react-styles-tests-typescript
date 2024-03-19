import { Box, Typography } from "@mui/material";
import { headerContainer, headerTypography } from "../styles/Header";

const Header = () => {
  return (
    <Box sx={headerContainer}>
      <Typography sx={headerTypography} variant="h1">
        IberiViaje
      </Typography>
    </Box>
  );
};

export default Header;
