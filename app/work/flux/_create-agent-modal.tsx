"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Check, Globe, FileText, Calendar, Mail } from "lucide-react";
import { Toggle, iconBtnSm, outlineBtn } from "./_shared";

const DEPARTMENTS = ["HR", "Design", "Eng", "Sales"];

const MODELS = [
  { id: "gpt4o",  name: "GPT-4o",   color: "#10A37F", desc: "Fast, well-rounded — good default for most tasks." },
  { id: "claude", name: "Claude",   color: "#D97757", desc: "Careful reasoning — strong at writing and review." },
  { id: "gemini", name: "Gemini",   color: "#4285F4", desc: "Multimodal — best with documents, sheets and images." },
];

const TOOLS = [
  { id: "web",      label: "Web Search",       Icon: Globe },
  { id: "files",     label: "File Access",      Icon: FileText },
  { id: "calendar", label: "Calendar Access",  Icon: Calendar },
  { id: "email",    label: "Email Access",     Icon: Mail },
];

export default function CreateAgentModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("HR");
  const [model, setModel] = useState("gpt4o");
  const [instructions, setInstructions] = useState("");
  const [tools, setTools] = useState<Record<string, boolean>>({ web: true, files: false, calendar: false, email: false });

  const canNext = step === 1 ? name.trim().length > 0 : true;
  const modelInfo = MODELS.find(m => m.id === model)!;
  const enabledTools = TOOLS.filter(t => tools[t.id]);

  function launch() {
    const finalName = name.trim() || "New Agent";
    router.push(`/work/flux/agent-view?name=${encodeURIComponent(finalName)}&dept=${encodeURIComponent(department)}&new=1`);
  }

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.35)", backdropFilter: "blur(2px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 560, background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.18)", display: "flex", flexDirection: "column", maxHeight: "88vh", fontFamily: "'DM Sans', system-ui, sans-serif" }}>

        {/* Header */}
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#111827" }}>Create an Agent</p>
            <p style={{ margin: "2px 0 0", fontSize: 11, color: "#9CA3AF" }}>Step {step} of 3</p>
          </div>
          <button onClick={onClose} style={{ ...iconBtnSm, padding: 6, borderRadius: 8, border: "1px solid #E5E7EB" }}>
            <X size={15} color="#6B7280" />
          </button>
        </div>

        {/* Step indicator */}
        <div style={{ display: "flex", gap: 6, padding: "12px 20px 0", flexShrink: 0 }}>
          {[1, 2, 3].map(n => (
            <div key={n} style={{ flex: 1, height: 3, borderRadius: 2, background: n <= step ? "#E8502A" : "#E5E7EB" }} />
          ))}
        </div>

        {/* Body */}
        <div style={{ padding: 20, overflowY: "auto", flex: 1 }}>
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Field label="Agent Name">
                <input
                  className="fd-input" value={name} onChange={e => setName(e.target.value)}
                  placeholder="e.g. Invoice Reviewer"
                  style={inputStyle}
                />
              </Field>
              <Field label="Description">
                <input
                  className="fd-input" value={description} onChange={e => setDescription(e.target.value)}
                  placeholder="What does this agent do?"
                  style={inputStyle}
                />
              </Field>
              <Field label="Department">
                <select value={department} onChange={e => setDepartment(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                  {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </Field>
              <Field label="Model">
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {MODELS.map(m => (
                    <button key={m.id} onClick={() => setModel(m.id)} style={{
                      display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
                      borderRadius: 10, cursor: "pointer", textAlign: "left",
                      border: model === m.id ? "1.5px solid #111827" : "1px solid #E5E7EB",
                      background: model === m.id ? "#F9FAFB" : "#fff",
                    }}>
                      <div style={{ width: 26, height: 26, borderRadius: 7, background: m.color, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "#fff", fontSize: 11, fontWeight: 800 }}>{m.name[0]}</span>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ margin: 0, fontSize: 12.5, fontWeight: 600, color: "#111827" }}>{m.name}</p>
                        <p style={{ margin: "1px 0 0", fontSize: 11, color: "#6B7280", lineHeight: 1.4 }}>{m.desc}</p>
                      </div>
                      <div style={{
                        width: 16, height: 16, borderRadius: "50%", flexShrink: 0,
                        border: model === m.id ? "5px solid #111827" : "1.5px solid #D1D5DB",
                      }} />
                    </button>
                  ))}
                </div>
              </Field>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Field label="Instructions">
                <textarea
                  className="fd-input" value={instructions} onChange={e => setInstructions(e.target.value)}
                  placeholder="Tell the agent what it should do"
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit", lineHeight: 1.6 }}
                />
              </Field>
              <Field label="Tools">
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {TOOLS.map(t => (
                    <div key={t.id} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 22, height: 22, borderRadius: 6, background: "#F3F4F6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <t.Icon size={12} color="#6B7280" />
                      </div>
                      <span style={{ fontSize: 12.5, color: "#374151", flex: 1 }}>{t.label}</span>
                      <Toggle on={!!tools[t.id]} onToggle={() => setTools(v => ({ ...v, [t.id]: !v[t.id] }))} />
                    </div>
                  ))}
                </div>
              </Field>
            </div>
          )}

          {step === 3 && (
            <div>
              <p style={{ fontSize: 12, color: "#6B7280", margin: "0 0 14px" }}>Review your agent before launch.</p>
              <div style={{ border: "1px solid #E5E7EB", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: modelInfo.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#fff", fontSize: 13, fontWeight: 800 }}>{(name || "New Agent")[0].toUpperCase()}</span>
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827" }}>{name || "New Agent"}</p>
                    <p style={{ margin: "1px 0 0", fontSize: 11, color: "#6B7280" }}>{description || "No description provided"}</p>
                  </div>
                </div>

                <SummaryRow label="Department" value={`# ${department}`} />
                <SummaryRow label="Model" value={modelInfo.name} />
                <SummaryRow
                  label="Instructions"
                  value={instructions.trim() ? instructions : "No instructions provided"}
                />
                <div>
                  <p style={{ margin: "0 0 6px", fontSize: 10, fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em" }}>Tools enabled</p>
                  {enabledTools.length === 0 ? (
                    <p style={{ margin: 0, fontSize: 12, color: "#9CA3AF" }}>None</p>
                  ) : (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {enabledTools.map(t => (
                        <span key={t.id} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, background: "#F3F4F6", color: "#374151", borderRadius: 20, padding: "3px 9px", fontWeight: 500 }}>
                          <Check size={10} color="#16A34A" /> {t.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: "14px 20px", borderTop: "1px solid #E5E7EB", display: "flex", justifyContent: "space-between", flexShrink: 0 }}>
          <button
            onClick={() => step === 1 ? onClose() : setStep(s => s - 1)}
            style={outlineBtn}
          >
            {step === 1 ? "Cancel" : "Back"}
          </button>
          {step < 3 ? (
            <button
              onClick={() => canNext && setStep(s => s + 1)}
              disabled={!canNext}
              style={{ ...primaryBtnStyle, opacity: canNext ? 1 : 0.4, cursor: canNext ? "pointer" : "not-allowed" }}
            >
              Next
            </button>
          ) : (
            <button onClick={launch} style={primaryBtnStyle}>
              Launch Agent
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p style={{ margin: "0 0 6px", fontSize: 11, fontWeight: 600, color: "#374151" }}>{label}</p>
      {children}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p style={{ margin: "0 0 3px", fontSize: 10, fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
      <p style={{ margin: 0, fontSize: 12.5, color: "#374151", lineHeight: 1.5 }}>{value}</p>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "9px 12px", border: "1px solid #E5E7EB", borderRadius: 8,
  fontSize: 13, color: "#111827", outline: "none", background: "#fff",
};

const primaryBtnStyle: React.CSSProperties = {
  padding: "8px 18px", background: "#111827", color: "#fff", border: "none",
  borderRadius: 8, fontSize: 12.5, fontWeight: 600, cursor: "pointer",
};
