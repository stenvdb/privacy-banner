# privacy-banner
Unopinionated privacy banner (aka cookie banner). 

## How it works
Displays a message on your website with an accept and decline button that sets a cookie ('true' or 'false') when clicked. It is up to you to use the consent cookie.

For example, include the analytics tool of your choice based on the user's choice:

```
if (document.cookie.replace(/(?:(?:^|.*;\s*)myCookieName\s*\=\s*([^;]*).*$)|^.*$/, '$1') === 'true') {
  // Include analytics
}
```

## Installation
Privacy Banner supports [npm](https://www.npmjs.com/package/privacy-banner)
```
npm install privacy-banner
```

## Usage
Just include the script and create a new instance.

```
new PrivacyBanner();
```

## Options
```
new PrivacyBanner({
  messageText: 'This website uses cookies to improve your experience',
  acceptText: 'I accept',
  declineText: 'rather not',
  cookieName: 'cookieprefs',
  maxWidth: '100%',
  margin: 16,
  padding: 16,
  slideFrom: 'bottom', // Accepted values: 'top' or 'bottom',
  classList: 'cookie-banner',
  onRemove() {} // Callback whenever the banner is removed
});
```
