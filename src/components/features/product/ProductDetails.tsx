import { Box, Container, Flex, Grid, GridItem, Heading, Text, useTheme } from '@chakra-ui/react';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { useRouter } from 'next/router';

import { CtfImage } from '@src/components/features/contentful/ctf-image';
import { PageProductFieldsFragment } from '@src/lib/__generated/sdk';


export const ProductDetails = ({
                                 name,
                                 description,
                                 featuredProductImage,
                                 productImagesCollection,
                                 sys: { id: entryId },
                               }: PageProductFieldsFragment) => {
  const theme = useTheme();
  const { locale } = useRouter();
  const inspectorProps = useContentfulInspectorMode({ entryId, locale });

  return (
    <Container mt={{ base: 6, lg: 16 }}>
      <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 5, lg: 12 }}>
        <GridItem colSpan={{ base: 12, lg: 7, xl: 8 }}>
          <Flex flexDirection="column" gap={{ base: 3, lg: 5 }}>
            {featuredProductImage && (
              <CtfImage
                livePreviewProps={inspectorProps({ fieldId: 'featuredProductImage' })}
                {...featuredProductImage}
              />
            )}
            {productImagesCollection?.items &&
              productImagesCollection.items.map(image => {
                return image ? (
                  <CtfImage
                    livePreviewProps={inspectorProps({ fieldId: 'productImages' })}
                    key={image.sys.id}
                    imageProps={{
                      sizes: '(max-width: 1200px) 70vw, 100vw',
                    }}
                    {...image}
                  />
                ) : null;
              })}
          </Flex>
        </GridItem>

        <GridItem colSpan={{ base: 12, lg: 5, xl: 4 }}>
          <Box
            width="100%"
            bg={theme.f36.gray100}
            mb="auto"
            borderRadius={4}
            px={{ base: 4, lg: 6 }}
            pt={{ base: 6, lg: 6 }}
            pb={{ base: 8, lg: 14 }}>
            <Heading {...inspectorProps({ fieldId: 'name' })} as="h1" variant="h3">
              {name}
            </Heading>
            <h2>Booking Info:</h2>

            <Text {...inspectorProps({ fieldId: 'price' })} mt={1} fontWeight="500">
              <a>
                Telephone: +39 3279737011 Armando
              </a>
              <br/>
              <a>
                WhatsApp: +39 3516571492 Larry
              </a>
              <br/>
              <a href={'https://instagram.com/salaboatservice'}> Instagram: @saloboatservice</a>
            </Text>
            <Text {...inspectorProps({ fieldId: 'description' })} mt={5} color={theme.f36.gray700}>
              {description}
            </Text>

            <Box mt={{ base: 5, lg: 10 }} />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};
