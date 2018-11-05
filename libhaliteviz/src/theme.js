export const THEMES = {
    "Turtles": {
        tintFactory: false,
        tintShip: false,
        rotateShip: true,
        scaleMapSprite: true,
        bloom: true,
        scale: {
            ship: 1,
            base: 1,
            dropoff: 1,
        },
        playerColors: [0x1BB15A, 0xF54356, 0xFABB2C, 0xffa2e2],
        colorTheme: "TheSea",
    },
    "Colorblind": {
        tintFactory: false,
        tintShip: false,
        rotateShip: true,
        scaleMapSprite: true,
        bloom: true,
        scale: {
            ship: 1,
            base: 1,
            dropoff: 1,
        },
        playerColors: [0x5E5EFF, 0xAEAEE6, 0x575738, 0xBFBF00],
        colorTheme: "Colorblind",
    },
    "Colorblind II": {
            tintFactory: false,
            tintShip: false,
            rotateShip: true,
            scaleMapSprite: true,
            bloom: true,
            scale: {
                ship: 1,
                base: 1,
                dropoff: 1,
            },
            playerColors: [0xD0D0E0, 0x000000, 0xAFC73F, 0xFF0008],
            colorTheme: "TheSea",
    },
    "Halite II": {
        tintFactory: true,
        tintShip: true,
        rotateShip: true,
        scaleMapSprite: true,
        bloom: true,
        scale: {
            ship: 0.75,
            base: 1,
            dropoff: 1,
        },
        playerColors: [0xBD00DB, 0x63CECA, 0xFFBE00, 0xC5EC98],
        colorTheme: "GraySpace",
    },
    "Roguelike": {
        tintFactory: true,
        tintShip: true,
        scaleMapSprite: false,
        mapSprite: true,
        dropoffSprite: true,
        rotateShip: false,
        borderSprite: true,
        bloom: false,
        scale: {
            ship: 1 / 1.5,
            base: 1 / 2,
            dropoff: 1 / 1.5,
        },
        playerColors: [0x800000, 0x008000, 0x808000, 0x800080],
        colorTheme: "ANSI",
    },
    "Halloween": {
      tintFactory: false,
      tintShip: false,
      rotateShip: true,
      scaleMapSprite: true,
      bloom: true,
      scale: {
          ship: 1,
          base: 1,
          dropoff: 1,
      },
      playerColors: [0x16FF05, 0xFF7B05, 0xdA05FF, 0xcdcdcd],
      colorTheme: "Colorblind",
    },
};


export function applyTheme() {
    if (theme().playerColors) {
        const { playerColors } = theme();

        const rules = [];
        const sheet = window.document.styleSheets[0];
        for (let i = 0; i < playerColors.length; i++) {
            const color = playerColors[i];
            const hex = `${((color & 0xFF0000) >> 16).toString(16).padStart(2, '0')}${((color & 0xFF00) >> 8).toString(16).padStart(2, '0')}${(color & 0xFF).toString(16).padStart(2, '0')}`;
            sheet.insertRule(`.color-${i+1} { color: #${hex} !important; }`,
                             sheet.cssRules.length);
        }
    }
}

export let selectedTheme = "Turtles";

{
    let savedTheme = window.localStorage.getItem('visualizer-theme');
    if (THEMES[savedTheme]) {
        selectedTheme = savedTheme;
    }
}

export default function theme() {
    return THEMES[selectedTheme];
}

export function setTheme(value) {
    if (!THEMES[value]) {
        console.error(`Theme ${value} does not exist.`);
        return;
    }

    window.localStorage.setItem('visualizer-theme', value);
}
