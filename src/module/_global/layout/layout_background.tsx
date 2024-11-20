import { Box, Container, rem, Stack } from "@mantine/core";
import React from "react";
import { WARNA } from "../fun/WARNA";





function LayoutBackground({children} : {children: React.ReactNode}) {
  return (
    <Stack>
      <Box pos={"fixed"} bg={"dark"} w={"100%"} h={"100%"} style={{ overflowY: "auto"}}>
        <Container bg={WARNA.bgApk} p={0} size={rem(550)} mih={"100vh"}>
          {children}
        </Container>
      </Box>
   </Stack>
  )
}

export default LayoutBackground;
