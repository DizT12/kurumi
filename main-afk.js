let handler = async (m, { text }) => {
	let user = global.db.data.users[m.sender];
	user.afk = +new Date();
	user.afkReason = text;
	m.reply(`
  ${conn.getName(m.sender)} 𝗜𝗦 𝗡𝗢𝗪 𝗔𝗙𝗞${text ? ': ' + text : ''}
  `);
};
handler.help = ['afk [alasan]'];
handler.tags = ['main'];
handler.command = /^afk$/i;

export default handler;
