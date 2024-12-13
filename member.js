function skillsMember(){
  var member = {
    name: 'John',
    age: 25,
    skills: ['Javascript', 'NodeJS', 'React', 'MongoDB'],
    greet: function(){
      console.log('Hello, I am ' + this.name);
    }
  }
  return member;
}