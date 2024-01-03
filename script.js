const button = document.querySelector('.button')
const selectAConverter = document.querySelector('.select-convertida')
const moedaToConverter = document.querySelector('.select-a-converter')



function conveterValor(){
    const valorInput = document.querySelector('.input-Numero').value
    const moedaAConverter = document.querySelector('.valor-da-moeda-converter')
    const moedaConvertida = document.querySelector('.valor-da-moeda-convertida')

    const dolar = 4.96
    const euro = 5.25
    const libra = 6.05
    const bitcoin = 129657.25

    if(selectAConverter.value == 'dolar' && moedaToConverter.value == 'Dolarr' || selectAConverter.value == 'euro' && moedaToConverter.value == 'Euroo' || selectAConverter.value == 'libra' && moedaToConverter.value == 'Libraa' || selectAConverter.value == 'real' && moedaToConverter.value == 'Reall' || selectAConverter.value == 'bitcoin' && moedaToConverter.value == 'Bitcoinn'){
        alert('[ERRO] Não é possivel converter para mesma moeda selecione outra moeda')
        moedaAConverter.innerHTML = 0
        moedaConvertida.innerHTML = 0
    
    }else { 

        /* Conversão de Reais para outras moedas  */

        if(moedaToConverter.value == 'Reall'){

            if(selectAConverter.value == 'dolar'){

                moedaConvertida.innerHTML = Intl.NumberFormat('en-US',{
                    style: 'currency', currency: 'USD'
            
                }).format(valorInput/dolar)
            }
        
            if(selectAConverter.value == 'euro'){
        
                moedaConvertida.innerHTML = Intl.NumberFormat('de-DE',{
                    style: 'currency', currency: 'EUR'
            
                }).format(valorInput/euro)
            }
        
            if(selectAConverter.value == 'libra'){
        
                moedaConvertida.innerHTML = Intl.NumberFormat('en-GB',{
                    style: 'currency', currency: 'GBP'
            
                }).format(valorInput/libra)
            }
        
            if(selectAConverter.value == 'bitcoin'){
        
              moedaConvertida.innerHTML = (valorInput/bitcoin).toFixed(7)
            }
        
            
           
            
            moedaAConverter.innerHTML = Intl.NumberFormat('pt-BR',{
            style: 'currency', currency: 'BRL'
    
            }).format(valorInput)
        
        
        
             /* Conversão de Dolar  para outras moedas  */
        
        }else if(moedaToConverter.value == 'Dolarr'){

            if(selectAConverter.value == 'real'){

                moedaConvertida.innerHTML = Intl.NumberFormat('pt-BR',{
                    style: 'currency', currency: 'BRL'
            
                }).format(valorInput*dolar)
            }
        
            if(selectAConverter.value == 'euro'){
        
                moedaConvertida.innerHTML = Intl.NumberFormat('de-DE',{
                    style: 'currency', currency: 'EUR'
            
                }).format(valorInput*0.94)
            }
        
            if(selectAConverter.value == 'libra'){
        
                moedaConvertida.innerHTML = Intl.NumberFormat('en-GB',{
                    style: 'currency', currency: 'GBP'
            
                }).format(valorInput*0.82)
            }
        
            if(selectAConverter.value == 'bitcoin'){
        
              moedaConvertida.innerHTML = (valorInput*0.000038).toFixed(6)
            }
        
            
           
                
            moedaAConverter.innerHTML = Intl.NumberFormat('en-US',{
            style: 'currency', currency: 'USD'
    
            }).format(valorInput)


                 /* Conversão de Euro  para outras moedas  */
        

        }else if(moedaToConverter.value == 'Euroo'){

            if(selectAConverter.value == 'real'){

                moedaConvertida.innerHTML = Intl.NumberFormat('pt-BR',{
                    style: 'currency', currency: 'BRL'
            
                }).format(valorInput*euro)
            }
        
            if(selectAConverter.value == 'dolar'){
        
                moedaConvertida.innerHTML = Intl.NumberFormat('en-US',{
                    style: 'currency', currency: 'USD'
            
                }).format(valorInput*1.06)
            }
        
            if(selectAConverter.value == 'libra'){
        
                moedaConvertida.innerHTML = Intl.NumberFormat('en-GB',{
                    style: 'currency', currency: 'GBP'
            
                }).format(valorInput*0.87)
            }
        
            if(selectAConverter.value == 'bitcoin'){
        
              moedaConvertida.innerHTML = (valorInput*0.000040).toFixed(6)
            }
        
            
           
                
            moedaAConverter.innerHTML = Intl.NumberFormat('de-DE',{
            style: 'currency', currency: 'EUR'
    
            }).format(valorInput)


                 /* Conversão de Libra  para outras moedas  */
        

        }else if(moedaToConverter.value == 'Libraa'){

            if(selectAConverter.value == 'real'){

                moedaConvertida.innerHTML = Intl.NumberFormat('pt-BR',{
                    style: 'currency', currency: 'BRL'
            
                }).format(valorInput*libra)
            }
        
            if(selectAConverter.value == 'dolar'){
        
                moedaConvertida.innerHTML = Intl.NumberFormat('en-US',{
                    style: 'currency', currency: 'USD'
            
                }).format(valorInput*1.22)
            }
        
            if(selectAConverter.value == 'euro'){
        
                moedaConvertida.innerHTML = Intl.NumberFormat('de-DE',{
                    style: 'currency', currency: 'EUR'
            
                }).format(valorInput*1.15)
            }
        
            if(selectAConverter.value == 'bitcoin'){
        
              moedaConvertida.innerHTML = (valorInput*0.000046).toFixed(6)
            }
        
            
           
                
            moedaAConverter.innerHTML = Intl.NumberFormat('en-GB',{
            style: 'currency', currency: 'GBP'
    
            }).format(valorInput)


                 /* Conversão de Bitcoin  para outras moedas  */
        

        }else if(moedaToConverter.value == 'Bitcoinn'){

            if(selectAConverter.value == 'real'){

                moedaConvertida.innerHTML = Intl.NumberFormat('pt-BR',{
                    style: 'currency', currency: 'BRL'
            
                }).format(valorInput*bitcoin)
            }
        
            if(selectAConverter.value == 'dolar'){
        
                moedaConvertida.innerHTML = Intl.NumberFormat('en-US',{
                    style: 'currency', currency: 'USD'
            
                }).format(valorInput*26338.70)
            }
        
            if(selectAConverter.value == 'euro'){
        
                moedaConvertida.innerHTML = Intl.NumberFormat('de-DE',{
                    style: 'currency', currency: 'EUR'
            
                }).format(valorInput*24864)
            }

            if(selectAConverter.value == 'libra'){
        
                moedaConvertida.innerHTML = Intl.NumberFormat('en-GB',{
                    style: 'currency', currency: 'GBP'
            
                }).format(valorInput*21560.60)
            }
        
        
           
           
                
            moedaAConverter.innerHTML = valorInput


                 /* Conversão de Bitcoin  para outras moedas  */
        

        }


            
        }

   
}

function selectConverter(){
    
    const nomeMoedaConvertida = document.querySelector('.moeda-convertida')
    const moedaConvertida = document.querySelector('.valor-da-moeda-convertida')
    const imgConvertida = document.querySelector('.img-convertida')

    if(selectAConverter.value == 'dolar'){
        imgConvertida.src = './assets/img/dolar.png'
        nomeMoedaConvertida.innerHTML = 'Dolar Americano'

        conveterValor()

    } 

    if(selectAConverter.value == 'euro'){
        imgConvertida.src = './assets/img/euro.png'
        nomeMoedaConvertida.innerHTML = 'Euro'

        conveterValor()
    } 

    if(selectAConverter.value == 'libra'){
        imgConvertida.src = './assets/img/libra 1.png'
        nomeMoedaConvertida.innerHTML = 'Libra'

        conveterValor()

    } 

    if(selectAConverter.value == 'bitcoin'){
        imgConvertida.src = './assets/img/bitcoin 1.png'
        nomeMoedaConvertida.innerHTML = 'Bitcoin'

        conveterValor()
    } 

    if(selectAConverter.value == 'real'){
        imgConvertida.src = './assets/img/Real.png'
        nomeMoedaConvertida.innerHTML = 'Real'

        conveterValor()
    }





}

function moedaSelecionada(){
    const nomeMoeda = document.querySelector('.moeda-converter')
    const valorAConverter = document.querySelector('.valor-da-moeda-converter')
    const imgConverter = document.querySelector('.img-para-converter')

    if(moedaToConverter.value == 'Reall'){
        imgConverter.src = './assets/img/Real.png'
        nomeMoeda.innerHTML = 'Real Brasileiro'
        valorAConverter.innerHTML = 'R$ 0,00'

        conveterValor()        

    }

    if(moedaToConverter.value == 'Dolarr'){
        imgConverter.src = './assets/img/dolar.png'
        nomeMoeda.innerHTML = 'Dolar Americano'
        valorAConverter.innerHTML = '$0.00'

        conveterValor()
    }

    if(moedaToConverter.value == 'Euroo'){
        imgConverter.src = './assets/img/euro.png'
        nomeMoeda.innerHTML = 'Euro'
        valorAConverter.innerHTML = '0,00 €'

        conveterValor()
    }

    if(moedaToConverter.value == 'Libraa'){
        imgConverter.src = './assets/img/libra 1.png'
        nomeMoeda.innerHTML = 'Libra'
        valorAConverter.innerHTML = '£0.00'

        conveterValor()
    }

    if(moedaToConverter.value == 'Bitcoinn'){
        imgConverter.src = './assets/img/bitcoin 1.png'
        nomeMoeda.innerHTML = 'Bitcoin'
        valorAConverter.innerHTML = '0'

        conveterValor()
      
    }

    



}




button.addEventListener('click', conveterValor)
selectAConverter.addEventListener('change', selectConverter)
moedaToConverter.addEventListener('change', moedaSelecionada)