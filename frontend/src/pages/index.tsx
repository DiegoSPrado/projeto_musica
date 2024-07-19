import {Exo_2 } from 'next/font/google'
import Header from "@/components/Header";
import Section from "@/components/Section";
import { url } from "inspector";
import ListItens from "@/components/ListItens";
import Modals from "@/components/Modals";


let nome = "Diego"



const ListArtistas=[
  {
    id:0,
    image: 'imgs/billie.jpg',
    alt: "Billie Eilish",
    content: "teste 1",
  },
  {
    id:1,
    image: 'imgs/tyler-cr.jpg',
    alt: "Tyler, the Creator",
    content: "teste 2",
  },
  {
    id:2,
    image: 'imgs/ye.webp',
    alt: "Kanye West",
    content: "teste 3",
  },
  {
    id:3,
    image: 'imgs/francisco-oceano1.jpg',
    alt: "A Cantora, Billie Eilish",
    content: "teste 4",
  },
]

const ListAlbuns=[
  {
    id:0,
    image: 'imgs/blond-frank.jpg',
    alt: "ALbúm Blonde, de Frank Ocean",
  },
  {
    id:1,
    image: 'imgs/ye-kanye.jpg',
    alt: "Ye, albúm de Kanye West",
  },
  {
    id:2,
    image: 'imgs/tlop-ye.png',
    alt: "The Life of Pablo, albúm de Kanye West",
  },
  {
    id:3,
    image: 'imgs/igor-tyler.jpg',
    alt: "Igor, albúm de Tyler, the Creator",
  },
]



export default function Home() {
  

  return (
    <main>
      <Header/>
      <div>
        <Section
        title={"Artistas"}
        subtitle={"Os Artistas que mais admiro."}
        >
         {
          ListArtistas.map(function(item) {
            return(
              <ListItens  key={item.id}
              image={item.image}
              alt={item.alt} 
              > 
              </ListItens>
            )
          })
         }
        </Section>
        
     
        

        <Section
        title={"Albúns"}
        subtitle={`Os Albúns preferidos de ${nome}. Veja a resenha clicando no albúm.`} 
        >
          {
            ListAlbuns.map(function(item){ 
              return(
                <ListItens
                key={item.id}
                image={item.image}
                alt={item.alt}
                />
              )
            }
            )
          }
        </Section>
        
        <Section
        title={"Músicas"}
        subtitle={`As melhores músicas de ${nome}.`}
        >

        </Section>
      </div>
    </main>
  );
}
