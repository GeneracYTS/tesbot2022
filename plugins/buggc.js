let handler  = async (m, { conn, usedPrefix: _p }) => {
let txtprem = 'โ ๐๐๐๐๐ ๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐๐๐\n๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐ ! ๐
if (global.db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
let info = `
     BugGc
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', ' *Bug GC* ', 'buganjay@broadcast')
}
handler.help = ['buggc']
handler.tags = ['info']
handler.command = /^(buggc)$/i

handler.group = true

export default handler