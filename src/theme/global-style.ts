import { SystemStyleObject } from '@chakra-ui/react';
import tokens from '@contentful/f36-tokens';

// const CrimsonText = localFont({
//   src: [
//     {
//       path: './utils/fonts/CrimsonText-Regular.ttf'
//     },
//   ]
// })

export const globalStyle: SystemStyleObject = {
  'html, body': {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    minHeight: '100%',
    color: tokens.gray800,
    overflowX: 'hidden',
  },
  '#__next': {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  body: {
    fontDisplay: 'swap',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  nav: {
    border: 'none !important'
  },
  '.active': {
    opacity: 0.5
  },
  '.product__container:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  }
}

