export default class PrivacyBanner {
  constructor(config = {}) {
    this.config = Object.assign({
      messageText: 'This website uses cookies to improve your experience',
      acceptText: 'I accept',
      declineText: 'rather not',
      cookieName: 'cookieprefs',
      maxWidth: '100%',
      margin: 16,
      padding: 16,
      slideFrom: 'bottom',
      classList: 'cookie-banner',
      onRemove() {}
    }, config);

    this.init();
  }

  init() {
    if (document.cookie.indexOf(this.config.cookieName) === -1) {
      const div = this.createElement();
      this.insertBanner(div);
    }
  }

  insertBanner(banner) {
    // Append div and setup
    this.banner = document.body.insertBefore(banner, document.body.firstChild);

    // Animate banner
    this.banner.offsetWidth; // eslint-disable-line no-unused-expressions
    this.banner.style.transform = '';

    // Attach events
    const accept = this.banner.querySelector('button[data-accept]');
    if (accept) accept.addEventListener('click', this.accept.bind(this));
    const decline = this.banner.querySelector('button[data-decline]');
    if (decline) decline.addEventListener('click', this.decline.bind(this));
  }

  close() {
    this.banner.parentNode.removeChild(this.banner);
    this.config.onRemove.call();
  }

  accept(event) {
    event.preventDefault();
    document.cookie = `${this.config.cookieName}=true; path=/; expires=${new Date(new Date() * 1 + 365 * 864e+5).toUTCString()}`; // eslint-disable-line no-mixed-operators
    this.close();
  }

  decline(event) {
    event.preventDefault();
    document.cookie = `${this.config.cookieName}=false; path=/; expires=${new Date(new Date() * 1 + 365 * 864e+5).toUTCString()}`; // eslint-disable-line no-mixed-operators
    this.close();
  }

  createElement() {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', this.config.classList);
    wrapper.style.cssText = `position: fixed;
      ${this.config.slideFrom === 'top' ? 'top: 0;' : 'bottom: 0;'}
      left: 0;
      max-width: calc(100% - (2 * ${this.config.margin}px));
      width: calc(${this.config.maxWidth} - (2 * ${this.config.margin}px));
      margin: ${this.config.margin}px;
      z-index: 999;
      transition: transform 0.2s ease 0.5s;
      transform: translateY(${this.config.slideFrom === 'bottom' ? `calc(100% + ${this.config.margin}px * 2)` : `calc(-100% - ${this.config.margin}px * 2)`});
    `;
    wrapper.innerHTML = `
      <div style="padding: ${this.config.padding}px;${window.innerWidth >= 640 ? 'display: flex;align-items: flex-start;' : ''}">
        <div style="${window.innerWidth >= 640 ? 'margin-right: 1em;' : ''}"><p style="margin: 0;">${this.config.messageText}</p></div>
        <div style="${window.innerWidth >= 640 ? 'margin-left: auto;text-align: right;white-space: nowrap;' : 'margin-top: 1em;'}">
          <button data-accept>${this.config.acceptText}</button><br>
          <button data-decline>${this.config.declineText}</button>
        </div>
      </div>
    `;
    return wrapper;
  }
}
