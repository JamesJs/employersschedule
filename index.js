const maxNumeroAleatorioSexta = 3;
const minNumeroAleatorioSegunda = 1;
const maxNumeroAleatorio = 4;
const limiteDePessoas = 7;
const quantMaxDeTentativas = 300000;
const ULTIMATENTATIVA = 10;

function escolhaFinal(pessoa){
    var indiceDeCorrecao = 0
    if(pessoa ==='brenoEmatheus'){
        indiceDeCorrecao = 1
    }
    for(dia in novaData){
        if((novaData[dia].length < 7 - indiceDeCorrecao)
            && (novaData[dia].indexOf(pessoa)===-1)    
        )
        {
            novaData[dia][novaData[dia].length] = pessoa;
            return 0;
        }
    }
    for(dia in novaData){
        if(novaData[dia].indexOf(pessoa)===-1)
        {
            novaData[dia][novaData[dia].length] = pessoa;
            return 0;
        }
    }

}




function colocaBrenoEMatheusNoInicio(pessoas){
    var i =0;
    var arrayBM = [];
    pessoas.forEach((pessoa)=>{
        if(pessoa==='brenoEmatheus'){
            arrayBM[i] = pessoa;
            
            i++;
        }
    })
    
    pessoas= pessoas.filter((pessoa)=>pessoa!=='brenoEmatheus');

    return arrayBM.concat(pessoas);
    
}

function calculoDeQuantDePessoas(arrayPessoas){
    if(arrayPessoas.indexOf("brenoEmatheus")===-1){
       
        return arrayPessoas.length;
    }
    
    return arrayPessoas.length+1;
    
}



function organizaPessoas(pessoa){
        var pessoaAdd = pessoa;
        var podeSexta = data.sexta.filter((pessoaSexta)=>pessoaAdd===pessoaSexta).length !==0 ? 
        false:true;
        var podeSegunda = data.segunda.filter((pessoaSegunda)=>pessoaAdd===pessoaSegunda).length !==0 ? 
        false:true;
        var podeNoDia = false;
        var limitCont = 0;
        var pessoasControle = 0;
        var diasControle = 0;
        var ultimaTentativa = 0;
        while(!podeNoDia){
            if(limitCont === quantMaxDeTentativas){
                if(diasControle === maxNumeroAleatorio){
                    diasControle = 0;
                    ultimaTentativa++;
                    pessoasControle = 0;
                
                }
                if(ultimaTentativa ===ULTIMATENTATIVA){
                    escolhaFinal(pessoa);
                    return 0;
                }
                    //console.log(pessoasControle,diasControle,'estorou');
                    
                        if(novaData[diasDaSemana[diasControle]].indexOf(pessoaAdd)===-1){
                            if(novaData[diasDaSemana[diasControle]][novaData[diasDaSemana[diasControle]].length-1-pessoasControle]==='brenoEmatheus'
                            ||novaData[diasDaSemana[diasControle]][novaData[diasDaSemana[diasControle]].length-1-pessoasControle]===pessoaAdd){
                                pessoasControle++;
                            }
                            if(pessoasControle >= novaData[diasDaSemana[diasControle]].length){
                                pessoasControle = 0;
                                diasControle++;
                            }
                            while((novaData[diasDaSemana[diasControle]].length===0)||
                                (pessoaAdd === 'brenoEmatheus'&&
                                novaData[diasDaSemana[diasControle]].
                                length>=6)){
                                diasControle++;
                            }
                           
                            //console.log('nova pessoa ',novaData[diasDaSemana[diasControle]][novaData[diasDaSemana[diasControle]].length-1-pessoasControle])
                            var aux = pessoaAdd;
                            pessoaAdd = novaData[diasDaSemana[diasControle]][novaData[diasDaSemana[diasControle]].length-1-pessoasControle];
                            novaData[diasDaSemana[diasControle]][novaData[diasDaSemana[diasControle]].length-1-pessoasControle]= aux;
                            //console.log(novaData)
                           
                            
                            pessoasControle++;
                            
                            podeSexta = data.sexta.filter((pessoaSexta)=>pessoaAdd===pessoaSexta).length !==0 ? 
                            false:true;
                            podeSegunda = data.segunda.filter((pessoaSegunda)=>pessoaAdd===pessoaSegunda).length !==0 ? 
                            false:true;
                           
                       
                        }else{
                            diasControle++;
                        }
                        
                    
                
                limitCont = 0;
            }
            
            var diaNumero;
            diaNumero = Math.round(Math.round(Math.random()*maxNumeroAleatorio));
            if(!podeSexta && !podeSegunda){
                diaNumero = Math.round(Math.round(Math.random()*(maxNumeroAleatorioSexta-
                    minNumeroAleatorioSegunda)+minNumeroAleatorioSegunda));
            }else if(!podeSexta){
                diaNumero = Math.round(Math.round(Math.random()*maxNumeroAleatorioSexta));
     
            }
            else if(!podeSegunda){
                
                diaNumero = Math.round(Math.round(Math.random()*(maxNumeroAleatorio-
                    minNumeroAleatorioSegunda)+minNumeroAleatorioSegunda));
               
            }
            
            quantidadeDePessoas = (novaData[diasDaSemana[diaNumero]].length);
            if(pessoaAdd ==='brenoEmatheus'){
                podeNoDia = (calculoDeQuantDePessoas(novaData[diasDaSemana[diaNumero]]) < limiteDePessoas-1 )
                &&(novaData[diasDaSemana[diaNumero]].indexOf(pessoaAdd)===-1);
            }else{
                podeNoDia = calculoDeQuantDePessoas(novaData[diasDaSemana[diaNumero]]) < limiteDePessoas
                &&(novaData[diasDaSemana[diaNumero]].indexOf(pessoaAdd)===-1);
            }
            if(podeNoDia){
                novaData[diasDaSemana[diaNumero]][quantidadeDePessoas] = pessoaAdd;
           
            }
            limitCont++;
            
        }
       
    
}


function filtraData(dataDaFuncao,arrayFiltrar){
    var j=0;
    var dataSemOsQueTem = [];
    for(dia in dataDaFuncao){
        dataSemOsQueTem[j] = dataDaFuncao[dia].filter((pessoa)=>arrayFiltrar.indexOf(pessoa)===-1);
        j++;
    }
    return dataSemOsQueTem;
}
function procuraPessoas(arrayPessoa){
    var pessoaComRepeticao = [];
    var i = 0;
    arrayPessoa.forEach((pessoa)=>{
        
        for(dia in data){
            data[dia].forEach((pessoaData)=>{
                if(pessoaData === pessoa){
                    
                    pessoaComRepeticao[i] = pessoaData;
                    i++;
                }
            });
        }
    })
    return pessoaComRepeticao;
}

var diasDaSemana={
    0:'segunda',
    1:'terca',
    2:'quarta',
    3:'quinta',
    4:'sexta'
}
var data = {
    segunda:["gabriel","yuri","daniel","dani",'leo','brenoEmatheus'],
    terca:['gabriel','duda','gian','samuel','leo','daniel','rodrigo'],
    quarta:['gabriel','duda','yuri','thiago','gian','rodrigo','hellen'],
    quinta:['hellen','dani','brenoEmatheus','leo','thiago','duda'],
    sexta:['hellen','thiago','yuri','samuel','brenoEmatheus'],
}
var sexta = data.sexta;
var segunda = data.segunda;
var pessoasSegundaeSexta = data.segunda.map((pessoa)=>{
    var pessoaNosDoisDias;
    data.sexta.forEach((pessoaSexta)=>{
        if(pessoa === pessoaSexta){
            pessoaNosDoisDias = pessoa;
    }
    });
    return pessoaNosDoisDias;
})
var pessoaNosDoisDiasComRepeticao = [];
pessoasSegundaeSexta = pessoasSegundaeSexta.filter((pessoa=>pessoa!==undefined));


var dataSemOsQueTemEmSegundaESexta = [];
var pessoasComRepeticaoSegunda = procuraPessoas(data.segunda);

pessoasComRepeticaoSegunda = pessoasComRepeticaoSegunda.filter((pessoa)=>
                             pessoasSegundaeSexta.indexOf(pessoa)===-1)
var pessoasComRepeticaoSexta = procuraPessoas(data.sexta);
pessoasComRepeticaoSexta = pessoasComRepeticaoSexta.filter((pessoa)=>
                             pessoasSegundaeSexta.indexOf(pessoa)===-1)
var pessoasComRepeticaoSegundaeSexta = procuraPessoas(pessoasSegundaeSexta);
var dataFiltrada = filtraData(filtraData(filtraData(data,data.sexta),data.segunda),pessoasSegundaeSexta);
var pessoasTercaQuartaQuinta = dataFiltrada[1].concat(dataFiltrada[2],dataFiltrada[3]);

var pessoas = pessoasComRepeticaoSegundaeSexta.sort().concat(
    pessoasComRepeticaoSexta.sort(),
    pessoasComRepeticaoSegunda.sort(),
    pessoasTercaQuartaQuinta.sort()
    );

var novaData = {
    segunda:[],
    terca:[],
    quarta:[],
    quinta:[],
    sexta:[],
}
colocaBrenoEMatheusNoInicio(pessoas).forEach(pessoa=>{
    
    //console.log(novaData);
    //console.log("===================Essa e a pessoa:",pessoa);
    organizaPessoas(pessoa)
    

})


console.log(novaData);
