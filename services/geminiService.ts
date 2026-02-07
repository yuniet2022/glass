
export async function getAiResponse(prompt: string, history: any[] = []) {
  try {
    // Usamos una ruta relativa si el frontend y backend están en el mismo dominio, 
    // o la IP/URL de tu servidor en Digital Ocean.
    const apiUrl = window.location.hostname === 'localhost' 
      ? "http://localhost:5050/api/chat" 
      : "/api/chat"; // En producción usualmente prefieres rutas relativas tras un proxy

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, history }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      // Manejo específico para errores de cuota o modelo
      if (res.status === 404) throw new Error("AI Model not found on server. Check server.js configuration.");
      throw new Error(data?.error || `AI server error (${res.status})`);
    }

    return data.text || "I'm sorry, I couldn't process that. Please call us at (941) 735-0373.";
  } catch (error: any) {
    console.error("Frontend Gemini Service Error:", error);
    return "Connection issue. Please check your internet or call (941) 735-0373 for immediate assistance.";
  }
}
