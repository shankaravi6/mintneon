export const colorTokens = {
    drops: {
      100: "#fafafa",
      110: "#ff99cc",
      115: "#ff66b3",
      150: "#f4f3f2",
      200: "#b1e7dd",
      250: "#2eb8b8",
      300: "#f4f3f2bf",
      400: "#e7e3e3bf",
      500: "#bbbbbbcc",
      600: "#247566",
      700: "#1e6255",
      800: "#184e44",
      850:"#123b33",
      900: "#0c2722",
      1000: "#071714"
    },
  };
  
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              text: {
                main: colorTokens.drops[300],
                mid: colorTokens.drops[400],
                lowmid: colorTokens.drops[500],
                low: colorTokens.drops[100],
                high: colorTokens.drops[900],
                title: colorTokens.drops[200],
                nav: colorTokens.drops[115],
              },
              background: {
                high: colorTokens.drops[900],
                mid: colorTokens.drops[300],
                low: colorTokens.drops[500],
              },
              shadow: {
                main: "rgba(255, 255, 255, 0.35)",
                sub: "rgba(255, 255, 255, 0.25)",
              },
              error: {
                main: "#FF5733",
              },
              placeholder: {
                main: "#999999",
              },
            }
          : {
              // palette values for light mode
              text: {
                main: colorTokens.drops[700],
                mid: colorTokens.drops[500],
                low: colorTokens.drops[400],
                high: colorTokens.drops[150],
                title: colorTokens.drops[100],
              },
              background: {
                high: colorTokens.drops[100],
                mid: colorTokens.drops[900],
                low: colorTokens.drops[700],
              },
              shadow: {
                main: "rgba(0, 0, 0, 0.35)",
                sub: "rgba(0, 0, 0, 0.25)",
              },
              error: {
                main: "#FF5733",
              },
              placeholder: {
                main: "#666666",
              },
            }),
      },
    };
  };
  