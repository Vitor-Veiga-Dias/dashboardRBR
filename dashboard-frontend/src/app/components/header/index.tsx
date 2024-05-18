'use client';
import { UseLayoutController } from '@/common/controllers/layoutController';
import { Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { ExternalLinkIcon } from '@chakra-ui/icons';

export const Header = () => {
  const { handleLogout } = UseLayoutController();
  return (
    <Stack
      backgroundColor="white"
      shadow={1}
      padding={8}
      borderBottomWidth={1}
      justifyContent="space-between"
      direction="row"
    >
      <Link href="/dashboard">
        <Image src="/rbr.svg" alt="RBR Digital" width={100} height={100} />
      </Link>
      <Stack direction="row" spacing={8}>
        <Link href="/sign-in">
          <Stack direction="row" alignItems="center" onClick={handleLogout}>
            <ExternalLinkIcon />
            <Text>Sair</Text>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};
