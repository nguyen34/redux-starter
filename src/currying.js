function add(a) {
  return function(b) {
    return a + b;
  }
}

const add1 = add(1);
add1(5); // 6
add(1)(5); // 6

const add2 = a => b => a + b;