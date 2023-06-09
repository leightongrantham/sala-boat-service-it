import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';

import { ProductTile } from '@src/components/features/product/ProductTile';
import { PageProductFieldsFragment } from '@src/lib/__generated/sdk';

interface ProductTileGridProps {
  title: string;
  products: Array<PageProductFieldsFragment | undefined | null>;
}

export const ProductTileGrid = ({ title, products }: ProductTileGridProps) => {
  return (
    <Container>
      {title && (
        <Heading as="h2" mb={3}>
          {title}
        </Heading>
      )}
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(1, 1fr)' }}
        rowGap={{ base: 6, lg: 6 }}
        columnGap={{ base: 4, lg: 24 }}>
        {products.map((product, index) => {
          return <GridItem _hover={{ opacity: 0.75, transition:  'all 0.25s ease' }} key={index}>
            {product ? <ProductTile {...product} /> : null}
          </GridItem>;
        })}
      </Grid>
    </Container>
  );
};
