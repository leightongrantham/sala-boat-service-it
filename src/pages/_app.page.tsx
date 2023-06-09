import { ChakraProvider } from '@chakra-ui/react';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import localFont from '@next/font/local';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { Layout } from '@src/components/templates/layout';
import { theme } from '@src/theme';
import '@contentful/live-preview/style.css';

const CrimsonText = localFont({
  src: [
    {
      path: './utils/fonts/CrimsonText-Regular.ttf',
      weight: '700',
      style: 'normal',
    },
  ]
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ContentfulLivePreviewProvider
      enableInspectorMode={pageProps.previewActive}
      enableLiveUpdates={pageProps.previewActive}>
      <ChakraProvider
        theme={{
          ...theme,
          fonts: {
            heading: `${CrimsonText.style.fontFamily}, ${theme.fonts.heading}`,
            body: `${CrimsonText.style.fontFamily}, ${theme.fonts.body}`,
          },
        }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ContentfulLivePreviewProvider>
  );
};

export default appWithTranslation(App);
