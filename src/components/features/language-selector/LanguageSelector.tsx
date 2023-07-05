import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const LanguageSelector = () => {
  const { locales } = useRouter();

  return locales && locales.length > 1 ? (
    <>
      <Box display={{ base: 'none', md: 'block', lg: 'block' }}>
        {/*<LanguageSelectorDesktop displayName={displayName} localeName={localeName} />*/}
      </Box>

      <Box display={{ base: 'block', md: 'none', lg: 'none' }}>
        {/*<LanguageSelectorMobile displayName={displayName} localeName={localeName} />/*/}
      </Box>
    </>
  ) : null;
};
