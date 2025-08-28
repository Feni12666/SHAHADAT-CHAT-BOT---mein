module.exports.config = {
  name: "antibd",
  eventType: ["log:user-nickname"],
  version: "0.0.2",
  credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁",
  description: "Prevent changing Bot's nickname"
};

module.exports.run = async function({ api, event, Users, Threads }) {
  try {
    const { logMessageData, threadID, author } = event;
    const botID = api.getCurrentUserID();
    const { BOTNAME, ADMINBOT } = global.config;

    // থ্রেড ডাটায় সেভ করা বটের নাম বের করা
    let threadData = await Threads.getData(threadID);
    let nickname = threadData?.data?.nickname?.[botID] || BOTNAME;

    // যদি কেউ বটের nickname পরিবর্তন করে
    if (
      logMessageData.participant_id == botID &&
      author != botID &&
      !ADMINBOT.includes(author) &&
      logMessageData.nickname != nickname
    ) {
      // পুরানো nickname সেট করে দাও
      api.changeNickname(nickname, threadID, botID);

      // ইউজারের নাম বের করা
      const info = await Users.getData(author);

      return api.sendMessage(
        {
          body: `${info.name} - পাগল ছাগল 😹\n👉 আমার nickname শুধু আমার বস "শাহাদাত" চেঞ্জ করতে পারবে 🖐`
        },
        threadID
      );
    }
  } catch (e) {
    console.log("Error in antibd:", e);
  }
};