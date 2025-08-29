module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
  description: "Islamick post rendom by caption",
  commandCategory: "poster",
  usages: "/",
  cooldowns: 11,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    " 🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    " 🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    " 🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    " 🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    " 🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    " 🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    " 🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    "🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧",
    " 🌸Assalamualaikum 🌸\n🌺 Thanks you so much for using my bot your group ❤️‍🩹\n😻 I will you are members enjoy!🤗\n\n☢️To view any command 📌\n/Help\n/Bot\n/Info\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐡𝐨𝐬𝐞𝐧"
  ];
;
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.imgur.com/5zfZYf5.jpeg",
  "https://i.imgur.com/5zfZYf5.jpeg",
  "https://i.imgur.com/5zfZYf5.jpeg",
  "https://i.imgur.com/5zfZYf5.jpeg",
  "https://i.imgur.com/03sXhbn.jpeg",
  "https://i.imgur.com/03sXhbn.jpeg",
  "https://i.imgur.com/03sXhbn.jpeg",
  "https://i.imgur.com/03sXhbn.jpeg",
  "https://i.imgur.com/yJztUYb.jpeg",
  "https://i.imgur.com/yJztUYb.jpeg",
  "https://i.imgur.com/yJztUYb.jpeg",
  "https://i.imgur.com/yJztUYb.jpeg",
  "https://i.imgur.com/03sXhbn.jpeg",
  "https://i.imgur.com/03sXhbn.jpeg",
  "https://i.imgur.com/5zfZYf5.jpeg",
  "https://i.imgur.com/5zfZYf5.jpeg",
  "https://i.imgur.com/5zfZYf5.jpeg",
  "https://i.imgur.com/5zfZYf5.jpeg",
 "https://i.imgur.com/yJztUYb.jpeg",
"https://i.imgur.com/yJztUYb.jpeg",
"https://i.imgur.com/03sXhbn.jpeg",
"https://i.imgur.com/yJztUYb.jpeg",
"https://i.imgur.com/03sXhbn.jpeg",
"https://i.imgur.com/yJztUYb.jpeg",
"https://i.imgur.com/5zfZYf5.jpeg",
"https://i.imgur.com/03sXhbn.jpeg",
"https://i.imgur.com/yJztUYb.jpeg",
"https://i.imgur.com/03sXhbn.jpeg",
 "https://i.imgur.com/5zfZYf5.jpeg",
  "https://i.imgur.com/5zfZYf5.jpeg"
];
	 var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cyber.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cyber.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cyber.jpg")).on("close",() => callback());
   };