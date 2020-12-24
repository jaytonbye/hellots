import $ from "jquery";

class Counter {
  count = 110;

  up() {
    return ++this.count;
  }
}

$(document).ready(() => {
  const counter = new Counter();
  const count = $(`<div class="count">${counter.count}</div>`);

  count.click(() => {
    count.text(counter.up());
  });

  count.appendTo("body");
});
