import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read(); // ожидаем результат чтения
      const jsonData = await json(data); // ожидаем результат парсинга
      return JSON.parse(jsonData); // преобразуем строку JSON в объект
    } catch (error) {
      console.error('Ошибка при загрузке:', error);
      throw error; // перекидываем ошибку дальше
    }
  }
}