// app/patreon-callback/page.js
import React, { Suspense } from 'react';
import Link from 'next/link';
import { PATREON_CONFIG } from '@/lib/patreon-config';
import { FaCheck, FaExclamationTriangle, FaCopy } from 'react-icons/fa';
import "@/styles/patreon.css";

// 1. Server Action: Verify Code with Patreon
async function verifyPatreon(code) {
  if (!code) return { error: "No authorization code found." };

  try {
    // Exchange the code for an access token
    const tokenParams = new URLSearchParams({
      code,
      grant_type: 'authorization_code',
      client_id: PATREON_CONFIG.clientId,
      client_secret: PATREON_CONFIG.clientSecret,
      redirect_uri: PATREON_CONFIG.redirectUri,
    });

    const tokenRes = await fetch('https://www.patreon.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: tokenParams,
    });

    const tokenData = await tokenRes.json();
    if (!tokenRes.ok) {
        throw new Error(tokenData.error_description || 'Failed to exchange token with Patreon');
    }

    // Fetch the User's Identity (Profile)
    // We include fields[user] to get the full name and image
    const identityUrl = `https://www.patreon.com/api/oauth2/v2/identity?fields%5Buser%5D=full_name,thumb_url`;
    
    const identityRes = await fetch(identityUrl, {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    const identityData = await identityRes.json();
    if (!identityRes.ok) throw new Error('Failed to fetch user profile');

    // 2. Generate In-Game Code
    // In a production app, you would save this to your database:
    // db.save({ patreonId: identityData.data.id, gameCode: generatedCode })
    const generatedCode = `CG-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    return {
      success: true,
      user: identityData.data.attributes,
      gameCode: generatedCode, 
    };

  } catch (error) {
    console.error("Patreon Auth Error:", error);
    return { error: error.message };
  }
}

// 2. Client Component for "Copy to Clipboard" interaction
function CodeDisplay({ code }) {
    'use client'; 
    
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        alert("Code copied to clipboard!");
    };

    return (
        <div className="code-section" onClick={handleCopy} title="Click to copy">
            <span className="code-label">Your In-Game Access Code</span>
            <div className="game-code">{code}</div>
            <div className="copy-hint">
                <FaCopy /> Click to copy
            </div>
        </div>
    );
}

// 3. Main Page Component
export default async function PatreonCallbackPage({ searchParams }) {
  // Await searchParams in Next.js 15+ (if on older version, remove 'await')
  const params = await searchParams;
  const { code, error: errorParam } = params;

  let content;

  // Handle Errors passed in URL or missing code
  if (errorParam) {
    content = <ErrorState message="Patreon denied access or an error occurred." />;
  } else if (!code) {
    content = <ErrorState message="Invalid request. No authorization code provided." />;
  } else {
    // Perform Verification
    const result = await verifyPatreon(code);
    
    if (result.error) {
        content = <ErrorState message={result.error} />;
    } else {
        // Success State
        content = (
            <>
                <div className="success-icon-container">
                    <FaCheck size={40} color="#4ade80" />
                </div>
                
                <h1 className="auth-title">Success!</h1>
                
                <p className="auth-description" style={{ marginBottom: '1rem' }}>
                    Welcome, <span className="highlight">{result.user.full_name}</span>.
                </p>
                <p style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Your Patreon account has been verified.
                </p>
                
                <CodeDisplay code={result.gameCode} />

                <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#888' }}>
                    Launch Classy Games and enter this code in the settings menu.
                </p>
            </>
        );
    }
  }

  return (
    <div className="patreon-page">
        <div className="patreon-bg-blob blob-blue"></div>
        <div className="patreon-bg-blob blob-purple"></div>

        <div className="auth-card" style={{ opacity: 1, transform: 'none' }}>
            <Suspense fallback={<div style={{color:'white'}}>Verifying...</div>}>
                {content}
            </Suspense>
            
            <Link href="/" className="back-link">
                Return to Home
            </Link>
        </div>
    </div>
  );
}

// Helper Component for Error UI
function ErrorState({ message }) {
    return (
        <>
            <div className="error-icon-container">
                <FaExclamationTriangle size={35} color="#ef4444" />
            </div>
            <h1 className="auth-title">Auth Failed</h1>
            <p className="auth-description" style={{ color: '#fca5a5' }}>
                {message}
            </p>
            <Link href="/patreon" className="patreon-button" style={{ backgroundColor: '#333' }}>
                Try Again
            </Link>
        </>
    );
}