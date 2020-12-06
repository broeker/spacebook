import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for Globals 
const Globals = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main class="prose p-4">
        <div class="adjust">
        <h1>${entry.getIn(["data", "name"], null)}</h1>
        <h1>${entry.getIn(["data", "subtitle"], null)}</h1>
        </div>
      </main>
    `;
  }
});

export default Globals;
