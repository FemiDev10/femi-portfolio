"use client";

import { useState, useEffect, useRef } from "react";

const STORAGE_KEY = (id: string) => `pg_unlocked_${id}`;

const WRONG_MSGS = [
  "That's not it.",
  "Still no. Respectfully.",
  "Three attempts in. Commitment.",
  "Okay at this point just email me.",
  "I admire the persistence, genuinely.",
  "We could've been friends.",
];

const EMAIL = "femijimoh10@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=Hey%20Femi%20%E2%80%94%20Portfolio%20Access&body=Hi%20Femi%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20see%20the%20full%20case%20study.%0A%0A`;

export default function PasswordGate({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked]   = useState(false);
  const [value, setValue]         = useState("");
  const [shake, setShake]         = useState(false);
  const [checking, setChecking]   = useState(false);
  const [mounted, setMounted]     = useState(false);
  const [attempts, setAttempts]   = useState(0);
  const [wrongMsg, setWrongMsg]   = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(STORAGE_KEY(id)) === "1") setUnlocked(true);
  }, [id]);

  useEffect(() => {
    if (mounted && !unlocked) setTimeout(() => inputRef.current?.focus(), 300);
  }, [mounted, unlocked]);

  const attempt = () => {
    if (!value) return;
    if (value === "2000") {
      setChecking(true);
      setWrongMsg("");
      setTimeout(() => {
        sessionStorage.setItem(STORAGE_KEY(id), "1");
        setUnlocked(true);
      }, 380);
    } else {
      const next = attempts + 1;
      setAttempts(next);
      setWrongMsg(WRONG_MSGS[Math.min(next - 1, WRONG_MSGS.length - 1)]);
      setShake(true);
      setValue("");
      setTimeout(() => { setShake(false); inputRef.current?.focus(); }, 500);
    }
  };

  if (!mounted) return null;
  if (unlocked) return <>{children}</>;

  return (
    <>
      <style>{`
        @keyframes pg-shake {
          0%,100% { transform: translateX(0); }
          18%     { transform: translateX(-7px); }
          36%     { transform: translateX(7px); }
          54%     { transform: translateX(-4px); }
          72%     { transform: translateX(4px); }
        }
        @keyframes pg-up {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes pg-spin { to { transform:rotate(360deg); } }
        @keyframes pg-msg {
          from { opacity:0; transform:translateY(4px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .pg-root {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #f9f9f9;
          padding: 48px 24px;
          font-family: inherit;
        }
        .pg-card {
          animation: pg-up 0.55s cubic-bezier(0.16,1,0.3,1) both;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 340px;
          text-align: center;
        }
        .pg-icon {
          width: 52px; height: 52px;
          border-radius: 16px;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.07);
          box-shadow: 0 1px 3px rgba(17,17,17,0.06), 0 4px 16px rgba(17,17,17,0.04);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 28px;
        }
        .pg-title {
          font-size: 18px;
          font-weight: 500;
          letter-spacing: -0.025em;
          color: #111;
          margin: 0 0 8px;
          line-height: 1.2;
        }
        .pg-sub {
          font-size: 13px;
          color: rgba(17,17,17,0.38);
          line-height: 1.6;
          margin: 0 0 32px;
          max-width: 26ch;
        }
        .pg-row {
          width: 100%;
          display: flex;
          gap: 8px;
          animation: ${shake ? "pg-shake 0.45s ease" : "none"};
        }
        .pg-input {
          flex: 1;
          height: 42px;
          border: 1px solid rgba(17,17,17,0.1);
          border-radius: 10px;
          padding: 0 14px;
          font-size: 14px;
          font-family: inherit;
          color: #111;
          background: #fff;
          outline: none;
          letter-spacing: 0.1em;
          transition: border-color 0.15s, box-shadow 0.15s;
          box-shadow: 0 1px 2px rgba(17,17,17,0.04);
        }
        .pg-input::placeholder { letter-spacing:0; color:rgba(17,17,17,0.22); font-size:13px; }
        .pg-input:focus { border-color: rgba(17,17,17,0.25); box-shadow: 0 0 0 3px rgba(17,17,17,0.06); }
        .pg-btn {
          height: 42px;
          padding: 0 20px;
          border-radius: 10px;
          background: #111;
          color: #fff;
          font-size: 13px;
          font-family: inherit;
          font-weight: 500;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s, opacity 0.15s;
          box-shadow: 0 1px 2px rgba(17,17,17,0.12);
          letter-spacing: -0.01em;
        }
        .pg-btn:hover:not(:disabled) { background: #2a2a2a; }
        .pg-btn:disabled { opacity: 0.4; cursor: default; }
        .pg-wrong {
          margin-top: 12px;
          font-size: 12px;
          color: rgba(17,17,17,0.4);
          animation: pg-msg 0.3s ease;
          min-height: 18px;
          letter-spacing: -0.01em;
        }
        .pg-divider {
          width: 100%;
          height: 1px;
          background: rgba(17,17,17,0.06);
          margin: 32px 0;
        }
        .pg-note {
          font-size: 12px;
          color: rgba(17,17,17,0.32);
          line-height: 1.7;
          max-width: 30ch;
        }
        .pg-link {
          color: rgba(17,17,17,0.55);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(17,17,17,0.2);
          transition: color 0.15s, text-decoration-color 0.15s;
        }
        .pg-link:hover { color: #111; text-decoration-color: rgba(17,17,17,0.5); }
        .pg-spin { animation: pg-spin 0.7s linear infinite; }
      `}</style>

      <div className="pg-root">
        <div className="pg-card">

          <div className="pg-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3.5" y="9" width="13" height="9" rx="2.5" stroke="#111" strokeWidth="1.5"/>
              <path d="M6.5 9V6.5a3.5 3.5 0 0 1 7 0V9" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="10" cy="13.5" r="1.25" fill="#111"/>
            </svg>
          </div>

          <p className="pg-title">Password protected</p>
          <p className="pg-sub">
            If you&apos;re here, you probably already have it.
          </p>

          <div style={{ width: "100%" }}>
            <div className="pg-row">
              <input
                ref={inputRef}
                type="password"
                className="pg-input"
                placeholder="Enter password"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && attempt()}
                autoComplete="current-password"
                disabled={checking}
              />
              <button className="pg-btn" onClick={attempt} disabled={checking || !value}>
                {checking ? (
                  <svg className="pg-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.6"/>
                    <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                ) : "Unlock"}
              </button>
            </div>

            <p className="pg-wrong" key={attempts}>
              {wrongMsg}
            </p>
          </div>

          <div className="pg-divider" />

          <p className="pg-note">
            Recruiter or hiring manager?{" "}
            <a href={MAILTO} className="pg-link">
              Drop me an email
            </a>{" "}
            and I&apos;ll send it right over.
          </p>

        </div>
      </div>
    </>
  );
}
