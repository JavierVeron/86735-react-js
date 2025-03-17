import Logo from "../components/Logo";

const SugarSyntax = () => {
    // Forma clásica
    /* const condicion = true;
    let resultado;

    if (condicion) {
        resultado = "Podes tomar alcohol!"
    } else {
        resultado = "NO, NO PODES TOMAR ALCOHOL... VOY A LA LLAMAR A LA POLICIA!"
    } */

    // Sugar Syntax
    /* let edad = 19
    const condicion = edad > 18;
    let resultado = condicion ? "Podes tomar alcohol!" : "NO, NO PODES TOMAR ALCOHOL... VOY A LA LLAMAR A LA POLICIA!"; */

    // Muestro en consola el resultado
    //console.log(resultado);

    // Variables con valor por copia (va´lido con variables primitivas string, number y boolean)
    /* let precio = 2000;
    let nuevoPrecio = precio; // Variable con valor por copia (son variables independientes)
    console.log(precio);
    console.log(nuevoPrecio);
    nuevoPrecio = 4000;
    console.log(precio);
    console.log(nuevoPrecio); */

    // Variables con valor por referencia
    // Objetos
    /* let bebida1 = {id:1, nombre:"Coca Cola", precio:2200};
    let bebida2 = bebida1; // Variable con valor por referencia (No es independiente, tiene la referencia al objeto original)
    //console.log(bebida1);
    //console.log(bebida2);
    bebida1.precio = 5000;
    bebida2.nombre = "MANAOS";
    //console.log(bebida1);
    //console.log(bebida2);
    // ¿Cómo puedo crear un nuevo objeto con los valores del objeto original y que sea independiente?
    // Forma tradicional
    //let bebida3 = {id:bebida1.id, nombre:bebida1.nombre, precio:bebida1.precio}; // Crear un nuevo objeto (independiente)
    // Operador Spread
    let bebida3 = {imagen:"manaos.jpg", ...bebida1, id:3, nombre:"Manaos Cola", categoria:"bebidas"}; // Crear un nuevo objeto con las propiedades del objeto original
    bebida3.precio = 7000;
    console.log(bebida1);
    console.log(bebida2);
    console.log(bebida3); */

    // Arrays
    /* const bebidas1 = ["Coca Cola", "Pepsi", "Seven Up"];
    const bebidas2 = bebidas1; // Variable con valor por referencia (No es independiente, tiene la referencia al array original)
    bebidas1[2] = "Sprite";
    console.log(bebidas1);
    console.log(bebidas2);
    // ¿Cómo puedo crear un nuevo array con los valores del array original y que sea independiente?
    // Forma tradicional
    //const bebidas3 = [bebidas1[0], bebidas1[1], bebidas1[2]]; // Crear un nuevo array (independiente)
    //bebidas3[2] = "Cunnington Cola";
    //console.log(bebidas3);
    // Operador Spread
    const bebidas3 = [...bebidas1]; // Crear un nuevo array con los valores del array original
    bebidas3[1] = "Pepsi Max";
    console.log(bebidas1);
    console.log(bebidas2);
    console.log(bebidas3); */

    // Desestructuración
    /* let bebida1 = {id:1, nombre:"Coca Cola", precio:2200};
    let {nombre, precio} = bebida1;
    console.log(nombre);
    console.log(precio); */
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Sugar Syntax</h1>
                    {/* <p>{resultado}</p> */}
                </div>
            </div>
        </div>
    )
}

export default SugarSyntax