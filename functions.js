var fname=function printName(name){
  return 'My name is '+name;
}

fname('Clevins');
console.log(name);

var myObj={
  'greetings':'hello world!'
}

myObj.prop=function(){
  console.log("Function objects");
}

myObj.prop();

var person={
  "firstname":"David",
  "lastname":"Lumbasi",
  "shftlft":3<<1,
  "fullname":function(){
    return this.firstname+" "+this.lastname;
  },
  "addr":{
  "street_name":"strt one",
  "unit":"unit 3",
  "city":"Miami",
  "state":"FL"
},
    "isFromState":function(state){
      if(state===this.addr.state){
        console.log("true");
      }else{
        console.log("false");
      }
    }
}

var fullname = person.fullname();
person.isFromState("FL");
console.log(person.shftlft);