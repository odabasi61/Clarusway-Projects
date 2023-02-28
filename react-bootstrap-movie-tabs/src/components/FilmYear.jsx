function FilmYear({ data, show, setShow }) {
  // console.log(data);
  return (
    <div className="col-12 col-lg-1">
      <div
        className="nav nav-pills d-flex align-items-start "
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        {data.map((film, id) => {
          return (
            <button
              key={film.id}
              className={`border-0 px-2 m-2 fs-4 fw-bold text-secondary ${
                id === show && "activeBtn"
              }`}
              id={`v-pills-tab`}
              type="button"
              role="tab"
              onClick={() => setShow(id)}
            >
              {film.date}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default FilmYear;
