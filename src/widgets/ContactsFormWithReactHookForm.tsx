const ContactsFormWithReactHookForm = () => {
  return (
    <form
      className="p-4 w-full max-w-160 flex flex-col gap-4 border-1 border-gray-300 rounded-xl sm:w-[80%]"
      method="post"
      action="#"
    >
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 font-semibold">Контактная информация:</legend>
        <label>Имя</label>
        <input
          className="p-3 bg-gray-200 rounded-md outline-none"
          placeholder="Укажите Ваше имя..."
        />

        <label>Фамилия</label>
        <input
          className="p-3 bg-gray-200 rounded-md outline-none"
          placeholder="Укажите Вашу фамилию..."
        />

        <label>Эл. почта</label>
        <input
          className="p-3 bg-gray-200 rounded-md outline-none"
          placeholder="Укажите Вашу электронную почту..."
        />

        <label>Телефон</label>
        <input
          className="p-3 bg-gray-200 rounded-md outline-none"
          placeholder="Укажите Ваш номер телефона..."
        />
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 font-semibold">Основная информация:</legend>

        <label>Дата рождения</label>
        <input
          className="p-3 bg-gray-200 rounded-md outline-none"
          placeholder="Укажите Вашу дату рождения..."
        />

        <label>Укажите Ваш пол:</label>
        <select className="outline-none">
          <option>Мужской</option>
          <option>Женский</option>
        </select>
      </fieldset>

      <button
        className={`p-2 mx-auto w-[50%] bg-blue-200 rounded-md cursor-pointer`}
      >
        Отправить
      </button>
    </form>
  );
};

export default ContactsFormWithReactHookForm;
