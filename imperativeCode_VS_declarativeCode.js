var numbers = [4,3,5,6];

//imperative(how)
var total = 0;
for(var i=0;i<numbers.length;i++)
	total += numbers[i];
console.log("Imperative Total : ",total);

//declarative(what)
total = numbers.reduce(function(previous,current){
	return previous + current;
});
console.log("Declarative Total : ",total);
