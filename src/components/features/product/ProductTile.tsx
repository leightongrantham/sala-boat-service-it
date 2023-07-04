import { Box, Text } from '@chakra-ui/react';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { CtfImage } from '@src/components/features/contentful/ctf-image';
import { PageProductFieldsFragment } from '@src/lib/__generated/sdk';

export const ProductTile = ({
                              featuredProductImage,
                              price,
                              slug,
                              internalName,
                              sys: { id: entryId },
                            }: PageProductFieldsFragment) => {
  const { locale } = useRouter();
  const inspectorProps = useContentfulInspectorMode({ entryId, locale });
  return slug ? (
    <div {...inspectorProps({ fieldId: 'featuredProductImage' })}>
      <Box as={Link} href={slug}>
        {featuredProductImage && (
          <Box className='product__container' borderRadius={4} overflow="hidden" style={{ position: 'relative', }}>
            <CtfImage {...featuredProductImage} />
            <h1 style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '2rem',
              color: 'white',
              textShadow: '0 0 5px rgba(255, 255, 255, 1)',
            }}>{internalName}</h1>
          </Box>
        )}
      </Box>
    </div>
  ) : null;
};
