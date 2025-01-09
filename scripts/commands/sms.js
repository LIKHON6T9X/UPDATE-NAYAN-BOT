module.exports = {
    config: {
    name: "sms",
    version: "1.0.0",
    permission: 2,
    credits: "LIKHON6T9X",
    prefix: 'awto',
    description: "Sms Bombing",
    category: "without prefix",
    cooldowns: 5
  },

  start: async function({ nayan, args, events, Users, NAYAN }) {
    try {

    const axios = require("axios")
    const info = args.join(" ")
    const msg = info.split("-");
    const number = msg[0].trim();
    const limit = msg[1].trim();

    if (!info){
      NAYAN.react("❌")
      return nayan.reply(" Number & limit not found", events.threadID, events.messageID)
    }

    if (!number || !limit){
      NAYAN.react("❌")
      return nayan.reply("Number & limit not found", events.threadID, events.messageID)
    }

      NAYAN.react("⏳")

    const res = await axios.get(`https://api.paybd.shop/un.php?phone=${phone}&limit=${limit}`)
    const data = res.data
      if (data.error){
        NAYAN.react("🖕")
        return nayan.reply(data.error, events.threadID, events.messageID)
      
      }
      const num = data.send.num;
      const lim = data.send.limit
      const msgs = data.send.msg
    nayan.reply("Number: " + num + "\nLimit: " + lim + "\nMessage: " + msgs, events.threadID, events.messageID)
    
  } catch (error){
      nayan.reply("Sms not send", events.threadID, events.messageID)
  }
  }
  }
