import Playstation from '../../images/ps.gif'

import Image from 'next/image';
import { Container } from './styles';

export default function Loading(){
    return(
       <Container>
        <figure>
            <Image src={Playstation} width={1000} height={500}></Image>
        </figure>
       </Container>
    );
} 