const formAdicionaContato = document.getElementById('adiciona-contato');
const arrayContatos = [];
const arrayTelefones = [];
const imgWhatsapp = '<img src="./images/whatsapp.png" alt="icone whatsapp">';
let linhas = '';

formAdicionaContato.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaContato();
    atualizaTabela();
    contabilizaContatos();
})

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato')

    if (arrayContatos.includes(inputNomeContato.value) || arrayTelefones.includes(inputTelefoneContato.value)) {
        alert(`O nome ou o telefone já está cadastrado`);
    } else {
        arrayContatos.push(inputNomeContato.value);
        arrayTelefones.push(parseInt(inputTelefoneContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `<td>${validaWhatsapp() === "sim" ? imgWhatsapp : '---'}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

function validaWhatsapp() {
    let whatsapp = window.prompt("Esse número possui whatsapp? Digite sim ou não.")
    return whatsapp;
}

function contabilizaContatos() {
    let totalContatos = 0;
    document.getElementById('total-contatos').innerHTML = totalContatos += arrayContatos.length;    
}