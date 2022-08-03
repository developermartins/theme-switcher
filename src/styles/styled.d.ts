import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: String,

        colors: {
            primary: String,
            secundary: String,

            background: String,
            text: String,
        },
    }
}