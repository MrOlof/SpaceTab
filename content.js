document.addEventListener('keydown', function(event) {
  if (event.code === 'Space' && !event.target.matches('input, textarea, select, button, [contenteditable]')) {
    event.preventDefault();

    // Add a slight delay to ensure proper dispatch of the "K" key event
    setTimeout(() => {
      // Create and dispatch a new KeyboardEvent for the "K" key
      const kKeyEvent = new KeyboardEvent('keydown', {
        key: 'k',
        keyCode: 75, // keyCode for 'k'
        code: 'KeyK',
        which: 75,
        bubbles: true,
        cancelable: true,
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
      });

      console.log('Dispatching K key event', kKeyEvent);
      document.dispatchEvent(kKeyEvent);
    }, 100); // Delay of 100 milliseconds
  }
});
