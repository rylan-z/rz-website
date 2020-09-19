// Global darkSwitch
var darkSwitch = null;

/**
 * Execute at the beginning of the document
 * If this is placed in <head> there will be no flickering
 */
(function () {
  const darkThemeSelected =
    localStorage.getItem('darkSwitch') !== null &&
    localStorage.getItem('darkSwitch') === 'dark';

  darkThemeSelected ? applyBackgroundTheme("dark") : applyBackgroundTheme("light");
})();

// Initialize js theme controls after document load
window.addEventListener('load', () => {
  darkSwitch = document.getElementById('darkSwitch');
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener('change', () => {
      resetTheme();
    });
  }
});


/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will not be set.
 * @return {void}
 */
function initTheme() {
  const darkThemeSelected =
    localStorage.getItem('darkSwitch') !== null &&
    localStorage.getItem('darkSwitch') === 'dark';
  darkSwitch.checked = darkThemeSelected;
}


/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set a style with the appropriate background
 * applied.
 * @return {void}
 */
function resetTheme() {
  if (darkSwitch.checked) {
    applyBackgroundTheme('dark');
    localStorage.setItem('darkSwitch', 'dark');
  } else {
    applyBackgroundTheme('light');
    localStorage.removeItem('darkSwitch');
  }
}

/**
 * Apply the stylesheet with the appropriate theme
 * @param {*} color 
 */
function applyBackgroundTheme(color) {
  // CSS path for dark mode
  var cssDark = 'dark-mode.css';

  if (color === 'dark') { // If dark mode is enabled add css
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("type", "text/css");
    style.setAttribute("href", cssDark);
    style.setAttribute("id", "dark-mode-switch");
    head.appendChild(style);
  } else { // If light mode is enabled remove style
    var darkModeStyle = document.getElementById("dark-mode-switch");
    if (darkModeStyle !== null && typeof darkModeStyle !== 'undefined')
      darkModeStyle.parentNode.removeChild(darkModeStyle);
  }
}

//auto expanding contact text area
var autoExpand = function(field) {
  // Reset field height
  field.style.height = 'inherit';
  // Get the computed styles for the element
  var computed = window.getComputedStyle(field);
  // Calculate the height
  var height = parseInt(computed.getPropertyValue('border-top-width'), 10) +
    parseInt(computed.getPropertyValue('padding-top'), 10) +
    field.scrollHeight +
    parseInt(computed.getPropertyValue('padding-bottom'), 10) +
    parseInt(computed.getPropertyValue('border-bottom-width'), 10);

  field.style.height = height + 'px';
};
document.addEventListener('input', function(event) {
  if (event.target.tagName.toLowerCase() !== 'textarea') return;
  autoExpand(event.target);
}, false);