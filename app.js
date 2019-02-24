window.onload = function () {
  const allVideosArr = Array.from(document.querySelectorAll("[data-time]"));

  const totalSeconds = allVideosArr
    .map(video => video.dataset.time.split(":")) // ["1", ""]
    .map(times => times[0] * 60 + times[1] * 1) // no need to use Number() or parseInt()
    .reduce((a, b) => a + b);

  const remainingSeconds =
    totalSeconds % 60 < 10 ? `0${totalSeconds % 60}` : totalSeconds % 60;
  const remainingMinutes =
    (totalSeconds / 60) % 60 < 10 ?
    `0${Math.floor((totalSeconds / 60) % 60)}` :
    Math.floor((totalSeconds / 60) % 60);
  const remainingHours = Math.floor(totalSeconds / 60 / 60);

  document
    .getElementById("total")
    .addEventListener("click", () =>
      alert(
        `Total video time: ${remainingHours}:${remainingMinutes}:${remainingSeconds}`
      )
    );
}