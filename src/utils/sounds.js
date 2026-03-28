const getBasePath = () => {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) {
    return import.meta.env.BASE_URL;
  }
  return '/';
};

const basePath = getBasePath();

export const sounds = {
  click: `${basePath}sounds/click.mp3`,
  discover: `${basePath}sounds/discover.mp3`,
  record: `${basePath}sounds/record.mp3`,
};

const audioCache = {};
let audioContext = null;
let audioUnlocked = false;

// Initialize audio context on first user interaction
const unlockAudio = () => {
  if (audioUnlocked) return;
  
  // Create AudioContext if it doesn't exist
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  
  // Resume context if suspended
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  
  audioUnlocked = true;
  console.log('Audio unlocked - sounds ready to play');
};

// Add event listeners to unlock audio on any user interaction
if (typeof window !== 'undefined') {
  ['click', 'touchstart', 'keydown'].forEach(event => {
    document.addEventListener(event, unlockAudio, { once: true });
  });
}

export const playSound = (soundType, volume = 0.3) => {
  try {
    // Ensure audio is unlocked first
    unlockAudio();
    
    if (!audioCache[soundType]) {
      audioCache[soundType] = new Audio(sounds[soundType]);
      audioCache[soundType].volume = volume;
      
      audioCache[soundType].addEventListener('error', (e) => {
        console.error(`❌ Could not load sound: ${sounds[soundType]}`);
        console.error('Check that the file exists in public/sounds/');
        console.error('Full path attempted:', audioCache[soundType].src);
      });
      
      audioCache[soundType].addEventListener('canplaythrough', () => {
        console.log(`✅ Sound loaded successfully: ${soundType}`);
      }, { once: true });
    }
    
    // Reset to start
    audioCache[soundType].currentTime = 0;
    
    // Attempt to play
    const playPromise = audioCache[soundType].play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log(`🔊 Playing sound: ${soundType}`);
        })
        .catch(err => {
          if (err.name === 'NotAllowedError') {
            console.warn('⚠️ Sound blocked by browser - user interaction required first');
          } else if (err.name === 'NotSupportedError') {
            console.error('❌ Sound format not supported:', sounds[soundType]);
          } else {
            console.error('❌ Sound play error:', err.message);
          }
        });
    }
  } catch (err) {
    console.error('❌ Sound error:', err);
  }
};

// Preload sounds - but don't try to play them (causes autoplay issues)
export const preloadSounds = () => {
  console.log('🔄 Preloading sounds from:', sounds);
  
  Object.keys(sounds).forEach(soundType => {
    try {
      const audio = new Audio(sounds[soundType]);
      audio.volume = 0.3;
      audio.preload = 'auto'; // Tell browser to preload
      
      audio.addEventListener('canplaythrough', () => {
        console.log(`✅ Preloaded: ${soundType}`);
      }, { once: true });
      
      audio.addEventListener('error', (e) => {
        console.error(`❌ Failed to preload ${soundType}:`, sounds[soundType]);
      });
      
      audioCache[soundType] = audio;
    } catch (err) {
      console.error(`❌ Error preloading ${soundType}:`, err);
    }
  });
  
  console.log('💡 Tip: Click anywhere on the page to unlock audio');
};