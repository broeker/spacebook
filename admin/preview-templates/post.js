import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Post = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main class="prose p-4">
        <article>
          <h1>${entry.getIn(["data", "title"], null)}</h1>
          <p>
            <small>
              <time
                >${
                  format(
                    entry.getIn(["data", "date"], new Date()),
                    "dd MMM, yyyy"
                  )
                }</time
              >
              ${" by Author"}
            </small>
          </p>
          <div class="adjust">
          ${this.props.widgetFor("body")}
          </div>
          <p>
            ${
              entry.getIn(["data", "tags"], []).map(
                tag =>
                  html`
                    <a href="#" rel="tag">${tag}</a>
                  `
              )
            }
          </p>
        </article>
      </main>
    `;
  }
});

export default Post;
