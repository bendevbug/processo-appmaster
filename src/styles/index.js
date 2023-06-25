import {keyframes, styled} from '@stitches/react';

export const Container = styled('main', {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',

    height: '100vh',

    color: 'white',

    background: 'linear-gradient(166deg, #452884 0%, #1E0B46 43.23%, #5D419A 99.40%)',

    'div:first-child': {
        width: '50%',

        padding: '4rem',
    },

    div: {
        width: '100%',

        padding: '4rem',
        fontSize: '4rem',
        fontWeight: 700,
        textTransform: 'uppercase',


        a: {
            background: 'linear-gradient(180deg, #D9D9D9 0%, #B6B4B4 100%)',

            outline: '0',
            border: '0',

            width: '19rem',
            height: '4rem',

            padding: '1.5rem',

            color: '#000',
            fontSize: '2.25rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            textDecoration: 'none',

            borderRadius: '0.5rem',
            transition: 'all 0.2s',

            '&:hover': {
                filter: 'brightness(0.8)',
                cursor: 'pointer'
            }
        },

        img: {
            boxShadow: '3rem -5rem 10rem #0F236A',

            borderRadius: '0.5rem'
        }
    },

    'div:last-child': {
        margin: 'auto 0',
    }
})