export default class PrivacyBanner {
  constructor(config = {}) {
    this.config = Object.assign({
      messageText: 'This website uses cookies to track your behavior and to improve your experience on the site. Do you agree',
      agreeText: 'Agree',
      readMoreText: 'Read more',
      readMoreLink: '/privacy',
      backgroundColor: '#3b3b3b',
      borderColor: '#474747',
      color: '#fff',
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
    document.body.addEventListener('transitionend', this.cleanUpAnimation.bind(this));
    const bannerHeight = this.banner.getBoundingClientRect().height;

    // Animate banner
    this.banner.style.height = `${bannerHeight}px`;
    this.banner.style.position = 'absolute';
    document.body.style.transition = 'transform 0.2s ease';
    document.body.style.transform = `translateY(${bannerHeight}px)`;

    // Attach events
    this.banner.querySelector('.gdpr-privacy-notice-agree').addEventListener('click', this.agree.bind(this));
  }

  close() {
    this.banner.parentNode.removeChild(this.banner);
  }

  agree(event) {
    event.preventDefault();
    document.cookie = `gdprPrivacyNoticeAccepted=true; path=/; expires=${new Date(new Date() * 1 + 365 * 864e+5).toUTCString()}`; // eslint-disable-line no-mixed-operators
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
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      padding: 25px 0;
      background: ${this.config.backgroundColor};
      color: ${this.config.color};
      border-bottom: 1px solid ${this.config.borderColor};
      z-index: 1;
      transition: transform 0.2s ease;
      transform: translateY(-100%);
    `;
    wrapper.innerHTML = `
      <div class="row">
        <div class="twelve columns" style="text-align: center;">
          <p style="margin: 0;">${this.config.messageText} (<a href="${this.config.readMoreLink}" style="color: #fff; text-decoration: underline;">${this.config.readMoreText}</a>)
          <a href="#" style="color: #fff; text-decoration: underline;" class="gdpr-privacy-notice-agree">${this.config.agreeText}</a></p>
        </div>
      </div>
    `;
    return wrapper;
  }
}
