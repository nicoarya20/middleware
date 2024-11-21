'use client'
import React, { useState } from 'react';
import { WARNA } from '@/module/_global/fun/WARNA';
import LayoutRegistrasi from '@/module/_global/layout/layout_registrasi';
import { Box, Button, Stack, Text, TextInput } from '@mantine/core';
import { Prisma } from '@prisma/client';
import { apies, pages } from '@/lib/route';

type FormUser = Prisma.UserGetPayload<{
  select: {
    userName: true,
    email: true,
    phone: true,
    password: true
  }
}>

const defaultForm : FormUser = {
  userName: '',
  email: '',
  phone: '',
  password: ''
}

function ViewRegistrasi() {
  const [formState, setFormState] = useState<FormUser>(defaultForm)
  const [loading, setLoading] = useState(false)

  async function onRegister() {
    if(formState.userName === '' || formState.email === '' || formState.phone === '' || formState.password === '') 
      return alert("Semua Form Harus Diisi")
      try {
        setLoading(true)
        const res = await fetch(apies["/api/auth/register"], {
          method: "POST",
          body: JSON.stringify(formState)
        })
        
        const dataText = await res.text()
        if (!res.ok) return alert("Terjadi Kesalahan" + dataText)
        window.location.replace(pages["/"])
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
  }
  return (
    <Box>
      <LayoutRegistrasi>
        <Stack pt={20}>
          <Box p={10}>
            <TextInput
              label={<Text fz={"sm"} fw={"bold"} c={WARNA.bgTombol}>Nama Lengkap</Text>}
              placeholder='Nama'
              radius={"xl"}
              size='md'
              type='text'
              styles={{
                input: {
                  backgroundColor: 'white',
                  border: '1px solid #7ABC00',
                  color: "dark"
                }
              }}
              onChange={(e) => setFormState({...formState, userName: e.target.value})}
            />
            <TextInput
              label={<Text fz={"sm"} fw={"bold"} c={WARNA.bgTombol}>Email</Text>}
              placeholder='@'
              radius={"xl"}
              size='md'
              type='email'
              styles={{
                input: {
                  backgroundColor: 'white',
                  border: '1px solid #7ABC00',
                  color: "dark"
                }
              }}
             onChange={(e) => setFormState({...formState, email: e.target.value})}
            />
            <TextInput
              label={<Text fz={"sm"} fw={"bold"} c={WARNA.bgTombol}>Nomor Telepon</Text>}
              leftSection={<Text fz={"sm"} c={"dark"}>+62</Text>}
              placeholder='xxx xxx xxx'
              radius={"xl"}
              size='md'
              type='number'
              styles={{
                input: {
                  backgroundColor: 'white',
                  border: '1px solid #7ABC00',
                  color: "dark"
                }
              }}
              onChange={(e) => setFormState({...formState, phone: e.target.value})}
            />
            <TextInput
              label={<Text fz={"sm"} fw={"bold"} c={WARNA.bgTombol}>Password</Text>}
              placeholder='********'
              radius={"xl"}
              size='md'
              type='password'
              styles={{
                input: {
                  backgroundColor: 'white',
                  border: '1px solid #7ABC00',
                  color: "dark"
                }
              }}
             onChange={(e) => setFormState({...formState, password: e.target.value})}
            />
            <Button loading={loading} onClick={onRegister}  mt={20} radius={"xl"} fullWidth bg={"#7ABC00"}>Daftar</Button>
          </Box>
        </Stack>
      </LayoutRegistrasi>
    </Box>
  );
}

export default ViewRegistrasi;
