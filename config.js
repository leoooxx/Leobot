const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Jahguideama@gmail.com"
global.location="Lagos, Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/leoooxx/Leobot";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaFjpshHAdNQIyzFrd2v";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaFjpshHAdNQIyzFrd2v" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://dev-leoooxx.pantheonsite.io/wp-content/uploads/2024/06/Untitled-Project-1024x1024.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꧁𝕷𝕰𝕺꧂-ᴍᴅ" 


global.devs = "2348078924441" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349159986530";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot does not respond
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages, "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348078924441";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_10_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgODEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDk2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMixcbiAgICAgICAgMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1LFxuICAgICAgICAxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5LFxuICAgICAgICA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzLFxuICAgICAgICA2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInlaTWZldzJrK3FXVU1sbU5yVkdCZ0JDK1dEdlB1akNoSkhIWDZudXZSeG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE1OTk4NjUzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTI0QjA1MjhDMjEwREQ3MjdGNTAzQ0NBOUFGMUVERTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4Mjk4NjI2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInV1YUpUZHFpVGEtRjJwRnBGSWRCR0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWY2NjZmNTItNTVmZS00ZDFjLTkwZTYtMDlkM2EzODliYjJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgMTcwLFxuICAgICAgMTY5LFxuICAgICAgMjQyLFxuICAgICAgMTczLFxuICAgICAgMTcyLFxuICAgICAgMjM3LFxuICAgICAgMjQsXG4gICAgICAyMDYsXG4gICAgICAyNDMsXG4gICAgICAyLFxuICAgICAgOTUsXG4gICAgICA4MyxcbiAgICAgIDMzLFxuICAgICAgMzcsXG4gICAgICA4LFxuICAgICAgMTU3LFxuICAgICAgNTMsXG4gICAgICAxNSxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTEsXG4gICAgICA4OSxcbiAgICAgIDEyMCxcbiAgICAgIDE4MCxcbiAgICAgIDU2LFxuICAgICAgMTIyLFxuICAgICAgMTAwLFxuICAgICAgODUsXG4gICAgICAxMzYsXG4gICAgICAxNTMsXG4gICAgICA4MCxcbiAgICAgIDEzNixcbiAgICAgIDE2NCxcbiAgICAgIDIzOSxcbiAgICAgIDE2OSxcbiAgICAgIDIzOCxcbiAgICAgIDIxMixcbiAgICAgIDE1MixcbiAgICAgIDEzOCxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0diLzlzRkVQdlByTE1HR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNQ3FPYUlUQ2MyOU94L1lHUi9jRWgxcVl5bnp0dHFMcGhkNWF4di9oeUU0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFjZE0zc2VNYWhZMTZHRFZhU1JZazFSWk5nSUdVRGlQWWwvOXg3ZkVtcTc4YnFEM0NYb1Z0UEQ3US9BdUJnLzVXbnQ1TEloTTFpYVgwVUp0QWxaTEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJzVVlKMHZpWUVocG5HcjhJSnUwR2R2RkljMm5ieEs4RVY5MFAzRDhCMHNmMjdHSDV3aGZ6SWNWVmNsWTBkLzlMZjRrdFlScEU0a0FkNkQ5ZmdwVmlRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1OTk4NjUzMDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQUxJVkVcIixcbiAgICBcImxpZFwiOiBcIjE5NTU3NjEwMDYxNDM5Mzo2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1OTk4NjUzMDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODI5ODYyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1DWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUNWLmpzb24iOiAie1wia2V5RGF0YVwiOlwibnc0RmRZOWZwdVIwL1JVU0Mxd1c2SnlPU0ZEY1hrd0pPeGx2Y2tFTXZDWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTM1MTAyMzY5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgyNDAzMTY4NDFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNQ1cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWUGVreEVVYVBuVXkwb1E2WTRNUEJReHdTcVNkWEFzSGpSdFFKbUlnQWJVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzUxMDIzNjksXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMiwzLDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1DWC5qc29uIjogIntcImtleURhdGFcIjpcIlc2Q3FTY0J3a2hHQkRhOC80NG5xclY1aGRObm9pVmZGZnNhWlZwSEtuMFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUzNTEwMjM2OSxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1DWS5qc29uIjogIntcImtleURhdGFcIjpcIkd1RnRmUGxJcTBzZ1JjN0Z5VlhUMjNjblJnRGlFQ2ppcE5rOVIzNFBxdjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUzNTEwMjM2OSxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw2XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNQ1ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJScy9rSWQ4Tk1vZ1dKRWdlZzFYL3JPNjZ5ZkZERWlmMlV3Y0ZMaHZQT1dBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzUxMDIzNjksXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDZdfSxcInRpbWVzdGFtcFwiOlwiMTcxODI5NzAxOTI2OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: ꧁𝕷𝕰𝕺꧂-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꧁𝕷𝕰𝕺꧂-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • NIGHTPUNISHER1』*\n youtube.com/@NIGHTPUNISHER1108"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝕃𝔼𝕆-𝔹𝕆𝕋",
  ownername:process.env.OWNER_NAME|| "𝕃𝔼𝕆-𝔹𝕆𝕋",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
