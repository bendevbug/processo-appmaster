import { Container } from "./style";

import perfilIcon from '../../images/perfil.svg'
import gameIcon from '../../images/game.svg'
import Image from "next/image";

export default function Header() {
    return(
        <Container>
            <div>
                <Image src={gameIcon} width={40} height={40} alt="controle de vídeo game"></Image>
                <span>GameInfo</span>
            </div>
            <Image src={perfilIcon} width={30} height={30} alt="Perfil"></Image>
        </Container>
    );
}