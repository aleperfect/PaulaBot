let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*@bot.pau:* ${pesan}`
  let teks = `*⺀👻Madrugar se hace más fácil contigo a mi lado⺀*\n\n🩷  ${oi}\n\n🩷  *𝙼𝙴𝙽𝚂𝙰𝙹𝙴:*\n`
  for (let mem of participants) {
  teks += `🩷 @${mem.id.split('@')[0]}\n`}
  teks += `└*Pau Bot*`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler