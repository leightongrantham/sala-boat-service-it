import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { LanguageSelector } from '@src/components/features/language-selector';

export const HEADER_HEIGHT = 60;

export const Header = (props: BoxProps) => {
  const { t } = useTranslation();
  const route = useRouter();

  return (
    <Flex
      as="nav"
      align="center"
      pl={{ base: 4, md: 12, lg: 12 }}
      pr={{ base: 4, md: 12, lg: 12 }}
      height={`${HEADER_HEIGHT}px`}
      color={'#FFFFFF'}
      justifyContent={'center'}
      zIndex="2"
      border={'none !important'}
      {...props}>
      <Link href="/" title={t('common.homepage')}>
        {route.pathname === '/' ? (
          <h1 style={{ fontSize: '1.5rem', fontFamily: `../../../pages/utils/fonts/../../../pages/utils/fonts/CrimsonText-regular.ttf !important`, textTransform: 'uppercase', letterSpacing: '5px', marginTop: '2rem' }}>
            Saló Boat Service
          </h1>
        ) : (
          <h1 style={{ fontSize: '1.5rem', fontFamily: `../../../pages/utils/fonts/../../../pages/utils/fonts/CrimsonText-regular.ttf !important`, textTransform: 'uppercase', letterSpacing: '5px', color: 'black', marginTop: '2rem'  }}>
            Saló Boat Service
          </h1>
        )}

        <Box
          display={{ base: 'block', md: 'none', lg: 'none' }}
          title={t('common.logoImageAltText')}
        />
      </Link>
      <LanguageSelector />
    </Flex>
  );
};
