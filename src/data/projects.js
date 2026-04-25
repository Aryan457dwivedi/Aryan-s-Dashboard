export const projects = [
  {
    id: 1,
    n: 1,
    name: "Blood Disease Predictor",
    problem:
      "Diagnosing blood diseases manually is slow, costly, and out of reach for patients in under-resourced settings.",
    solution:
      "A machine learning model that analyzes Complete Blood Count reports and predicts seven blood conditions with 94% accuracy — returning results in under three seconds.",
    tech: ["Python", "Scikit-learn", "Django", "React", "PostgreSQL"],
    users: 1240,
    requests: 8430,
    accuracy: "94%",
    impact: "820h saved",
    active: true,
  },
  {
    id: 2,
    n: 2,
    name: "Smart Parking System",
    problem:
      "Urban drivers routinely lose 20+ minutes searching for parking — a problem that compounds into traffic congestion and unnecessary fuel consumption.",
    solution:
      "An IoT sensor network paired with a computer vision layer that maps available slots in real time, surfaced through a live web interface.",
    tech: ["Python", "OpenCV", "Node.js", "Socket.IO", "MongoDB"],
    users: 820,
    requests: 14200,
    accuracy: "99.2% uptime",
    impact: "1,100h saved",
    active: true,
  },
  {
    id: 3,
    n: 3,
    name: "Resume Analyzer",
    problem:
      "Most job seekers do not know why their applications are rejected. Poorly structured resumes fail ATS filters before any human sees them.",
    solution:
      "An NLP-powered tool that scores a resume against a job description, surfaces structural gaps, and outputs targeted improvement suggestions.",
    tech: ["Python", "spaCy", "FastAPI", "React"],
    users: 590,
    requests: 3210,
    accuracy: "89% match rate",
    impact: "430h saved",
    active: true,
  },
  {
    id: 4,
    n: 4,
    name: "Smart Expense Tracker",
    problem:
      "Without real-time visibility into spending, students and early professionals routinely overspend before month-end.",
    solution:
      "An AI-categorized tracker that auto-classifies transactions, raises budget alerts proactively, and generates monthly spending reports.",
    tech: ["Django", "Python", "Chart.js", "SQLite"],
    users: 390,
    requests: 5600,
    accuracy: "95% categorization",
    impact: "200h saved",
    active: true,
  },
  {
    id: 5,
    n: 5,
    name: "AI Chat Assistant",
    problem:
      "Academic help is not always available outside class hours — especially for programming, math, and CS fundamentals.",
    solution:
      "A context-aware assistant trained on educational content that responds to student queries around the clock.",
    tech: ["LangChain", "OpenAI API", "FastAPI", "React"],
    users: 230,
    requests: 9800,
    accuracy: "4.6 / 5 rating",
    impact: "310h saved",
    active: true,
  },
  {
    id: 6,
    n: 6,
    name: "Face Auth System",
    problem:
      "Password-based authentication is both a security liability and a source of user friction that erodes product experience.",
    solution:
      "A real-time facial recognition system using deep learning for secure, passwordless identity verification.",
    tech: ["Python", "OpenCV", "DeepFace", "Flask"],
    users: 180,
    requests: 2100,
    accuracy: "97.3%",
    impact: "90h saved",
    active: false,
  },
];

export const performanceHighlights = [
  { label: "Blood Disease Predictor", value: "94%" },
  { label: "Face Auth System", value: "97.3%" },
  { label: "Smart Parking uptime", value: "99.2%" },
  { label: "Expense categorization", value: "95%" },
];

export const growthData = {
  labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
  values: [200, 420, 680, 980, 1450, 2100, 2800, 3450],
};

export const donutData = {
  labels: ["Blood", "Parking", "Resume", "Expense", "Chat", "Face"],
  values: [36, 24, 17, 11, 7, 5],
};
