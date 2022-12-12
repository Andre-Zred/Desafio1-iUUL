/* Envio de mensagens para o formulário */

//Card de mensagens  - msg.html
const msgList = document.querySelector('#list-mensagens');

//1.função para gerar chaves randomicas

function geradorChaves(){
    return Math.floor(Math.random() * 20);
}


//3.Armazenar mensagens enviadas

function ArmazenarMSG(){
     // Recebendo dados enviados pelo formulário

     const form_nome = document.getElementById('form_name')
     const form_email = document.getElementById('form_email')
     const form_desc = document.getElementById('form_text')
 
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

            if(dados.nome!== null && dados.email!== null && dados.descricao!== null){

                //Salvando objeto no sessionStorage
                sessionStorage.setItem(geradorChaves(), JSON.stringify(dados))
                alert("Mensagem enviada!")

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

        
        let emailDados = sessionStorage.getItem(i)
        console.log(emailDados)
        if(emailDados == 'true'){
            
            console.log("Atenção, não há mensagens para serem exibidas!");

        }else if(emailDados == ''){
            alert("Não a mensagens para serem exibidas")
            break;
        }else{

            let emailObject = JSON.parse(emailDados)
            
            const div = document.createElement('div');
            
            let divHTML =   `<div class="cartao-msg">
                                <h1>${emailObject.nome}</h1>
                                <h3>${emailObject.email}</h3>
                                <p>${emailObject.descricao}</p>
                                
                            </div>`

            div.innerHTML = divHTML;
            div.id = emailObject.id;
            msgList.appendChild(div)
            

        }
        
    }

}



//5.Deletar todas as mensagens mensagens

function deletarMensagens(){
    sessionStorage.clear();
}