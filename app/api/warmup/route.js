/**
 * Warmup endpoint — fires a lightweight GET to the FreeLLMAPI proxy
 * to wake it from Render cold sleep. Called by the client on page load
 * so the proxy is (hopefully) already awake by the time the user chats.
 */
const DEFAULT_PROXY_BASE = 'https://my-freellmapi-proxy.onrender.com/v1';
const DEFAULT_PROXY_KEY = 'freellmapi-6c693465337e36eae695139f44da8dec2ae5f10389be9471';

export async function GET() {
  const baseUrl = process.env.FREELLMAPI_BASE_URL || DEFAULT_PROXY_BASE;
  const key = process.env.FREELLMAPI_KEY || DEFAULT_PROXY_KEY;

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
