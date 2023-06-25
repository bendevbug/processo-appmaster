import Header from "@/components/header";
import { Container } from "./style";
import Banner from "@/components/banner";
import Image from "next/image";

import { useEffect, useState } from "react";

import axios from 'axios';
import Loading from "../../components/loading";
import { useRouter } from "next/router";


export default function GamePage() {

    const router = useRouter;

    const [loading, setLoading] = useState(true);
    const [games, setGames] = useState([]);

   useEffect( ()=> {
        
        const time = setTimeout(() => {
            setLoading(false);
            router.push("/error");
        }, 5000)

        axios.get('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data', {
        headers: {
        'dev-email-address': 'benj.inacio03@gmail.com'
        }
        })
        .then(
            response => {
                setGames(response.data)
                console.log(games)
                setLoading(false)
                clearTimeout(time)
            }
        )
        .catch(error => {
            const error500 = "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
            console.error( `${error500}` + `${error}`);
            setLoading(false);
            clearTimeout(time);

            if (
                error.response &&
                [500, 502, 503, 504, 507, 508, 509].includes(error.response.status)
              ) {
                router.push("/ErrorPage2");
              }
        });

        return () => {
            clearTimeout(time);
          };
        
   }, []);

   useEffect(() => {
    console.log(games);
  }, [games]);


    return (
        <>
        <Header />
            <Container>
                {loading ? (
                    <Loading />
                ) : (
                <>
                <div>
                    {games.map(game => {

                        if(game.id < 10)

                        return(
                            <div key={game.id} className="boxShadow">
                                <img src={game.thumbnail}></img>
                                <div>
                                    <h1>{game.title}</h1>
                                    <p>{game.short_description}</p>
                                    <span>{game.platform}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                {games.map(game => {

                        if(game.id > 10 && game.id < 20)

                        return(
                            <div key={game.id} className="boxShadow">
                                <img src={game.thumbnail}></img>
                                <div>
                                    <h1>{game.title}</h1>
                                    <p>{game.short_description}</p>
                                    <span>{game.platform}</span>
                                </div>
                            </div>
                        )
                        })}
                </div>
                <div>
                {games.map(game => {

                    if(game.id > 20 && game.id < 35)

                    return(
                        <div key={game.id} className="boxShadow">
                            <img src={game.thumbnail}></img>
                            <div>
                                <h1>{game.title}</h1>
                                <p>{game.short_description}</p>
                                <span>{game.platform}</span>
                            </div>
                        </div>
                    )
                    })}
                </div>
                </>
                )
                
                }
                
            </Container>
        </>
       
    );
}