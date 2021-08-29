const containerMainNone = document.querySelector('.container-main-none');
const buttonCandidatar = document.querySelector('#candidatar');
const containerbutton = document.querySelector('.container-button');
const voltarButton = document.querySelector('#voltar');
const enviarButton = document.querySelector('#enviar');
const title = document.querySelector('.title');


function carregar() {
    containerMainNone.style.display = 'none';
    containerbutton.style.display = 'none';
    title.style.display = 'block';
}

setTimeout(function page() {
    containerMainNone.style.display = 'none';
    containerbutton.style.display = 'block';
    title.style.display = 'none';
}, 2000);

buttonCandidatar.addEventListener('click', (event) => {
    candidatar();
})
voltarButton.addEventListener('click', (event2) => {
    voltar(event2);
})
/* enviarButton.addEventListener('click', (event3) => {
    enviar(event3);
}) */

function candidatar() {
    containerMainNone.style.display = 'block';
    containerbutton.style.display = 'none';
    title.style.display = 'none';

}
function voltar() {
    containerMainNone.style.display = 'none';
    containerbutton.style.display = 'block';
    title.style.display = 'none';

}

carregar();
//FUNÇÕES DE DADOS PESSOAIS
//email
function validaEmail(em) {
    if (em !== '' && em !== 'E-mail') {
        return true;
    }
    else {
        return false;
    }
}
//nome e sobrenome
function validaNomeESobrenome(noms, sob) {
    if (noms != '' && sob != '' && noms !== 'Nome' && sob !== 'Sobrenome') {
        return true;
    }
    else {
        return false;
    }
}
//cargo
function validaCargo(career) {
    if (career != '' && career !== 'Cargo') {
        return true;
    }
    else {
        return false;
    }
}


//FUNÇÕES DE INFORMAÇÂO PESSOAL
//função cpf
function validaCPF(cpf) {
    if (cpf.length != 11) {
        console.log('Por favor verificar o número preenchido!')
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        //pega do indice 0 ao 9
        var digitos = cpf.substring(9);
        //pega a partir do 9

        console.log('Digitos do CPF: ' + digitos);
        console.log('NumeRos do CPF: ' + numeros);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
            //procura até encontra uma string na lista
        }

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
        //Operador ternário


        //VALIDAÇÃO DO PRIMEIRO DIGITO
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
}
//funçãoID
function validaIdentidade(id) {
    if (id.length != 9) {
        return false;
    } else {
        return true;
    }
}



//FUNÇÔES CONTATO
function validaCelular(cellphone) {
    if (cellphone.length = !11) {
        return false;
    }
    else {
        var numeros = cellphone.substring(0, 10);
        var num3 = '9';
        if (num3 != numeros.charAt(2)) {
            return false;
        }

        else {
            return true;
        }

    }
}

//FUNÇÕES DE ENDEREÇO
//função cep
function validaCEP(cep) {
    if (cep != '' && cep !== 'CEP') {
        return true;
    }
    else {
        return false;
    }
}
// função verifica endereço
function validaEndereco(end) {
    if (end != '' && end !== 'Endereço') {
        return true;
    }
    else {
        return false;
    }
}
//função verifica bairro
function validaBairro(bairro) {
    if (bairro != '' && bairro !== 'Bairro') {
        return true;
    }
    else {
        return false;
    }
}
// função verifica cidade
function validaCidade(cidade) {
    if (cidade != '' && cidade !== 'Cidade') {
        return true;
    }
    else {
        return false;
    }
}
function enviar() {
    const cep = document.querySelector('#cep').value;
    const adress = document.querySelector('#adress').value;
    const bairro = document.querySelector('#bairro').value;
    const city = document.querySelector('#city').value;

    const email = document.querySelector('#email').value;
    const nome = document.querySelector('#nome').value;
    const sobrenome = document.querySelector('#sobrenome').value;
    const cargo = document.querySelector('#cargo').value;

    const tel1 = document.querySelector('#tel1').value;
    const tel2 = document.querySelector('#tel2').value;
    const cel = document.querySelector('#cel').value;
    const contact = document.querySelector('#contact').value;

    const dia = document.querySelector('#tipo1');
    const diaSel = dia.options[dia.selectedIndex].value;
    const mes = document.querySelector('#tipo2');
    const mesSel = mes.options[mes.selectedIndex].value;
    const ano = document.querySelector('#ano').value;

    const etnia = document.querySelector('#etnia');
    const etniaSel = etnia.options[etnia.selectedIndex].value;
    const sex = document.querySelector('#sex');
    const sexSel = sex.options[sex.selectedIndex].value;
    const status = document.querySelector('#status');
    const statusSel = status.options[status.selectedIndex].value;


    const identidade = document.querySelector('#identidade').value;
    const cpf = document.querySelector('#cpf').value;
    let resultcpf = validaCPF(cpf);
    const habilitacao = document.querySelector('#habilitacao');
    const habilitacaoSel = habilitacao.options[habilitacao.selectedIndex].value;
    const res = document.querySelector('#res')

    validaCelular(cel)
    validaNomeESobrenome(nome, sobrenome);
    validaCargo(cargo);
    if (validaNomeESobrenome(nome, sobrenome) == true) {
        console.log('Nome ok');
        if (validaCargo(cargo) == true) {
            console.log('Cargo ok');
            if (validaEmail(email) == true) {
                console.log('Email ok');
                if (resultcpf == true) {
                    console.log('CPF ok!');
                    if (validaIdentidade(identidade) == true) {
                        console.log('Identidade Ok');
                        if (validaCelular(cel) == true) {
                            console.log('Celular OK');
                            if (validaCEP(cep) == true) {
                                console.log('CEP: ' + cep);
                                if (validaEndereco(adress) == true) {
                                    console.log('Endereço OK');
                                    if (validaBairro(bairro) == true) {
                                        console.log('Bairro OK');
                                        if (validaCidade(city) == true) {
                                            console.log('Cidade OK');
                                            const pessoa = newPessoa({
                                                nome: nome,
                                                sobrenome: sobrenome,
                                                email: email,
                                                cargo: cargo,
                                                identidade: identidade,
                                                cpf: cpf,
                                                tel1: tel1,
                                                tel2: tel2,
                                                cel: cel,
                                                contact: contact,
                                                endereço: adress,
                                                bairro: bairro,
                                                cidade: city,
                                                cep: cep,
                                                habilitacao: habilitacaoSel,
                                                etnia: etniaSel,
                                                status: statusSel,
                                                sexo: sexSel,
                                                dia: diaSel,
                                                mes: mesSel,
                                                ano: ano,
                                            })
                                            console.log(`Cadastro de : ${pessoa.nome}`);
                                            console.log(pessoa);

                                            containerMainNone.style.display = 'none';
                                            containerbutton.style.display = 'none';
                                            title.style.display = 'block';

                                            switch (pessoa.sexo) {
                                                case 'Mulher cis gênero':
                                                    res.innerHTML = `Seja Bem vinda ${pessoa.nome}! Cadastro Realizado com Sucesso!`;
                                                    break;
                                                case 'Homem transgênero':
                                                    res.innerHTML = `Seja Bem vindo ${pessoa.nome}! Cadastro Realizado com Sucesso!`;
                                                    break;
                                                case 'Homem transgênero':
                                                    res.innerHTML = `Seja Bem vindo ${pessoa.nome}! Cadastro Realizado com Sucesso!`;
                                                    break;
                                                case 'Mulher Transgênera':
                                                    res.innerHTML = `Seja Bem vinda ${pessoa.nome}! Cadastro Realizado com Sucesso!`;
                                                    break;
                                                case 'Não Binarie':
                                                    res.innerHTML = `Seja Bem vinde ${pessoa.nome}! Cadastro Realizado com Sucesso!`;
                                                    break;
                                                case 'Intersexual':
                                                    res.innerHTML = `Seja Bem vinde ${pessoa.nome}! Cadastro Realizado com Sucesso!`;
                                                    break;
                                                default:
                                                    res.innerHTML = `Seja Bem vinde ${pessoa.nome}! Cadastro Realizado com Sucesso!`;
                                                    break;
                                            }

                                        }
                                        else {
                                            window.alert('Verifique a cidade digitada!')
                                        }
                                    } else {
                                        window.alert('Verifique o bairro digitado!')
                                    }

                                } else {
                                    window.alert('Verifique o endereço!')
                                }
                            } else {
                                window.alert('Verifique o número do CEP, preencha apenas com números!')
                            }
                        } else {
                            window.alert('Verifique o número de telefone!')
                        }
                    } else {
                        window.alert('Verifique o campo de identidade, preencha somente com números!')
                    }
                } else {
                    window.alert('Verifique o campo de CPF, preencha somente com números!')
                }
            } else {
                window.alert('Verifique o campo de email')
            }
        } else {
            window.alert('Verifique o campo de cargo')
        }
    } else {
        window.alert('Verifique os campos de nome e sobrenome')
    }

}

