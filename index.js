const users = [
    { name: 'Reuben',
      username: '@blood_pressure_killa',
      followers: 1,
      verified: false,
      bio: "It's an honor and a privilege."
    },
    { name: 'Laisha',
      username: '@passaic_papi',
      followers: 700,
      verified: true,
      bio: "My commute is longer than yours."
    },
    { name: 'Anne',
      username: '@i_love_bambas',
      followers: 12,
      verified: false,
      bio: "@mayabee is my best friend"
    },
    { name: 'Steph',
      username: '@queen_of_the_kew',
      followers: 1200,
      verified: false,
      bio: "✌🏼"
    },
    { name: 'Carmen',
      username: '@omar_apollo_fanclub',
      followers: 1200000,
      verified: true,
      bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
    }
]

// FUNCTION 1
/*
P: Log each name of the users to the console
E: Output should be: Rueben, Laisha, Anne, Steph, Carmen (logged separately)
D: N/A
A: 
    iterate through array
        console.log each name property of each object
C:*/
const logAllNames = (arr) => {
    arr.forEach(obj => console.log(obj.name))
};

// FUNCTION 2
/*
P: Create a function that logs a specific line using the name and username properties
E: Should log `Hi my name is *name*, and my tag is *username*
D: N/A
A: for each object in array, log specific line to console
C:*/
const getAllTags = (arr) => {
    arr.forEach(obj => console.log(`Hi my name is ${obj.name}, and my tag is ${obj.username}!`));
};

// FUNCTION 3
/*
P:Return the sum of the number of followers each user has.
E: Should return 1201913
D: N/A
A: 
    reduce that array to one value and return it
C*/
const sumAllFollowers = (arr) => {
    // newArr = arr.map(obj => obj.followers)
    return arr.reduce((acc,{followers}) => acc + followers, 0)
}

// FUNCTION 4
/*
P: Write a function that takes a string and returns the object matching the string
E: '@passaic_papi' string should return the Laisha C object (still in an array)
D: Arrays
A:
filter our array and return it based on the given string
C*/
const searchUsername = (arr, string) => {
    return arr.filter(obj => (obj.username === string))
}

// FUNCTION 5
/*
P: Return the object with the longest bio!
E: Should return carmens bio
D: N/A
A: set a var equal to 0
    for each obj in the arr
        if the bio length is bigger than our var
            set that var to that bio length
    filter our array to only include the obj whos bio length is equal to big bio
C:*/
const longWinded = (arr) => {
    let bigBio = 0
    arr.forEach(obj => {
        if(obj.bio.length > bigBio) {
            bigBio = obj.bio.length
        }
    })
    return arr.filter(obj => obj.bio.length === bigBio)
}

// FUNCTION 6
/*
P: Return our array sorted by follower count (least to greatest)
E: Should be in order of Reuben, Anne, Laisha, Steph, and Carmen
D: Arrays
A:
    sort a copy of our array in ascending order with the .sort method
C:*/
const follower = (arr) => {
    return [...arr].sort(({followers : a},{followers : b}) => a - b)
}

// logAllNames(users)
// getAllTags(users)
// console.log(sumAllFollowers(users))
// console.log(searchUsername(users,"@passaic_papi"))
// console.log(longWinded(users))
// console.log(follower(users))
