async function askAI() {
  const question = document.getElementById("question").value;
  const responseDiv = document.getElementById("response");
  const button = document.querySelector(".input-container button");

  if (!question) {
    responseDiv.style.display = "block";
    responseDiv.innerHTML = "Silakan ketik pertanyaan terlebih dahulu.";
    return;
  }

  button.disabled = true;
  responseDiv.innerHTML = "Memproses pertanyaan Anda...";
  responseDiv.style.display = "block";

  try {
    const response = await fetch(
      `https://api-zenn.vercel.app/api/ai/groq?q=${encodeURIComponent(
        question
      )}`
    );
    const data = await response.json();

    if (data.status) {
      responseDiv.innerHTML = formatResponse(data.data);
    } else {
      responseDiv.innerHTML =
        "Maaf, saya tidak dapat menemukan jawaban untuk pertanyaan Anda.";
    }
  } catch (error) {
    responseDiv.innerHTML =
      "Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.";
  } finally {
    button.disabled = false;
  }
}

function formatResponse(response) {
  // Replace **text** with <b>text</b>
  return response.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>");
}
