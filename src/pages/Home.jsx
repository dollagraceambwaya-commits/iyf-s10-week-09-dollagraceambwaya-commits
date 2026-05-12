import CounterWithEffect from "../components/CounterWithEffect";
import UserProfile from "../components/UserProfile";
import WindowSize from "../components/WindowSize";
import ThemeToggle from "../components/ThemeToggle";
import useToggle from "../hooks/useToggle";

import { Modal, Button } from "../components/shared";

function Home() {
  const [open, { toggle, setFalse }] = useToggle(false);
  return (
    <>
      <div>
        <Button onClick={toggle}>Open Modal</Button>
        {open && (
          <Modal isOpen={open} onClose={setFalse}>
            <h2 className="text-lg font-bold">Welcome!</h2>
          </Modal>
        )}
        <h1>React Advanced</h1>
        <CounterWithEffect />
        <UserProfile userId={1} />
        <WindowSize />
        <ThemeToggle />
      </div>

      <div className="p-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold text-blue-600">
          Tailwind is working!
        </h2>
      </div>
    </>
  );
}

export default Home;
