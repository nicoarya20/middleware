"use client"
import { ActionIcon, Flex, Image, rem, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { WARNA } from '../fun/WARNA';
import LayoutBackground from './layout_background';

function LayoutRegistrasi({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <LayoutBackground>
      <Flex p={20}>
        <ActionIcon variant='transparent'>
          <FaArrowLeft onClick={() => router.push("/")} size={20} color={WARNA.bgTombol} />
        </ActionIcon>
      </Flex>
      <Stack gap={4} justify="center" align="center" pt={rem(50)}>
        <Image src={"/assets/images/logo.png"} alt="" w={103} h={103} />
        <Text fz={"sm"} fw={"bold"} c={WARNA.bgTombol}>Everything You Need In One Place</Text>
        {children}
      </Stack>
    </LayoutBackground>
  );
}

export default LayoutRegistrasi;
