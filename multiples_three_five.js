var solution = function(input){
    var sum = 0;
    for(i = 0; i < input; i++){
        if (i % 3 === 0){
            sum += i;
        }
        else if (i % 5 === 0){
            sum += i;
        }
    }
    return sum;
};

solution(1001);
solution(1000);