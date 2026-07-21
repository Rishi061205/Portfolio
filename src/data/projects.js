export const projects = [
  {
    id: "skin-disease-detection",
    title: "AI-Powered Skin Disease Detection System",
    tagline: "A PyTorch model that classifies 14 skin diseases from a single image, served through a lightweight Flask API.",
    category: "Personal",
    thumbnail: "/images/skin_ai.png",
    tech_stack: ["Python", "PyTorch", "Flask", "Git"],
    github_url: "https://github.com/Rishi061205/Skin_ai",
    live_url: "",
    featured: true,
    order: 1,
    problem:
      "Skin conditions are often misdiagnosed or ignored until they worsen, partly because dermatological expertise isn't always accessible. The challenge was building a model accurate enough to be genuinely useful, while keeping inference fast enough to feel instant.",
    approach:
      "I trained a PyTorch convolutional model on labeled skin-condition imagery to classify across 14 disease categories. To make it usable, I wrapped the model in a lightweight Flask REST API so any client — web or mobile — could send an image and get a prediction back without touching the model directly. I optimized the inference path specifically for local deployment, trimming preprocessing overhead until response time held steady.",
    outcome:
      "The system classifies across 14 skin disease categories with a response time of roughly 50ms per image on local deployment. It's a working demonstration that diagnostic-support tooling doesn't need heavy infrastructure to be fast and practical.",
  },
  {
    id: "file-compression-tool",
    title: "High-Performance File Compression Tool",
    tagline: "A from-scratch C++ compression engine built on Huffman coding, with hand-rolled data structures for speed.",
    category: "Academic",
    thumbnail: "/images/file_compression.png",
    tech_stack: ["C++", "Data Structures", "Algorithms"],
    github_url: "",
    live_url: "",
    featured: true,
    order: 2,
    problem:
      "Generic compression libraries are easy to import but teach you nothing about why they work. I wanted to understand — and rebuild — the mechanics of lossless compression from first principles, without leaning on any external library for the core algorithm.",
    approach:
      "I implemented the Huffman Coding algorithm in C++, building the supporting data structures myself: a custom min-heap to construct the encoding tree efficiently, and hash maps to manage character-frequency lookups without the overhead of standard library containers. Every layer — from frequency counting to bitstream writing — was written and profiled by hand.",
    outcome:
      "The tool achieves roughly 40% average reduction in file size while preserving perfect data integrity on decompression. More importantly, it's proof I can take an algorithm from theory to a working, efficient implementation without a safety net.",
  },
  {
  id: "local-share",
  title: "LocalShare",
  tagline: "AirDrop for Windows — instantly send links and files to any device on the same network, no cloud required.",
  category: "Personal",
  thumbnail: "/images/localShare.png",
  tech_stack: ["React", "Network", "WebSockets"], // adjust to your exact stack
  github_url: "https://github.com/64rishabh/antigravity", // add your repo link once it's public
  live_url: "",
  featured: true,
  order: 3,
  problem:
    "Sharing a link or file between your own devices on the same Wi-Fi shouldn't require emailing yourself or uploading to a cloud service. Windows has no built-in equivalent to AirDrop, so I set out to build one.",
  approach:
    "Built as a React + Vite app on the frontend, with [describe your backend/transport here — e.g. WebSockets for real-time device discovery and transfer, or a local server each device connects to]. Devices on the same network can see each other and send links or files directly, peer-to-peer, without routing through the cloud.",
  outcome:
    "Describe what it does today — e.g. transfer speed, file size limits, how devices discover each other, what platforms it's been tested on, or what's still in progress.",
  },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id) || null;
}
