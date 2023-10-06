export default function View() {
  return (
    <div className="container" data-view="entries">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <a id="formLink" className="white-text form-link" href="#">
              New
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul" id="entryUl">
            <li data-entry-point="1">
              <row className="row">
                <div className="column-half">
                  <img
                    src="https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2-1024x684.jpg"
                    className="input-b-radius form-image"
                  />
                </div>
              </row>
              <row className="row">
                <div className="column-half">
                  <div className="row">
                    <div className="column-full d-flex justify-between align-center">
                      <h3>A newer image</h3>
                      <i className="fa-solid fa-pencil"></i>
                    </div>
                  </div>
                  <p>A very nice lake!</p>
                </div>
              </row>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
