class AboutLeft {
  constructor(person) {
    this.person = person;
    this.aboutBlock = person.querySelector('.about');
    this.person.addEventListener('click', () => this.expandPerson());
  }

  expandPerson() {
    this.aboutBlock.classList.toggle('member-open');
  }
}

let teamLeft = document.querySelectorAll('.teamMemberLeft');
teamLeft.forEach((currentMember) => {
  return new AboutLeft(currentMember);
});

//Duplicate class but display is reversed
class AboutRight {
  constructor(person) {
    this.person = person;
    this.aboutBlock = person.querySelector('.about');
    this.person.addEventListener('click', () => this.expandPerson());
  }

  expandPerson() {
    this.aboutBlock.classList.toggle('member-open');
  }
}

let teamRight = document.querySelectorAll('.teamMemberRight');
teamRight.forEach((currentMember) => {
  return new AboutRight(currentMember);
});