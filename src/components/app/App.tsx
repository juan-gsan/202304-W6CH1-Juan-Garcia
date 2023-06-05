import { Actions } from "../actions/Actions";
import { Info } from "../info/Info";
import { Keyboard } from "../keyboard/Keyboard";

function App() {
  return (
    <>
      <div className="container">
        <Info></Info>
        <main className="phone">
          <Keyboard></Keyboard>
          <Actions></Actions>
        </main>
      </div>
    </>
  );
}

export default App;
