(() => {
  // assets/src/fractal-assets/fractal-preview.js
  var getParentClasses = document.querySelectorAll(".fractal-parent-get-classes");
  getParentClasses.forEach((el) => {
    getClasses(el);
    window.addEventListener("resize", () => {
      getClasses(el);
    });
  });
  function getClasses(el) {
    const parentEl = el.closest(".fractal-parent");
    if (parentEl) {
      const omitClasses = [
        "fractal-parent",
        "demo-col"
      ];
      const parentClasses = parentEl.classList;
      let classTextString = "";
      parentClasses.forEach((classText) => {
        if (!omitClasses.includes(classText)) {
          classTextString += `.${classText} `;
        }
      });
      el.innerHTML = classTextString;
    }
  }
})();
//# sourceMappingURL=fractal-preview.js.map
