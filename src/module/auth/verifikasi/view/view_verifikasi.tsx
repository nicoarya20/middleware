'use client'
import { WARNA } from '@/module/_global/fun/WARNA';
import LayoutLogin from '@/module/_global/layout/layout_login';
import { Anchor, Box, Button, Flex, PinInput, Stack, Text, Title } from '@mantine/core';
import { useRouter } from 'next/navigation';

function ViewVerifikasi() {
  const router = useRouter();
  return (
    <>
      <LayoutLogin>
        <Stack pt={30}>
          <Box p={10}>
            <Box>
              <Title ta={"center"} order={5} fw={"bold"} fz={"sm"} c={WARNA.bgTombol}>Verifikasi Nomor Telepon</Title>
              <Text ta={"center"} fz={"xs"} c={WARNA.bgTombol}>Masukkan kode yang kami kirimkan melalui WhatsApp</Text>
              <Text ta={"center"} fz={"xs"} c={WARNA.bgTombol} fw={"bold"}>+6289647037426</Text>
            </Box>
            <Box pt={30}>
              <PinInput style={{ justifyContent: "center" }} styles={{ input: { color: WARNA.bgTombol, borderRadius: 50 } }} size='lg' type={"number"} />
            </Box>
            <Box mt={30}>
              <Button onClick={() => router.push("/home")} radius={"xl"} c={"white"} fullWidth bg={WARNA.bgTombol}>Lanjut</Button>
              <Box pt={10}>
                <Flex direction={"row"} gap={2} justify={"center"}>
                  <Text fz={"xs"} c={WARNA.bgTombol}>Tidak menerima kode?</Text>
                  <Anchor c={WARNA.bgTombol}>
                  <Text fw={"bold"} fz={"xs"} c={WARNA.bgTombol}>Kirim Ulang</Text>
                  </Anchor>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Stack>
      </LayoutLogin>
    </>
  );
}

export default ViewVerifikasi;
