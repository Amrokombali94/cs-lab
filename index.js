const addToZero = arr =>{
    if (arr.length < 2) {
        return false;
      }
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === 0) {
            return true;
          }
        }
      }
    return false;
}
//o(n^2)



function hasUniqueCharts(str){
    let letter = {}

    for(let i=0; i < str.lenght;i++) {
        if(letter[str[i]]){
            return false
        } else {
            letter[str[i]] = 1
            console.log(letter)
        }
    }
    return true
}
//o(n)

console.log(hasUniqueCharts('Monday'))


const isPangram = str =>{
    let alphabet = 'abcdefghijklmnopqrstuvwyz';
    let regex = /\s/g;
    let lowercase = str.toLowercase().replace(regex, "")
    console.log(lowercase, "original:", str)


    for(let i = 0; i < alphabet.length; i++){
        if(lowercase.indexOf(alphabet[i] === -1)){
            return false
        }
    }
    return true
}
//o(n)


const findLongestWord = (arr) =>{
    arr.sort((a,b) => b.length - a.length)
    return arr[0].length
}
//o(n)

console.log(findLongestWord(["hi", "hello", "how are you?", "nice to meet you"]))