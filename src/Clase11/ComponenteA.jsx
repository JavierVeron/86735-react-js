const ComponenteB = ({isDarkMode}) => {
    return (
        <p className="p-5">Modo Oscuro? <b>{isDarkMode ? "Sí" : "No"}</b></p>
    )
}

const ComponenteA = ({isDarkMode}) => {
    return <ComponenteB />
}

export default ComponenteA