import { Component } from "../core/Component";

export class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  setup(props) {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";

    this.state = {
      id: Date.now(),
      date: new Date().toLocaleString("ru-RU"),
      amount: this.props.amount,
    };

    this.$rootElement.id = this.state.id;
    this.$rootElement.innerHTML = `${this.state.date}&nbsp-&nbsp<b>$${this.state.amount}</b>`;

    const delButton = document.createElement("button");
    delButton.className = "delete-button";
    delButton.innerText = "Удалить";
    // delButton.addEventListener("click", () => {
    //   props.onDelete(Number(this.state.id));
    // });

    this.$rootElement.appendChild(delButton);
  }
}
