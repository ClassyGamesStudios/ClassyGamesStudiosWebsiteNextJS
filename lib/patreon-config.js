// lib/patreon-config.js

export const PATREON_CONFIG = {
  // SAFE to hardcode: Publicly visible in the URL anyway
  clientId: "S6XMfEwjtO90IheE36SnGIab2TGRtI9Xm9RxKKq5PjmyU5lF4k2dtpaNExt6bTxg",
  redirectUri: "https://classygames.gg/patreon-callback",
  
  // DANGER: DO NOT HARDCODE THIS. Keep using process.env
  // This value is only needed on the Server (Callback page)
  // If you hardcode it here, it leaks to the browser because this file is imported by the Auth page.
  clientSecret: process.env.PATREON_CLIENT_SECRET, 

  scope: "identity identity.memberships campaigns.members", 
};

export const getPatreonAuthUrl = () => {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: PATREON_CONFIG.clientId,
    redirect_uri: PATREON_CONFIG.redirectUri,
    scope: PATREON_CONFIG.scope,
    state: "classy_games_auth", 
  });
  return `https://www.patreon.com/oauth2/authorize?${params.toString()}`;
};