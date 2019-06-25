const registerBtn = document.querySelector('.registerBtn');
console.log(registerBtn);
registerBtn.addEventListener('mousedown', event => {
  console.log('listening');
  event.target.style = 'margin-top: +10px';
});

class About {
  constructor(person) {
    this.person = person;
    this.person.addEventListener('click', this.expandPerson());
  }

  expandPerson() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.person.classList.toggle('member-open');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let team = document.querySelectorAll('.teamMember');
console.log(team);
team.forEach((currentMember) => {
  return new About(currentMember);
});