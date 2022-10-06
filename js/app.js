window.onload = function () {
  setTimeout(function () {
    document.body.classList.add("loaded");

    Draggable.create(".gallery", {
      bounds: "body" /* ограничение скрола */,
      inertia: true /* иннерция */,
    });
  }, 200);
};
