

// outra forma de capturar todos os elementos do HTML a # indica que estou pegando pelo ID
// querySelector <- seleciona um registro por vez
// querySelectorAll <- seleciona todos os registros da classe indicada

var botoesincrementa = document.querySelectorAll(".btn-incrementa");

// percorrendo todos 
for(let botao of botoesincrementa)
{
    // função para chamar evendo de click e chamar a função indicada no seguno parametro
    botao.addEventListener('click',increment);

    function increment(){
        // capturando item mais próximo
        var item = botao.closest('.item');
        // do intem localizado o queruselector está pegando a classe quantidade
        var input = item.querySelector('.quantidade');
        // o operador ++ no js realiza a conversão automatica de string para valor numerico
        input.value++;
        
        var preco = pegaPrecoItem(item);
    
        adicionaTotal(preco);
    }
}

var formularioPedido = document.forms.pedido;

//Capturando o evento submit do formulário e passando uma função que será executada quando este evento ocorrer.
formularioPedido.addEventListener('submit', function(evento) {

    //Capturando o evento submit do formulário e passando uma função que será executada quando este evento ocorrer.
var inputs = formularioPedido.querySelectorAll('input.quantidade');
//Esta variável nos auxiliará na verificação dos inputs,
var contador = 0;
//Iterando na lista de inputs.
for( let input of inputs)
{
       if (input.value > 0)
       {
           contador++;
       }
   };

   if ( contador == 0)
   {
       //evitar que o formulário seja enviado
       evento.preventDefault();
       alert("Deve ter pelo menos 1 pizza no pedido");
   }

})
// querySelector <- seleciona um registro por vez
var botoesdecrementa = document.querySelectorAll(".btn-decrementa");

// função para ouviar eventos e disparar FUNÇÕES EXISTE DIVERSOS EVENTOS PARA O PRIMEIOR PARÂMETRO 'CLICK'
for(let botao of botoesdecrementa)
{

    botao.addEventListener('click',decrement);

    function decrement(){
        var item = botao.closest('.item');
        
        var input = item.querySelector('.quantidade');

        if(input.value > 0){
            
            input.value--;
            
            var preco = pegaPrecoItem(item);

            adicionaTotal(-preco);
        }else{
            alert("Saldo invalido");
        }
}

        
    
}

function pegaPrecoItem(item){
    // captutando valor do item
    var precoItem = item.querySelector('.preco-item');
    // capturando valor de texto que está entre as tags
    return Number(precoItem.textContext);
}

function adicionaTotal(preco){
    // capturando valor do campo total
    var elementototal = document.querySelector("#total");
    // adicionando valo ao campo
    elementototal.textContent = Number(elementototal.textContent) + preco;
}