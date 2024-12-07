import fetch from 'node-fetch'

const handler = async (m, { text, args, usedPrefix, command }) => {
  try {
    if (!text) {
      throw `هذا هو البوت زيزو احذر من فهو يسب كثيرا مثال : *${usedPrefix}zizo كيف حال امك*;
    }

    // Updated API endpoint and method
    const url = 'https://api.simsimi.vn/v1/simtalk';
    const lang = 'id'; // specify your desired language code
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `text=${encodeURIComponent(text)}&lc=ar&key=`,
    });

    if (!response.ok) {
      throw 'error.';
    }

    const data = await response.json();
    const simiMessage = data.message || 'خطا';
    m.reply(simiMessage);
  } catch (error) {
    console.error('Error:', error);
    m.reply(text ? 'حاول مجددا.' : error);
  }
}

handler.command = ['zizo']
handler.tags = ['fun']
handler.help = ['zizo']

export default handler
