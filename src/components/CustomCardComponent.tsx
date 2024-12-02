import { Card } from "@radix-ui/themes";

export const CustomCardComponent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <Card
        style={{
          transition: "border 0.3s ease-in-out",
          border: "1px solid transparent",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.border = "1px solid white")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.border = "1px solid transparent")
        }
      >
        {children}
      </Card>
    </>
  );
};
