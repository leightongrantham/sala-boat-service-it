import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { Crimson_Pro } from '@next/font/google';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { LanguageSelector } from '@src/components/features/language-selector';

const crimson = Crimson_Pro({ subsets: ['latin'] })

export const HEADER_HEIGHT = 60;

export const Header = (props: BoxProps) => {
  const { t } = useTranslation();
  const route = useRouter();

  console.log(route.pathname);

  return (
    <Flex
      as="nav"
      align="left"
      height={`${HEADER_HEIGHT}px`}
      color={'#FFFFFF'}
      className={crimson.className}
      justifyContent={'left'}
      zIndex="2"
      border={'none !important'}
      flexDirection="column"
      {...props}>
      <Link href="/" title={t('common.homepage')}>
        {route.pathname === '/' || route.pathname === '/experiences' ? (
          <h1 className={crimson.className} style={{
            fontSize: '2rem',
            textTransform: 'uppercase',
            letterSpacing: '5px',
            marginTop: '5vw',
            marginLeft: '5vw'

          }}>
            Salò Boat Service
          </h1>
        ) : (
          <h1 className={crimson.className} style={{
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '5px',
            color: 'black',
            marginTop: '1rem',
            textAlign: 'center'
          }}>
            Salò Boat Service
          </h1>
        )}
        <Box
          display={{ base: 'block', md: 'none', lg: 'none' }}
          title={t('common.logoImageAltText')}
        />
      </Link>
      {route.pathname === '/' &&
        <div style={{
          marginTop: '5vw',
          marginLeft: '5vw'
        }}>
          <div className={`${crimson.className} !important`} style={{ fontSize: '1.5rem' }}>
            <Link className={route.pathname == '/' ? 'active' : ''} href="/" style={{ margin: '0 10px 0 0' }}>Our
              Fleet</Link>
            <Link className={route.pathname == '/experiences' ? 'active' : ''} href={'/experiences/'}>Our
              Experiences</Link>
          </div>
          <p style={{ fontStyle: 'italic', marginTop: '15px' }}>
            Passion & Experience
          </p>
          <h4 style={{ fontStyle: 'italic' }}>
            Est. 1930
          </h4>
          <LanguageSelector/>
        </div>
      }
    </Flex>
  );
};
