import axios from "axios"

export async function GET(request: Request) {
  try {
    const config = {
      headers: {
        "Authorization": "Bearer " + process.env.NOTE_DB_TOKEN,
        "Notion-Version": "2022-06-28"
      }
    }
    const data = await axios.post(`${process.env.NOTE_DB_CONTENT}`, ({}), config)
    return Response.json(data.data)
  } catch (err) {
    return Response.json("err")
  }
}