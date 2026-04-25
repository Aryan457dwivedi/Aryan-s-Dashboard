// src/data/projects.js

export const projects = [
  {
    id: 1,
    n: 1,
    name: "Blood Disease Predictor",
    problem:
      "Clinical blood disease diagnosis demands specialist access, laboratory infrastructure, and turnaround times that most patients — particularly in Tier-2 and rural settings — simply do not have.",
    solution:
      "A supervised ML pipeline trained on CBC report parameters to classify seven haematological conditions with 94% accuracy. Inference completes in under three seconds, with no clinical infrastructure required on the patient side.",
    tech: ["Python", "Scikit-learn", "Django", "React", "PostgreSQL"],
    users: 1240,
    requests: 8430,
    accuracy: "94% classification accuracy",
    impact: "820h saved",
    active: true,
  },
  {
    id: 2,
    n: 2,
    name: "ParkTrackr",
    problem:
      "Manual parking management creates operational bottlenecks — slow vehicle processing, inaccurate billing, and no real-time slot visibility for drivers or facility operators.",
    solution:
      "A computer vision pipeline using OpenCV and Haar Cascade classifiers to detect vehicles and extract licence plates from live feeds via Tesseract OCR. Automated slot allocation, dynamic billing logic, and SMS-based digital receipts shipped end-to-end. Processing time reduced by ~80%.",
    tech: ["Python", "OpenCV", "Haar Cascade", "Tesseract OCR", "MySQL", "SMS API"],
    users: 820,
    requests: 14200,
    accuracy: "~80% reduction in processing time",
    impact: "1,100h saved",
    active: true,
  },
  {
    id: 3,
    n: 3,
    name: "DriveShaft",
    problem:
      "The automotive aftermarket operates largely through unstructured, word-of-mouth networks. Car owners have no reliable way to discover vetted mechanics, source parts, or connect with a community — all in one place.",
    solution:
      "A full-stack community platform built on Next.js and Supabase, serving car owners, mechanics, and enthusiasts across distinct authenticated roles. Shipped a category-filtered parts marketplace, city-wise mechanic discovery with verified profiles and ratings, and a community forum with threaded discussions and solved-answer marking.",
    tech: ["Next.js", "React", "Supabase", "PostgreSQL", "REST APIs"],
    users: 590,
    requests: 9800,
    accuracy: "Live — production deployed",
    impact: "430h saved",
    active: true,
  },
  {
    id: 4,
    n: 4,
    name: "Resume Analyzer",
    problem:
      "The majority of job applications are eliminated before human review — not on merit, but because resumes fail ATS parsing or lack alignment with the target role's keyword profile.",
    solution:
      "An NLP pipeline that scores a submitted resume against a parsed job description, surfaces structural and lexical gaps, and returns prioritised improvement recommendations — all without requiring manual recruiter input.",
    tech: ["Python", "spaCy", "FastAPI", "React"],
    users: 390,
    requests: 3210,
    accuracy: "89% ATS match rate",
    impact: "310h saved",
    active: true,
  },
];

export const performanceHighlights = [
  { label: "Blood Disease Predictor", value: "94% accuracy" },
  { label: "ParkTrackr — processing time", value: "↓ 80%" },
  { label: "DriveShaft — deployment status", value: "Live" },
  { label: "Resume Analyzer — ATS match", value: "89%" },
];

export const growthData = {
  labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
  values: [200, 420, 680, 980, 1450, 2100, 2800, 3040],
};

export const donutData = {
  labels: ["Blood", "ParkTrackr", "DriveShaft", "Resume"],
  values: [41, 27, 19, 13],
};
