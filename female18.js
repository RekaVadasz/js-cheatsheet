const user1 = {
    id: 3242342,
    username: "belakovacs12",
    email: "bela@gmail.com",
    phone: "701231231",
    gender: "male",
    age: 18,
    isConfirmed: true
  }
  
  const user2 = {
    id: 2136523,
    username: "lajosnenagy",
    email: "lajosne@gmail.com",
    phone: "303214321",
    gender: "female",
    age: 18,
    isConfirmed: true
  }
  
  const user3 = {
    id: 8743534,
    username: "akarki99",
    email: "kazmer@gmail.com",
    phone: "206546547",
    gender: "male",
    age: 18,
    isConfirmed: false
  }
  
  const user4 = {
    id: 4733631,
    username: "akarkine99",
    email: "kazmerne@gmail.com",
    phone: "206546547",
    gender: "female",
    age: 20,
    isConfirmed: false
  }
  
  const user5 = {
    id: 4733632,
    username: "akarkine99",
    email: "ifjkazmerne@gmail.com",
    phone: "206546547",
    gender: "female",
    age: 17,
    isConfirmed: false
  }

  const users = [user1, user2, user3, user4, user5]

  function getFemaleAdults(userList) {
    const listOfFemale18 = [];
    for (const user of userList) {  
        if (user.gender === "female" && user.age >= 18) {
            listOfFemale18.push(user);
        }
    }
    return listOfFemale18;
  }

  console.log(getFemaleAdults(users))