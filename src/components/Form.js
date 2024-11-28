import { Component } from "../core/Component";

export class Form extends Component {
  constructor(props){
    super(props);
  }
  setup(props) {
    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";

    this.state = {
      amount: "",
    };

    const label = document.createElement("label");
    label.className = `${this.$rootElement.className}__input-label`;
    this.$label = label;

    const input = document.createElement("input");
    input.className = `${this.$rootElement.className}__donate-input`;
    input.name = "amount";
    input.type = "number";
    input.max = "100";
    input.min = "1";
    input.required = true;

    const button = document.createElement("button");
    button.className = `${this.$rootElement.className}__submit-button`;
    button.type = "submit";
    button.innerText = "Задонатить";
    button.disabled = true;

    this.$input = input;
    this.$button = button;

    this.$input.addEventListener("input", this.handleInput.bind(this));
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));
    this.$label.innerHTML = `Введите сумму в $`;
    this.$label.appendChild(this.$input);
    this.$rootElement.append(this.$label, this.$button);
  }

  get isValid() {
    return (
      Boolean(this.state.amount) &&
      this.state.amount > 0 &&
      this.state.amount <= 100
    );
  }
  handleInput(event) {
    this.state.amount = event.target.value;
    this.$button.disabled = !this.isValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      event.preventDefault();
      this.props.onSubmit(Number(this.state.amount));
      this.$input.value = "";
      this.$button.disabled = true;
    }
  }
}
