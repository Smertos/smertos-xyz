import { injectGlobal } from '@emotion/css';

export function setupGlobalStyles(): void {
    injectGlobal`
        html, body, #app-root {
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
            color: #e9e2d5;
            background-color: #00040f;

            font-family:
                // Safari for macOS and iOS (San Francisco)
                -apple-system,
                // Chrome < 56 for macOS (San Francisco)
                BlinkMacSystemFont,
                // Windows
                "Segoe UI",
                // Android
                "Roboto",
                // Basic web fallback
                "Helvetica Neue", Arial, sans-serif,
                // Emoji fonts
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
    `;
}

