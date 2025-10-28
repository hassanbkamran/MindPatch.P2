# MindPatch

**Adaptive Context-aware Micro-Recovery System for Developers**

MindPatch is a privacy-first, on-device desktop application that detects short bursts of cognitive overload from developer digital behavior and automatically delivers 20-60 second personalized micro-recovery interventions to restore focus and reduce mental fatigue.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)
![Privacy](https://img.shields.io/badge/privacy-first-green.svg)

---

## 🌐 Viewing This in a Browser?

**You're seeing DEMO MODE** - This is a browser preview with simulated data.

- ✅ See the full UI and design
- ❌ No real monitoring or detection
- 💡 Data is mock/simulated

**Want the real thing?**
1. Download the code
2. Run the desktop app
3. Get real monitoring + ML detection

📖 **[See DEMO_MODE.md for details](DEMO_MODE.md)**

---

## 🎯 Key Features

- **Privacy-First Design**: All processing happens locally on your device. No content logging, no keystroke recording.
- **Automatic Detection**: Monitors typing cadence, app switching, and IDE focus to detect cognitive overload
- **Micro-Interventions**: 20-60 second recovery sessions including:
  - Guided breathing exercises
  - Desk stretches
  - Posture corrections
  - Brief do-not-disturb periods
- **Context-Aware**: Optional calendar integration (free/busy metadata only)
- **Research-Backed**: Built on neuroscience-based productivity principles
- **Ecological Momentary Assessment (EMA)**: Optional feedback to measure effectiveness

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Development](#development)
- [Building & Packaging](#building--packaging)
- [Deployment](#deployment)
- [Architecture](#architecture)
- [Privacy & Security](#privacy--security)
- [Testing](#testing)
- [Contributing](#contributing)
- [Research](#research)
- [License](#license)

## 🚀 Quick Start

> **🚨 GETTING "FAILED TO FETCH" ERROR?**  
> **→ THE SERVICE IS NOT RUNNING!**  
> **→ SEE: [RUN_THIS_FIRST.md](RUN_THIS_FIRST.md) ← FIX IT NOW**

> Other errors? See [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Git**

### Install Dependencies

```bash
# Clone the repository
git clone https://github.com/yourusername/mindpatch.git
cd mindpatch

# Install root dependencies
npm install

# Install service dependencies
cd local-service
npm install
cd ..
```

### Run in Development

```bash
# Start all components (service + renderer + electron)
npm run dev
```

This will:
1. Start the local background service on http://127.0.0.1:3001
2. Start the Vite dev server on http://localhost:5173
3. Launch the Electron desktop app

**⚠️ Important**: Wait for all three services to show "ready" before the Electron window opens.

**Troubleshooting**: If you see "Service Not Running" errors, the background service didn't start. See [GETTING_STARTED.md](GETTING_STARTED.md)

### Test with Simulated Events

```bash
# In a separate terminal, run the event simulator
npm run simulate
```

This demonstrates the complete flow: event detection → overload detection → intervention triggering → EMA response.

## 💻 System Requirements

### Minimum

- **OS**: Windows 10, macOS 10.14, or Ubuntu 18.04
- **RAM**: 4GB
- **Disk**: 500MB free space
- **Display**: 1280x720 minimum resolution

### Recommended

- **OS**: Windows 11, macOS 12+, or Ubuntu 20.04+
- **RAM**: 8GB+
- **Disk**: 1GB free space
- **Display**: 1920x1080 or higher

## 📦 Installation

### From Pre-built Installer (Coming Soon)

Download the installer for your platform from the [Releases](https://github.com/yourusername/mindpatch/releases) page:

- **Windows**: `MindPatch-Setup-1.0.0.exe`
- **macOS**: `MindPatch-1.0.0.dmg`
- **Linux**: `MindPatch-1.0.0.AppImage` or `mindpatch_1.0.0_amd64.deb`

### From Source

See [Development](#development) section below.

## 🛠 Development

### Project Structure

```
mindpatch/
├── components/          # React UI components
│   ├── Dashboard.tsx
│   ├── Settings.tsx
│   ├── InterventionModal.tsx
│   ├── EMAModal.tsx
│   └── ui/             # Shadcn components
├── electron/           # Electron main process
│   ├── main.js
│   └── preload.js
├── local-service/      # Background Node.js service
│   ├── server.js
│   ├── db/            # Database layer
│   ├── sensors/       # Sensor monitoring
│   ├── ml/            # Detection algorithms
│   └── interventions/ # Intervention logic
├── scripts/           # Utility scripts
├── tests/             # Test suites
├── docker/            # Docker configuration
├── docs/              # Documentation
└── dist/              # Build output
```

### Available Scripts

```bash
# Development
npm run dev              # Start all dev servers
npm run dev:service      # Start only the background service
npm run dev:renderer     # Start only the Vite renderer
npm run dev:electron     # Start only Electron

# Building
npm run build            # Build renderer + service
npm run build:renderer   # Build renderer only
npm run build:service    # Build service only

# Packaging
npm run package          # Package for current platform
npm run package:win      # Package for Windows
npm run package:mac      # Package for macOS
npm run package:linux    # Package for Linux

# Testing & Quality
npm run test             # Run all tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Generate coverage report
npm run lint             # Run ESLint
npm run audit            # Run npm audit
npm run ci-checks        # Run full CI check suite

# Utilities
npm run simulate         # Run event simulator
npm run docker:build     # Build Docker image
npm run docker:run       # Run Docker container
```

### Local Development Workflow

1. **Start the development environment**:
   ```bash
   npm run dev
   ```

2. **Make changes** to components, sensors, or detection logic

3. **Test manually** or run the simulator:
   ```bash
   npm run simulate
   ```

4. **Run tests** before committing:
   ```bash
   npm run ci-checks
   ```

5. **Commit changes** following conventional commits:
   ```bash
   git commit -m "feat: add new intervention type"
   ```

## 📦 Building & Packaging

### Build for Production

```bash
npm run build
```

This creates:
- `dist/` - Compiled renderer (HTML/CSS/JS)
- `local-service/` - Production-ready service code

### Package Desktop App

```bash
# For your current platform
npm run package

# For specific platforms
npm run package:win      # Creates dist-electron/*.exe
npm run package:mac      # Creates dist-electron/*.dmg
npm run package:linux    # Creates dist-electron/*.AppImage and *.deb
```

Installers will be in the `dist-electron/` directory.

### Docker Container (Service Only)

Build the Docker image for the backend service:

```bash
npm run docker:build
```

Run the containerized service:

```bash
npm run docker:run
```

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for cloud deployment instructions.

## 🌐 Deployment

### Desktop Distribution

1. **Build installers** for all platforms:
   ```bash
   npm run package:win
   npm run package:mac
   npm run package:linux
   ```

2. **Upload to GitHub Releases** or your distribution platform

3. **Code signing** (recommended for production):
   - Windows: Use `electron-builder` with certificate
   - macOS: Sign with Apple Developer certificate
   - Linux: GPG signing

### Optional Cloud Backend

While MindPatch is designed to run entirely locally, you can optionally deploy the backend service to the cloud for centralized data collection (with explicit user consent).

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions on deploying to:
- Render
- Railway
- Heroku
- AWS/Azure/GCP

**Important**: Always obtain informed consent before collecting any data. See [THREAT_MODEL.md](THREAT_MODEL.md) for privacy considerations.

## 🏗 Architecture

### System Overview

```
┌─────────────────────────────────────────────────┐
│           Desktop Application (Electron)        │
│  ┌──────────────────────────────────────────┐  │
│  │  Renderer Process (React + Vite)         │  │
│  │  - Dashboard UI                          │  │
│  │  - Settings Panel                        │  │
│  │  - Intervention Modals                   │  │
│  │  - EMA Forms                             │  │
│  └──────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────┐  │
│  │  Main Process (Node.js)                  │  │
│  │  - Window management                     │  │
│  │  - System tray integration               │  │
│  │  - IPC communication                     │  │
│  │  - Service lifecycle                     │  │
│  └──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
                      ↓ IPC / HTTP
┌─────────────────────────────────────────────────┐
│      Local Background Service (Node.js)         │
│  ┌──────────────────────────────────────────┐  │
│  │  Sensor Manager                          │  │
│  │  - Typing cadence (no content)           │  │
│  │  - App/window switching                  │  │
│  │  - IDE focus detection                   │  │
│  │  - Calendar free/busy (opt-in)           │  │
│  └──────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────┐  │
│  │  ML Detector                             │  │
│  │  - Rule-based detection                  │  │
│  │  - Lightweight on-device model           │  │
│  │  - Overload scoring                      │  │
│  └──────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────┐  │
│  │  Intervention Manager                    │  │
│  │  - Trigger logic                         │  │
│  │  - Type selection                        │  │
│  │  - EMA prompting                         │  │
│  └──────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────┐  │
│  │  Database (SQLite)                       │  │
│  │  - events (metadata only)                │  │
│  │  - interventions                         │  │
│  │  - ema_responses                         │  │
│  │  - settings                              │  │
│  └──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

### Database Schema

See [local-service/db/schema.sql](local-service/db/schema.sql) for the complete schema.

**Key Tables**:
- `events` - Behavioral metadata (NO content)
- `interventions` - Micro-recovery sessions
- `ema_responses` - User feedback
- `settings` - User preferences

### Privacy Architecture

All data processing occurs **locally on the user's device**:

1. **No network requests** except optional calendar API (with explicit consent)
2. **No content logging** - database constraints prevent storage of text/keystrokes
3. **Opt-in telemetry** - disabled by default
4. **Local storage** - SQLite database in user data directory
5. **Sandboxed renderer** - context isolation enabled

## 🔒 Privacy & Security

### Privacy Guarantees

✅ **Local Processing Only** - All detection and intervention logic runs on-device  
✅ **No Content Capture** - Only metadata (timing, app names, durations) is recorded  
✅ **Database Constraints** - SQL CHECK constraints prevent content storage  
✅ **Opt-in Telemetry** - Anonymous usage stats require explicit consent  
✅ **Calendar Privacy** - Only free/busy status, never event details  
✅ **No Cloud Dependency** - Works 100% offline

### Security Features

- **Context Isolation** - Renderer process sandboxed from Node.js
- **Localhost Binding** - Service only accessible from 127.0.0.1
- **Input Validation** - All API inputs validated
- **Dependency Auditing** - Regular `npm audit` checks
- **Code Signing** - Recommended for production distributions

### Threat Model

See [THREAT_MODEL.md](THREAT_MODEL.md) for a complete threat analysis and mitigations.

### Security Checklist

Before deployment:

```bash
# Run security checks
npm run ci-checks

# Audit dependencies
npm audit --audit-level=moderate

# Run security tests
npm run security-test
```

## 🧪 Testing

### Run Tests

```bash
# All tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Test Coverage

- **Unit Tests**: Database, ML detector, intervention logic
- **Security Tests**: API protection, privacy enforcement
- **Integration Tests**: Event simulation, end-to-end flow

### Manual Testing

Use the event simulator to test the complete flow:

```bash
npm run simulate
```

Expected output:
1. ✅ Service health check
2. 📝 Simulated typing bursts
3. 🔄 Simulated app switches
4. 🧠 Overload detection
5. 🎯 Intervention triggered
6. 💬 EMA response submitted
7. 🔒 Privacy check passed

## 📚 Additional Documentation

### Getting Help
- **[Getting Started](GETTING_STARTED.md)** - Fix "Service Not Running" errors
- **[Troubleshooting Guide](TROUBLESHOOTING.md)** - Common issues & solutions
- **[Quick Reference](QUICK_REFERENCE.md)** - Command cheat sheet

### Guides
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Cloud deployment instructions
- **[PostgreSQL Migration](docs/POSTGRES_MIGRATION.md)** - Switching from SQLite
- **[Calendar Setup](docs/CALENDAR_SETUP.md)** - OAuth configuration

### Reference
- **[Threat Model](THREAT_MODEL.md)** - Security analysis
- **[Contributing Guide](CONTRIBUTING.md)** - Development guidelines
- **[Documentation Index](DOCUMENTATION_INDEX.md)** - All docs navigation

## 🔬 Research

MindPatch is designed as a research prototype for studying:

- Cognitive overload detection in knowledge workers
- Effectiveness of micro-recovery interventions
- Context-aware wellbeing systems
- Privacy-preserving behavioral sensing

### Publications

This system supports research objectives outlined in the [project proposal](docs/PROJECT_PROPOSAL.md):

1. Literature review on cognitive overload and digital wellbeing
2. Privacy-preserving on-device sensing methods
3. Mixed-methods pilot study (EMA + interviews)
4. Quantitative and qualitative analysis
5. MVP implementation and evaluation
6. Reflection and future directions

### Ethics & Pilot Studies

**Important**: This system is for **research purposes only**. Before conducting any pilot study:

1. Obtain institutional ethics approval (IRB/REC)
2. Prepare informed consent forms
3. Explain data collection and privacy measures
4. Provide opt-out mechanisms
5. Ensure secure data storage
6. Follow GDPR/data protection regulations

See [docs/RESEARCH_ETHICS.md](docs/RESEARCH_ETHICS.md) for guidelines.

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for:

- Code of conduct
- Development setup
- Pull request process
- Code style guidelines
- Issue templates

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- Built on research in digital wellbeing and Human-Computer Interaction
- Uses neuroscience-based productivity principles
- Inspired by the Pomodoro Technique and micro-break research
- Shadcn/ui for beautiful React components
- Electron for cross-platform desktop support

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/mindpatch/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/mindpatch/discussions)
- **Email**: research@mindpatch.dev (for research collaborations)

## 🗺 Roadmap

### MVP (Current)
- [x] Desktop app (Windows/macOS/Linux)
- [x] Local event monitoring
- [x] Rule-based overload detection
- [x] 5 intervention types
- [x] EMA feedback system
- [x] Privacy-first architecture

### Future Enhancements
- [ ] Machine learning model training on pilot data
- [ ] Calendar integration (Google, Outlook)
- [ ] Advanced visualization and insights
- [ ] Team/organization deployment
- [ ] Mobile companion app
- [ ] Plugin system for custom interventions

---

**Built with ❤️ for developer wellbeing and cognitive health research**

**Privacy First. Local Always. Wellbeing Focused.**
