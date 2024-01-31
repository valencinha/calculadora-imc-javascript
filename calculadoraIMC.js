//Calculadora de IMC com base na tabela.

//Função de criar funcionário serve para ver e facilitar na hora de ver os dados. 
function criarFuncionario(nome, sobrenome, altura, peso){

    return {
        nome,
        sobrenome,
        altura,
        peso,
        calculoImc(){
            const indice = this.peso/(this.altura ** 2).toFixed(1)
            if(indice < 18.5){
                console.log("Abaixo do peso!") 
            }else if(indice >= 18.5 && indice < 24.9){
                console.log("Peso normal!")
            }else if(indice >= 25 && indice <29.9){
                console.log("Acima do peso!")
            }else if(indice >= 30 && indice < 34.9){
                console.log("Obesidade tipo I") 
            }else if(indice >= 35 && indice < 39.9){
                console.log("Obesidade tipo II")
            }else if(indice >= 40){
                console.log("Obesidade tipo III")
            }
        }
    }
}


//Utilize os espaços em branco para preencher com os seus dados. Nome, sobrenome, altura e peso. 
const p1 = criarFuncionario("", "", , );

p1.calculoImc() 

