import {Routes, Route} from "@solidjs/router";
import { Footer, Nav } from "./components";
import Main from "./Main";

function App() {
  return (
    <div class="2xl:w-[55%] min-h-screen mx-auto flex flex-col justify-between ">
      <div class="w-full">
        <Nav />
        <Routes>
          <Route path={'/'} component={Main}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
