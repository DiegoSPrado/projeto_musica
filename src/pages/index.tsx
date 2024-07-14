import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Section from "@/components/Section";
import { url } from "inspector";
import ListItens from "@/components/ListItens";

let nome = "Diego"

const inter = Inter({ subsets: ["latin"] });

const ListArtistas=[
  {
    id:0,
    url: "",
    image: 'imgs/billie.jpg',
    alt: "Billie Eilish",
  },
  {
    id:1,
    url: "",
    image: 'imgs/tyler-cr.jpg',
    alt: "Tyler, the Creator",
  },
  {
    id:2,
    url: "",
    image: 'imgs/ye.webp',
    alt: "Kanye West",
  },
  {
    id:3,
    url: "",
    image: 'imgs/francisco-oceano1.jpg',
    alt: "A Cantora, Billie Eilish",
  },
]

const ListAlbuns=[
  {
    id:0,
    url: "",
    image: 'imgs/blond-frank.jpg',
    alt: "ALbúm Blonde, de Frank Ocean",
  },
  {
    id:1,
    url: "",
    image: 'imgs/ye-kanye.jpg',
    alt: "Ye, albúm de Kanye West",
  },
  {
    id:0,
    url: "",
    image: 'imgs/tlop-ye.png',
    alt: "The Life of Pablo, albúm de Kanye West",
  },
  {
    id:0,
    url: "",
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
        title={"Artistas Preferidos"}
        subtitle={"Os Artistas que mais admiro."}
        >
         {
          ListArtistas.map(function(item) {
            return(
              <ListItens
              url={item.url}
              image={item.image}
              alt={item.alt}
              />
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
                url={item.url}
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
