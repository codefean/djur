# 🦌 Djur Guide

A gamified wildlife spotting app for Stockholm with **real-time environmental conditions** that affect animal spawn probabilities! Track and collect sightings of animals around Stockholm based on weather, time of day, and season.

## ✨ New Features

### 🌦️ Dynamic Probability System
- **Real-time weather data** from Open-Meteo API (free, no API key needed)
- **Time-of-day tracking** (Dawn, Day, Dusk, Night)
- **Seasonal awareness** (Spring, Summer, Autumn, Winter)
- **Smart sorting** - Animals most likely to appear show up first!

### 🎯 Probability-Based Mechanics
- 🐸 **Amphibians spawn more in rain** - Frogs, toads, and newts love wet weather
- 🦉 **Nocturnal animals appear at night** - Owls, bats, badgers, foxes
- 🦎 **Reptiles love sunny days** - Snakes and lizards need warmth
- 🦌 **Dawn/dusk creatures** - Deer, moose, hares most active at twilight
- ❄️ **Winter specialists** - Wolverines, lynx, wolves thrive in snow
- 🌸 **Seasonal animals** - Butterflies in summer, eagles in winter

### 📊 Condition Display
See current conditions at a glance:
- Current weather (sunny, rainy, snowy, cloudy)
- Time of day with icon
- Current season
- Temperature display

## Original Features

- 📝 **Collection-Based Gameplay** - Discover unique animals, not grinding repeats
- 🏆 **Milestone System** - Unlock titles from "Nybörjare" to "Vildmarkslegend"
- 🗺️ **Location & Time Tracking** - Record when and where you spotted each animal
- 📊 **Progress Tracking** - Category completion, total XP, and achievement badges
- 💾 **Persistent Storage** - Your discoveries are saved using localStorage

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:
```bash
cd djur-guide
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to the URL shown (usually http://localhost:5173)

### Build for Production

```bash
npm run build
```

The production files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
djur-guide/
├── src/
│   ├── data/
│   │   └── animals.js          # Animal data and game constants
│   ├── services/
│   │   └── weather.js          # Weather API integration
│   ├── utils/
│   │   ├── storage.js          # Storage utility (localStorage wrapper)
│   │   └── probability.js      # Probability calculation engine
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles & Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **localStorage** - Data persistence
- **Open-Meteo API** - Free weather data

## How Probabilities Work

Each animal has:
- **Base probability** based on rarity (Common: 60%, Uncommon: 35%, Rare: 15%, Legendary: 5%)
- **Weather bonuses** (e.g., frogs get +40% in rain)
- **Time bonuses** (e.g., owls get +40% at night)
- **Season bonuses** (e.g., bears get +40% in autumn)

The system calculates the total probability and sorts animals accordingly. Toggle the probability display to see percentages!

### Example Scenarios

**🌧️ Rainy Spring Evening:**
- Frogs and toads: ~90% chance
- Owls: ~80% chance
- Butterflies: ~10% chance (hate rain!)

**☀️ Sunny Summer Day:**
- Snakes: ~85% chance
- Butterflies: ~90% chance
- Bats: ~5% chance (nocturnal)

**❄️ Snowy Winter Night:**
- Wolves: ~75% chance
- Lynx: ~80% chance
- Reptiles: ~0% chance (hibernating)

## Game Mechanics

### Animal Categories
- 🟢 **Vanlig (Common)** - 5-18 XP
- 🟡 **Ovanlig (Uncommon)** - 35-65 XP
- 🔴 **Sällsynt (Rare)** - 100-180 XP
- ⭐ **Legendarisk (Legendary)** - 220-400 XP

### Milestones
- 🎖️ 5 animals - Första Stegen
- 🏅 10 animals - Djurvän
- ⭐ 15 animals - Naturälskare
- 🌟 25 animals - Skogsvandrare
- 💫 35 animals - Djurexpert
- ✨ 45 animals - Naturmästare
- 👑 All animals - Vildmarkslegend

## Future Development Ideas

- 📸 Photo upload for sightings
- 🗺️ Map integration showing sighting locations
- 👥 User authentication and profiles
- 🌐 Backend database for multi-device sync
- 📱 Push notifications for optimal conditions
- 🏅 Daily challenges ("Spot 3 amphibians today!")
- 📊 Statistics and analytics
- 🌍 Expand to other cities/regions

## Weather API

This app uses the [Open-Meteo API](https://open-meteo.com/) which is:
- ✅ Free
- ✅ No API key required
- ✅ No rate limits for reasonable use
- ✅ High-quality weather data

The weather updates every 10 minutes, and time-of-day updates every minute.

## License

MIT

## Contributing

Feel free to fork and customize for your own city or region! The probability system is easily extensible for new animals and conditions.

## Credits

Weather data provided by [Open-Meteo.com](https://open-meteo.com/)
