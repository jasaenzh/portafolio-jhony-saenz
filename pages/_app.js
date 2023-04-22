// Aca debemos de ingresar el Tema que vamos a usar en la pagina para ello en la carpeta dist de bootswatch estan los temas
import 'bootswatch/dist/cosmo/bootstrap.min.css'


export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
