const map = document.querySelector(".mappingContainer");

document
  .getElementById("deskForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const deskName = document.querySelector(".deskName").value;
    const deskSymbol = document.querySelector(".deskSymbol").value;
    const deskCategory = document.querySelector(".deskCategory").value;

    const desk = {
      name: deskName,
      symbol: deskSymbol,
      category: deskCategory,
    };

    document.querySelector(".deskName").value = '';
    document.querySelector(".deskSymbol").value = "";

    const divContainer = document.createElement("div");
    divContainer.classList.add("desk");

    const pDeskName = document.createElement("p");
    pDeskName.textContent = desk.name;
    divContainer.appendChild(pDeskName);

    const pDeskSymbol = document.createElement("p");
    pDeskSymbol.textContent = desk.symbol;
    divContainer.appendChild(pDeskSymbol);

    const pDeskCategory = document.createElement("p");
    pDeskCategory.textContent = desk.category;
    divContainer.appendChild(pDeskCategory);

    map.appendChild(divContainer);

    const desksDrag = document.querySelectorAll(".desk");

    desksDrag.forEach((deskDrag) => {
      const drag = (event) => {
        deskDrag.style.top = event.pageY + "px";
        deskDrag.style.left = event.pageX + "px";
      };

      deskDrag.addEventListener("mousedown", () => {
        window.addEventListener("mousemove", drag);
      });

      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", drag);
      });
    });
  });
