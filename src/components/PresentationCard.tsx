import { Box, Heading } from "@radix-ui/themes";
import { CustomCardComponent } from "./CustomCardComponent";

export const PresentationCard = () => {
  return (
    <Box
      m={"1"}
      width={{ xs: "75%", initial: "100%" }}
      height={{ initial: "100%", xs: "30%" }}
    >
      <CustomCardComponent>
        <Heading as="h2" size={"4"}>
          Apresentação
        </Heading>
      </CustomCardComponent>
    </Box>
  );
};
