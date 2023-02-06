function echoType(par){

    let type = typeof par;

    if(type === 'object'){

        console.log(type);
        console.log('Parameter is not suitable for printing');

    }else{

        console.log(type);
        console.log(par);
    }

}

echoType(null);