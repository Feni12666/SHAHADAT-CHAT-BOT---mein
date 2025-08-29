module.exports.config = {
  name: "onlyadmin",
  version: "3.0",
  hasPermssion: 2,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "Turn on/off admin only mode (all commands blocked for non-admins)",
  commandCategory: "Admin",
  usages: "only",
  cooldowns: 5,
  dependencies: {
    "fs-extra": ""
  }
};

module.exports.onLoad = function () {
  const { writeFileSync, existsSync } = require('fs-extra');
  const { resolve } = require("path");
  const path = resolve(__dirname, 'cache', 'data.json');
  if (!existsSync(path)) {
    const obj = { adminbox: {} };
    writeFileSync(path, JSON.stringify(obj, null, 4));
  } else {
    const data = require(path);
    if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
    writeFileSync(path, JSON.stringify(data, null, 4));
  }
}

// ✅ Middleware: সব কমান্ড চালুর আগে চেক হবে
module.exports.handleEvent = async function({ api, event }) {
  const { threadID, senderID, body } = event;
  if (!body || body.length == 0) return;

  const { resolve } = require("path");
  const pathData = resolve(__dirname, 'cache', 'data.json');
  const database = require(pathData);
  const { adminbox } = database;

  // যদি এই থ্রেডে admin only mode চালু থাকে
  if (adminbox[threadID] === true) {
    const threadInfo = await api.getThreadInfo(threadID);
    const adminIDs = threadInfo.adminIDs.map(e => e.id);

    // যদি ব্যবহারকারী এডমিন না হয় এবং কমান্ড চালাতে চায়
    if (!adminIDs.includes(senderID) && body.startsWith(global.config.PREFIX)) {
      // ❌ কোনো রিপ্লাই বা ওয়ার্নিং দিবে না → একেবারে ব্লক
      return;
    }
  }
}

module.exports.run = async function ({ api, event }) {
  const { threadID, messageID } = event;
  const { resolve } = require("path");
  const { writeFileSync } = require("fs-extra");

  const pathData = resolve(__dirname, 'cache', 'data.json');
  const database = require(pathData);
  const { adminbox } = database;

  if (adminbox[threadID] === true) {
    adminbox[threadID] = false;
    api.sendMessage("✅ Disabled Admin Only Mode — Everyone can use commands now.", threadID, messageID);
  } else {
    adminbox[threadID] = true;
    api.sendMessage("✅ Enabled Admin Only Mode — Only group admins can use commands now.", threadID, messageID);
  }

  writeFileSync(pathData, JSON.stringify(database, null, 4));
}