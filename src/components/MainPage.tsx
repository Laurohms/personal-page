import { Flex } from "@radix-ui/themes";
import { FullAboutCard } from "./FullAboutCard";
import { PresentationCard } from "./PresentationCard";
import { ContactCard } from "./ContactCard";

export const MainPage = () => {
  return (
    <Flex
      direction={{
        xs: "row",
        initial: "column",
      }}
    >
      <Flex direction={"column"}>
        <FullAboutCard />
        <ContactCard />
      </Flex>
      <PresentationCard />
    </Flex>
  );
};
