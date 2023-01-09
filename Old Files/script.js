    window.addEventListener('load', function () {
       var theme = localStorage.getItem('olayzentheme');
       if (theme === null || theme === undefined) {
          theme = 'light';
          localStorage.setItem('olayzentheme', theme);
          localStorage.removeItem('theme');
       }
       var html = document.querySelector("html");
       html.classList.add(theme);
    })

    function switchTheme() {
       var theme = localStorage.getItem('olayzentheme');
       var html = document.querySelector('html');
       if (theme === 'dark') {
          new_theme = 'light';
       } else {
          new_theme = 'dark';
       }
       html.classList.remove(theme);
       html.classList.add(new_theme);
       localStorage.setItem('olayzentheme', new_theme);
    }
    
