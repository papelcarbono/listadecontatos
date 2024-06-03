const form = document.getElementById('formulario');
const nomes = [];
const telefones = [];
let linhas='';

form.addEventListener('submit', function(e) { 
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome');
    const inputNumeroContato = document.getElementById('telefone');

    if (telefones.includes(parseInt(inputNumeroContato.value))) {
        alert(`O Telefone: ${inputNumeroContato.value} já foi inserido`);
    } else {
    nomes.push(inputNomeContato.value);
    telefones.push(parseInt (inputNumeroContato.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';
    linhas += linha;
    }

    inputNomeContato.value ='';
    inputNumeroContato.value = '';
    }

    function atualizaTabela(){
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
    