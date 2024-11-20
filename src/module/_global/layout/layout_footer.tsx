import { Box, rem } from '@mantine/core';
import React from 'react';
import { WARNA } from '../fun/WARNA';

function LayoutFooter({children} : {children: React.ReactNode}) {
  return (
    <Box bg={WARNA.bgTombol} bottom={0} w={"100%"} h={rem(80)} pos={"fixed"} style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px", zIndex: 100, maxWidth: rem(550)}}>
      {children}
   </Box>
  );
}

export default LayoutFooter;
