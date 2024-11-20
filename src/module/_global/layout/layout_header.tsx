import { Box, rem } from "@mantine/core";
import { WARNA } from "../fun/WARNA";

function LayoutHeader({ children }: { children: React.ReactNode }) {
  return (
    <Box
      h={rem(80)}
      w={"100%"}
      pos={"sticky"}
      bg={WARNA.bgTombol}
      style={{ borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", zIndex: 100 }}
    >
      {children}
    </Box>
  )
}

export default LayoutHeader;