'use client'
import { WARNA } from '@/module/_global';
import LayoutLogin from '@/module/_global/layout/layout_login';
import { Anchor, Box, Button, Flex, Stack, Text, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';

function ViewLogin() {
  const textinfo = "Kami akan mengirimkan kode verifikasi melalui WhatsApp untuk mengkonfirmasi nomor anda";
  const router = useRouter();
  return (
    <Box>
      <LayoutLogin>
        <Stack pt={30}>
          <Box p={10}>
            <TextInput
              leftSection={<Text fz={"sm"} c={"dark"}>+62</Text>}
              placeholder='xxx xxx xxx'
              radius={"xl"}
              size='md'
              type='number'
              styles={{
                input: {
                  backgroundColor: "white",
                  border: "1px solid #7ABC00",
                  color: "dark",
                }
              }}
            />
            <Text mt={5} fw={"bold"} fz={"10"} c={WARNA.bgTombol}>{textinfo}</Text>
            <Box mt={30}>
              <Button onClick={() => router.push("/verifikasi")} radius={"xl"} c={"white"} fullWidth bg={WARNA.bgTombol}>Kirim</Button>
            </Box>
            <Box mt={10}>
              <Flex gap={3} align={"center"} justify={"center"}>
                <Text fz={"xs"} c={WARNA.bgTombol}>Belum Punya Akun? </Text>
                <Anchor variant='transparent' c={WARNA.bgTombol}>
                  <Text fz={"xs"} c={WARNA.bgTombol} onClick={() => router.push("/register")} fw={"bold"} >Daftar Sekarang</Text>
                </Anchor>
              </Flex>
            </Box>
          </Box>
        </Stack>
      </LayoutLogin>
    </Box>
  );
}

export default ViewLogin;
