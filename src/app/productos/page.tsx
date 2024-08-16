import { Title } from "@/ui/title"
import { ProductsHero } from "./_components/hero"
import { DisplayAnimation } from "@/animations/displayAnimation"
import { ProductCategory, ProductsFilterCard } from "./_components/filterCard"
import { ProductsSection } from "./_components/products"
import { Suspense } from "react"
import { Metadata } from "next"


export interface Product {
    name : string , 
    description : string ,
    image : string ,
    category : ProductCategory
}

export const metadata : Metadata = {
    title : "Productos de Ferretería y Hogar | Bazar Chino" ,
    description : "Explora la amplia selección de productos de Ferretería y Bazar Hogar Bazar Chino. Encuentra herramientas, artículos para el hogar y mucho más, todo con la mejor calidad y precios competitivos"
}

const products : Product[] = [{
    category : "Cables de Cargador" ,
    name: "Cable de Electricidad" ,
    description : "Asegura una transmisión de energía confiable con nuestros cables eléctricos de alta calidad, diseñados para durabilidad y seguridad en todos tus proyectos eléctricos." ,
    image : "/images/products/cable.jpeg"
} , {
    category : "Cables de Cargador" ,
    name : "Batería Externa" ,
    description  :"Mantente cargado en movimiento con nuestra batería externa de alta capacidad, asegurando que tus dispositivos estén siempre listos para usar." ,
    image : "/images/products/coin.jpeg"
} , {
    category : "Cables de Cargador" ,
    description : "Upgrade your vehicle with our durable car parts, designed to enhance performance and ensure safety on the road.",
    name : "Pieza de Coche" ,
    image : "/images/products/pieces.jpeg"
} ,{
    category : "Cables de Cargador" ,
    name : "Máquina de Pared" , 
    description :"Mejora tus proyectos de construcción con nuestra robusta máquina de pared, diseñada para taladrar y cortar eficientemente a través de varios materiales de pared." ,
    image : "/images/products/machine.jpeg"
} , {
     category :  "Sillas de Playa" ,
     name : "Silla de Playa" ,
     description : "Relájate con comodidad con nuestra resistente silla de playa, con un diseño ligero y fácil de transportar para días perfectos en la playa." ,
image : "/images/beachChairs.jpeg" ,
} , {
    name : "Sombrilla de Playa" ,
    category : "Sillas de Playa" ,
    description :"Mantente fresco y protegido con nuestra elegante sombrilla de playa, que ofrece sombra confiable y fácil instalación para días soleados en la playa." ,
    image : "/images/beachUmbrella.jpg"
} , {
    category : "Peines" , 
    name : "Peine",
    description : "Mantén tu cabello ordenado y estilizado con nuestro peine duradero y elegante, perfecto para todo tipo de cabello y fácil de llevar." ,
    image : "/images/comb.webp"
} , {
    name : "Utensilios de Cocina" ,
    category : "Utensilios de Cocina" ,
    description : "Mejora tu experiencia culinaria con nuestros utensilios de cocina de alta calidad, diseñados para la durabilidad y facilidad de uso en todas tus actividades culinarias." ,
    image : "/images/kitchenUtensils.jpeg"
} , {
    name  : "Gorra para Hombre" , 
    description : "Completa tu look con nuestra elegante gorra para hombre, que ofrece comodidad y un ajuste perfecto para cualquier salida casual." ,
    category : "Gorras para Hombres" ,
    image : "/images/manCap.webp" 
} , {
    name : "Calcetines" ,
    description : "Experimenta la máxima comodidad con nuestros calcetines de alta calidad, que ofrecen durabilidad y un ajuste perfecto para todo el día en cualquier actividad." ,
    image : "/images/socks.jpeg" ,
    category : "Calcetines"
} ,

{
    category: "Sombrillas",
    name: "Sombrilla de Patio",
    description: "Disfruta de tu espacio al aire libre con nuestra sombrilla de patio, diseñada para proporcionar sombra amplia y protección UV en tu jardín o terraza.",
    image: "/images/umbrella4.jpeg"
}, {
    category: "Sombrillas",
    name: "Sombrilla de Playa con Estilo",
    description: "Asegura un día perfecto en la playa con nuestra sombrilla de playa con estilo, ofreciendo una sombra confiable y fácil de transportar.",
    image:"/images/umbrella2.jpeg"
}, {
    category: "Sombrillas",
    name: "Sombrilla de Jardín",
    description: "Protege tus plantas y a ti mismo del sol con nuestra sombrilla de jardín, ideal para cualquier área verde.",
    image:"/images/umbrella3.jpeg"
}, {
    category: "Sombrillas",
    name: "Sombrilla Portátil",
    description: "Lleva la sombra contigo a cualquier lugar con nuestra sombrilla portátil, perfecta para picnics, campamentos y eventos al aire libre.",
    image: "/images/umbrella4.jpeg"
}, {
    category: "Sombrillas",
    name: "Sombrilla de Terraza",
    description: "Añade un toque de elegancia a tu terraza con nuestra sombrilla de terraza, que combina funcionalidad y estilo para tus reuniones al aire libre.",
    image: "/images/umbrella5.jpeg"
} , 
{
    category: "Flotadores",
    name: "Flotador de Piscina",
    description: "Disfruta de la piscina con nuestro flotador de piscina, diseñado para proporcionar comodidad y diversión en el agua.",
    image: "/images/Flotadores1.jpeg"
}, {
    category: "Flotadores",
    name: "Flotador Inflable para Niños",
    description: "Mantén a los niños seguros y entretenidos con nuestro flotador inflable, perfecto para horas de diversión en la piscina.",
    image: "/images/Flotadores2.jpeg"
}, {
    category: "Flotadores",
    name: "Flotador de Anillo",
    description: "Relájate en el agua con nuestro flotador de anillo, ideal para piscinas, lagos y playas.",
    image: "/images/Flotadores3.jpeg"
}, {
    category: "Flotadores",
    name: "Flotador de Flamenco",
    description: "Añade un toque de estilo a tus días de piscina con nuestro flotador de flamenco, un accesorio divertido y llamativo.",
    image: "/images/Flotadores4.jpeg"
}, {
    category: "Flotadores",
    name: "Flotador de Bebidas",
    description: "Mantén tus bebidas a flote y al alcance con nuestro flotador de bebidas, perfecto para fiestas en la piscina.",
    image: "/images/Flotadores4.jpeg"
} ,
{
    category: "Juguetes Acuáticos",
    name: "Flotador Inflable",
    description: "Diviértete en la piscina con nuestro flotador inflable, diseñado para brindar comodidad y diversión bajo el sol.",
    image: "/images/Juguetes1.jpeg"
}, {
    category: "Juguetes Acuáticos",
    name: "Pistola de Agua",
    description: "Disfruta de emocionantes batallas acuáticas con nuestra pistola de agua, perfecta para niños y adultos en días calurosos.",
    image: "/images/Juguetes2.jpeg"
}, {
    category: "Juguetes Acuáticos",
    name: "Tabla de Surf para Niños",
    description: "Inicia a tus hijos en el mundo del surf con nuestra tabla de surf para niños, diseñada para mayor estabilidad y seguridad.",
    image: "/images/Juguetes3.jpeg"
}, {
    category: "Juguetes Acuáticos",
    name: "Set de Buceo",
    description: "Explora el mundo submarino con nuestro set de buceo, que incluye máscara, snorkel y aletas para una experiencia completa.",
    image: "/images/Juguetes4.jpeg"
}, {
    category: "Juguetes Acuáticos",
    name: "Pelota de Playa",
    description: "Lleva la diversión a la playa o la piscina con nuestra colorida pelota de playa, ideal para juegos en el agua.",
    image: "/images/Juguetes3.jpeg"
} ,
{
    category: "Esenciales de Picnic",
    name: "Manta de Picnic",
    description: "Disfruta de tus comidas al aire libre con nuestra manta de picnic, resistente al agua y fácil de transportar, perfecta para cualquier terreno.",
    image: "/images/EsencialesDePicnic1.jpeg"
}, {
    category: "Esenciales de Picnic",
    name: "Cesta de Picnic",
    description: "Organiza tu comida al aire libre con estilo con nuestra cesta de picnic, equipada con compartimentos para todos tus esenciales.",
    image:"/images/EsencialesDePicnic2.jpeg"
}, {
    category: "Esenciales de Picnic",
    name: "Juego de Vajilla de Picnic",
    description: "Disfruta de una comida completa al aire libre con nuestro juego de vajilla de picnic, incluyendo platos, vasos y cubiertos reutilizables.",
    image: "/images/EsencialesDePicnic3.jpeg"
}, {
    category: "Esenciales de Picnic",
    name: "Enfriador Portátil",
    description: "Mantén tus bebidas y alimentos frescos con nuestro enfriador portátil, ideal para mantener la temperatura perfecta durante tu picnic.",
    image: "/images/EsencialesDePicnic4.jpeg"
}, {
    category: "Esenciales de Picnic",
    name: "Sillas de Picnic",
    description: "Relájate con comodidad en nuestras sillas de picnic, diseñadas para ser ligeras, plegables y fáciles de transportar.",
    image:"/images/EsencialesDePicnic5.jpeg"
} ,
{
    category: "Protección Solar",
    name: "Crema Solar SPF 50",
    description: "Protege tu piel de los dañinos rayos UV con nuestra crema solar SPF 50, resistente al agua y perfecta para todo tipo de piel.",
    image: "/images/ProtecciónSolar1.jpeg"
}, {
    category: "Protección Solar",
    name: "Gafas de Sol Polarizadas",
    description: "Disfruta de una visión clara y protegida con nuestras gafas de sol polarizadas, que reducen el deslumbramiento y ofrecen protección UV completa.",
    image: "/images/ProtecciónSolar2.jpeg"
}, {
    category: "Protección Solar",
    name: "Sombrero de Ala Ancha",
    description: "Mantén tu rostro y cuello protegidos del sol con nuestro elegante sombrero de ala ancha, ideal para cualquier actividad al aire libre.",
    image: "/images/ProtecciónSolar3.jpeg"
}, {
    category: "Protección Solar",
    name: "Camisa de Manga Larga UPF 50+",
    description: "Protege tu piel del sol con nuestra camisa de manga larga UPF 50+, diseñada para ofrecer comodidad y transpirabilidad mientras bloquea los rayos UV.",
    image: "/images/ProtecciónSolar4.jpeg"
}, {
    category: "Protección Solar",
    name: "Parasol Portátil",
    description: "Disfruta de sombra instantánea donde quiera que vayas con nuestro parasol portátil, fácil de instalar y transportar.",
    image: "/images/ProtecciónSolar5.jpeg"
} ,
{
    category: "Parrillas Portátiles",
    name: "Parrilla de Carbón Portátil",
    description: "Lleva tus habilidades de asado a cualquier lugar con nuestra parrilla de carbón portátil, fácil de montar y perfecta para picnics y campamentos.",
    image: "/images/ParrillasPortátiles1.jpeg"
}, {
    category: "Parrillas Portátiles",
    name: "Parrilla de Gas Portátil",
    description: "Disfruta de la comodidad y eficiencia de nuestra parrilla de gas portátil, con encendido rápido y control de temperatura ajustable.",
    image: "/images/ParrillasPortátiles2.jpeg"
}, {
    category: "Parrillas Portátiles",
    name: "Parrilla Eléctrica Portátil",
    description: "Cocina tus alimentos favoritos sin complicaciones con nuestra parrilla eléctrica portátil, ideal para balcones y áreas con restricciones de carbón o gas.",
    image: "/images/ParrillasPortátiles3.jpeg"
}, {
    category: "Parrillas Portátiles",
    name: "Parrilla Plegable de Acero Inoxidable",
    description: "Aprovecha la versatilidad y durabilidad de nuestra parrilla plegable de acero inoxidable, fácil de transportar y almacenar.",
    image: "/images/ParrillasPortátiles4.jpeg"
}, {
    category: "Parrillas Portátiles",
    name: "Parrilla de Mesa Portátil",
    description: "Perfecta para espacios pequeños, nuestra parrilla de mesa portátil ofrece una superficie de cocción compacta sin sacrificar rendimiento.",
    image: "/images/ParrillasPortátiles5.jpeg"
} ,
{
    category: "Parrillas Portátiles",
    name: "Mini Parrilla Plegable",
    description: "Parrilla portátil fácil de transportar y perfecta para acampar o para barbacoas en el parque.",
    image : "MiniParrillaPlegable.jpeg" ,
  },
  {
    category: "Parrillas Portátiles",
    name: "Parrilla a Carbón",
    description: "Una parrilla compacta de carbón que ofrece una excelente cocción al aire libre.",
    image : "/ParrillasPortátiles.jpeg"
  },
  {
    category: "Sombrillas",
    name: "Sombrilla de Playa Tropical",
    description: "Sombrilla ligera con diseños tropicales para protegerte del sol en la playa.",
    image : "/Sombrillas.jpeg"
  },

  {
    category: "Sillas de Playa",
    name: "Silla Plegable con Portavasos",
    description: "Cómoda silla de playa con portavasos y fácil de plegar para su transporte.",
    image : "/SillaPlegableconPortavasos.jpeg"
  },
  {
    category: "Sillas de Playa",
    name: "Silla Reclinable de Playa",
    description: "Silla reclinable con diferentes niveles de ajuste, ideal para relajarte bajo el sol.",
    image : "/SillaReclinabledePlaya.jpeg"
  },
  {
    category: "Flotadores",
    name: "Flotador en Forma de Piña",
    description: "Divertido flotador gigante con diseño de piña para disfrutar en la piscina.",
    image : "/FlotadorenFormadePiña.jpeg"
  },
  {
    category: "Flotadores",
    name: "Flotador Circular Clásico",
    description: "Flotador inflable resistente y duradero, perfecto para piscinas o playas.",
    image :  "/FlotadorCircularClásico.jpeg"
  },
  {
    category: "Juguetes Acuáticos",
    name: "Pistola de Agua Jet",
    description: "Pistola de agua de gran alcance para juegos divertidos en la piscina o playa.",
    image  : "/PistoladeAguaJet.jpeg"
  },
  {
    category: "Juguetes Acuáticos",
    name: "Pelota de Playa Inflable",
    description: "Pelota de playa multicolor inflable, ideal para juegos y actividades al aire libre.",
    image : "/PelotadePlayaInflable.jpeg"
  },
  {
    category: "Esenciales de Picnic",
    name: "Manta de Picnic Impermeable",
    description: "Manta para picnic resistente al agua, fácil de limpiar y transportar.",
    image : "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/118482821_01/w=1500,h=1500,fit=pad"
  },
  {
    category: "Esenciales de Picnic",
    name: "Cesta de Picnic de Mimbre",
    description: "Elegante cesta de mimbre con compartimentos para cubiertos y platos, perfecta para un picnic.",
    image : "https://www.homecenter.com.co/static/landing/guiasdecompra/Guias_de_compra_2/img/objetos-esenciales-para-el-picnic-perfecto/objetos-esenciales-para-el-picnic-perfecto-homemob.jpg"
  },
  {
    category: "Protección Solar",
    name: "Crema Solar SPF 50+",
    description: "Protector solar de alta protección para mantener tu piel segura de los rayos UV.",
    image : "https://farmaferoles.com/wp-content/uploads/2014/03/avene_solar_crema_con_color_50ml.png"
  },
  {
    category: "Protección Solar",
    name: "Gafas de Sol Polarizadas",
    description: "Gafas de sol polarizadas que protegen tus ojos de los rayos UV mientras disfrutas al aire libre.",
    image : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMWFhUVFRcVFRcWFRcVFhUVGBUXFhcVFhgaHiggGBolHRUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xABLEAABAwEEBQgHBgMGAwkAAAABAAIRAwQSITEFQVFhkQYTIjJxgaGxBxRCUmLB0SNygpKi8BVD4TNTc7LC8WODkxYkRFSjs9LT8v/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EAC0RAAICAQMDAgQGAwAAAAAAAAABAhESITFRE0FhA6EEFCLwUnGxweHxMmKR/9oADAMBAAIRAxEAPwDvG0ymKchRYjMavSkzzkFYUQNUadNMBiybNUgLmKBCYc1AeUJiZEgbVIAoRci0gqZNkgNymGKYWKLLMDUG0NTDWrVdqSeoNaCjGqEo5gBC5vYtUzJmAqQaCoRCk0hArMNJQNNHD+9SEFFsdJihpqN2E6aagaSamS4gQFu6iBimGobCgIasLUe6ouCVjoCWKBYjhSup5E1YOz6xtUX0ka4ptxzzSy7jSvQScxQc1NVGoZarTJaF7qy6j3FlxOyaAXViYuLEZBQCmE1TaoBh2IzGys5M2igrEUFap0kdtJYSaOiKYMNUKlJN3VohSpFOJXmip06aO4KMK8rM8aIOao3Ubmih1AG5lCYNdzbXQoVa8IL6uxDDirUOTN+p2QW+Co3ENSDldURlZKCtFqmHKQSsAVxbDSi3VsNRYUQa4orXLA1buqXRSsmGArXNrQaiNJUMtUDLFAtTQErRYhSG4CZasaEy6mhlivIzxaNXVEtRBgsISsKBubKgWI0LRCdiaAFiy6jXVl1VZNAbqxGhYix0Y3uR2Uwt02IzGwueUjqjExrVNYslZmphUCpFy0mBG6swCxzhtQzug96ZDdGqtfYlDjmmSDsUhTBWiaRlJOTEiwLOaT3q4UTZ1XURD9JifNLXNpkshZG/wVZkYC91SARru9ZdRkGJFqmAtgKbexQ2WkbYxEFMKTQpALNs3jFEObWriMtEpWVigJatgrT3rbGJkd9DCxRLUaIUecCSY2kLuaowmHGVCFaZm4goWy1EurYankLEFdWoRS1auIyDFgoWIl1YnZNHz+zlhpwf/hv1Rm+kDTLes0H/AJY+RXXuqSokbk8DTqHN0vSvpFn9pQafwuH1VlZfTW4YVrMe4/WE46jPsA90qrttCzyW1GtBGoiCcJw25ocFyLq+DprB6YLE/rh7O1sjiF0Nj5b2Ktgyu3sJjwXmVr5BUntDgwsvCRBGvKVzVu5B12y6ibwG3A8VNIu7Poela2OEtcD3pmk2V8qjSNrsjrt+pTI1SY+i6PRHpRttGLzg8fEPmE7TWhKg0z6NbSRLq8f0b6bG5VqB7WuB8DCvLN6YLC4dK+0/dnyWTTNVSPRFhXAn0sWDU535Sg1fS5YhlfPcngwckeguahOpLym3+mpgwpUCd7nADwlctpT0vW2pIp3KY3CTxKpJolq+x71VcG5kBVdt5SWSj/aV2D8QlfOdbT1utZg1ar51AkDwwTth5FV6nSqOuz3nxVozcEt2ev270raPp4B5efhaSqe0emyzt6lCo7tuj5rl7JyEoN65Llc2bk3ZmZUwngLJIjW9NtQ9Sy8XfQJV3pnthyszf1fRXTNGURlTbwU/UqfuN4BGCH1ChHpmtmuzs/V9EVnptre1Z29ziPkrd1hpHNjeCVraFoOzphPpi6iNUPTa32rOR2OBVrZPTLZHddlRv4QfIrm6/JCz1Mmwqe28gB/LehwBTj5PVbJ6TtHv/nXfvAhXVj5T2Sr1K7D+IL5m0ryfr2frNkbQqsVCs2lwaKN7M+wqVoY7JwPejAhfItm0xWp9Sq9vY8hXmj+X1vpkXbQ4jY6HeaWKHqj6gC0vE+T3pbtAe1toY1zdbm4Ed2RXodk5fWOpH2oB34eaWD7Bku51BC1Cr7PpmhU6tRp7wnG1QciCli0TkmShYshYgDzGnZXkTGHd5KdnZ0heGB8lqhpSSGkjHAR4KdW0gahwWrctiEkO6QtYpkNbEkSbx6LQMzAxJ1ahjnqPn+n64NUuaXHFxdLcGuvFpAgZQBw3K0tLTVLuccHR1WmbogYTkcYGRyJx1qnt1txIriA0ENDWgA+62MIGqZGC5pxfcu7D6F5TPpOu1DepXT0JkiAIMnsjZuQK2mHuBLXOkZPIN8EkYCMAMThCq691oIBB4zkJHgcRsCC20OGrDGN/ZtgwotjovxXpWn7Ku0OJbAfPSBicZ2zmuD5QaKdZqhb7J6p+SvW0xJlpbIMQ06z0SzHvT/LKzX7IyoWwQ1pyiMNmrBbx1WoJ0zgA9bD0MBMWWxvqG7TY57tjWlx4BBsQvrLyszyatY/8NV/6bvokLTZH0zD2OadjmlvmmLQC5yvOTOgTaXS7Bg8VQles8mrKKdBgGsSVUFbM/UlitCw0fYKVEAMaOCeFRLyiMG8LfQ5dRlmOSLdhGs9G7JBn6KTS2ZOJWeReIBalOC4DIHFCreO5CkDiLwpNWQUVlnwxIG7PyVtkJMrq9pIMXSMUZxGEYk6k4bJgDIO3VChS0c2bxznUpc62KxsWtNkD23Xtz2ry3lroD1d99vVcV7NXaTEYrlPSBZAbK+cxiNyTeS1Lh9MjxuVNj4KgArXRGgLTaT9hRfU2low4nBYnSFsVuaMHNVnTtDCMCldKcmbTZQDXpOph2RMQe8EqreSFqpszcToG2+6cHEdhhW2jeV1opkXKzjGp3SC4B9QpixVSEdQTgevUvSfaQACymY144rF5kLUsRUQPUzaQdQBQKrj707p8kmKoWGsFpiYZEnODg7EkExhsAA8wVz2kqLA67fAyBkHojOc94lWNXSbmFzWtBEm6b0GSL2wziSqSpWe4y+Zg4uOrERPHgub1ZJ6UaxWoOrYebaC5x5x0SBqBgC8NWTsZkxlmRKgAJMSDGEk68RnhrCtLDToOjnKlSJklt0kugA9Iz5bF12iW6Np4tDScJNQl5w3HCewLOVp6ItIoLDo+raceaHRJui5AgwSZyg4/spXlfZ6jLI9tQRdEEEyYMw4nYYOvUuz0hyspMF2j0jkMIaOxeX8sba914ucZeYOJiNngtFKVbCUVZT6A0Q60PaxuZIHFfSfJTkvSsVFrKbGzEucRiTrJOteO+jGhFRromMV7TS0z7zSN4xHBNpl2WL6YnIcFS8pOTdG10nU302kkGDAkHaNis221pEzhw81nrjfeHFNJmbkrPlXlBo02au+i7NjiF6ZohxNFke6qH0x2ENtnONyqN1bR/RN8nNID1dknECFpDcXqO4pnRgKbcYBVb/EW+8Fgt7feC0xZjZ0ArQIQy9I2a2Uc6tcN3Np1KjuLW3RxKtLNyhsNPqio4jWabp/VEdywlLHZWapN76DVi0a+pjN0b8+0BEq6Gc1vXLyM+gQNuETgMtaVPLel7NGse3mm+b0vZuXwqTcoRdN085Uu4jVAY5ZX6reiLxgkMMZAkhwBxxaRxnJbpvIBKStfKl7x0W0mO29Op4dFB/jsjpimd4pvb/qK2ipvdGbcVsyxv4ZooIjE4qjOkm7fB3zC2NJN2ng76LTBmeZcmoGnAeK5/ltVmzVOxH/iLdp/K76Kg5aW4GzOAJx3EeYSxoqMraOG5L6L9ZtVGhqqPAP3c3eAK+r9EaLpWek2nTYGtaIAAXz56GLKHW7nHTFNhiGk4nDUNgK+g/XB8X5H/RYOLZ0OaT1F+UegKFspGlVbIzBGBadRBXg3LL0f2iyEuaDUpe8BiB8Q+a+gfXB8X5H/AEQ69oYQQ4GIxljojfgnFNbic0z5JqUVKgIXqHLPk5Trvc+yWeoDJxa1xa4bbt3XuXnekNGVaJioxzD8TS3zQmnsU01uCW0tJW0yaPSGsapPuCJ14JSwVJvxjDruJJyY3b2lO3pwIG8HFa5WjBxorKdNjKrQQRIgSQbxxEb+t260xpemy4GgYucBMAYA3iJ1TEd6NVswc0tJMHeMNcgkbdspK2OJcynUIdiXTkT0SMd+M/7LJqlRa1YiKbaYa1zbxJdgOtqAAjVieB7U7YbAZJqSAcQ0Ea87wiI3LejrPJ504gzcER0NRO2c8doVlfOxOMeQlIhcAIwwgzgMcs/HiuF04Wl7abcg5xP5iB4LtbbabjHOOoLjOTlhda7UABN53Bs4lVLehw7s9f8ARbosMoc45uLssBku8a1vungEpoyzc1TbTa2A0AJwOdsUtjSNyNh8PqtXhsPh9Vhc7Yoh5M5YGDuMTB4jigKOB9MGihVsoqtBvUje1dXWvOuStcXS3GMxC970jZTVpupuAIcCPBfPRoOsVrfQfhDsPunJNOmKrVHVh7djvBTa5ux3AJZricURpctrMaHab2bH+CI17djuASjS5FYXfufopHQ2KjdjuA+iXszmh1XA4vBGAxBps3bby21x2j99yFzwD3AuaMGnExjjPkEmxpDgqM2Hh/RbFWnv4D6IAqDO8I7RCznm++38wTtCoOK1Pf4fREZaGfuPokTam+83jtyUham+8OKLQUx11qZ+4+i5D0g2sGm1o1kLonWpnvDiuC5aWu/VDWmY2bcgpk1Rp6aeR6f6CLCGWepWIxqPwPwtw85XqoqjZ4rmOQ1np2exUqd5vRYL2IzjGeKv/WGe83iFhaNfqGee3LXO7kA2hnvDiFsVmH2hxRoGoRzwc2z2iVS6c5NWa1Nh9Fs7QAD4K4vN2rAQnQrZ47bPRKb7rj3Bs4CAcFi9kwWJ5Dpnzpo6pWAfdYzF5cZnMgb8sE7z1p2Uh+F31RrPYwzBoIwA9nVltRS6Pa43R8leL5M3JcCj32k43mNM5BoiN8yZ1Kn02ar306biJLovNAbN4XXCQBjGCv8A1z3Sz9P0VTpC1vcWzBLXXpDLoDhkcBj3rNqik/AeyWeswG7UOJ1m8ANgkQO5FDK5dJfhGox2wIj99ypxbKoEBzo2BzwBGoREdwUbZygqMb0nY6gM/JIYHlPpB4bzJdJMf1JK9A9FvJerToesN6LqgF10NMN7HArhOR2galrrc/UHRBkT7UY4ThGC9b0dbK1INpucQwDohr7jgJwBF12WGRTxbVFWonRU7NaBM1ZmYyjVBMtOrUI4lL2rRtocWRVdDSCIfdgiMcG9IZ4OnVGKGzSLtRee9xPlC1/EahMAVe03Y4l/yS+X8v8A6N+uuCx9UtMf2o8JA3G72JejoarTLiypdvvD6hnFxAa0GSzY0DZAhQdWfGROvrOJB+6Bn3oD7EXA3gwTjlDp2m81xlHy/n3F1/HsOVqVUA3rQxgOu/dw78Nq8z9K2gmljbTTr031GRLWuBJbuhdiNEtBvudQw9p7Gk78g3HfKerWY1qRbfY9sRJIuQBAEAOwHaITXw7i7T/UT+IT0r9DxPROkucYJeQW7Jx7gm21ici/vnsylKcrOTlXR9XnmQ6k45sxa3cdyLoy3NrNkOIOsfsFOUG3QKSSsbaw5XjGyTju26lttAZz4nbKx7XDXPa4DyUWuJycd+JjsyKh+i+Sl6i4CGxgmYGMTBGrcsFnAMRtOWeShI9pzhPx/XLgsfTxxv4bDJ8SBKjovkfVRP1cDLDXksfREScp2a4SznagH9t898xgOKkaYiOmTql792zAZDgqXw75E/WXAYsxmdUHALLu8IHNt1h/5qhE8EWlZ2jMv7qhI+qr5d8k9ZcE3ERmOCodA2M2rSDGag6Tshv9VY6btLaNIxevHAS4ldV6G9ABrHWqtTqEv6hEtF3b1hM5o6T1SZXVW7R6LTosY0A3BAjEccyhWutSpYvDRlHQeZkxAOROOWe5WRpskC446xFR0g9hepPsoPtOiZuuMxHbOS5/kv8Ab2/k1fxfj3/gTFiaRgGRGoXcO+Nqi7Rmq7lqBmNe1PcxMG8CdWDie4teoGzPExUd+YYboww7SU18GvxC+cf4TVjL6WGJEQA+SB2DUmhpB/uM8VUVLwMF5nMgXTGGZxw71qi12N57tuM5brrcVr0JLRS9iOvF6uJceu/8JvEj5LFWc4RhBO+c+MFYp6MuS+tHg8ipBx9t3eDTHEiURzQBJJHY5x+S5H+L2sjClU7mv+iym+2vPRpGd4x8SurNHNgzpueGou7SCPGAqu1WlrSS5ze8T88FGzcldJ18wGA+84DylXVi9GHtWiqXnWGB10dro+al2+w9Fuzkq+mHPNykC9x2D6LouS3IGpWeKtrkCZDIdj2uiAO9dtoPQdjs2FMAv+8x3gP910TBSnv1fZ4Y6hgderYkkwzXY1Y7C2m24xt1oHRgg9nVM7kFlJrSb5LQIIxLv/cHluThpsJwxIE9YjxAQjVMxdnfjhhrkduMq4x1IlLQH6w0khoBJ13X+YZB4rb6VdzovtA1XaZcfF5x/CjOO3Anv+gHeEU1w0YmO0g90CQBvhafkjP82DpWF8RUe9+6KbP9A80yxhaOgzH9+6TPelXW0Hs/xHA9wMKFTSWoMcZ13if91VMnJE2tfM8y9vxC43hdIeo1qDiMWvI2OLiP1Nd5oLrS4ZUnSfeLmjg04rbbVWjBt0bmHzIMqkmQ5IXtOh6T6Tm1m3WO14gDvIjjK8s07yFr2cmtY3c7TzhhvkDeQACvWG2x+UDtIEn9BKmW1HewD94COBRL073Kh6rjseH2LlGWm7VaQRnqIPy71Z0rYxxvNcCTtcY8Gz4r0LTXJelav7WnTnaxt0jvC4+3+i17TNCq7HIFrj5DFYuEl5Nl6kJeBSnUIyeewS7jhPihljpxIjc0DwnzCBU5HaRpzdIcB8UE9xxSztGaTZnScdXsn5qL8GmPDLRjcYnwBHZEY9xUmMeMizHVcHHrBUpoaS/uKn5JUW2DSLsOae3tAb5qlLwTh5L/AJ1wz5oRuM8NXFI6R09TYCBN7cRHh80rR5IW2pjUcKbdbnXo4gR4rqeT3o1pEhzq9KuRjdBgd8lqf1vsL6Fuzk9BaDtGkKoe5j+aBxN18EbAQ13GF7jQe6jSbTZUY0AARUuiOwsfTdxag2KwVKIuUWUg0YEU6hw/DcPgVt9C1GelVbHusbEbzUJP6VcYJGU5tjNjt7CIFU1JPsPvwTueXHxKboteTF03dRLS7D4gAyO0SqIWeDDwCdrqjWn9L2xwRzZnuEc2Lo9rnx/mIPmrcUZqTLcTN03x91tRv+ZvzWzZz/fVW/ecPMOKp2WNgBgOLhrp1HEj8VNrfNKG1Bkh1oj/ABK1djgdk9NCi+wOXJaV6cOwtrm7r9LbrvMPCUWwG/P29OpGdxuQ2m64AdwVHT0k0kzWY4HDCvSf2da4duaZZYqUB7hT+FzwKc/dqMnHsKHDn9hqZYP0hQBj1h2GwvjuwWJBlJxHRc8jURUqOEbiM1ijprz7F9V+PcmadnB+0cap2AuI7oLQnbIB/KYxg7p8yPBIttNNvuk/BSLvF2C261VXdVr43Q3/ACR4puIlItubI6zi7ccu4QAlLS0EZAN1YOcT+FvV7UpTpPOYq8fm4/VaDGjEjXGLwfoCs3HyXkCaHnEYAZXcHR955afAo7aQAxL3mdQBncebABH0zQXWy7kJG4AwdxvIb9MMBIJJdsdfPG60gFGHYE6LIVyfYcO7DdAGXBAqUje6V6P3mbwA4JQW4nAtMarpI+QKiw6mtE7XPk8FajQnKx5sAHAnHOfPEjwWucY1sCo0E5/Z3iOxwAHgka1kc7FzqZjVfx8kFlnpjWQf8WR2w4KlHyS5eB82hoEmo52wD6OEBSFscepfO4uJ/wBOCUABPXD8MIJPkCsFjecmgjZIHfjHkr0I1D1K1Y4mGjYXhvhekrKdraOvUB3RPjBQ26KdEvcGjcC7jGA4olLR1AjM1IziGie+PNFoVMx2lhlAjdJPgR5KAt1I++e+75pinQot6gptPxPaT5kLRtkGL8/cj5BNV2E/JKz2uRDacb3uv+BamWFv95SB3c00x90sxSVSpTPWbG99Rrf8wS3rDGmWVKDex148WgpNWOLaLatzYgipiNYZTdH5QEMFj8Bz1Q7OaoET+Js7UkNPVG5Oa/eZjzHktN0zVfldBywdUxnVh+8FOD+/6LzX3/Y7TYB1aRBOOFOi09qn6y8YGD2834w4JKnVqNMlob2MJPFybp1RUwc5w748JCMa3FkGp2vW4Nnb9mI7w6fFCrWmk4wX05+J9I/MuQHaFa44VqnF0eRQqnJJkzDzvvfIhP6eRfVwMiwMzDKbt4pVh4g4qb6zGjJrcInnqdPxcC5Vf/ZlrcWPLT+9YAK0+i9uEvd2V3DwcwqqvuK67DvrBAljKlXdSq2WqO8kSq+06RrA42CDtNR1N3GmwDwQq1OtGFOuOyvH+mEk6o9uDjaW99KqP1tVKJLkEqaSthMtoOGyHtce5xTtGtaKkGpQrHaefd/oMeCWsVYjqOrTvYxvEUqjZ70avaraDdY6zicZNNwf3k3x5psSLB9uYAAaVRsZ9Cvj2nmsUOjpGmD0ObZJxHMVWk9rwR4jglHWe21ADUOAycx11o/UweC3Vp2toj1loGx7WnxxPfeUYrn3LTf2hw2vZSs53/bY8GELFX+u19deyfmI8AYWk6+7D72DizD2qtNvaHHzC0H3eraO5jXf0CpQ06wU9YWPOFOne33b3icENciT4LBhtDh0XuLdrro8581CpWIwqOad+DncSm2WF0fbvA+GcezYEO1WZjRLQ1o2uaXE8YWLaNaZqhVa8w1k/ed8ojwUPVX3oHNyNRYIx+IiCpUi8j7NzeEYbm/1S1SwvONSs4AaiCIG4H6IQBOa+Gne+Gm6fCB3qFepWA6LnTqvUjdHc2CT3whesMm4KlTuy4DFNsszYkvf+IkeaoQtRp1CJq143mm1vCWyPFMes0mfzA/ZhTx/SJ8UOpZm+y5hOxxOHabxnghc1UaL1NlnO26IjyT3EOC3gjol8TGAa3g5sT2QQlqttaDH2p/5hjyhI2ipUdg43Tl0MR/Tio0KWPWdOvo4D68VSiiWx6rpYgACkHb6j54CPmq+3W+tUwBDRqDZw7hgmH2OgT0i6fuD5uwRWWYMF4ObGoEgk9wKpUS2yto0qjs2Nc73og8RCNSFfImN2afqW6kMXNM9pjwURpoew5rN135wnbFRlLRtV+LqbSNsYonqNEYVOj2AAhLG31HY84Cf8SE1T0jhFemHj3pIPgMUnYJIL6pZwPs6jXbnuAUDXIwpsojtE+ZRqNusAxJpE+64PniYCm230C4llBob7N0Ax2uDjPAKMntTLxW9oQdpKsOtTB+4I+qh6+15gsfPaB5hWtW2gmA+h2Ei92Q6FqsL4jmz2t5tv1VJ+BNeSsfbY6La9Nm403Pd/kUTb67cqtR2+my74OR6ujRlfjc5wJ8Ev/CoPtP7HXR+oFV9JOpL/tBavfJHx02E8cUYcqqmT+jvaynPBabYqY61KmPvPJPAfRF5qztGJDRvBu916ClUeB3LkTq24Px9ZtAnUKcAd4apB9QjoWl/4jUHkwpoVWR9m9xGxtCmQfxOc6EGtbqzcrPhtdUDR+VoAQKyB0fbSJFW+Oy8P13UubHacucY3s5vyvHwSlpr1XH+Uz7lJhPG5PihMslrdk60PGwODB3DGFVPwK0Gq2au7oeuNPwkUyODgFOjoas0SKlP7zKVn8wQsFmtWRbWG42irHCmxFbois7Mhv3n2g+YCNh7meo2v/zNT8lD/wCxYiHk/U99n/r/APzWKclz7DpjdTT1nGTB2n/ZQqcor4gEtHwwPqfFcxUoAawewyEpWD3HDJRii8mdBUtUmWuJO8/1QXVXT0nT3yqmjY9biTsGQTF0jAeCoQ3WtAj2uI+QSzba8EjBw2OvR4ELdOyvOTSe4qyoaGeRL4YN+aG0gSYibW6MHOaPdpk48SlHQfYe4/8AEqYflGHGVdnROEte12zYe/JLusu3A+CE0DsWs5jrPjcMU/Se12ozv+qTNAx1T3BDfTeBlxTEWpLtg4yo+q38S+7Gq/Hgq6nbnNwMHipC1B2dOd8nyQIdLQGwHGePjCXbTkzJJ7VCo4RrHeludB6riN5dmmgHuaqYm6fFw8FH7Qao7QfmEp6yG/z2k7JnxQvXsetG9p/qqJGqjJ9wHdggWiu4ZvwRGWjC9fLxvaJ7i0/JM2G20Xm65pjaRe8WgHuIKAKnmw7M94UjZi3FhI24wrw2Cyk4VQO7+o8lCvo0N6rgRnh9EZIMSpYKpwdRD9/tcQmbMH+y59P4cfqnMjk4bxigW+pUiWuJ78UWBYUaob1nlzuMdswm2aSjA1HOPulgDR3HNcRUr1hiHOA7Stes1Y6xP4ilQXR3LqjHZsbGstmn/ul6lFn8sztDiCfqudo254iCTgMNW9M2XSg/mA7ZGrslOiLLOpolzs5E6s/AJd+gCDkO4tB4FwKINO2duYqHdA+uKhV0/Y3iOaf/ANS4T2AiJStl0gtLR72xBYNvvd2JQ7RXqAxdjcTEpa/Zn9X1qmfwVW8A4FCc8g3W1mVNjXh1Fx7BUgE9hTXkAlXSFoG1g2AkDwKUqW9561UzvcYU3gg9JlVp2EGOMZJiz1aeRcDucGuHANVCERane+OKxOvNmnGkzuoH5VAPBYlfgZWe0nKKxYsUascpNEjBW+jqTb2Q4BbWJeoENxfT9ZzTDXECBgCQPBIaLH/fANrJO83QZ44rFi5ZbGy/yLW6GhoaAAIgDADXko2oQcFixdETJkK9V208SkXHBYsVolldazijUc1ixWSCtDjhjqSdiaC8yNa2sTB7ljXotx6I4BJVqLZ6o4BYsQiWLWhgGIAHYFC0dUHXOetYsTYiyAmg1xxdGZxPFWmizNLFYsSexQvXeb+ZQ7aegtLE0IhowS104554qvaesO1YsVCYu5x260N5xWLEmJkahyRCMO75hYsRHYT3N0F1fJpoqNc2oL4jJ3SHArFiUtikUmlLQ+lXuUnOpt91hLG8BgrDS9JposcWguJxJAJyGtYsS7jWxVUbS8CA9wGPtHasWLFRJ//Z"
  },
  {
    category: "Peines",
    name: "Peine Antiestático de Madera",
    description: "Peine de madera hecho a mano que evita la estática y es suave con el cabello.",
    image : "data:image/jpeg;base64,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"
  },
  {
    category: "Peines",
    name: "Cepillo Desenredante de Cerdas Suaves",
    description: "Cepillo ergonómico con cerdas suaves que desenreda el cabello sin tirones.",
    image : "data:image/jpeg;base64,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"
  },
  {
    category: "Cables de Cargador",
    name: "Cable USB-C Trenzado",
    description: "Cable de carga USB-C trenzado que garantiza una alta velocidad de transferencia y durabilidad.",
    image : "https://www.tutiendastore.es/14624-large_default/cable-de-carga-rapida-para-movil-y-tablet-con-conexion-usb-tipo-c-cable-trenzado-de-nylon-carga-y-datos-huawei-xiaomi-samsung.jpg"
  },
//   {
//     category: "Cables de Cargador",
//     name: "Cable Lightning para iPhone",
//     description: "Cable de carga rápida para iPhone con protección extra en los conectores para mayor durabilidad.",
//   },
//   {
//     category: "Gorras para Hombres",
//     name: "Gorra de Béisbol Clásica",
//     description: "Gorra de béisbol con ajuste ajustable y diseño clásico, perfecta para el uso diario.",
//   },
//   {
//     category: "Gorras para Hombres",
//     name: "Gorra Deportiva Transpirable",
//     description: "Gorra ligera y transpirable ideal para actividades deportivas y días soleados.",
//   },
//   {
//     category: "Calcetines",
//     name: "Calcetines Deportivos de Algodón",
//     description: "Calcetines suaves y transpirables, diseñados para deportes y actividades físicas.",
//   },
//   {
//     category: "Calcetines",
//     name: "Calcetines Antideslizantes para Yoga",
//     description: "Calcetines con puntos antideslizantes, ideales para yoga y pilates.",
//   },
//   {
//     category: "Utensilios de Cocina",
//     name: "Set de Utensilios de Silicona",
//     description: "Juego de utensilios de cocina de silicona resistentes al calor, ideales para cocinar sin rayar tus ollas.",
//   },
//   {
//     category: "Utensilios de Cocina",
//     name: "Espátula de Madera",
//     description: "Espátula de madera de alta calidad, perfecta para cocinar y servir.",
//   },
//   {
//     category: "Parrillas Portátiles",
//     name: "Parrilla de Gas Portátil",
//     description: "Parrilla compacta de gas para barbacoas al aire libre, fácil de transportar y usar.",
//   },
//   {
//     category: "Sombrillas",
//     name: "Sombrilla Grande con Base",
//     description: "Sombrilla de gran tamaño con una base estable para uso en jardines o terrazas.",
//   },
//   {
//     category: "Sillas de Playa",
//     name: "Silla Plegable con Almohadilla",
//     description: "Silla plegable de playa con almohadilla de apoyo para mayor comodidad.",
//   },
//   {
//     category: "Flotadores",
//     name: "Flotador de Unicornio",
//     description: "Flotador inflable gigante con diseño de unicornio, perfecto para fotos divertidas en la piscina.",
//   },
//   {
//     category: "Juguetes Acuáticos",
//     name: "Juguete de Lanzamiento de Agua",
//     description: "Juguete de lanzamiento acuático que añade diversión adicional a tus juegos de agua.",
//   },
//   {
//     category: "Esenciales de Picnic",
//     name: "Termo de Acero Inoxidable",
//     description: "Termo duradero y portátil que mantiene tus bebidas calientes o frías durante horas.",
//   },
//   {
//     category: "Protección Solar",
//     name: "Sombrero de Ala Ancha",
//     description: "Sombrero de ala ancha que proporciona sombra y protección solar completa.",
//   },
//   {
//     category: "Peines",
//     name: "Peine Plegable para Viaje",
//     description: "Peine compacto y plegable, ideal para llevar en viajes o en el bolso diario.",
//   },
//   {
//     category: "Cables de Cargador",
//     name: "Cable Multiusos 3 en 1",
//     description: "Cable multiusos con conectores para USB-C, Lightning y Micro USB, ideal para cargar diferentes dispositivos.",
//   },
//   {
//     category: "Gorras para Hombres",
//     name: "Gorra de Camuflaje",
//     description: "Gorra con diseño de camuflaje, perfecta para actividades al aire libre y estilo casual.",
//   },
//   {
//     category: "Calcetines",
//     name: "Calcetines Térmicos de Invierno",
//     description: "Calcetines gruesos y cálidos diseñados para mantener tus pies calientes durante el invierno.",
//   },
//   {
//     category: "Utensilios de Cocina",
//     name: "Tijeras de Cocina Multifuncionales",
//     description: "Tijeras de cocina versátiles con múltiples funciones como cortar, pelar y abrir botellas.",
//   },
//   {
//     category: "Parrillas Portátiles",
//     name: "Mini Parrilla Eléctrica",
//     description: "Parrilla eléctrica compacta que te permite cocinar sin necesidad de carbón o gas.",
//   },
//   {
//     category: "Sombrillas",
//     name: "Sombrilla Resistente al Viento",
//     description: "Sombrilla diseñada para resistir fuertes vientos, ideal para días de tormenta.",
//   },
//   {
//     category: "Sillas de Playa",
//     name: "Silla de Playa Alta con Sombrilla",
//     description: "Silla de playa alta con sombrilla incorporada para mayor protección contra el sol.",
//   },
//   {
//     category: "Flotadores",
//     name: "Flotador Inflable de Donut",
//     description: "Flotador con forma de donut y un diseño divertido, perfecto para flotar en la piscina.",
//   },
//   {
//     category: "Juguetes Acuáticos",
//     name: "Torpedo de Agua",
//     description: "Juguete en forma de torpedo que se desliza bajo el agua para diversión acuática.",
//   },
]


export default async  function BLogPage (){


    // if(category)allPosts =    allPosts.filter(post=>post.category === category)
return   <Suspense>  <div className="flex flex-col py-10 px-2 max-w-full gap-6 items-center "  >
        <Title  titleClassName="text-primaryDark"  title="Nuestros Productos" descreption="Explora nuestra diversa selección de artículos de alta calidad para tu hogar." />
         <div className="flex px-10 py-5 flex-col gap-6" >
          <ProductsHero/>
        <DisplayAnimation className="w-full " delay={0.3} >
        <div className="flex flex-col lg:flex-row w-full  justify-between  gap-4 " >
        <ProductsFilterCard category={ undefined} />
        <ProductsSection products={products} />
        </div>
        </DisplayAnimation>
        </div>
        </div></Suspense>
}