import { useState } from 'react';

const ContactsFormWithUseState = () => {
  const [name, setName] = useState<string>('');
  const [sername, setSername] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [isFormDataLoading, setIsFormDataLoading] = useState<boolean>(false);

  // Проверка корректности имени и фамилии пользователя:
  // ---------------------------------------------------------------
  const nameAndSernRegExp = /^(?=.*[A-Za-zА-Яа-яЁё])[A-Za-zА-Яа-яЁё]{3,10}$/;

  const isNameCorrect: boolean = nameAndSernRegExp.test(name);
  const isSernCorrect: boolean = nameAndSernRegExp.test(sername);

  // Проверка корректности эл. почты:
  // ---------------------------------------------------------------
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isEmailCorrect: boolean = emailRegExp.test(email);

  // Отправка формы:
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isNameCorrect && isSernCorrect && isEmailCorrect) {
      setIsFormDataLoading(true);

      const forDataLoadTimer: number = 2000;

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve('');
          setIsFormDataLoading(false);
        }, forDataLoadTimer);
      });

      console.log('Форма отправлена! ^_^');

      setName('');
      setSername('');
      setEmail('');
    }
  };

  return (
    <form
      className="p-4 w-full max-w-160 flex flex-col gap-4 border-1 border-gray-300 rounded-xl sm:w-[80%]"
      method="post"
      action="#"
      onSubmit={handleFormSubmit}
    >
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 font-semibold">Контактная информация:</legend>
        <label>Имя</label>
        <input
          className="p-3 bg-gray-200 rounded-md outline-none"
          placeholder="Укажите Ваше имя..."
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
        {!isNameCorrect && name !== '' ? (
          <span className="text-sm text-orange-400 leading-4">
            Минимальная длина имени пользователя - 3 символа. Допускаются только
            латинские буквы / кириллица
          </span>
        ) : null}

        <label>Фамилия</label>
        <input
          className="p-3 bg-gray-200 rounded-md outline-none"
          placeholder="Укажите Вашу фамилию..."
          value={sername}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSername(event.target.value);
          }}
        />
        {!isSernCorrect && sername !== '' ? (
          <span className="text-sm text-orange-400 leading-4">
            Минимальная длина фамилии пользователя - 3 символа. Допускаются
            только латинские буквы / кириллица
          </span>
        ) : null}

        <label>Эл. почта</label>
        <input
          className="p-3 bg-gray-200 rounded-md outline-none"
          placeholder="Укажите Вашу электронную почту..."
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
          }}
        />
        {!isEmailCorrect && email !== '' ? (
          <span className="text-sm text-orange-400 leading-4">
            Пример корректной эл. почты:{' '}
            <span className="font-semibold">example@mail.ru</span>
          </span>
        ) : null}
      </fieldset>

      <button
        className={`p-2 mx-auto w-[50%] ${
          isNameCorrect && isSernCorrect && isEmailCorrect
            ? 'bg-blue-200'
            : 'bg-gray-200'
        } rounded-md cursor-pointer`}
      >
        {isFormDataLoading ? '...Отправка данных...' : 'Отправить'}
      </button>
    </form>
  );
};

export default ContactsFormWithUseState;
