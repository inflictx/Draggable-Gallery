window.onload = function () {
  Draggable.create(".gallery", {
    bounds: "body" /* ограничение скрола */,
    inertia: true /* иннерция */,
  });
};
