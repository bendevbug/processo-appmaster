import {styled} from '@stitches/react';

export const Container = styled('header', {
    display: 'flex',
    alignItems: 'center',

    justifyContent: 'space-between',

    padding: '0.25rem 4rem',

    background: '#c5c5c5',

    '@media(max-width: 480px)': {
        padding: '0.25rem auto',
    },

    div: {
        display: 'flex',
        alignItems: 'center',


        gap: '1rem',

        '@media(max-width: 480px)': {
            span: {
                display: 'none'
            }
        },
    }
})