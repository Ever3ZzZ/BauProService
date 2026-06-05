export async function POST(request) {
  try {
    const data = await request.json();

    const message = `
🔔 Neue Anfrage

👤 Name: ${data.name}
📞 Telefon: ${data.phone}
📧 Email: ${data.email || "-"}

📍 Ort: ${data.city}

🛠 Leistung:
${data.service}

📅 Zeitraum:
${data.period}

📝 Beschreibung:
${data.description}
`;
    console.log("BOT:", process.env.TELEGRAM_BOT_TOKEN);
    console.log("CHAT:", process.env.TELEGRAM_CHAT_ID);
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    if (!telegramData.ok) {
  console.log("TELEGRAM ERROR:", telegramData);
  throw new Error(JSON.stringify(telegramData));
}
    console.log("Telegram response:", telegramData);
    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}