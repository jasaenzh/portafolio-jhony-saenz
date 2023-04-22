import Layout from "../components/Layout";
import Link from "next/link";

const Custom404 = () => (

    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p>
                <span>Pagina no existe, volver al </span>
                <Link className="text-decoration-none" href="/">
                    Inicio
                </Link>
            </p>
        </div>
    </Layout>

)

export default Custom404;