const App = () => {
  const greeting: string = 'Hello from React ^_^';

  console.log('My greeting:', greeting);

  return (
    <div className="p-2 text-center w-full font-semibold cursor-pointer">
      {greeting}
    </div>
  );
};

export default App;
