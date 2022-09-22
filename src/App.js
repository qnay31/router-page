import "./App.css";
import { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function Home() {
  return <h2>Halaman Beranda</h2>;
}

function UserList() {
  return (
    <div>
      <h2>Daftar User</h2>
      <ul>
        <li>
          <Link to="/users/hilman">Hilman</Link>
        </li>

        <li>
          <Link to="/users/saman">Saman</Link>
        </li>
      </ul>
    </div>
  );
}

function DetailView({ match }) {
  return <h2>Ini halaman {match.params.name} </h2>;
}

function NoMatch() {
  return (
    <main style={{ padding: "1rem" }}>
      <p>There's nothing here!</p>
    </main>
  );
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">user</Link>
            </li>
          </nav>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="users" element={<UserList />}>
              <Route path=":name" element={<DetailView />}></Route>
            </Route>
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
