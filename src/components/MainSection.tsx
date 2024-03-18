import { Box, Typography } from "@mui/material";
import DestinationCard from "./DestinationCard";
import destinationData from "../mockData/DestinationData";
import { announcementContainer, bodyContainer, cardsContainer } from "../styles/MainSection";

const MainSection = () => {
  return (
    <Box
        sx={bodyContainer }>
      <Box
        sx={announcementContainer}
      >
        <Typography textAlign={"center"}>
          Nuevas fechas disponibles! abril 2024
        </Typography>
      </Box>
      <Box sx={cardsContainer}>
        {destinationData.map((card, index) => (
          <DestinationCard
            key={`${card.title}-${index}`}
            card = {card}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MainSection;
