<div align="center">
  <h1>Expo Kit</h1>
  <p>Production-ready component library for Expo & React Native</p>

  <p>
    <a href="#"><img src="https://img.shields.io/npm/v/@expo-kit/core?style=flat-square" alt="NPM Version" /></a>
    <a href="#"><img src="https://img.shields.io/npm/dm/@expo-kit/core?style=flat-square" alt="Downloads" /></a>
    <a href="#"><img src="https://img.shields.io/github/license/omercsx/expo-kit?style=flat-square" alt="License" /></a>
    <a href="#"><img src="https://img.shields.io/badge/Expo-52+-000000?style=flat-square&logo=expo" alt="Expo" /></a>
  </p>
</div>

---

## ✨ Features

- 🎯 **20+ Production-Ready Components** - Button, Input, Card, Modal, and more
- 📱 **Mobile-First Documentation App** - Interactive playground on iOS & Android
- 🎨 **Fully Customizable Theming** - Light/Dark mode + custom brand colors
- ♿ **Accessible by Default** - WCAG AA compliant
- 🚀 **Optimized Performance** - Smooth 60fps animations with Reanimated
- 📦 **Zero Native Dependencies** - Pure Expo managed workflow
- 💪 **TypeScript First** - Full type safety out of the box
- 🧪 **Well Tested** - Comprehensive test coverage

---

## 📦 Installation

```bash
# Using npm
npm install @expo-kit/core

# Using yarn
yarn add @expo-kit/core

# Using pnpm
pnpm add @expo-kit/core
```

### Peer Dependencies

```bash
expo install react-native-reanimated react-native-gesture-handler expo-linear-gradient
```

---

## 🚀 Quick Start

```tsx
import { ThemeProvider, Button, Card } from "@expo-kit/core";

export default function App() {
	return (
		<ThemeProvider>
			<Card>
				<Card.Header>
					<Text>Welcome to Expo Kit</Text>
				</Card.Header>
				<Card.Body>
					<Button variant='primary' onPress={() => alert("Hello!")}>
						Get Started
					</Button>
				</Card.Body>
			</Card>
		</ThemeProvider>
	);
}
```

---

## 📱 Documentation App

Download the interactive documentation app:

- 🍎 [iOS - Coming Soon](#)
- 🤖 [Android - Coming Soon](#)

---

## 📚 Documentation

Full documentation available at **[expo-kit.dev](#)** (Coming Soon)

- [Getting Started](#)
- [Components](#)
- [Theming](#)
- [Accessibility](#)
- [Contributing](#)

---

## 🗺️ Roadmap

- [x] Phase 1: Foundation & Core Components
- [ ] Phase 2: Advanced Components
- [ ] Phase 3: Documentation App
- [ ] Phase 4: NPM Package
- [ ] Phase 5: Website & Launch

See the [full roadmap](./ROADMAP.md) for details.

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md).

### Development Setup

```bash
# Clone the repository
git clone https://github.com/omercsx/expo-kit.git
cd expo-kit

# Install dependencies
pnpm install

# Start development
pnpm dev
```

---

## 📄 License

MIT © [Omer Cagri Sayir](https://github.com/omercsx)

---

## 🙏 Acknowledgments

Built with:

- [Expo](https://expo.dev)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)

---

<div align="center">
  <p>Made with ❤️ for the React Native community</p>
  <p>
    <a href="https://github.com/omercsx/expo-kit">⭐ Star on GitHub</a> •
    <a href="https://x.com/omercsx">X(🐦) Follow Updates</a>
  </p>
</div>
```
