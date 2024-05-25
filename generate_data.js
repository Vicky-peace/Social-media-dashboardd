const fs = require('fs');

const totalUsers = 100;
const totalFollowers = totalUsers * 100; // assuming each user has an average of 230 followers
const data = {
  totalFollowers: totalFollowers,
  cards: [],
  miniCards: [],
  users: []
};

// Helper function to generate a random integer
const getRandomInt = (max) => Math.floor(Math.random() * max);

for (let i = 1; i <= totalUsers; i++) {
  const userId = `user${i}`;
  const fbFollowers = getRandomInt(10000);
  const twitterFollowers = getRandomInt(5000);
  const igFollowers = getRandomInt(20000);
  const ytFollowers = getRandomInt(15000);
  
  const userData = {
    "username": userId,
    "platforms": {
      "facebook": {
        "followers": fbFollowers,
        "change": getRandomInt(200) - 100 // random change between -100 and +100
      },
      "twitter": {
        "followers": twitterFollowers,
        "change": getRandomInt(200) - 100
      },
      "instagram": {
        "followers": igFollowers,
        "change": getRandomInt(500) - 250
      },
      "youtube": {
        "followers": ytFollowers,
        "change": getRandomInt(300) - 150
      }
    }
  };
  
  data.users.push(userData);
}

// Example data for cards and miniCards (simplified for brevity)
data.cards = [
  {
    "type": "fb",
    "icon": "images/icon-facebook.svg",
    "username": "@lamadev",
    "followers": "1987",
    "followerText": "FOLLOWERS",
    "changeIcon": "images/icon-up.svg",
    "change": "12"
  },
  {
    "type": "twitter",
    "icon": "images/icon-twitter.svg",
    "username": "@lama-dev",
    "followers": "1044",
    "followerText": "FOLLOWERS",
    "changeIcon": "images/icon-up.svg",
    "change": "99"
  },
  {
    "type": "ig",
    "icon": "images/icon-instagram.svg",
    "username": "@lama-dev",
    "followers": "11000",
    "followerText": "FOLLOWERS",
    "changeIcon": "images/icon-up.svg",
    "change": "1099"
  },
  {
    "type": "yt",
    "icon": "images/icon-youtube.svg",
    "username": "Lama Dev",
    "followers": "8239",
    "followerText": "SUBSCRIBERS",
    "changeIcon": "images/icon-down.svg",
    "change": "144"
  }
];

data.miniCards = [
  {
    "title": "Page Views",
    "platform": "facebook",
    "icon": "images/icon-facebook.svg",
    "number": "87",
    "changeIcon": "images/icon-up.svg",
    "percentage": "3"
  },
  {
    "title": "Likes",
    "platform": "facebook",
    "icon": "images/icon-facebook.svg",
    "number": "52",
    "changeIcon": "images/icon-down.svg",
    "percentage": "2"
  },
  {
    "title": "Likes",
    "platform": "instagram",
    "icon": "images/icon-instagram.svg",
    "number": "5462",
    "changeIcon": "images/icon-up.svg",
    "percentage": "2257"
  },
  {
    "title": "Profile Views",
    "platform": "instagram",
    "icon": "images/icon-instagram.svg",
    "number": "52000",
    "changeIcon": "images/icon-up.svg",
    "percentage": "1375"
  },
  {
    "title": "Retweets",
    "platform": "twitter",
    "icon": "images/icon-twitter.svg",
    "number": "117",
    "changeIcon": "images/icon-up.svg",
    "percentage": "303"
  },
  {
    "title": "Likes",
    "platform": "twitter",
    "icon": "images/icon-twitter.svg",
    "number": "507",
    "changeIcon": "images/icon-up.svg",
    "percentage": "553"
  },
  {
    "title": "Likes",
    "platform": "youtube",
    "icon": "images/icon-youtube.svg",
    "number": "107",
    "changeIcon": "images/icon-down.svg",
    "percentage": "19"
  },
  {
    "title": "Total Views",
    "platform": "youtube",
    "icon": "images/icon-youtube.svg",
    "number": "1407",
    "changeIcon": "images/icon-down.svg",
    "percentage": "12"
  }
];

// Write the data to a JSON file
fs.writeFileSync('data.json', JSON.stringify(data, null, 2));

console.log('Data generated and saved to data.json');
