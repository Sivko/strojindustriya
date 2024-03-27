export const configNotion = {
  method: "POST",
  headers: {
    "Authorization": "Bearer " + process.env.NOTE_DB_TOKEN,
    "Notion-Version": "2022-06-28",
  },
  body: null,
}