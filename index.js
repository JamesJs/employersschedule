const maxNumeroAleatorioSexta = 4;
const minNumeroAleatorioSegunda = 1;
const maxNumeroAleatorio = 5;


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
        while(!podeNoDia){
            if(limitCont === 10000){
                    console.log(pessoasControle,diasControle,'estorou');
                    dia = diasControle === 0 ? 'terca' : 
                    diasControle === 1 ? 'quarta' : 'quinta'; 
                        if(novaData[dia].indexOf(pessoaAdd)===-1){
                            console.log('nova pessoa ',novaData[dia][novaData[dia].length-1-pessoasControle])
                            var aux = pessoaAdd;
                            pessoaAdd = novaData[dia][novaData[dia].length-1-pessoasControle];
                            novaData[dia][novaData[dia].length-1-pessoasControle]= aux;
                           
                            if(pessoasControle === 5){
                                pessoasControle = 0;
                                diasControle++;
                            }
                            
                            pessoasControle++;
                           
                       
                        }else{
                            diasControle++;
                        }
                        if(diasControle === 3){
                            return 0;
                        }
                    
                
                limitCont = 0;
            }
            
            var diaNumero;
            diaNumero = Math.round(Math.floor(Math.random()*maxNumeroAleatorio));
            if(!podeSexta && !podeSegunda){
                diaNumero = Math.round(Math.floor(Math.random()*(maxNumeroAleatorioSexta-
                    minNumeroAleatorioSegunda)+minNumeroAleatorioSegunda));
            }else if(!podeSexta){
                diaNumero = Math.round(Math.floor(Math.random()*maxNumeroAleatorioSexta));
     
            }
            else if(!podeSegunda){
                
                diaNumero = Math.round(Math.floor(Math.random()*(maxNumeroAleatorio-
                    minNumeroAleatorioSegunda)+minNumeroAleatorioSegunda));
               
            }
            
            quantidadeDePessoas = (novaData[diasDaSemana[diaNumero]].length);
            podeNoDia = (quantidadeDePessoas < 5 ) &&
            (novaData[diasDaSemana[diaNumero]].filter((possuiPessoa)=>possuiPessoa===pessoaAdd).length===0);
            ;
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
    segunda:["samuel","thiago","sla","teste1","teste2"],
    terca:['joao','jose','moacyr','samuel','thiago'],
    quarta:['vitor','breno','matheus','teste1','teste2'],
    quinta:['joao','jose','breno','matheus','teste2'],
    sexta:['felipe','mauricio','thiago','jose','joao'],
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
var pessoas = pessoasComRepeticaoSegundaeSexta.concat(
    pessoasComRepeticaoSexta,
    pessoasComRepeticaoSegunda,
    dataFiltrada[1],
    dataFiltrada[2],
    dataFiltrada[3],
    );


var novaData = {
    segunda:[],
    terca:[],
    quarta:[],
    quinta:[],
    sexta:[],
}
pessoas.forEach(pessoa=>{
    
    console.log(novaData);
    console.log("===================Essa e a pessoa:",pessoa);
    organizaPessoas(pessoa)
    

})


console.log(novaData);
