const ada = new Employee("Ada", "CEO", 3000000.00);

class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }
 
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
    
  // climb "up" the tree (using iteration), counting nodes, until no boss is found
  while (currentEmployee.boss) {
    currentEmployee = currentEmployee.boss;
    numberOfPeople++;
  }

}

const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);
