import { Box } from '@chakra-ui/react';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { HeroBanner } from '@src/components/features/hero-banner';
import { ProductTileGrid } from '@src/components/features/product';
import { SeoFields } from '@src/components/features/seo';
import { client, previewClient } from '@src/lib/client';
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations';

const Page = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const page = useContentfulLiveUpdates(props.page, locale || '');

  console.log(page);

  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
      <HeroBanner {...page} />
      {page.productsCollection?.items && (
        <Box
          mt={{
            base: 5,
            md: 9,
            lg: 16,
          }}>
          {/*<ProductTileGrid*/}
          {/*  title={t('product.trendingProducts')}*/}
          {/*  products={page.experiencesCollection.items}*/}
          {/*/>*/}
        </Box>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale, preview }) => {
  try {
    const gqlClient = preview ? previewClient : client;

    const data = await gqlClient.pageLanding({ locale, preview });

    const page = data.pageLandingCollection?.items[0];

    console.log('hello', page);

    if (!page) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        ...(await getServerSideTranslations(locale)),
        page,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default Page;
