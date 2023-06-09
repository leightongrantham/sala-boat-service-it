import { Container, Box, Text, useTheme } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      as="footer"
      width="full"
      py={{ base: 10, lg: 16 }}
      mt="auto"
      borderTop="1px"
      borderColor={theme.f36.gray200}>
      <Container>
        <Text fontSize={25} mb={8}>{t('common.aboutUs')}</Text>
        <Text>{t('common.description1')}</Text>
        <Text>{t('common.description2')}</Text>
        <Text mb={8}>{t('common.description3')}</Text>
      </Container>
    </Box>
  );
};
