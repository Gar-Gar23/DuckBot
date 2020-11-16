/*                  Arrays 
        are written with [] seperated by , 
  var fruits = [kiwis, mangos,pinapples]
*/
//          Array objects
var car = {type:"volvo", model:'750SX', color:'silver'};
    console.log('The car color is ' + car.color);

    /* arrays indexes are [0] based so all arrays start with [0]

      sort() sorts the elements of arrays alphabetically 
      reverse() reverses the elements , also sorts in decending order
    */
var fruits = ['banana', 'orange', 'apple', 'mango'];
fruits.sort();
fruits.reverse()
console.log(fruits)

/* the sort key vauses thevalues as strings this works for the above
but not so much with numbers written as stirings '25' is bigger than '100' because 2 > 1
so sort will not prodcue correct results
  we fix this with the compare function
  */ 

    var points = [30, 125, 2,  5, 35, 10]
    points.sort(function(a, b){return a - b});
        console.log(points);