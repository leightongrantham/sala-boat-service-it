import { Box, BoxProps, Flex } from '@chakra-ui/react';
import localFont from '@next/font/local';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { LanguageSelector } from '@src/components/features/language-selector';

export const HEADER_HEIGHT = 60;

export const Header = (props: BoxProps) => {
  const { t } = useTranslation();
  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      align="center"
      pl={{ base: 4, md: 12, lg: 12 }}
      pr={{ base: 4, md: 12, lg: 12 }}
      height={`${HEADER_HEIGHT}px`}
      color={'#FFFFFF'}
      zIndex="2"
      {...props}>
      <Link href="/" title={t('common.homepage')}>
        <h1 style={{ fontSize: '1.5rem', fontFamily: `../../../pages/utils/fonts/../../../pages/utils/fonts/CrimsonText-regular.ttf !important`, textTransform: 'uppercase', letterSpacing: '5px' }}>
          Sala Boat Service
        </h1>
        <Box
          display={{ base: 'block', md: 'none', lg: 'none' }}
          title={t('common.logoImageAltText')}
        />
      </Link>
      <LanguageSelector />
    </Flex>
  );
};
