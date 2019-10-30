const LeetTime = function () {
    let darkModeInterval = null;
    let darkModeIntervalTime = 500; // Should be slightly more then the transition time

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

    this.setDarkMode = (mode) => {
        const app = document.querySelector('#app');
        const logo = document.querySelector('#leetLogo');

        app.setAttribute('data-mode', mode);
        app.setAttribute('class', mode);
        logo.style.backgroundImage = `url('1337-${mode}.svg')`;
    };

    this.start = ({ darkMode }) => {
        if (darkMode) {
            darkModeInterval = setInterval(this.switchDarkMode, darkModeIntervalTime);
        }
    };

    this.stop = () => {
        clearInterval(darkModeInterval);
    }
};
