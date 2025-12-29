import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
  <h1>Click That Damn Button</h1>
  <button id="btn-1" class="btn-gradient">
    <span>Click Me!</span>
  </button>
</div>
`;

function ClickHandler(element: HTMLButtonElement | null) {
  if (!element) return;

  element.addEventListener("click", () => {
    document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div>
      <h1>Fuck You Vivek🖕🏻🖕🏻, I'm Your Daddy!</h1>
    </div>`;
  });
}

ClickHandler(document.querySelector<HTMLButtonElement>("#btn-1"));
