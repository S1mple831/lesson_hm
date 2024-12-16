function bar(){
    console.log(myname);
}

function foo(){
   var myname = 'xiaozong';
   bar()
   console.log(myname);
}
var myname = 'lisi';
foo()