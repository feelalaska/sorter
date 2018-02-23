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
    var newArray = [];
    var bool = null;
	  for (var i = 0; i < indices.length; i++) {
		  var index = indices[i];
		  var sortEl = this.arr[index];
      newArray.push(sortEl);
      this.arr[index] = bool;
    }
	  newArray.sort(function(a, b) {
  		return a - b;
    });
    for (var i = 0; i < newArray.length; i++) {
      var sorted = newArray[i];
      for (var j = 0; j < this.arr.length; j++) {
        if (this.arr[j] == bool) {
          this.arr[j] = sorted;
          break;
        }
      }
    }
    return this.arr;
  }
  setComparator(compareFunction) {
  }
}
module.exports = Sorter;