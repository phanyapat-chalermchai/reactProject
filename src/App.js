import UserList from './components/UserList';

function App() {
  const handleIncrementClick = () => {
    // dispatch()
  };

  const handleDecementClick = () => {
    // dispatch()
  };

  return (
    <div className="container mx-auto">
      <UserList />
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecementClick}>Decrement</button>
    </div>
  );
}

export default App;
