import { Box, Flex, Text } from "@radix-ui/themes";
import { StackCard } from "./StackCard";
import { PresentationCardPart } from "./PresentationCardPart";
import { CustomCardComponent } from "./CustomCardComponent";

export const FullAboutCard = () => (
  <Box m={"1"} width={{ initial: "100%", md: "25%" }} minWidth={"30vw"}>
    <CustomCardComponent>
      <Flex align={"center"} justify={"center"} direction={"column"} gap={"3"}>
        <PresentationCardPart />
        <Text as="p">Software Developer</Text>
        <StackCard />
      </Flex>
    </CustomCardComponent>
  </Box>
);
