"use client";

import { useState, useEffect, useRef } from "react";

const STORAGE_KEY = (id: string) => `pg_unlocked_${id}`;

export default function PasswordGate({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);
  const [checking, setChecking] = useState(false);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(STORAGE_KEY(id)) === "1") {
      setUnlocked(true);
    }
  }, [id]);

  useEffect(() => {
    if (mounted && !unlocked) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [mounted, unlocked]);

  const attempt = () => {
    if (value === "1997") {
      setChecking(true);
      setTimeout(() => {
        sessionStorage.setItem(STORAGE_KEY(id), "1");
        setUnlocked(true);
      }, 420);
    } else {
      setShake(true);
      setValue("");
      setTimeout(() => setShake(false), 500);
      inputRef.current?.focus();
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") attempt();
  };

  if (!mounted) return null;
  if (unlocked) return <>{children}</>;

  return (
    <>
      <style>{`
        @keyframes pg-shake {
          0%,100% { transform: translateX(0); }
          20%      { transform: translateX(-6px); }
          40%      { transform: translateX(6px); }
          60%      { transform: translateX(-4px); }
          80%      { transform: translateX(4px); }
        }
        @keyframes pg-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pg-wrap {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fafafa;
          padding: 40px 24px;
        }
        .pg-card {
          animation: pg-in 0.5s cubic-bezier(0.16,1,0.3,1) both;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          width: 100%;
          max-width: 360px;
        }
        .pg-lock {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 4px rgba(17,17,17,0.06);
          margin-bottom: 24px;
        }
        .pg-heading {
          font-size: 17px;
          font-weight: 500;
          color: #111;
          letter-spacing: -0.02em;
          text-align: center;
          margin: 0 0 6px;
        }
        .pg-sub {
          font-size: 13px;
          color: rgba(17,17,17,0.4);
          text-align: center;
          line-height: 1.55;
          margin: 0 0 32px;
          max-width: 28ch;
        }
        .pg-field-wrap {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .pg-input-row {
          display: flex;
          gap: 8px;
          animation: ${shake ? "pg-shake 0.45s ease" : "none"};
        }
        .pg-input {
          flex: 1;
          height: 44px;
          border: 1px solid rgba(17,17,17,0.12);
          border-radius: 10px;
          padding: 0 14px;
          font-size: 15px;
          font-family: inherit;
          color: #111;
          background: #fff;
          outline: none;
          letter-spacing: 0.12em;
          transition: border-color 0.18s ease, box-shadow 0.18s ease;
        }
        .pg-input::placeholder { letter-spacing: 0; color: rgba(17,17,17,0.25); }
        .pg-input:focus {
          border-color: rgba(17,17,17,0.3);
          box-shadow: 0 0 0 3px rgba(17,17,17,0.05);
        }
        .pg-btn {
          height: 44px;
          padding: 0 18px;
          border-radius: 10px;
          background: #111;
          color: #fff;
          font-size: 13px;
          font-family: inherit;
          font-weight: 500;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.16s ease, opacity 0.16s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .pg-btn:hover { background: #222; }
        .pg-btn:disabled { opacity: 0.5; cursor: default; }
        .pg-hint {
          font-size: 11px;
          color: rgba(17,17,17,0.25);
          text-align: center;
          letter-spacing: 0.04em;
        }
      `}</style>

      <div className="pg-wrap">
        <div className="pg-card">
          <div className="pg-lock">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="3.5" y="8" width="11" height="8" rx="2" stroke="#111" strokeWidth="1.4"/>
              <path d="M6 8V5.5a3 3 0 0 1 6 0V8" stroke="#111" strokeWidth="1.4" strokeLinecap="round"/>
              <circle cx="9" cy="12" r="1.1" fill="#111"/>
            </svg>
          </div>

          <p className="pg-heading">This case study is protected</p>
          <p className="pg-sub">Enter the password to view the full case study.</p>

          <div className="pg-field-wrap">
            <div className="pg-input-row">
              <input
                ref={inputRef}
                type="password"
                className="pg-input"
                placeholder="Password"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKey}
                autoComplete="current-password"
                disabled={checking}
              />
              <button className="pg-btn" onClick={attempt} disabled={checking || !value}>
                {checking ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ animation: "spin 0.7s linear infinite" }}>
                    <circle cx="7" cy="7" r="5.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                    <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                  </svg>
                ) : "Unlock"}
              </button>
            </div>
            <p className="pg-hint">Password protected · select work only</p>
          </div>
        </div>
      </div>
    </>
  );
}
