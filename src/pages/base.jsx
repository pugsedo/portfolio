import NavBar from "./components/navbar";

function Base(props) {
  return (
    <div className="app">
      <NavBar/>
      { props.children }
    </div>
  );
}

export default Base;
