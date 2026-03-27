// Animal spawn probability system based on conditions

export const ANIMAL_CONDITIONS = {
  // AMPHIBIANS - Love rain and moisture
  'Vanlig groda': {
    preferredWeather: ['raining', 'cloudy'],
    preferredTime: ['dawn', 'dusk', 'night'],
    preferredSeason: ['spring', 'summer'],
    weatherBonus: { raining: 40, cloudy: 20 },
    seasonBonus: { spring: 30, summer: 20 },
    timeBonus: { dawn: 20, dusk: 20, night: 15 },
  },
  'Åkergroda': {
    preferredWeather: ['raining', 'cloudy'],
    preferredTime: ['dawn', 'dusk'],
    preferredSeason: ['spring', 'summer'],
    weatherBonus: { raining: 40, cloudy: 20 },
    seasonBonus: { spring: 35, summer: 15 },
    timeBonus: { dawn: 25, dusk: 25 },
  },
  'Vanlig padda': {
    preferredWeather: ['raining', 'cloudy'],
    preferredTime: ['dusk', 'night'],
    preferredSeason: ['spring', 'summer', 'autumn'],
    weatherBonus: { raining: 35, cloudy: 20 },
    seasonBonus: { spring: 25, summer: 20, autumn: 15 },
    timeBonus: { dusk: 30, night: 25 },
  },
  'Mindre vattensalamander': {
    preferredWeather: ['raining', 'cloudy'],
    preferredTime: ['dusk', 'night'],
    preferredSeason: ['spring', 'summer'],
    weatherBonus: { raining: 45, cloudy: 25 },
    seasonBonus: { spring: 40, summer: 20 },
    timeBonus: { dusk: 20, night: 30 },
  },
  'Större vattensalamander': {
    preferredWeather: ['raining', 'cloudy'],
    preferredTime: ['night'],
    preferredSeason: ['spring', 'summer'],
    weatherBonus: { raining: 50, cloudy: 25 },
    seasonBonus: { spring: 45, summer: 15 },
    timeBonus: { night: 40 },
  },

  // NOCTURNAL ANIMALS
  'Kattuggla': {
    preferredWeather: ['clear', 'partly_cloudy'],
    preferredTime: ['dusk', 'night'],
    preferredSeason: ['autumn', 'winter', 'spring'],
    weatherBonus: { clear: 25, partly_cloudy: 15 },
    seasonBonus: { autumn: 20, winter: 25, spring: 20 },
    timeBonus: { dusk: 35, night: 40 },
  },
  'Större brunfladdermus': {
    preferredWeather: ['clear', 'partly_cloudy'],
    preferredTime: ['dusk', 'night'],
    preferredSeason: ['summer', 'autumn'],
    weatherBonus: { clear: 30, partly_cloudy: 20 },
    seasonBonus: { summer: 35, autumn: 20 },
    timeBonus: { dusk: 40, night: 35 },
  },
  'Igelkott': {
    preferredWeather: ['clear', 'partly_cloudy', 'cloudy'],
    preferredTime: ['dusk', 'night'],
    preferredSeason: ['spring', 'summer', 'autumn'],
    weatherBonus: { clear: 20, partly_cloudy: 20, cloudy: 15 },
    seasonBonus: { spring: 25, summer: 30, autumn: 20 },
    timeBonus: { dusk: 30, night: 25 },
  },
  'Grävling': {
    preferredWeather: ['clear', 'partly_cloudy'],
    preferredTime: ['dusk', 'night'],
    preferredSeason: ['spring', 'summer', 'autumn'],
    weatherBonus: { clear: 20, partly_cloudy: 20 },
    seasonBonus: { spring: 25, summer: 25, autumn: 20 },
    timeBonus: { dusk: 35, night: 30 },
  },

  // DAWN/DUSK ACTIVE
  'Rådjur': {
    preferredWeather: ['clear', 'partly_cloudy', 'cloudy'],
    preferredTime: ['dawn', 'dusk'],
    preferredSeason: ['spring', 'summer', 'autumn'],
    weatherBonus: { clear: 20, partly_cloudy: 20, cloudy: 15 },
    seasonBonus: { spring: 25, summer: 25, autumn: 25 },
    timeBonus: { dawn: 35, dusk: 35 },
  },
  'Älg': {
    preferredWeather: ['clear', 'partly_cloudy', 'cloudy'],
    preferredTime: ['dawn', 'dusk'],
    preferredSeason: ['autumn', 'winter'],
    weatherBonus: { clear: 20, partly_cloudy: 20, cloudy: 15 },
    seasonBonus: { autumn: 30, winter: 25 },
    timeBonus: { dawn: 30, dusk: 30 },
  },
  'Fälthare': {
    preferredWeather: ['clear', 'partly_cloudy'],
    preferredTime: ['dawn', 'dusk', 'night'],
    preferredSeason: ['spring', 'summer', 'autumn'],
    weatherBonus: { clear: 25, partly_cloudy: 20 },
    seasonBonus: { spring: 25, summer: 25, autumn: 20 },
    timeBonus: { dawn: 30, dusk: 30, night: 20 },
  },

  // PREDATORS (more active at night/dusk)
  'Räv': {
    preferredWeather: ['clear', 'partly_cloudy', 'cloudy'],
    preferredTime: ['dusk', 'night'],
    preferredSeason: ['autumn', 'winter', 'spring'],
    weatherBonus: { clear: 20, partly_cloudy: 20, cloudy: 15 },
    seasonBonus: { autumn: 25, winter: 30, spring: 20 },
    timeBonus: { dusk: 30, night: 35 },
  },
  'Varg': {
    preferredWeather: ['clear', 'partly_cloudy', 'cloudy', 'snowing'],
    preferredTime: ['dusk', 'night'],
    preferredSeason: ['winter', 'autumn'],
    weatherBonus: { clear: 15, partly_cloudy: 15, cloudy: 15, snowing: 20 },
    seasonBonus: { winter: 35, autumn: 25 },
    timeBonus: { dusk: 25, night: 35 },
  },
  'Lo': {
    preferredWeather: ['clear', 'partly_cloudy', 'cloudy', 'snowing'],
    preferredTime: ['dusk', 'night'],
    preferredSeason: ['winter', 'autumn'],
    weatherBonus: { clear: 15, partly_cloudy: 15, cloudy: 15, snowing: 25 },
    seasonBonus: { winter: 40, autumn: 30 },
    timeBonus: { dusk: 30, night: 35 },
  },
  'Brunbjörn': {
    preferredWeather: ['clear', 'partly_cloudy'],
    preferredTime: ['dawn', 'dusk'],
    preferredSeason: ['spring', 'summer', 'autumn'],
    weatherBonus: { clear: 20, partly_cloudy: 20 },
    seasonBonus: { spring: 30, summer: 35, autumn: 40 },
    timeBonus: { dawn: 25, dusk: 25 },
  },

  // BIRDS - Generally diurnal, some prefer different weather
  'Gråsparv': {
    preferredWeather: ['clear', 'partly_cloudy'],
    preferredTime: ['dawn', 'day'],
    preferredSeason: ['spring', 'summer', 'autumn'],
    weatherBonus: { clear: 20, partly_cloudy: 15 },
    seasonBonus: { spring: 20, summer: 25, autumn: 15 },
    timeBonus: { dawn: 25, day: 30 },
  },
  'Större hackspett': {
    preferredWeather: ['clear', 'partly_cloudy'],
    preferredTime: ['dawn', 'day'],
    preferredSeason: ['spring', 'summer', 'autumn'],
    weatherBonus: { clear: 25, partly_cloudy: 20 },
    seasonBonus: { spring: 30, summer: 25, autumn: 20 },
    timeBonus: { dawn: 30, day: 25 },
  },
  'Havsörn': {
    preferredWeather: ['clear', 'partly_cloudy'],
    preferredTime: ['day'],
    preferredSeason: ['winter', 'spring'],
    weatherBonus: { clear: 30, partly_cloudy: 20 },
    seasonBonus: { winter: 35, spring: 30 },
    timeBonus: { day: 35 },
  },
  'Kungsörn': {
    preferredWeather: ['clear', 'partly_cloudy'],
    preferredTime: ['day'],
    preferredSeason: ['autumn', 'winter', 'spring'],
    weatherBonus: { clear: 35, partly_cloudy: 25 },
    seasonBonus: { autumn: 25, winter: 30, spring: 25 },
    timeBonus: { day: 40 },
  },

  // REPTILES - Love warm, sunny weather
  'Snok': {
    preferredWeather: ['clear', 'partly_cloudy'],
    preferredTime: ['day'],
    preferredSeason: ['summer', 'spring'],
    weatherBonus: { clear: 40, partly_cloudy: 25 },
    seasonBonus: { summer: 40, spring: 30 },
    timeBonus: { day: 35 },
  },
  'Huggorm': {
    preferredWeather: ['clear', 'partly_cloudy'],
    preferredTime: ['day'],
    preferredSeason: ['spring', 'summer'],
    weatherBonus: { clear: 40, partly_cloudy: 25 },
    seasonBonus: { spring: 35, summer: 35 },
    timeBonus: { day: 35 },
  },
  'Skogsödla': {
    preferredWeather: ['clear', 'partly_cloudy'],
    preferredTime: ['day'],
    preferredSeason: ['spring', 'summer'],
    weatherBonus: { clear: 35, partly_cloudy: 25 },
    seasonBonus: { spring: 30, summer: 35 },
    timeBonus: { day: 30 },
  },

  // INSECTS - Love warmth and flowers
  'Nässelfjäril': {
    preferredWeather: ['clear', 'partly_cloudy'],
    preferredTime: ['day'],
    preferredSeason: ['spring', 'summer', 'autumn'],
    weatherBonus: { clear: 40, partly_cloudy: 25 },
    seasonBonus: { spring: 30, summer: 40, autumn: 20 },
    timeBonus: { day: 40 },
  },

  // WATER ANIMALS
  'Utter': {
    preferredWeather: ['clear', 'partly_cloudy', 'cloudy'],
    preferredTime: ['dawn', 'dusk'],
    preferredSeason: ['spring', 'summer', 'autumn'],
    weatherBonus: { clear: 20, partly_cloudy: 20, cloudy: 15 },
    seasonBonus: { spring: 25, summer: 30, autumn: 25 },
    timeBonus: { dawn: 30, dusk: 30 },
  },
  'Gråsäl': {
    preferredWeather: ['clear', 'partly_cloudy'],
    preferredTime: ['day'],
    preferredSeason: ['summer', 'autumn'],
    weatherBonus: { clear: 25, partly_cloudy: 20 },
    seasonBonus: { summer: 35, autumn: 30 },
    timeBonus: { day: 30 },
  },

  // WINTER SPECIALISTS
  'Järv': {
    preferredWeather: ['snowing', 'cloudy', 'clear'],
    preferredTime: ['dawn', 'dusk'],
    preferredSeason: ['winter'],
    weatherBonus: { snowing: 35, cloudy: 20, clear: 15 },
    seasonBonus: { winter: 50 },
    timeBonus: { dawn: 25, dusk: 25 },
  },
};

// Base probability for each rarity
const BASE_PROBABILITY = {
  common: 60,
  uncommon: 35,
  rare: 15,
  legendary: 5,
};

export function calculateAnimalProbability(animalName, rarity, weather, timeOfDay, season) {
  let probability = BASE_PROBABILITY[rarity] || 10;
  
  const conditions = ANIMAL_CONDITIONS[animalName];
  
  if (!conditions) {
    return probability; // Return base if no conditions defined
  }

  // Weather bonus
  if (weather && conditions.weatherBonus && conditions.weatherBonus[weather]) {
    probability += conditions.weatherBonus[weather];
  }

  // Time bonus
  if (timeOfDay && conditions.timeBonus && conditions.timeBonus[timeOfDay]) {
    probability += conditions.timeBonus[timeOfDay];
  }

  // Season bonus
  if (season && conditions.seasonBonus && conditions.seasonBonus[season]) {
    probability += conditions.seasonBonus[season];
  }

  // Cap at 95% (nothing is guaranteed)
  return Math.min(probability, 95);
}

export function getConditionIcon(condition) {
  const icons = {
    // Weather
    raining: '🌧️',
    snowing: '❄️',
    clear: '☀️',
    cloudy: '☁️',
    partly_cloudy: '⛅',
    
    // Time
    dawn: '🌅',
    day: '☀️',
    dusk: '🌆',
    night: '🌙',
    
    // Season
    spring: '🌸',
    summer: '☀️',
    autumn: '🍂',
    winter: '❄️',
  };
  
  return icons[condition] || '❓';
}

export function getConditionLabel(condition) {
  const labels = {
    // Weather
    raining: 'Rainy',
    snowing: 'Snowy',
    clear: 'Clear',
    cloudy: 'Cloudy',
    partly_cloudy: 'Partly Cloudy',
    
    // Time
    dawn: 'Dawn',
    day: 'Day',
    dusk: 'Dusk',
    night: 'Night',
    
    // Season
    spring: 'Spring',
    summer: 'Summer',
    autumn: 'Autumn',
    winter: 'Winter',
  };
  
  return labels[condition] || condition;
}
