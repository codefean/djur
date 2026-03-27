export const ANIMALS = {
  common: [
    // birds
    { name: 'Gråsparv', en: 'House Sparrow', xp: 10, emoji: '🐦' },
    { name: 'Stadsduva', en: 'Feral Pigeon', xp: 8, emoji: '🕊️' },
    { name: 'Gråtrut', en: 'Herring Gull', xp: 12, emoji: '🦅' },
    { name: 'Gräsand', en: 'Mallard', xp: 10, emoji: '🦆' },
    { name: 'Knölsvan', en: 'Mute Swan', xp: 18, emoji: '🦢' },
    { name: 'Blåmes', en: 'Eurasian Blue Tit', xp: 12, emoji: '🐦' },
    { name: 'Talgoxe', en: 'Great Tit', xp: 12, emoji: '🐦' },
    // mammals
    { name: 'Ekorre', en: 'Red Squirrel', xp: 15, emoji: '🐿️' },
    // amphibians (common in Sweden)
    { name: 'Vanlig groda', en: 'Common Frog (Rana temporaria)', xp: 12, emoji: '🐸' },
    { name: 'Åkergroda', en: 'Moor Frog (Rana arvalis)', xp: 14, emoji: '🐸' },
    { name: 'Vanlig padda', en: 'Common Toad (Bufo bufo)', xp: 15, emoji: '🐸' },
    // insects / small
    { name: 'Nässelfjäril', en: 'Small Tortoiseshell Butterfly', xp: 8, emoji: '🦋' },
    { name: 'Skogsmyra', en: 'Wood Ant', xp: 5, emoji: '🐜' },
  ],
  uncommon: [
    // mammals
    { name: 'Rådjur', en: 'Roe Deer', xp: 50, emoji: '🦌' },
    { name: 'Fälthare', en: 'European Hare', xp: 45, emoji: '🐰' },
    { name: 'Igelkott', en: 'European Hedgehog', xp: 55, emoji: '🦔' },
    { name: 'Grävling', en: 'European Badger', xp: 65, emoji: '🦡' },
    // birds
    { name: 'Större hackspett', en: 'Great Spotted Woodpecker', xp: 50, emoji: '🪶' },
    { name: 'Kattuggla', en: 'Tawny Owl', xp: 65, emoji: '🦉' },
    // reptiles (actual Stockholm species)
    { name: 'Snok', en: 'Grass Snake (Natrix natrix)', xp: 60, emoji: '🐍' },
    { name: 'Skogsödla', en: 'Viviparous Lizard (Zootoca vivipara)', xp: 55, emoji: '🦎' },
    // amphibians
    { name: 'Mindre vattensalamander', en: 'Smooth Newt (Lissotriton vulgaris)', xp: 65, emoji: '🦎' },
    // fish (very common locally)
    { name: 'Abborre', en: 'European Perch', xp: 40, emoji: '🐟' },
    { name: 'Mört', en: 'Roach', xp: 35, emoji: '🐟' },
  ],
  rare: [
    // mammals
    { name: 'Räv', en: 'Red Fox', xp: 120, emoji: '🦊' },
    { name: 'Vildsvin', en: 'Wild Boar', xp: 130, emoji: '🐗' },
    { name: 'Älg', en: 'Moose', xp: 150, emoji: '🦌' },
    { name: 'Utter', en: 'European Otter', xp: 180, emoji: '🦦' },
    // birds
    { name: 'Havsörn', en: 'White-tailed Eagle', xp: 160, emoji: '🦅' },
    // reptiles (rare but present)
    { name: 'Huggorm', en: 'European Adder (Vipera berus)', xp: 140, emoji: '🐍' },
    // amphibians (protected, harder to find)
    { name: 'Större vattensalamander', en: 'Great Crested Newt (Triturus cristatus)', xp: 180, emoji: '🦎' },
    // fish
    { name: 'Gädda', en: 'Northern Pike', xp: 100, emoji: '🐟' },
    { name: 'Öring', en: 'Brown Trout', xp: 120, emoji: '🐟' },
  ],
  legendary: [
    // top predators (very rare near Stockholm)
    { name: 'Lo', en: 'Eurasian Lynx', xp: 300, emoji: '🐈' },
    { name: 'Varg', en: 'Gray Wolf', xp: 350, emoji: '🐺' },
    { name: 'Järv', en: 'Wolverine', xp: 320, emoji: '🦡' },
    { name: 'Brunbjörn', en: 'Brown Bear', xp: 400, emoji: '🐻' },
    // special sightings
    { name: 'Kungsörn', en: 'Golden Eagle', xp: 280, emoji: '🦅' },
    { name: 'Gråsäl', en: 'Grey Seal', xp: 250, emoji: '🦭' },
    // niche rare encounters
    { name: 'Större brunfladdermus', en: 'Brown Long-eared Bat', xp: 220, emoji: '🦇' },
  ]
};

export const TOTAL_ANIMALS = Object.values(ANIMALS).flat().length;
export const TOTAL_POSSIBLE_XP = Object.values(ANIMALS).flat().reduce((sum, animal) => sum + animal.xp, 0);

export const MILESTONES = [
  { animalsRequired: 5, title: 'First Steps', reward: '🎖️' },
  { animalsRequired: 10, title: 'Animal Friend', reward: '🏅' },
  { animalsRequired: 15, title: 'Nature Lover', reward: '⭐' },
  { animalsRequired: 25, title: 'Forest Walker', reward: '🌟' },
  { animalsRequired: 35, title: 'Wildlife Expert', reward: '💫' },
  { animalsRequired: 45, title: 'Nature Master', reward: '✨' },
  { animalsRequired: TOTAL_ANIMALS, title: 'Wilderness Legend', reward: '👑' },
];
