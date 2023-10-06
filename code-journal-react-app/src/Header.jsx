import './index.css';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="column-full align-center d-flex">
            <h1 className="white-text">Code Journal</h1>
            <h3>
              <a className="white-text entries-link" href="#">
                Entries
              </a>
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}
