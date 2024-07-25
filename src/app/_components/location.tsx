
export const Location = ()=>{
    return <div className="flex border-t-2 flex-col lg:flex-row max-w-full  border-black py-3 w-full items-center justify-around" >
    <div className="flex  max-w-[400px] items-center lg:items-start p-5 flex-col gap-2" >
     <h3 className="H3" >Visítanos Aquí</h3>
     <p className="inline-block text-center lg:text-start ">¡Encuéntranos fácilmente en el mapa a continuación! Nuestra ubicación es de fácil acceso para todas tus necesidades de compras en FERRETERÍA Y BAZAR HOGAR. Ven a explorar nuestra amplia gama de productos y experimenta nuestro excepcional servicio al cliente. Esperamos darte la bienvenida y asistirte con todo lo que necesites.</p>
    <div className="w-full hidden lg:flex py-7 " > <i className="bi text-8xl inline-block bi-geo-alt-fill"></i></div>
    </div>
    <iframe  className="border-2 max-w-full rounded-lg border-black" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2116.924156138826!2d2.1264177107021824!3d41.37880232449669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4988b0f99c409%3A0xcb186d6fbb84cf0a!2sFERRETER%C3%8DA%20Y%20BAZAR%20HOGAR!5e0!3m2!1sfr!2sdz!4v1718631345684!5m2!1sfr!2sdz" width="600" height="450"  loading="lazy" ></iframe>
    </div>
}
