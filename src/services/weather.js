// Weather service using Open-Meteo API (free, no API key required)

const STOCKHOLM_LAT = 59.3293;
const STOCKHOLM_LON = 18.0686;

export async function getCurrentWeather() {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${STOCKHOLM_LAT}&longitude=${STOCKHOLM_LON}&current=temperature_2m,relative_humidity_2m,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&timezone=Europe/Stockholm`
    );
    
    const data = await response.json();
    const current = data.current;
    
    return {
      temperature: current.temperature_2m,
      humidity: current.relative_humidity_2m,
      precipitation: current.precipitation,
      isRaining: current.rain > 0 || current.showers > 0,
      isSnowing: current.snowfall > 0,
      cloudCover: current.cloud_cover,
      windSpeed: current.wind_speed_10m,
      timestamp: current.time,
    };
  } catch (error) {
    console.error('Failed to fetch weather:', error);
    return null;
  }
}

export function getTimeOfDay() {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 9) return 'dawn';
  if (hour >= 9 && hour < 17) return 'day';
  if (hour >= 17 && hour < 21) return 'dusk';
  return 'night';
}

export function getSeason() {
  const month = new Date().getMonth() + 1; // 1-12
  
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
  return 'winter';
}

export function getWeatherCondition(weather) {
  if (!weather) return 'unknown';
  
  if (weather.isSnowing) return 'snowing';
  if (weather.isRaining) return 'raining';
  if (weather.cloudCover > 70) return 'cloudy';
  if (weather.cloudCover < 30) return 'clear';
  return 'partly_cloudy';
}
