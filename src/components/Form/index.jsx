import "./index.css"

const Form = () => {
    const onSubmit = () => {

    };
    return (
        <form>
            <h1>Logo</h1>
            <h2>Seja bem-vindo(a) visitante!</h2>
            <label htmlFor="Name">
                Nome completo
            </label>
            <input
                id="name"
                type="text" />
            <label htmlFor="Name">
                CPF
            </label>
            <input
                id="number"
                type="text" />
            <label htmlFor="Name">
                Profissão
            </label>
            <input
                id="name"
                type="text" />
            <label htmlFor="Name">
                Gênero
            </label>
            <input
                id="name"
                type="text" />
            <label htmlFor="Name">
                Idade
            </label>
            <input
                id="number"
                type="text" />
            <label htmlFor="Name">
                Cidade
            </label>
            <input
                id="name"
                type="text" />
            <label htmlFor="Name">
                Bairro
            </label>
            <input
                id="name"
                type="text" />
        </form>
    )

}


export default Form;