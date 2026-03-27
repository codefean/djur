import React, { useState, useEffect } from 'react';

export function WeatherBar({ theme }) {
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState('');

  useEffect(() => {

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=59.3293&longitude=18.0686&current=temperature_2m,precipitation,rain,snowfall,cloud_cover&timezone=Europe/Stockholm'
        );
        const data = await response.json();
        const current = data.current;
        
        let condition = 'Clear';
        if (current.snowfall > 0) condition = 'Snowy';
        else if (current.rain > 0) condition = 'Rainy';
        else if (current.cloud_cover > 70) condition = 'Cloudy';
        else if (current.cloud_cover > 30) condition = 'Partly Cloudy';
        
        setWeather({
          temp: Math.round(current.temperature_2m),
          condition,
          icon: getWeatherIcon(condition),
        });
      } catch (err) {
        console.error('Weather fetch failed:', err);
      }
    };

    // Get time of day
    const updateTime = () => {
      const hour = new Date().getHours();
      let timeOfDay = 'Day';
      let icon = '☀️';
      
      if (hour >= 5 && hour < 9) {
        timeOfDay = 'Dawn';
        icon = '🌅';
      } else if (hour >= 17 && hour < 21) {
        timeOfDay = 'Dusk';
        icon = '🌆';
      } else if (hour >= 21 || hour < 5) {
        timeOfDay = 'Night';
        icon = '🌙';
      }
      
      setTime({ label: timeOfDay, icon });
    };

    fetchWeather();
    updateTime();

    const weatherInterval = setInterval(fetchWeather, 10 * 60 * 1000); // Every 10 min
    const timeInterval = setInterval(updateTime, 60 * 1000); // Every minute

    return () => {
      clearInterval(weatherInterval);
      clearInterval(timeInterval);
    };
  }, []);

  if (!weather || !time) {
    return null;
  }

  return (
    <div style={{
      display: "flex",
      gap: 20,
      fontSize: 10,
      fontFamily: "'DM Mono', monospace",
      color: theme.metaLabel,
      letterSpacing: "0.05em",
      marginBottom: 10,
    }}>
      <div>{weather.icon} {weather.condition.toUpperCase()}</div>
      <div>{time.icon} {time.label.toUpperCase()}</div>
      <div style={{ marginLeft: "auto", color: theme.metaValue }}>{weather.temp}°C</div>
    </div>
  );
}

function getWeatherIcon(condition) {
  const icons = {
    'Rainy': '🌧️',
    'Snowy': '❄️',
    'Clear': '☀️',
    'Cloudy': '☁️',
    'Partly Cloudy': '⛅',
  };
  return icons[condition] || '☁️';
}