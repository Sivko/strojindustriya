export async function GET(request: Request) {
  try {
    const config = {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + process.env.NOTE_DB_TOKEN,
        "Notion-Version": "2022-06-28",
      },
      body: null,
    }
    const _data = await fetch(`${process.env.NOTE_DB_CONTENT}`, { cache: "no-cache", method: "POST", headers: config.headers })
    const data = await _data.json();
    return Response.json(data)
  } catch (err) {
    console.log(err)
    return Response.json("err")
  }
}