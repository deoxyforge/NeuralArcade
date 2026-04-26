# ⬡ Neural Arcade

A cyberpunk AI-powered game hub with **Chess**, **Snake**, **Tic-Tac-Toe**, and **Checkers** — all featuring intelligent AI opponents. Built with **Electron**, **HTML**, **CSS**, and **JavaScript**.

---

## 🎮 Games

### ♟ Neural Chess
- Full 8×8 chess engine with legal move generation
- **3 AI difficulty levels**: Easy (random+captures), Medium (depth-3 minimax), Hard (depth-4 minimax)
- Alpha-beta pruning for performance
- Piece-square tables for positional evaluation
- Castling, pawn promotion, check detection
- Move log, board evaluation bar, captured pieces display
- Undo move support

### 🐍 Neural Snake
- Classic snake on a 28×28 grid with neon cyberpunk aesthetics
- **Human mode**: WASD or arrow key controls
- **AI Demo mode**: BFS pathfinding + flood-fill safety to avoid self-trapping
- Speed controls (Slow / Normal / Fast)
- High score persistence

### ⊞ Neural Tic-Tac-Toe
- Perfect AI using minimax — unbeatable
- Play as X or O
- Animated wins with highlighted winning line
- Full match history with Win/Loss/Draw tracking
- Stats persistence across sessions

### ⬤ Neural Checkers
- Full 8×8 checkers with authentic rules
- Mandatory captures enforced
- Multi-jump chains
- Kinging (pieces become Kings ♛ on reaching the far end)
- AI uses minimax (depth 3) with positional heuristics
- Move log

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repo
git clone
https://github.com/deoxyforge/NeuralArcade?tab=readme-ov-file
cd NeuralArcade

# Install dependencies
npm install

# Run the app
npm start
```

### Build for Distribution

```bash
# Package for your OS
npm run build

# Output will be in the /dist folder
```

Supports **Windows** (.exe), **macOS** (.dmg), and **Linux** (.AppImage).

---

## 🗂 Project Structure

```
NeuralArcade/
├── main.js           # Electron main process
├── index.html        # Game hub launcher
├── chess.html        # Neural Chess game
├── snake.html        # Neural Snake game
├── tictactoe.html    # Neural Tic-Tac-Toe game
├── checkers.html     # Neural Checkers game
├── package.json      # Project config & scripts
└── README.md
```

---

## 🧠 AI Techniques Used

| Game | Technique | Details |
|------|-----------|---------|
| Chess | Minimax + Alpha-Beta Pruning | Depth 1/3/4 by difficulty. Piece-square tables for positional evaluation. |
| Chess | Material Evaluation | Weighted piece values (P=100, N=320, B=330, R=500, Q=900) |
| Snake | BFS Pathfinding | Shortest path to food with flood-fill safety check |
| Tic-Tac-Toe | Perfect Minimax | Evaluates all game states — never loses |
| Checkers | Minimax + Alpha-Beta | Depth-3 search with material + position heuristics |

---

## 🛠 Tech Stack

- **Electron** — Cross-platform desktop app framework
- **Vanilla JS** — All game logic and AI, zero dependencies
- **HTML/CSS** — Cyberpunk UI with Orbitron + Rajdhani fonts
- **localStorage** — Stats and high score persistence

---

## 📸 Screenshot

> The hub features a dark cyberpunk aesthetic with glowing accents, scanline overlays, and animated card reveals.
<img width="1920" height="1080" alt="Screenshot 2026-04-26 233722" src="https://github.com/user-attachments/assets/bde69eac-b0ee-446d-9460-ebef924b5459" />
<img width="1919" height="1027" alt="Screenshot 2026-04-26 233932" src="https://github.com/user-attachments/assets/3351b8b4-9054-4910-98f2-52542db47e2b" />

<img width="1911" height="1028" alt="Screenshot 2026-04-26 233944" src="https://github.com/user-attachments/assets/c7fcd1f0-4bbc-4b8a-810f-d3fdbfc1f6b4" />
<img width="1919" height="1024" alt="Screenshot 2026-04-26 233859" src="https://github.com/user-attachments/assets/629ca08e-9349-4818-9f8b-6d6c1c677bc0" />

<img width="1919" height="1028" alt="Screenshot 2026-04-26 233831" src="https://github.com/user-attachments/assets/1b0e05c6-c98f-4d71-879c-c35e3a796cdd" />






---

## 🤝 Contributing

Pull requests welcome! Some ideas for improvements:
- Add sound effects
- Online multiplayer via WebSockets
- More games (2048, Minesweeper, Connect Four)
- Better chess AI (transposition tables, iterative deepening)
- Neural network trained on real game data

---

## 📄 License

MIT License — free to use and modify.

---

## 🙏 Credits

- Chess piece unicode symbols
- [Orbitron](https://fonts.google.com/specimen/Orbitron) & [Rajdhani](https://fonts.google.com/specimen/Rajdhani) fonts via Google Fonts
- Chess inspired by https://github.com/Jashanjindal
