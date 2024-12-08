import { Styles } from "../lib/Styles.js";
import fs from "fs";
import fetch from "node-fetch";
import { xpRange } from "../lib/levelling.js";
import moment from "moment-timezone";

const defaultMenu = {
  before: "\n *مرحبا* : %name\n *uptime* : %uptime\n%readMore",
  header: "┏━━⬣ ≼ %category",
  body: "┣ ඬ⃟ 🌟 %cmd",
  footer: "┗━━⬣",
  after: "*JEEN-MD"
};

const handler = async (message, { conn, usedPrefix, isOwner, isPremium }) => {
  const plugins = Object.values(global.plugins).filter(plugin => {
    if (isOwner) return !plugin?.disabled;
    return !plugin?.disabled && !plugin?.owner;
  });

  const commands = plugins.map(plugin => ({
    help: Array.isArray(plugin?.help) ? plugin?.help : plugin?.help ? [plugin?.help] : [],
    tags: Array.isArray(plugin?.tags) ? plugin?.tags : plugin?.tags ? [plugin?.tags] : [],
    prefix: !!plugin?.customPrefix,
    limit: plugin?.limit,
    premium: plugin?.premium,
    enabled: !plugin?.disabled,
    owner: isOwner ? plugin?.owner : false
  }));

  const categorizedCommands = {};

  commands.forEach(command => {
    if (command.tags.length) {
      command.tags.forEach(tag => {
        if (!categorizedCommands[tag]) categorizedCommands[tag] = [];
        categorizedCommands[tag].push(command);
      });
    }
  });

  const menuSections = Object.keys(categorizedCommands).sort().map(tag => {
    const categoryName = tag.charAt(0).toUpperCase() + tag.slice(1);
    const commandsList = categorizedCommands[tag]
      .map(command => command.help.map(cmd => {
        return defaultMenu.body
          .replace(/%cmd/g, command.prefix ? cmd : `%P${cmd}`)
          .replace(/%islimit/g, command.limit ? "(🅛)" : "")
          .replace(/%isPremium/g, command.premium ? "(🅟)" : "");
      }).join("\n"))
      .join("\n");

    return defaultMenu.header.replace(/%category/g, categoryName) + "\n" + commandsList + "\n" + defaultMenu.footer;
  });

  const menu = [defaultMenu.before, ...menuSections, defaultMenu.after].join("\n");

  const variables = {
    "%": "%",
    P: usedPrefix,
    name: await conn.getName(message.sender),
    uptime: clockString(process.uptime() * 1000),
    readMore: "\u200e".repeat(4001),
    mode: global.opts.self ? "Private" : "Public",
    selamat: greeting(),
    date: moment().tz("Africa/Casablanca").format("dddd, MMMM Do YYYY"),
    time: moment().tz("Africa/Casablanca").format("HH:mm:ss"),
    tagme: `@${message.sender.split("@")[0]}`
  };

  const renderedMenu = menu.replace(/%(\w+)/g, (_, key) => variables[key] || "");

  await conn.sendMessage(message.chat, {
    text: Styles(renderedMenu),
    mentions: [message.sender],
    contextInfo: {
      forwardingScore: 9999999,
      isForwarded: false,
      mentionedJid: [message.sender],
      externalAdReply: {
        showAdAttribution: false,
        renderLargerThumbnail: true,
        title: "أنا صديقك البوت jeen , يمكنك الضغط هنا لمتابعة قناة صاحب البوت",
        containsAutoReply: true,
        mediaType: 1,
        thumbnailUrl: "https://i.ibb.co/wMdhHsw/12cefc4e9ec1bba6fb1a315c30ebf938.jpg",
        sourceUrl: "https://whatsapp.com/channel/0029VayqYQDBVJl5mVZsit1G"
      }
    }
  }, { quoted: message });
};

handler.help = ["menu"];
handler.command = ["allmenu", "menu", "help", "list"];

export default handler;

function greeting() {
  const hour = moment().tz("Africa/Casablanca").hour();
  if (hour >= 18) return "(لا تنسى صلاتك)";
  if (hour >= 15) return "(مساء الخير)";
  if (hour >= 10) return "(صباح الخير)";
  if (hour >= 4) return "(لقد سهرت كثيرا)";
  return "💫";
}

function clockString(ms) {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${hours} H ${minutes} M ${seconds} S`;
}
