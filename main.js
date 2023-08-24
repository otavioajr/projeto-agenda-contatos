const formAdicionaContato = document.getElementById('adiciona-contato');
const arrayContatos = [];
const arrayTelefones = [];

formAdicionaContato.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaContato();

})

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato')
    
    if (arrayContatos.includes(inputNomeContato.value) || arrayTelefones.includes(inputTelefoneContato.value)) {
        alert(`O nome ou o telefone já está cadastrado`);
    } else {
        arrayContatos.push(inputNomeContato.value);
        arrayTelefones.push(parseInt(inputTelefoneContato.value));
    }

    console.log(arrayContatos);
    console.log(arrayTelefones);

    

}

