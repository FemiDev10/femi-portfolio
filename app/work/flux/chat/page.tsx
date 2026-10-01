"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";
import { AgentIcon, Sidebar, globalFdStyle } from "../_shared";

const DOCUMENT_THREAD = [
  { from: "user",  text: "Can you review the vendor contract I uploaded and flag anything risky?" },
  { from: "agent", text: "On it. Give me a moment to go through the document." },
  { from: "agent", text: "Found 2 clauses worth a second look — the auto-renewal term and the liability cap. Want me to summarize both?" },
  { from: "user",  text: "Yes, and let me know if the liability cap is lower than our usual standard." },
  { from: "agent", text: "The liability cap is set at $50k, which is below our usual $100k floor. I've drafted a summary with both flagged clauses — check the Output tab when ready." },
];

const SCHEDULE_THREAD = [
  { from: "user",  text: "Can you find a time next week for the design sync with Gregor and Lilly?" },
  { from: "agent", text: "Checking calendars now." },
  { from: "agent", text: "Tuesday 2:00–2:30 PM works for all three of you. Thursday 10:00 AM is open too if Tuesday doesn't work." },
  { from: "user",  text: "Let's go with Tuesday at 2." },
  { from: "agent", text: "Done — invite sent to Gregor and Lilly for Tuesday 2:00–2:30 PM." },
];

function ChatContent() {
  const params = useSearchParams();
  const topic = params.get("topic");
  const isSchedule = /schedul|trip|itiner/i.test(topic ?? "");
  const thread = isSchedule ? SCHEDULE_THREAD : DOCUMENT_THREAD;
  const title = topic ?? "Contract Review";
  const [message, setMessage] = useState("");

  return (
    <>
      <style>{globalFdStyle}</style>
      <div style={{ display: "flex", height: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", background: "#F9FAFB", overflow: "hidden" }}>
        <Sidebar />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Top bar */}
          <div style={{ padding: "14px 24px", borderBottom: "1px solid #E5E7EB", background: "#fff", display: "flex", alignItems: "center", gap: 10 }}>
            <AgentIcon id={3} size={26} />
            <h1 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#111827" }}>{title}</h1>
          </div>

          {/* Thread */}
          <div style={{ flex: 1, overflowY: "auto", padding: "24px", display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ maxWidth: 640, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
              {thread.map((m, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: m.from === "user" ? "flex-end" : "flex-start" }}>
                  {m.from === "agent" && (
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                      <AgentIcon id={3} size={16} />
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#6B7280" }}>{title}</span>
                    </div>
                  )}
                  <div style={{
                    maxWidth: "78%", padding: "10px 14px", borderRadius: 14,
                    fontSize: 13, lineHeight: 1.55,
                    background: m.from === "user" ? "#111827" : "#F3F4F6",
                    color: m.from === "user" ? "#fff" : "#111827",
                    borderBottomRightRadius: m.from === "user" ? 4 : 14,
                    borderBottomLeftRadius: m.from === "agent" ? 4 : 14,
                  }}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input bar */}
          <div style={{ padding: "12px 24px 18px", borderTop: "1px solid #E5E7EB", background: "#fff" }}>
            <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, border: "1px solid #E5E7EB", borderRadius: 12, padding: "6px 6px 6px 14px", background: "#fff" }}>
              <input
                className="fd-input"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Type your message..."
                style={{ flex: 1, border: "none", outline: "none", fontSize: 13, color: "#111827", background: "transparent" }}
              />
              <button style={{ width: 32, height: 32, borderRadius: "50%", background: "#111827", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Send size={13} color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={null}>
      <ChatContent />
    </Suspense>
  );
}
