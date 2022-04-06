// 2. _filter, _map 으로 리팩토링
// -> 추상화의 단위를 함수로
// filter(응용형 함수 || 적용형 프로그래밍)
// -> 함수가 함수를 받아서 원하는 시점에 해당하는 함수가 알고 있는 인자를 적용하는 식으로 프로그래밍 함.
// filter 은 또한 고차함수라고도 부른다.
// 고차함수란 함수를 인자로 받거나 함수를 리턴하거나 함수 안에서 인자로 받은 함수를 실행하는 함수를 말한다.
function _filter(users, predi) {
    var new_list = [];
    _each(users, function(val){
        if(predi(val)){
            new_list.push(val);
        }
    });
    return new_list;
}

// 나이 중복을 제거하는 _map
function _map(list, mapper){
    var new_list = [];
    _each(list, function(val){
        new_list.push(mapper(val));
    });
    return new_list;
}

function _each(list, iter){
    for(var i = 0; i< list.length; i++){
        iter(list[i]);
    }

    return list;
}