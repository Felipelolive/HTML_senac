let formfuncionario = document.getElementById("form-funcionario")
let relatorio = document.getElementById("relatorio");
formfuncionario.addEventListener('submit', (event) => {
    event.prevententDefault();

    // Variaáveis para o uso de Cálculos:
    let inss = 0;
    let irpf = 0;
    let vt = 0;
    let liquido = 0;

    //Variáveis das DIVS HTML:
    let nomeFunc = document.getElementById("nome-func");
    let cargoFunc = document.getElementById("cargo-func");
    let dpFunc = document.getElementById("dp-func");
    let salarioFunc = document.getElementById("salario-base");
    let proventoFunc = document.getElementById("provento-salario");
    let liquidoFunc = document.getElementById("salario-liquido");
    let inssFunc = document.getElementById("desc-inss");
    let irpfFunc = document.getElementById("desc-irpf");
    let vtFunc = document.getElementById("desc-vt");


    if (formfuncion.salario.value <= 1412)
        inss = formfuncionario.salario.value * 0.075;
    else if (formfuncionario.salario.value > 1412 && formfuncionario.salario.value <= 2824)
        inss = formfuncionario.salario.value * 0.09;
    else if (formfuncionario.salario.value > 2980 && formfuncionario.salario.value < 3751)
        inss = formfuncionario.salrio.value * 0.12;
    else if (formfuncionario.salario.value > 3640 && formfuncionario.salario.value < 7080)
        inss = formfuncionario.salrio.value * 0.14;


    if (formfuncion.salario.value > 1900 && formfuncionario.salario.value <= 2826)
        irpf = (formfuncionario.salario.value - inss) * 0.075;
    else if (formfuncionario.salario.value > 2826 && formfuncionario.salario.value <= 3751)
        irpf = (formfuncionario.salario.value - inss) * 0.15;
    else if (formfuncionario.salario.value > 3751 && formfuncionario.salario.value <= 4664)
        irpf = (formfuncionario.salrio.value - inss) * 0.225;
    else if (formfuncionario.salario.value > 4664)
        irpf = (formfuncionario.salrio.value - inss) * 0.275;

    vt = formfuncionario.salario.value * 0.06;

    liquido = formfuncionario.salario.value - inss - irpf - vt;
   
    relatorio.style.display = "block";

    nomeFunc.innerHTML = formfuncionario.nome.value;
    cargoFunc.innerHTML = formfuncionario.cargo.value;
    dpFunc.innerHTML = formfuncionario.departamento.value;
    salarioFunc.innerHTML = `${Number(formfuncionario.salario.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
    inssFunc.innerHTML = `${Number(formfuncionario.salario.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
    irpfFunc.innerHTML = `${Number(formfuncionario.salario.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
    vtFunc.innerHTML = `${Number(formfuncionario.salario.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
    proventoFunc.innerHTML = `${Number(formfuncionario.salario.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
    liquidoFunc.innerHTML = `${Number(formfuncionario.salario.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;






}
)