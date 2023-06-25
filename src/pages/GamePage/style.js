import {styled} from '@stitches/react';


export const Container = styled('main', {
    display: 'flex',
    flexDirection: "row",
    justifyContent:'space-around',

    background: 'rgb(43,36,70)',
    background:'linear-gradient(149deg, rgba(43,36,70,1) 13%, rgba(70,38,119,1) 49%, rgba(60,10,122,1) 82%)',
       
    '@media(max-width: 1880px)': {
        display: 'flex',
        flexDirection: "column",
        justifyContent:'space-around',
    },

    '@media(max-width: 720px)': {
        display: 'flex',
        flexDirection: "column",
        justifyContent:'space-around',

        fontSize: '80%',
    },

    div: {

        margin: '1.5rem 0',

        transition: 'all 0.2s',

        '&.boxShadow': {
            webkitBoxShadow:' 0px 3px 34px 5px rgba(168,141,240,1)',
            mozboxShadow:' 0px 3px 34px 5px rgba(168,141,240,1)',
            boxShadow: '0px 3px 10px 1px rgba(168,141,240, 0.5)',

            borderRadius: '0.5rem'
        },

        '&:hover': {
            margin: '0.5rem 1.6rem'
        },

        span: {
            color: '#fff'
        },
        

        div: {

            display: 'flex',
            alignItems: 'flex-start',

            background: '#383838',

            padding: '0.25rem',

            width: '95%',


            margin: '1rem',

             '@media(max-width: 1880px)': {
                    width: '90%',
                },

                '@media(max-width: 720px)': {
                    flexWrap: 'wrap',

                    alignItems: 'center',
                    justifyContent: 'center',

                    '&:hover': {
                        margin: '0.5rem 1.2rem'

                    },
            },
               
           
            img: {
                width: '20rem',

                alignSelf: 'center',
                borderRadius: '0.30rem',

                   
                '@media(max-width: 1880px)': {
                    width: '70%',
                },

                '@media(max-width: 720px)': {
                    width: '90%',
                    margin: '0.3rem 0 0 0'
            },
            
            },

            div: {
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: "column",
                
                padding: '0 0 0 1.5rem'
            }
        }
    }

})