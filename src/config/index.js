const URL_BACKEND = window.location.href.includes("localhost")
  ? "http://localhost:8080"
  : "https://radioflix-backend.herokuapp.com";

export default {
  URL_BACKEND,
};
