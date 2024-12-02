import { Avatar, Heading } from "@radix-ui/themes";

export const PresentationCardPart = () => {
  return (
    <>
      <Avatar
        src={import.meta.env.VITE_PROFILE_PICTURE}
        fallback
        size={"9"}
        radius="full"
      />
      <Heading as="h3" size={"4"}>
        Lauro Henrique Moreira Santos
      </Heading>
    </>
  );
};
