//•|═════════════════════════════|•          //

//    ✯ 𝐌𝐈𝐊𝐇𝐀𝐈𝐄𝐋 𝐎𝐅𝐅𝐈𝐂𝐀𝐋 ✯

//•|════════════════════════════|•      //

require('./settings')
const { default: JimbruOfficalConnect, WASocket, DisconnectReason, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, delay, jidNormalizedUser, makeWALegacySocket, useSingleFileLegacyAuthState, DEFAULT_CONNECTION_CONFIG, DEFAULT_LEGACY_CONNECTION_CONFIG } = require("@adiwajshing/baileys")
const fs = require('fs')
const path = require('path')
const pino = require('pino')
const axios = require('axios')
const chalk = require('chalk')
const CFonts = require('cfonts');
const FileType = require('file-type')
const yargs = require('yargs/yargs')
const { Boom } = require('@hapi/boom')
const { Collection, Simple, Store } = require("./lib")
const { MakeSession } = require('./lib/waconnect')
const PhoneNumber = require('awesome-phonenumber')
const { exec, spawn, execSync } = require("child_process")
const config = JSON.parse(fs.readFileSync('./config.json'))
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
// Jimbru session
global.authFile ='./Jimbru.json'
if(!fs.existsSync('./Jimbru.json')){
    MakeSession(global.session,authFile)
    }
setTimeout(() => {    
const { state, saveState } = useSingleFileAuthState(`./session.json`)
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
// MEMORY STORE 
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
// DATABASE
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`database/database.json`)
)
global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}
// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)
// 
async function startJimbruOffical() {
console.log(color(figlet.textSync('JIMBRU-MD', {
	   font: 'Pagga',
	   horizontalLayout: 'default',
	   vertivalLayout: 'default',
	   width: 80,
	   whitespaceBreak: true
       }), 'yellow'))
console.log(color('\n🦋 YT : MIKHAIEL','silver'))
console.log(color('🦋 GITHUB : MIKHAIEL ','silver'))
console.log(color('🦋 WHATSAPP : +919544846609 ','silver'))
console.log(color('  🦋 JIMBRU OFFICAL MD. 2022 🦋','mediumseagreen'))
    console.log(color('🦋','red'), color('Thank You For Using Jimbru...!!!', 'yellow'))
    console.log(color('🦋','red'), color('Source Code Version: 3.0', 'aqua'))
    console.log(color('🦋','red'), color('Bug 🐛 , Error , Suggestion 📝 , 📞 Talk to developer:', 'aqua'))
    console.log(color('🦋', 'cyan'), color('🪀 https://wa.me/919544846609'))
    console.log(color('🦋', 'cyan'), color('✅ Login information updated!!!', 'pink'))
    console.log(color('🦋', 'cyan'), color('🪀 Connecting to WhatsApp...Please wait...🧞', 'magenta'))
    console.log(color('🦋','red'), color('Jimbroottan Working 🧞', 'white'))
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const JimbruOffical = JimbruOfficalConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['JIMBRU-MD','Safari','1.0.0'],
        auth: state,
        version
    })    
store.bind(JimbruOffical.ev)
// AUTO CALL BLOCK 
        // JimbruOffical.ws.on('CB:call', async (json) => {
       // const callerId = json.content[0].attrs['call-creator']
      // if (json.content[0].tag == 'offer') {
     // let pa7rick = await JimbruOffical.sendContact(callerId, global.owner)
    // JimbruOffical.sendMessage(callerId, { text: `Automatic Block System!\nDon't Call Bot!\nPlease Ask Or Contact The Owner To Unblock You!`}, { quoted : pa7rick })
   // await sleep(8000)
  //  await JimbruOffical.updateBlockStatus(callerId, "block")
 //   }
//    })
JimbruOffical.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!JimbruOffical.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(JimbruOffical, mek, store)
require("./Jimbru")(JimbruOffical, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})
	// group update
JimbruOffical.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await JimbruOffical.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://telegra.ph/file/ddaca390b13a4246bf1ef.jpg'
       }
       let wm_fatih = { url : ppgc }
       if (pea[0].announce == true) {
       JimbruOffical.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe group has been closed by admin, Now only admin can send messages !`, `${botname}`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       JimbruOffical.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe group has been opened by admin, Now participants can send messages !`, `${botname}`, wm_fatih, [])
       } else if (pea[0].restrict == true) {
       JimbruOffical.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup info has been restricted, Now only admin can edit group info !`, `${botname}`, wm_fatih, [])
       } else if (pea[0].restrict == false) {
       JimbruOffical.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup info has been opened, Now participants can edit group info !`, `${botname}`, wm_fatih, [])
       } else {
       JimbruOffical.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Subject has been changed to *${pea[0].subject}*`, `${botname}`, wm_fatih, [])
     }
    })	
//randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

JimbruOffical.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        //if (!wlcm.includes(anu.id)) return //remove forwad slashes to make it welcome on off
        try {
            let metadata = await JimbruOffical.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await JimbruOffical.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://telegra.ph/file/ddaca390b13a4246bf1ef.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await JimbruOffical.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://telegra.ph/file/ddaca390b13a4246bf1ef.jpg'
                }

                if (anu.action == 'add') {
                const buffer = await getBuffer(ppuser)
                let Name = num
                const time = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	            const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
	            
                let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'xeon', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                body = `
		◈ ʜᴇʏ 👋 @${Name.split("@")[0]},
		
		◈ ᴛɪᴍᴇ : ${time} ${date}
		
                ◈ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ : ${metadata.subject}
		
                ◈ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ${metadata.desc}
		
                ◈ ᴛʜᴇ ᴍᴇᴍʙᴇʀꜱ ᴏꜰ ᴛʜᴇ ɢʀᴏᴜᴘ ᴀʀᴇ ᴀʟꜱᴏ ʟɪᴋᴇ ꜰᴀᴍɪʟʏ ꜱᴏ ʏᴏᴜ ʜᴀᴠᴇ ʙᴇᴄᴏᴍᴇ ᴀ ᴘᴀʀᴛ ᴏꜰ ᴏᴜʀ ꜰᴀᴍɪʟʏ ᴡʜɪᴄʜ ɪ ᴀᴍ ᴠᴇʀʏ ʜᴀᴘᴘʏ ᴀɴᴅ ɪ ᴡᴇʟᴄᴏᴍᴇ ʏᴏᴜ ᴛᴏ ᴍʏ ɢʀᴏᴜᴘ. ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴄᴏɴꜱɪᴅᴇʀɪɴɢ ᴏᴜʀ ɢʀᴏᴜᴘ ᴡᴏʀᴛʜʏ ᴀɴᴅ ᴊᴏɪɴᴇᴅ ᴛᴏɢᴇᴛʜᴇʀ !!`
   
   //dont forget to put my name mikhaiel as credit
  
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'Welcome'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./Media/theme/doc.xlsx'),
mimetype: docs,
jpegThumbnail:buffer,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 99999999999999,
caption: body,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${ownername}`,
body: `ᴅᴏɴ'ᴛ ꜰᴏʀɢᴇᴛ ᴛᴏ ʀᴇᴀᴅ ɢʀᴏᴜᴘ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ`,
mediaType:2,
thumbnail: buffer,
sourceUrl: `${website}`,
mediaUrl: `${webslink}`
}}
}
JimbruOffical.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                                } else if (anu.action == 'remove') {
                	        const buffer = await getBuffer(ppuser)
                                const time = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	                        const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                	        let Name = num
                    let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'xeon', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                    body = `
		    ◈ @${Name.split("@")[0]}
		    
		    ◈ ᴛɪᴍᴇ : ${time}
		    
		    ◈ ᴅᴀᴛᴇ : ${date}
ᴍᴀʏ ɢᴏᴅ ʙʟᴇꜱꜱ ʏᴏᴜ ᴀɴᴅ ʜᴇʟᴘ ʏᴏᴜ ᴀᴄʜɪᴇᴠᴇ ʏᴏᴜʀ ᴅʀᴇᴀᴍꜱ. ᴅᴏ ɴᴏᴛ ꜰᴏʀɢᴇᴛ ᴜꜱ. ᴡᴇ ᴡɪʟʟ ᴀʟᴡᴀʏꜱ ʙᴇ ᴛʜᴇʀᴇ ꜰᴏʀ ʏᴏᴜ ᴡʜᴇɴᴇᴠᴇʀ ʏᴏᴜ ɴᴇᴇᴅ ᴜꜱ`
    
let buttons = [
{buttonId: `wkwkwk`, buttonText: {displayText: 'RIP'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./Media/theme/doc.xlsx'),
mimetype: docs,
jpegThumbnail:buffer,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 99999999999999,
caption: body,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${ownername}`,
body: `Bye! my friend, take care.`,
mediaType:2,
thumbnail: buffer,
sourceUrl: `${website}`,
mediaUrl: `${weblink}`
}}
}
JimbruOffical.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
 JimbruOffical.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    JimbruOffical.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = JimbruOffical.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    JimbruOffical.getName = (jid, withoutContact  = false) => {
        id = JimbruOffical.decodeJid(jid)
        withoutContact = JimbruOffical.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = JimbruOffical.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === JimbruOffical.decodeJid(JimbruOffical.user.id) ?
            JimbruOffical.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    JimbruOffical.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await JimbruOffical.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${ownername}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click To Chat\nitem2.EMAIL;type=INTERNET:${sc}\nitem2.X-ABLabel:Script\nitem3.URL:${myweb}\nitem3.X-ABLabel:Script\nitem4.ADR:;;${region};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	JimbruOffical.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
    
    JimbruOffical.setStatus = (status) => {
        JimbruOffical.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    JimbruOffical.public = true

    JimbruOffical.serializeM = (m) => smsg(JimbruOffical, m, store)

    JimbruOffical.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); JimbruOffical.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startJimbruOffical(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startJimbruOffical(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); JimbruOffical.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); JimbruOffical.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startJimbruOffical(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startJimbruOffical(); }
            else JimbruOffical.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Connected...', update)
    })

    JimbruOffical.ev.on('creds.update', saveState)

    // Add Other
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    JimbruOffical.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: JimbruOffical.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            JimbruOffical.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    JimbruOffical.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        JimbruOffical.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendText = (jid, text, quoted = '', options) => JimbruOffical.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await JimbruOffical.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return JimbruOffical.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return JimbruOffical.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return JimbruOffical.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return JimbruOffical.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return JimbruOffical.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
    
   /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */ 
     
    JimbruOffical.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await JimbruOffical.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await JimbruOffical.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendTextWithMentions = async (jid, text, quoted, options = {}) => JimbruOffical.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await JimbruOffical.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await JimbruOffical.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    JimbruOffical.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    JimbruOffical.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await JimbruOffical.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await JimbruOffical.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await JimbruOffical.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    JimbruOffical.cMod = (jid, copy, text = '', sender = JimbruOffical.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === JimbruOffical.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    JimbruOffical.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return JimbruOffical
}

startJimbruOffical()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})