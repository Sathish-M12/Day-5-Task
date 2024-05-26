
let Resume = {
    name: "Sathishkumar.M",
    email: "sathishmechon.111@gmail.com",
    phone: "+91 7904233826",
  work : {
      company: "Ola Technology",
      position: "SAles Executive",
      startDate: "2020-12-01",
      endDate: "2024-05-27",
      summary: "Developed web applications using React and Node.js."
    },
  
  education : {
      institution: "Sethu Institute Of Technology",
      area: "Mechanical Engineering",
      studyType: "Bachelor's Degree",
      startDate: "2013-06-01",
      endDate: "2017-03-31"
    },
  skills : {
      course: ["JavaScript", "HTML", "CSS"],
      level: "Basics"
    }
  }
    console.log(Resume)


//for loop

for (let key in Resume){
    console.log(key, Resume[key])
}
//for in loop
for (const key in Resume) {
    if (Resume.hasOwnProperty(key)) {
        console.log(`${key}: ${Resume[key]}`);
    }
}
 
// For of loop

for (const [key, value] of Object.entries(Resume)) {
    console.log(`${key}: ${value}`);
}

// forEach loop

Object.keys(Resume).forEach(key => {
    console.log(`${key}: ${Resume[key]}`);
});