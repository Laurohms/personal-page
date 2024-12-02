import { Box, Heading } from "@radix-ui/themes";
import { ContactItem } from "./ContactItem";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { CustomCardComponent } from "./CustomCardComponent";

export const ContactCard = () => {
  return (
    <Box m={"1"} width={{ initial: "100%", md: "25%" }} minWidth={"30vw"}>
      <CustomCardComponent>
        <Heading as="h2" size={"4"} mb={"1rem"}>
          Contato
        </Heading>
        <ContactItem
          name="Email"
          icon={EnvelopeClosedIcon}
          link={"laurohmsantos@gmail.com"}
          url={"mailto:laurohmsantos@gmail.com"}
        />
        <ContactItem
          name="LinkedIn"
          link={"laurohenriquemsantos"}
          url={"https://www.linkedin.com/in/laurohenriquemsantos/"}
          icon={LinkedInLogoIcon}
        />
        <ContactItem
          name={"Github"}
          link={"Laurohms"}
          url={"https://github.com/Laurohms"}
          icon={GitHubLogoIcon}
        />
        <ContactItem
          name={"Telefone/Whatsapp"}
          link={"(21)98310-0983"}
          url={"https://wa.me/5521983100983"}
          icon={MobileIcon}
        />
      </CustomCardComponent>
    </Box>
  );
};
