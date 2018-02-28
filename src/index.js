module.exports = function getZerosCount(number, base) {
  // your implementation
    let zeros = Infinity;
    function downGrade(number, primeNumber) {
        return number<primeNumber?0:Math.floor(number/primeNumber)+downGrade(Math.floor(number/primeNumber),primeNumber);
    }
    let primeNumbers = {};
    for(let i=2; i*i<=base; i++) {
        if(base%i===0){
            while(base%i===0){
                primeNumbers[i]=primeNumbers[i]?primeNumbers[i]+1:1;
                base/=i;
            }
        }
    }
    if(base>1){
        primeNumbers[base]=primeNumbers[base]?primeNumbers[base]+1:1;
    }
    for(let prime in primeNumbers) zeros = Math.min(zeros,Math.floor(downGrade(number,prime)/primeNumbers[prime]))
    return zeros;
}