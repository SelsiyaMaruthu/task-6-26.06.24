                     //Day 06 :OOPS Task
    // Write a “person” class to hold all the details.
                    
class Person {
    constructor(
      firstName = 'rohith',
      lastName = 'muthukumaran',
      age = 20,
      country = 'singapore',
      city = 'bukit batok'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  const person1 = new Person()
  console.log(person1)