


const TemplateExpression = () => {


    const name = "Matheus";

    const data = {
        age: 22,
        job: "Desenvolvedor WEB" 
    }

    return(
        <div>
            <p>A Soma e {2+2}</p>
            <h3>Bem vindo {name}</h3>
            <h3>minha idade e {data.age} e trabalho como {data.job}</h3>
        </div>
    )
}

export default TemplateExpression