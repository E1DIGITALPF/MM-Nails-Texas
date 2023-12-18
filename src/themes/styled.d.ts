import 'styled-components'
import {theme} from './theme'

declare module 'styled-components'{
    const ThemeType = typeof theme
    export interface DefaultTheme extends ThemeType {}
}