import { Styles } from "../lib/Styles.js";
import _0x2be120 from "fs";
import _0x5c3eaf from "node-fetch";
import { xpRange } from "../lib/levelling.js";
import _0x1e2cc9 from "moment-timezone";
const defaultMenu = {
  before: "\n *مرحبا* : %name\n *uptime* : %uptime\n%readMore",
  header: "┏━━⬣ ≼ %category ",
  body: "┣ ඬ⃟ 🌟 %cmd ",
  footer: "┗━━⬣  ",
  after: "*Edgar-MD"
};
const handler = async (_0x5b1faf, {
  conn: _0x4752fe,
  usedPrefix: _0xe442a9,
  isOwner: _0x84df3e,
  isPremium: _0x33994c
}) => {
  const _0x5126f2 = Object.values(global.plugins).filter(_0x4c85f7 => _0x84df3e ? !_0x4c85f7?.disabled : !_0x4c85f7?.disabled && !_0x4c85f7?.owner).map(_0x1295e0 => {
    return {
      help: Array.isArray(_0x1295e0?.help) ? _0x1295e0?.help : _0x1295e0?.help ? [_0x1295e0?.help] : "",
      tags: Array.isArray(_0x1295e0?.tags) ? _0x1295e0?.tags[0] : _0x1295e0?.tags ? [_0x1295e0?.tags] : "",
      prefix: _0x1295e0?.customPrefix ? true : false,
      limit: _0x1295e0?.limit,
      premium: _0x1295e0?.premium,
      enabled: !_0x1295e0?.disabled,
      owner: _0x84df3e ? _0x1295e0.owner : false
    };
  });
  let _0x489abb = {};
  _0x5126f2.forEach(_0x436fe0 => {
    if (_0x436fe0.tags && _0x436fe0.tags.length) {
      Object.assign(_0x489abb, {
        [_0x436fe0.tags]: Array.isArray(_0x436fe0.tags) ? _0x436fe0.tags.map(_0x2667bb => _0x2667bb.charAt(_0x2667bb.length >= 1 ? 0 : _0x2667bb.length).toUpperCase() + _0x2667bb.slice(1)) : [_0x436fe0.tags][0]
      });
    }
  });
  _0x4752fe.menu = _0x4752fe.menu ? _0x4752fe.menu : {};
  const _0x190ff2 = _0x4752fe.before || defaultMenu.before;
  const _0x462ba9 = _0x4752fe.header || defaultMenu.header;
  const _0x186390 = _0x4752fe.body || defaultMenu.body;
  const _0x3c29d1 = _0x4752fe.footer || defaultMenu.footer;
  const _0xb7b731 = _0x4752fe.after || defaultMenu.after;
  let _0x25db18 = [_0x190ff2, ...Object.keys(_0x489abb).sort().map(_0x287a8e => {
    return _0x462ba9.replace(/%category/g, "" + _0x489abb[_0x287a8e] + " ≽\n" + [..._0x5126f2.filter(_0x2a54d7 => _0x2a54d7.tags && _0x2a54d7.tags.includes(_0x287a8e) && _0x2a54d7.help && !_0x2a54d7.owner).map(_0x2e15ca => {
      return _0x2e15ca.help.map(_0x7bbe17 => {
        return _0x186390.replace(/%cmd/g, _0x2e15ca.prefix ? _0x7bbe17 : "%P" + _0x7bbe17).replace(/%islimit/g, _0x2e15ca.limit ? "(🅛)" : "").replace(/%isPremium/g, _0x2e15ca.premium ? "(🅟)" : "").trim();
      }).join("\n");
    }), _0x3c29d1].join("\n"));
  }), _0xb7b731].join("\n");
  _0x25db18 = typeof _0x4752fe.menu === "string" ? _0x4752fe.menu : typeof _0x4752fe.menu === "object" ? _0x25db18 : "";
  const _0x47eed5 = await _0x4752fe.getName(_0x5b1faf.sender);
  let _0x1a794c = _0x1e2cc9.tz("Africa/Casablanca").format("HH");
  let _0x1e6de7 = _0x1e2cc9.tz("Africa/Casablanca").format("mm");
  let _0x1b2c29 = _0x1e2cc9.tz("Africa/Casablanca").format("ss");
  let _0x312af8 = _0x1e2cc9.tz("Africa/Casablanca").format("HH:mm:ss");
  let _0xb04f7d = _0x1e2cc9.tz("Africa/Casablanca").format("HH:mm:ss");
  let _0x56f9af = _0x1a794c + "." + _0x1e6de7 + "." + _0x1b2c29;
  const _0x12df1e = String.fromCharCode(8206);
  const _0x54d664 = _0x12df1e.repeat(4001);
  const _0x592f32 = "https://files.catbox.moe/n0y4dw.mp3";
  let _0x51b84f;
  if (process.send) {
    process.send("uptime");
    _0x51b84f = (await new Promise(_0x1821f4 => {
      process.once("message", _0x1821f4);
      setTimeout(_0x1821f4, 1000);
    })) * 1000;
  }
  const _0x1d345b = clockString(_0x51b84f);
  let _0x39674c = "" + _0x1d345b;
  let _0x4a2cbd = new Date(new Date() + 3600000);
  let _0x5a7d04 = "ar";
  let _0x44a942 = _0x4a2cbd.toLocaleDateString(_0x5a7d04, {
    weekday: "long"
  });
  let _0x48a857 = _0x4a2cbd.toLocaleDateString(_0x5a7d04, {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  let _0x1bbc4f = Intl.DateTimeFormat(_0x5a7d04 + "-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(_0x4a2cbd);
  let _0xd06656 = _0x4a2cbd.toLocaleTimeString(_0x5a7d04, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  let _0x50510f = "" + ucapan();
  let _0x492079 = "@" + _0x5b1faf.sender.replace(/@.+/, "");
  let _0x563e79 = "" + (_0x84df3e ? "Owner" : _0x33994c ? "Premium" : "Free");
  let _0x84877d = "@" + _0x5b1faf.sender.replace(/@.+/, "");
  let _0x2947b9 = global.opts.self ? "Private" : "Publik";
  const _0x1090a0 = {
    "%": "%",
    P: _0xe442a9,
    name: _0x47eed5,
    wktuwib: _0x56f9af,
    readMore: _0x54d664,
    tagname: _0x84877d,
    mode: _0x2947b9,
    selamat: _0x50510f,
    uptime: _0x39674c,
    stats: _0x563e79,
    week: _0x44a942,
    date: _0x48a857,
    tagme: _0x492079,
    dateIslamic: _0x1bbc4f,
    who: "@" + _0x5b1faf.sender.replace(/[^0-9]/g, "")
  };
  _0x25db18 = _0x25db18.replace(new RegExp("%(" + Object.keys(_0x1090a0).sort((_0x336418, _0x30a367) => _0x30a367.length - _0x336418.length).join("|") + ")", "g"), (_0x56ef05, _0x28ab59) => "" + _0x1090a0[_0x28ab59]);
  const _0x5a5e60 = {
    url: _0x592f32
  };
  await _0x4752fe.sendMessage(_0x5b1faf.chat, {
    text: Styles(_0x25db18),
    mentions: [_0x5b1faf.sender],
    contextInfo: {
      forwardingScore: 9999999,
      isForwarded: false,
      mentionedJid: [_0x5b1faf.sender],
      externalAdReply: {
        showAdAttribution: false,
        renderLargerThumbnail: true,
        title: "أنا صديقك البوت ادغار , يمكنك الضغط هنا لمتابعة قناة صاحب البوت",
        containsAutoReply: true,
        mediaType: 1,
        thumbnailUrl: "https://i.ibb.co/wMdhHsw/12cefc4e9ec1bba6fb1a315c30ebf938.jpg",
        mediaUrl: "",
        sourceUrl: "https://whatsapp.com/channel/0029VayqYQDBVJl5mVZsit1G"
      }
    }
  }, {
    quoted: _0x5b1faf
  }).then(() => _0x4752fe.sendMessage(_0x5b1faf.chat, _0x23285e, {
    quoted: _0x5b1faf
  }));
};
handler.help = ["menu"];
handler.command = ["allmenu", "menu", "help", "list"];
export default handler;
function ucapan() {
  const _0x546604 = _0x1e2cc9.tz("Africa/Casablanca").format("HH");
  let _0xb6668d = "💫";
  if (_0x546604 >= 4) {
    _0xb6668d = "(لقد سهرت كثيرا)";
  }
  if (_0x546604 >= 10) {
    _0xb6668d = "(صباح الخير)";
  }
  if (_0x546604 >= 15) {
    _0xb6668d = "(مساء الخير)";
  }
  if (_0x546604 >= 18) {
    _0xb6668d = "(لا تنسى صلاتك)";
  }
  return _0xb6668d;
}
function clockString(_0x462fa1) {
  let _0x1da0b2 = isNaN(_0x462fa1) ? "--" : Math.floor(_0x462fa1 / 3600000);
  let _0x5f337f = isNaN(_0x462fa1) ? "--" : Math.floor(_0x462fa1 / 60000) % 60;
  let _0x519e04 = isNaN(_0x462fa1) ? "--" : Math.floor(_0x462fa1 / 1000) % 60;
  return [_0x1da0b2, " H ", _0x5f337f, " M ", _0x519e04, " S "].map(_0x3b8c04 => _0x3b8c04.toString().padStart(2, 0)).join("");
}
function pickRandom(_0x315311) {
  return _0x315311[Math.floor(Math.random() * _0x315311.length)];
}
