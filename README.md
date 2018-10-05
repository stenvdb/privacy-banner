# privacy-banner
A small script to display a privacy notice banner on your page. It appends a div right after the opening body tag with a message and a link to your privacy page. You can close the banner by agreeing to the notice.

## How it works
When accepting the privacy notive banner, the scripts sets a cookie called `gdprPrivacyNoticeAccepted=true`.

Including this script does not magically make your website GDPR compliant. All it does when accepting the privacy notice, is setting that cookie. It is up to you to to use that concent cookie in the places you need to. 

For example, Google Analytics sends the user IP by default. You could edit your ga script to prevent this for example:

```
if (document.cookie.replace(/(?:(?:^|.*;\s*)gdprPrivacyNoticeAccepted\s*\=\s*([^;]*).*$)|^.*$/, '$1') === 'true') {
    ga('set', 'anonymizeIp', undefined);
} else {
    ga('set', 'anonymizeIp', true);
}
ga('send', 'pageview');
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
You can optionally pass an object to override the defaults. Here is the full list of default settings:
```
new PrivacyBanner({
  messageText: 'This website uses cookies to track your behavior and to improve your experience on the site. Do you agree',
  agreeText: 'Agree',
  acceptText: 'Yes',
  declineText: 'No',
  readMoreText: 'Read more', // Use empty string to hide
  readMoreLink: '/privacy',
  yesNoPrefix: '',
  showYesNo: false,
  backgroundColor: '#3b3b3b',
  borderColor: '#474747',
  color: '#fff',
  maxWidth: 1230,
  paddingX: 15,
  paddingY: 0,
  slideFrom: 'top' // Can also be set to 'bottom'
});
```
