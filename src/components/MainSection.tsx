import { Box, Typography } from "@mui/material";
import DestinationCard from "./DestinationCard";
import destinationData from "../mockData/DestinationData";

const MainSection = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        width={"100%"}
        bgcolor={"pink"}
        padding={"10px"}
        borderRadius={"10px"}
      >
        <Typography textAlign={"center"}>
          Nuevas fechas disponibles! abril 2024
        </Typography>
      </Box>
      <Box >
        {destinationData.map((card, index) => (
          <DestinationCard
            key={`${card.title}-${index}`}
            src={card.src}
            alt={card.alt}
            title={card.title}
            description={card.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MainSection;
