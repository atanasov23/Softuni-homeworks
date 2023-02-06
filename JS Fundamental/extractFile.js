function extractFile(string){

    let split = string.split('\\');

    let fileName = split.pop().split('.');

    if(fileName.length <= 2){

        console.log(`File name: ${fileName[0]}`);

        console.log(`File extension: ${fileName[1]}`);

    }else{


        console.log(`File name: ${fileName[0]}.${fileName[1]}`);
        
        console.log(`File extension: ${fileName[2]}`);

        
    }

}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');