const LeetTime = function () {
    let darkModeInterval = null;
    let darkModeIntervalTime = 500; // Should be slightly more then the transition time
    let logoInterval = null;
    let logoIntervalTime = darkModeIntervalTime * 2;
    let activeLogo = 'leet';
    let switches = 0;

    this.switchDarkMode = () => {
        const app = document.querySelector('#app');
        const mode = app.getAttribute('data-mode');
        let newMode = '';

        switch (mode) {
            case 'light':
                newMode = 'dark';
                break;
            default:
                newMode = 'light';
                break;
        }

        this.setDarkMode(newMode);
    };

    this.detectDarkMode = () => {
        const mode = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
        this.setDarkMode(mode);
    }

    this.setDarkMode = (mode) => {
        const app = document.querySelector('#app');
        const logo = document.querySelector('#leetLogo');

        app.setAttribute('data-mode', mode);
        app.setAttribute('class', mode);
        logo.style.backgroundImage = `url('${activeLogo}-${mode}.svg')`;
    };

    this.switchLogo = () => {
        activeLogo = activeLogo === 'leet' ? '1337' : 'leet';
    };

    this.switch = () => {
        if (switches % 2 === 0) {
            this.switchLogo();
        }

        this.switchDarkMode();
        switches++;
    };

    this.start = (options) => {
        if (options.indexOf('darkMode') > -1) {
            darkModeInterval = setInterval(this.switchDarkMode, darkModeIntervalTime);
        }

        if (options.indexOf('logo') > -1) {
            logoInterval = setInterval(this.switchLogo, logoIntervalTime);
        }
    };

    this.stop = () => {
        clearInterval(darkModeInterval);
        clearInterval(logoInterval);
    }
};
