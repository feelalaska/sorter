class Sorter {
  constructor() {
    this.arr = [];
  }
  add(element) {
    this.arr.push(element);
  }
  at(index) {
    return this.arr[index];
  }
  get length() {
    return this.arr.length;
  }
  toArray() {
    return this.arr;
  }
  sort(indices) {
	var array = this.arr;
	var newArray = [];
	for (var i = 0; i < indices.length; i++) {
		var index = indices[i];
		var a = array[index];
    	newArray.push(a);
    }
	newArray.sort(function(a, b) {
  		return a - b;
  });
  var x = indices.length - 1;
  for (var i=x; i < array.lengt; i++) {
    var b = array[i];
    newArray.push(b);
  }
  this.arr = newArray;
	return this.arr;
  }
  setComparator(compareFunction) {
  }
}

module.exports = Sorter;