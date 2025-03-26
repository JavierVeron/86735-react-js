import { useRef } from "react"

const CompUseRef = () => {
    //const titulo = document.getElementById("titulo");
    //console.log(titulo);
    
    const titulo = useRef(null);
    const contenido = useRef(null);

    const modificarTexto = () => {
        titulo.current.innerHTML = "Texto Modificado!"
    }

    const modificarContenido = () => {
        contenido.current.innerHTML = `<img src='https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Stacker-Doble-1.png' alt='Stacker Doble' width='240' />
        <h1>Stacker Doble</h1>
        <h3>El doble de manija</h3>`;
        console.log(contenido.current);
        contenido.current.className = "my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded";
        
    }

    return (
        <div className="container my-5 ">
            <div className="row">
                <div className="col">
                    <h1 id="titulo" ref={titulo}>Título Original</h1>
                    <button className="btn btn-primary" onClick={modificarTexto}>Modificar Texto</button>
                    <div ref={contenido} className="my-5"></div>
                    <button className="btn btn-primary" onClick={modificarContenido}>Modificar Contenido</button>
                </div>
            </div>
        </div>
    )
}

export default CompUseRef