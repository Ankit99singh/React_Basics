function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttributes("href", reactElement.props.href);
  domElement.setAttributes("target", reactElement.props.target);

  container.appendChild(domElement);
}

const reactElement = {
  // how reat look to elements
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainContainer = document.querySelector("#root");

// how react elements are rendered
customRender(reactElement, mainContainer);
