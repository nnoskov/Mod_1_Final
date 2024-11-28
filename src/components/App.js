import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    this.state = {
      total: 0,
      donates: {},
    };

    this.$totalH1 = document.createElement("h1");
    this.$totalH1.className = "total-amount";

    this.$total = document.createElement("span");
    this.$total.innerText = this.state.total;
    this.$totalH1.innerText = `Итого: $`;
    this.$totalH1.appendChild(this.$total);

    this.$rootElement.appendChild(this.$totalH1);

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List({onDelete: this.onItemDelete.bind(this)});
    this.donateList = donateList;
    this.$rootElement.appendChild(donateList.$rootElement);
  }

  onItemCreate(amount) {
    const item = new ListItem({
      amount: amount,
    });
    this.state.donates[item.state.id] = item.state.amount;
    this.donateList.addItem(item);
    this.state.total += amount;
    this.$total.innerText = this.state.total;
  }

  onItemDelete(id) {
    this.state.total -= this.state.donates[id];
    this.$total.innerText = this.state.total;
  }
}
