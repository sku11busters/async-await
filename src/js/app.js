import GameSavingLoader from './GameSavingLoader.js';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving); 
  } catch (error) {
    console.error('Ошибка при загрузке сохранения игры:', error);
  }
})();