//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b1661af44ac43cd839091.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "260777432733";
global.owner = process.env.OWNER_NUMBER || "260777432733";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVA3QjhxM2NldlJ5TE91c2xmMjdNcVQ4S0h4QytYUVNYcW5aOHV0TWZIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHg4RTFXbmpyTmVDaW1hZXM0Y0tiS3lja2FKRUZqWU0xeU9aOTlrNmtqMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTHFacVRSV0RncGFlSVRCQTRGNFpPU29MbGJkL0R0ZDhBL0JGc200elV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzb1AwVnR2YU9WaXVsamt2aXRKL28yQnZwUHExSkwyVEZRU3dlYzhQQ3c4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFNaXhRSE5rRWNhNUJGeSs0SFF3MHl6UFhpcGNaQXJsU3l1cWdOcDd2VWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNReEZCbEpwV3RtWE5MbkJsdzRHYkRiQnBHbHZwU005SXQ3TmhkbktxM3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFXQ05jZEdVQnE1WmZ2M1F4Y3dHSklzb3VsejEzSFBHMWkvZ1o4NkhVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTFDTUwvclUrUXhXYWkybmJXTExUZjJITFVWbmtkVzFRSHlidnQ5STN5OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQOFpGT3Q0bUdIOGRCaFloL0hnQkkyejI1K2FUV0VmSk1DQlpjQi92cXdCOUsrNng5MlRuaWIvT2ovcGkwSkhBMmQ1VE0vUXNlU2xoYkJYeERrVkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTMsImFkdlNlY3JldEtleSI6IjE5enJJQi8xV2dxcFhaSWtXUEpiN3dSc1huUkdncXIwdS83TUxYOGdsdlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNpMkJKczBrUXRlT2h5Nkdxb1VtekEiLCJwaG9uZUlkIjoiMzdhOWFmNDktMjhhOC00NTEzLWE1NGYtOWViNzcyNjU1NTIwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIrWWVuNER4K09FY3dQcUw1MFh2d1pYWFVrcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPNEVuUk1lT21EN1ZtdjNudEh5cllLTDV0cHM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWFpFOEFTWkIiLCJtZSI6eyJpZCI6IjI2MDc3NzQzMjczMzoyNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnJubnRVREVKK0poN1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVURUQmpIelZOVFJ1MkFZM2lCazVhbDlwRWN3M2hrd2ZvalNCNktneUVscz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNTZrcTdXeTZNelhiMS9ERUlkeHErVWQranY1Rm14Mm5rUGY2WUZOanpqR0dQSWFZT0dQOFY1dWo3cGE4Tmd4NzUxZFVGeHFxRnVEMmhZWXRZeXl6QVE9PSIsImRldmljZVNpZ25hdHVyZSI6InljSlQ0RWhQbVJETHdBcnhyQzZHVFdrS0Fib01xa2dtMldJZS83TlJQaTlLUTBGaS9PNDZOdDhpN1UySTllS0REUmNwc3J4UkFCSHFqSW1KUEpJS0JBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYwNzc3NDMyNzMzOjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZBMHdZeDgxVFUwYnRnR040Z1pPV3BmYVJITU40Wk1INkkwZ2Vpb01oSmIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk3ODA1MjUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSHF5In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is MSELA-CHUI-𝐌𝐃",
  author: process.env.PACK_AUTHER || "MSELA-CHUI-MD",
  packname: process.env.PACK_NAME || "🐯",
  botname: process.env.BOT_NAME || "MSELA-CHUI-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "MSELACHUI03🐯💫",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "MSELACHUI03").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
