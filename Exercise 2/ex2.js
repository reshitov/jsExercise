
function round(number){
    let result;
    result=number%5;

    if(result===0){
        return number;
    }else if(result>=2.5){
        return (number-result+5)
    }else if(result<2.5){
        return (number - result)
    }


    return result;
}

console.log(round(12.9))