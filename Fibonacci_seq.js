var solution = function(limit){
    var sum =  0;
    var array = [];
    array[0] = array[2] = 0;
    array[1] = 1;
    
    while (array[2] <= limit){
        array[2] = array[0] + array[1];
        if (array[2] % 2 === 0){
            sum += array[2];
        }
        array[0] = array[1];
        array[1] = array[2];
        
    }
    
    return sum;
};

solution(4000000);