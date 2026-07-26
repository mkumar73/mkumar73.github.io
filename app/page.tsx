const githubUrl = "https://github.com/mkumar73";
const scholarUrl =
  "https://scholar.google.com/citations?user=uF6NMA4AAAAJ&hl=en";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      <path d={diagonal ? "M5 15 15 5M7 5h8v8" : "M3 10h13M11 5l5 5-5 5"} />
    </svg>
  );
}

function HeroDiagram() {
  const curves = [
    "M70 86 C148 86 148 72 224 72",
    "M70 118 C142 118 158 154 224 154",
    "M70 150 C146 150 152 236 224 236",
    "M70 182 C150 182 150 318 224 318",
    "M70 278 C146 278 152 112 224 112",
    "M70 310 C146 310 154 194 224 194",
    "M70 342 C148 342 154 276 224 276",
    "M70 374 C146 374 158 358 224 358",
  ];
  const outputs = [82, 142, 202, 262, 322, 382];

  return (
    <div className="hero-diagram" aria-label="Feature transformation diagram">
      <div className="diagram-label input-label">Input features</div>
      <div className="diagram-label transform-label">Spline transforms</div>
      <div className="diagram-label output-label">Learned representation</div>
      <svg viewBox="0 0 620 450" role="img">
        <title>
          Numerical features transformed through spline bases into learned
          representations
        </title>
        <defs>
          <linearGradient id="cyanFade" x1="0" x2="1">
            <stop stopColor="#35E6D1" stopOpacity=".86" />
            <stop offset="1" stopColor="#35E6D1" stopOpacity=".18" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="diagram-grid">
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 52} y1="0" x2={i * 52} y2="450" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 50} x2="620" y2={i * 50} />
          ))}
        </g>

        <g className="input-stack">
          <rect x="48" y="64" width="22" height="128" />
          <rect x="48" y="258" width="22" height="128" />
          {[80, 96, 112, 128, 144, 160, 176, 274, 290, 306, 322, 338, 354, 370].map(
            (y) => <line key={y} x1="48" y1={y} x2="70" y2={y} />,
          )}
        </g>

        <g className="connections">
          {curves.map((d, i) => (
            <path key={d} d={d} className={i === 2 || i === 5 ? "active" : ""} />
          ))}
        </g>

        <g className="basis-panels">
          {[52, 134, 216, 298].map((y, panel) => (
            <g key={y}>
              <rect x="224" y={y} width="168" height="64" />
              <path
                className="basis-curve"
                d={`M236 ${y + 47} C252 ${y + 46}, 255 ${y + 13}, 274 ${y + 15} S300 ${y + 53}, 322 ${y + 31} S350 ${y + 9}, 380 ${y + 27}`}
                style={{ animationDelay: `${panel * 120}ms` }}
              />
              {[244, 278, 322, 374].map((x, i) => (
                <circle key={x} cx={x} cy={y + [44, 16, 31, 24][i]} r="3" />
              ))}
            </g>
          ))}
        </g>

        <g className="representation">
          <rect x="462" y="62" width="22" height="142" />
          <rect x="462" y="250" width="22" height="142" />
          {outputs.map((y, i) => (
            <g key={y}>
              <rect
                x="463"
                y={y}
                width="20"
                height="14"
                className={i === 1 || i === 4 ? "hot" : ""}
              />
              <path d={`M484 ${y + 7} C522 ${y + 7}, 532 220, 574 220`} />
            </g>
          ))}
          <circle className="target-ring" cx="580" cy="220" r="12" />
          <circle className="target-dot" cx="580" cy="220" r="3" />
        </g>
      </svg>
      <div className="learnable-key">
        <span />
        Learnable parameters
      </div>
    </div>
  );
}

const researchAreas = [
  {
    number: "01",
    title: "Tabular Deep Learning",
    text: "Neural architectures that learn effectively from heterogeneous, structured data.",
    icon: "grid",
  },
  {
    number: "02",
    title: "Feature Representations",
    text: "Numerical encodings, spline bases, and adaptive transformations for better learning.",
    icon: "curve",
  },
  {
    number: "03",
    title: "Agentic AI",
    text: "Reliable AI systems that combine reasoning, tools, and production-grade workflows.",
    icon: "nodes",
  },
];

function ResearchIcon({ type }: { type: string }) {
  if (type === "curve") {
    return (
      <svg viewBox="0 0 64 48" aria-hidden="true">
        <path d="M4 40C14 40 14 8 29 8s14 32 31 32" />
        <circle cx="4" cy="40" r="2.5" />
        <circle cx="29" cy="8" r="2.5" />
        <circle cx="60" cy="40" r="2.5" />
      </svg>
    );
  }
  if (type === "nodes") {
    return (
      <svg viewBox="0 0 64 48" aria-hidden="true">
        <rect x="25" y="3" width="14" height="10" />
        <rect x="5" y="34" width="14" height="10" />
        <rect x="45" y="34" width="14" height="10" />
        <path d="M32 13v9M12 34v-7h40v7" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <rect x="3" y="3" width="58" height="42" />
      <path d="M3 17h58M3 31h58M22 3v42M42 3v42" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Manish Kumar, home">
          <span className="brand-mark">MK</span>
          <span className="brand-rule" />
          <span className="brand-name">Manish Kumar</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
        <a className="contact-link" href="mailto:manish.kumar@basf.com">
          Contact <Arrow />
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI Researcher · PhD Candidate</p>
          <h1>
            Researching how machines learn from{" "}
            <span>structured data.</span>
          </h1>
          <p className="hero-intro">
            I work on tabular deep learning, numerical feature
            representations and splines, and reliable agentic AI systems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={githubUrl} target="_blank" rel="noreferrer">
              View GitHub <Arrow />
            </a>
            <a className="button button-secondary" href={scholarUrl} target="_blank" rel="noreferrer">
              Google Scholar <Arrow />
            </a>
          </div>
        </div>
        <HeroDiagram />
      </section>

      <section className="area-strip section-shell" aria-label="Research focus">
        {researchAreas.map((area) => (
          <a className="area-card" href="#research" key={area.title}>
            <span className="area-number">{area.number}</span>
            <ResearchIcon type={area.icon} />
            <div>
              <h2>{area.title}</h2>
              <p>{area.text}</p>
            </div>
            <Arrow />
          </a>
        ))}
      </section>

      <section className="content-section section-shell" id="research">
        <div className="section-heading">
          <p className="section-kicker">Research focus</p>
          <h2>Representation is part of the model.</h2>
        </div>
        <div className="research-copy">
          <p className="lead">
            My research asks a practical question: how should numerical and
            categorical features be represented before a neural network starts
            learning?
          </p>
          <p>
            I study tabular architectures, spline-based numerical encodings,
            target-aware and learnable representations, and the interaction
            between preprocessing and model design. Alongside this work, I
            develop applied generative-AI and agentic systems for real-world
            workflows.
          </p>
          <div className="topic-list" aria-label="Research topics">
            <span>Tabular DL</span>
            <span>Numerical encodings</span>
            <span>Splines</span>
            <span>Feature learning</span>
            <span>Agentic systems</span>
          </div>
        </div>
      </section>

      <section className="content-section publications section-shell" id="publications">
        <div className="section-heading">
          <p className="section-kicker">Selected publications</p>
          <h2>Recent work.</h2>
          <a className="text-link" href={scholarUrl} target="_blank" rel="noreferrer">
            All publications on Scholar <Arrow diagonal />
          </a>
        </div>
        <div className="publication-list">
          <article className="publication-card featured">
            <div className="publication-meta">
              <span>2026</span>
              <span>Tabular deep learning</span>
            </div>
            <h3>
              From Uniform to Learned Knots: A Study of Spline-Based Numerical
              Encodings for Tabular Deep Learning
            </h3>
            <p>
              A systematic study of B-, M-, and I-spline encodings with
              uniform, quantile-based, target-aware, and learnable knot
              placement.
            </p>
            <p className="authors">
              Manish Kumar, Anton Frederik Thielmann, Christoph Weisser,
              Benjamin Säfken
            </p>
            <a
              href="https://arxiv.org/abs/2604.05635"
              target="_blank"
              rel="noreferrer"
              aria-label="Read From Uniform to Learned Knots on arXiv"
            >
              Read paper <Arrow diagonal />
            </a>
          </article>

          <article className="publication-card">
            <div className="publication-meta">
              <span>2024</span>
              <span>State-space models</span>
            </div>
            <h3>Mambular: A Sequential Model for Tabular Deep Learning</h3>
            <p>
              An adaptation of the Mamba architecture for regression,
              classification, and distributional regression on tabular data.
            </p>
            <p className="authors">
              Anton Frederik Thielmann, Manish Kumar, Christoph Weisser, Arik
              Reuter, Benjamin Säfken, Soheila Samiee
            </p>
            <a
              href="https://arxiv.org/abs/2408.06291"
              target="_blank"
              rel="noreferrer"
              aria-label="Read Mambular on arXiv"
            >
              Read paper <Arrow diagonal />
            </a>
          </article>
        </div>
      </section>

      <section className="content-section projects section-shell" id="projects">
        <div className="section-heading">
          <p className="section-kicker">Open source</p>
          <h2>Research translated into tools.</h2>
        </div>
        <div className="project-grid">
          <article className="project-card">
            <div className="project-top">
              <span className="project-index">A</span>
              <span className="project-language">Python</span>
            </div>
            <h3>DeepTab</h3>
            <p>
              A unified, scikit-learn-style library for modern tabular deep
              learning models, evolved from the Mambular project.
            </p>
            <div className="project-tags">
              <span>Tabular DL</span>
              <span>Research software</span>
            </div>
            <a href="https://github.com/OpenTabular/DeepTab" target="_blank" rel="noreferrer">
              Explore repository <Arrow diagonal />
            </a>
          </article>
          <article className="project-card">
            <div className="project-top">
              <span className="project-index">B</span>
              <span className="project-language">Python</span>
            </div>
            <h3>PreTab</h3>
            <p>
              An extensible toolkit for numerical feature representation,
              basis expansion, and preprocessing for tabular machine learning.
            </p>
            <div className="project-tags">
              <span>Feature engineering</span>
              <span>Splines</span>
            </div>
            <a href="https://github.com/OpenTabular/PreTab" target="_blank" rel="noreferrer">
              Explore repository <Arrow diagonal />
            </a>
          </article>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div>
          <p className="section-kicker">About</p>
          <h2>Research between theory and production.</h2>
        </div>
        <div className="about-copy">
          <p>
            I am an AI researcher and data scientist at BASF and a PhD candidate
            at Clausthal University of Technology. My work sits at the
            intersection of machine learning methodology, open-source research
            software, and production AI.
          </p>
          <p>
            I care about methods that are not only accurate, but also
            reproducible, computationally grounded, and genuinely useful to
            practitioners.
          </p>
          <div className="about-links">
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub <Arrow diagonal />
            </a>
            <a href={scholarUrl} target="_blank" rel="noreferrer">
              Google Scholar <Arrow diagonal />
            </a>
            <a href="mailto:manish.kumar@basf.com">
              Email <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>

      <footer className="section-shell">
        <div className="footer-brand">
          <span className="brand-mark">MK</span>
          <span>Manish Kumar</span>
        </div>
        <p>AI research · Tabular deep learning · Agentic systems</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
