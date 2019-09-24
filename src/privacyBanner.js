export default class PrivacyBanner {
  constructor(config = {}) {
    this.config = Object.assign({
      messageText: 'This website uses cookies to track your behavior and to improve your experience on the site. Do you agree',
      agreeText: 'Agree',
      acceptText: 'Yes',
      declineText: 'No',
      readMoreText: 'Read more',
      readMoreLink: '/privacy',
      yesNoPrefix: '',
      showYesNo: false,
      backgroundColor: '#3b3b3b',
      borderColor: '#474747',
      color: '#fff',
      maxWidth: 1230,
      paddingX: 15,
      paddingY: 0,
      slideFrom: 'top'
    }, config);

    this.init();
  }

  init() {
    if (document.cookie.indexOf('gdprPrivacyNoticeAccepted') === -1) {
      const div = this.createElement();
      this.insertBanner(div);
    }
  }

  insertBanner(banner) {
    // Append div and setup
    this.banner = document.body.insertBefore(banner, document.body.firstChild);
    const bannerHeight = this.banner.getBoundingClientRect().height;

    // Animate banner
    if (this.config.slideFrom === 'top') {
      this.banner.style.height = `${bannerHeight}px`;
      this.banner.style.position = 'absolute';
      document.body.addEventListener('transitionend', this.cleanUpAnimation.bind(this));
      document.body.style.transition = 'transform 0.2s ease';
      document.body.style.transform = `translateY(${bannerHeight}px)`;
    } else {
      this.banner.style.transform = '';
    }

    // Attach events
    const agree = this.banner.querySelector('.gdpr-privacy-notice-agree');
    if (agree) agree.addEventListener('click', this.agree.bind(this));
    const decline = this.banner.querySelector('.gdpr-privacy-notice-decline');
    if (decline) decline.addEventListener('click', this.decline.bind(this));
  }

  close() {
    this.banner.parentNode.removeChild(this.banner);
  }

  agree(event) {
    event.preventDefault();
    document.cookie = `gdprPrivacyNoticeAccepted=true; path=/; expires=${new Date(new Date() * 1 + 365 * 864e+5).toUTCString()}`; // eslint-disable-line no-mixed-operators
    this.close();
  }

  decline(event) {
    event.preventDefault();
    document.cookie = `gdprPrivacyNoticeAccepted=false; path=/; expires=${new Date(new Date() * 1 + 365 * 864e+5).toUTCString()}`; // eslint-disable-line no-mixed-operators
    this.close();
  }

  cleanUpAnimation() {
    // Cleanup body
    document.body.style.transition = '';
    document.body.style.transform = '';

    // Cleanup banner
    this.banner.style.transition = '';
    this.banner.style.position = 'static';
    this.banner.style.transform = '';
    this.banner.style.height = '';
  }

  createElement() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('gdpr-privacy-notice');
    wrapper.style.cssText = `
      ${this.config.slideFrom === 'top' ? 'position: relative;' : 'position: fixed;'}
      ${this.config.slideFrom === 'top' ? 'top: 0;' : 'bottom: 0;'}
      left: 0;
      width: 100%;
      padding: 25px 0;
      background: ${this.config.backgroundColor};
      color: ${this.config.color};
      border-bottom: 1px solid ${this.config.borderColor};
      z-index: 1;
      transition: transform 0.2s ease;
      transform: translateY(${this.config.slideFrom === 'top' ? '-100%' : '100%'});
    `;
    wrapper.innerHTML = `
      <div style="display: flex;margin: 0 auto;max-width: ${this.config.maxWidth}px;flex-flow: row wrap;align-items: flex-start;justify-content: flex-start;">
        <div style="text-align: center;flex: 0 1 auto;width: 100%;padding: ${this.config.paddingY}px ${this.config.paddingY}px;">
          <p style="margin: 0;">${this.config.messageText}
          ${this.config.readMoreText !== '' ? `(<a href="${this.config.readMoreLink}" style="color: ${this.config.color}; text-decoration: underline;">${this.config.readMoreText}</a>)` : ''}
          ${this.config.showYesNo ? `
            ${this.config.yesNoPrefix}
            <button style="font: inherit;color: ${this.config.color};border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;" class="gdpr-privacy-notice-agree">${this.config.acceptText}</button> -
            <button style="font: inherit;color: ${this.config.color};border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;" class="gdpr-privacy-notice-decline">${this.config.declineText}</button>
          ` : `
            <button style="font: inherit;color: ${this.config.color};border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;" class="gdpr-privacy-notice-agree">${this.config.agreeText}</button>
          `}
          </p>
        </div>
      </div>
    `;
    return wrapper;
  }
}
