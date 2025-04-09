import { useState } from "react";

const withFormValidation = (WrappedComponent) => {
    const WithFormValiation = (props) => {
        const [errors, setErrors] = useState({});

        const validateForm = () => {
            const newErrors = {};

            if (!props.formData.nombre) {
                newErrors.nombre = "Ingrese un valor para el campo Nombre!";
            }

            if (!props.formData.email) {
                newErrors.email = "Ingrese un valor para el campo Email!";
            }

            setErrors(newErrors);
        }

        return (
            <WrappedComponent {...props} errors={errors} validateForm={validateForm} />
        )
    }

    return WithFormValiation;
}

const Form = ({formData, errors, validateForm, onChange}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        validateForm && validateForm();

        console.log("Formulario enviado!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" name="nombre" className="form-control" value={formData.nombre} onChange={(e) => onChange(e)} />
                <div className="form-text">{errors && errors.nombre ? errors.nombre : ""}</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="text" name="email" className="form-control" value={formData.email} onChange={(e) => onChange(e)} />
                <div className="form-text">{errors && errors.email ? errors.email : ""}</div>
            </div>
            <button type="submit" className="btn btn-warning">Enviar</button>
        </form>
    )
}

const FormWithValidation = withFormValidation(Form);

const HOC = () => {
    const [formData, setFormData] = useState({nombre:"", email:""});

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]:event.target.value});
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>HOC (Hight Order Components)</h1>
                    <FormWithValidation formData={formData} onChange={handleChange} />
                </div>
            </div>
        </div>
    )
}

export default HOC