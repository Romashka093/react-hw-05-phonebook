import React from 'react';
import { Phonebook } from './components/Phonebook/Phonebook';

export function App() {
  return <Phonebook />;
}
// propTypes, и где необходимо, defaultProps
// хранение контактов телефонной книги в localStorage. Используй методы жизненного цикла:
// При добавлении и удалении контакта, контакты сохраняются в локальное хранилище.
// При загрузке приложения, контакты, если таковые есть, считываются из локального хранилища и записываются в состояние.
