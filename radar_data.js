const radar_data = {
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "Freska Tech Radar",
  quadrants: [
    { name: "Techniques & Practices" },
    { name: "Tools & Products" },
    { name: "Languages & Frameworks" },
    { name: "Platforms & Providers" },
  ],
  rings: [
    { name: "ADOPT",  color: "#93c47d" },
    { name: "TRIAL", color: "#b7e1cd" },
    { name: "ASSESS",  color: "#fce8b2" },
    { name: "HOLD",  color: "#f4c7c3" }
  ],
  print_layout: true,
  entries: [
    {
      label: "git",
      quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
      ring: 0,              // 0,1,2,3 (starting from inside)
      moved: 0             // -1 = moved out (triangle pointing down)
      //  0 = not moved (circle)
      //  1 = moved in  (triangle pointing up)
    },
    {
      label: "github",
      quadrant: 3,
      ring: 0,
      moved: 0
    },
    {
      label: "Code reviews / PRs",
      quadrant: 0,
      ring: 0,
      moved: 0
    },
    {
      label: "elixir",
      quadrant: 2,
      ring: 2,
      moved: 1
    },
    {
      label: "redux",
      quadrant: 2,
      ring: 0,
      moved: 0
    },
    {
      label: "styled components",
      quadrant: 0,
      ring: 0,
      moved: 0
    },
    {
      label: "ruby",
      quadrant: 2,
      ring: 0,
      moved: 0
    },
    {
      label: "microservices",
      quadrant: 0,
      ring: 0,
      moved: 0
    },
    {
      label: "postgres",
      quadrant: 1,
      ring: 0,
      moved: 0
    },
    {
      label: "cloud sql",
      quadrant: 1,
      ring: 1,
      moved: 1
    },
    {
      label: "continuous testing",
      quadrant: 0,
      ring: 2,
      moved: 1
    },
    {
      label: "TDD / BDD",
      quadrant: 0,
      ring: 0,
      moved: 0
    },
    {
      label: "Kubernetes / GKE",
      quadrant: 3,
      ring: 0,
      moved: 1
    },
    {
      label: "Android",
      quadrant: 3,
      ring: 0,
      moved: 0
    },
    {
      label: "iOS",
      quadrant: 3,
      ring: 0,
      moved: 0
    },
    {
      label: "google cloud",
      quadrant: 3,
      ring: 0,
      moved: 0
    },
    {
      label: "circleci",
      quadrant: 3,
      ring: 0,
      moved: 0
    },
    {
      label: "rollbar",
      quadrant: 1,
      ring: 3,
      moved: -1
    },
    {
      label: "new relic",
      quadrant: 1,
      ring: 0,
      moved: 0
    },
    {
      label: "stackdriver",
      quadrant: 1,
      ring: 2,
      moved: -1
    },
    {
      label: "netlify",
      quadrant: 3,
      ring: 0,
      moved: 0
    },
    {
      label: "aiven",
      quadrant: 3,
      ring: 0,
      moved: 0
    },
    {
      label: "elasticsearch",
      quadrant: 1,
      ring: 0,
      moved: 0
    },
    {
      label: "memcached (sidecar)",
      quadrant: 1,
      ring: 1,
      moved: 1
    },
    {
      label: "redis",
      quadrant: 1,
      ring: 0,
      moved: 0
    },
    {
      label: "dart",
      quadrant: 2,
      ring: 1,
      moved: 1
    },
    {
      label: "self hosted DBs",
      quadrant: 3,
      ring: 3,
      moved: -1
    },
    {
      label: "Firestore",
      quadrant: 1,
      ring: 1,
      moved: 1
    },
    {
      label: "Firebase",
      quadrant: 3,
      ring: 0,
      moved: 1
    },
    {
      label: "docker compose",
      quadrant: 1,
      ring: 0,
      moved: 1
    },
    {
      label: "docker",
      quadrant: 1,
      ring: 0,
      moved: 0
    },
    {
      label: "sinatra",
      quadrant: 2,
      ring: 1,
      moved: 1
    },
    {
      label: "ruby on rails",
      quadrant: 2,
      ring: 3,
      moved: -1
    },
    {
      label: "react",
      quadrant: 2,
      ring: 0,
      moved: 0
    },
    {
      label: "javascript",
      quadrant: 2,
      ring: 0,
      moved: 0
    },
    {
      label: "flutter",
      quadrant: 2,
      ring: 1,
      moved: 1
    },
    {
      label: "native mobile development",
      quadrant: 0,
      ring: 3,
      moved: -1
    },
    {
      label: "continuous delivery",
      quadrant: 0,
      ring: 1,
      moved: 0
    },
    {
      label: "shift right testing",
      quadrant: 0,
      ring: 2,
      moved: 1
    },
    {
      label: "shift left testing",
      quadrant: 0,
      ring: 0,
      moved: 0
    },
    {
      label: "typescript",
      quadrant: 2,
      ring: 1,
      moved: 1
    },
    {
      label: "aurelia",
      quadrant: 2,
      ring: 3,
      moved: -1
    },
    {
      label: "graphql (node.js)",
      quadrant: 2,
      ring: 1,
      moved: 1
    },
    {
      label: "rest",
      quadrant: 2,
      ring: 0,
      moved: 0
    },
    {
      label: "kong",
      quadrant: 1,
      ring: 0,
      moved: 0
    },
    {
      label: "contentful",
      quadrant: 3,
      ring: 0,
      moved: 0
    },
    {
      label: "POEditor",
      quadrant: 3,
      ring: 0,
      moved: 0
    },
    {
      label: "istio",
      quadrant: 1,
      ring: 2,
      moved: 1
    },
    {
      label: "Google Analytics",
      quadrant: 1,
      ring: 0,
      moved: 0
    },
    {
      label: "Segment",
      quadrant: 1,
      ring: 0,
      moved: 0
    },
    {
      label: "gloo",
      quadrant: 1,
      ring: 2,
      moved: 1
    },
    {
      label: "kafka",
      quadrant: 1,
      ring: 1,
      moved: 1
    },
    {
      label: "linkerd",
      quadrant: 1,
      ring: 2,
      moved: 1
    },
    {
      label: "service mesh",
      quadrant: 0,
      ring: 1,
      moved: 1
    },
    {
      label: "infra. as code",
      quadrant: 0,
      ring: 0,
      moved: 0
    },
    {
      label: "terraform",
      quadrant: 2,
      ring: 0,
      moved: 1
    },
    {
      label: "Gatsby",
      quadrant: 2,
      ring: 0,
      moved: 0
    },
    {
      label: "ansible",
      quadrant: 2,
      ring: 3,
      moved: -1
    },
    {
      label: "onion architecture",
      quadrant: 0,
      ring: 1,
      moved: 1
    },
    {
      label: "SOLID",
      quadrant: 0,
      ring: 0,
      moved: 0
    },
    {
      label: "Progressive Web Apps",
      quadrant: 0,
      ring: 1,
      moved: 1
    },


  ]
};
