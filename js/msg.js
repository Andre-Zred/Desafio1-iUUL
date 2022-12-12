/* Envio de mensagens para o formulário */

//Card de mensagens  - msg.html
const msgList = document.querySelector('#mensagens');

//1.função para gerar chaves randomicas

function geradorCHaves(){
    return Math.floor(Math.random() * 20);
}


//3.Armazenar mensagens enviadas

function ArmazenarMSG(){
     // Recebendo dados enviados pelo formulário

     const form_nome = document.querySelector('#name')
     const form_email = document.querySelector('#email')
     const form_desc = document.querySelector('#text')
 
     //Verificação de valores
     if(form_nome.value == "" && form_email.value == "" && form_desc.value == ""){
         
         alert("Não há dados")
 
     }else{
 
         //Modelo objeto de formulário
 
         let dados = {
             nome: "",
             email: "",
             descricao: ""
         }
 
         //Verificar se houve inserção de dados
         

            //Inserindo dados de input no formulário
            dados.nome = form_nome.value;
            dados.email = form_email.value;
            dados.descricao = form_desc.value;

            if(dados.nome!=='' && dados.email!==''&& dados.descricao!==''){

                //Salvando objeto no sessionStorage
                sessionStorage.setItem(geradorCHaves(), JSON.stringify(dados))

            }else{

                alert("Por favor, insira informação nas mensagem!")

            }
    
     }
}



//4.Modelo card de mensagens

function recuperarMensagem(){

    //Recupera todas as chaves que estão dentro do sessionStorage

    let keys = Object.keys(sessionStorage)

    //Percorre todas as chaves e busca cada objeto que existe por lá

    for(let i of keys){

        
        let Email = sessionStorage.getItem(i)
        console.log(Email)
        if(Email !== true){
            
            alert("Atenção, não há mensagens para serem exibidas!");

        }else{
            let emailObject = JSON.parse(getEmail)
        
            const div = document.createElement('div');
            
            let divHTML =   `<div class="cartao-msg">
                                <h1>emailObject.nome</h1>
                                <h3>emailObject.email</h3>
                                <p>emailObject.descricao</p>
                                
                            </div>`

            div.innerHTML = divHTML;
            div.id = emailObject.id;
            msgList.appendChild(div)
            
            

        }
        
    }

}



//5.Deletar todas as mensagens mensagens

function deletar(){
    sessionStorage.clear();
}