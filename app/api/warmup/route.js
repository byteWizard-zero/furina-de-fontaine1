/**
 * Warmup endpoint — fires a lightweight GET to the FreeLLMAPI proxy
 * to wake it from Render cold sleep. Called by the client on page load
 * so the proxy is (hopefully) already awake by the time the user chats.
 */
export async function GET() {
  const baseUrl = process.env.FREELLMAPI_BASE_URL;
  const key = process.env.FREELLMAPI_KEY;

  if (!baseUrl || !key) {
    return Response.json({ status: 'skipped', reason: 'no proxy configured' });
  }

  try {
    const res = await fetch(`${baseUrl}/models`, {
      headers: { Authorization: `Bearer ${key}` },
      signal: AbortSignal.timeout(10000),
    });

    if (res.ok) {
      return Response.json({ status: 'warm' });
    }
    return Response.json({ status: 'waking', code: res.status });
  } catch {
    return Response.json({ status: 'cold' });
  }
}
