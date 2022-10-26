/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

import Theme from './Theme'

export type Types = typeof Theme

declare module 'styled-components' {
  export interface DefaultTheme extends Types {}
}
