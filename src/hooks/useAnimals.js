import { useState, useEffect } from 'react';
 
export function useAnimals() {
  const [animals, setAnimals] = useState({ common: [], uncommon: [], rare: [], legendary: [] });
  const [source, setSource] = useState('loading');
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const loadAnimals = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}animals.csv`);
        if (!response.ok) throw new Error('CSV not found');
        
        const text = await response.text();
        const lines = text.trim().split('\n');
        const headers = lines[0].split(',');
        
        const nameIdx = headers.indexOf('name');
        const englishIdx = headers.indexOf('english');
        const emojiIdx = headers.indexOf('emoji');
        const xpIdx = headers.indexOf('xp');
        const rarityIdx = headers.indexOf('rarity');
        const descriptionIdx = headers.indexOf('description');
        const categoryIdx = headers.indexOf('category');
        
        const parsed = { common: [], uncommon: [], rare: [], legendary: [] };
        
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line) continue;
          
          const values = parseCSVLine(line);
          
          const animal = {
            name: values[nameIdx],
            en: values[englishIdx],
            emoji: values[emojiIdx],
            xp: parseInt(values[xpIdx]),
            rarity: values[rarityIdx],
            description: descriptionIdx >= 0 ? cleanQuotes(values[descriptionIdx]) : '',
            category: categoryIdx >= 0 ? values[categoryIdx] : '',
          };
          
          if (parsed[animal.rarity]) {
            parsed[animal.rarity].push(animal);
          }
        }
        
        setAnimals(parsed);
        setSource('csv');
      } catch (err) {
        console.error('Failed to load CSV:', err);
        setError(err.message);
        setSource('error');
        setAnimals({ common: [], uncommon: [], rare: [], legendary: [] });
      }
    };
 
    loadAnimals();
  }, []);
 
  const totalAnimals = Object.values(animals).flat().length;
  
  return { animals, totalAnimals, source, error };
}
 
function parseCSVLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  values.push(current);
  
  return values;
}
 
function cleanQuotes(value) {
  if (!value) return '';
  return value.replace(/^["']|["']$/g, '').trim();
}