import { Component } from '../core/Component';

export class List extends Component {
  constructor(props) {
    super(props);
  }
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const h2Title = document.createElement('h2');
    h2Title.className = `${this.$rootElement.className}__title`;
    h2Title.innerText = 'Список донатов';

    const divDonates = document.createElement('div');
    divDonates.className = `${this.$rootElement.className}__donates`
    divDonates.addEventListener('click', this.handleDelete.bind(this));
    this.$rootElement.append(h2Title, divDonates);
    this.$listContainer = divDonates;
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }

  handleDelete(event) {
    const itemId = event.target.closest('.donate-item').id;
    this.$listContainer.querySelector(`[id='${itemId}']`).remove();
    this.props.onDelete(itemId);
  }
}