'use client'

import { type ResolvedRegister, type State } from '@wagmi/core'
import { createContext, createElement } from 'react'
import { Hydrate } from './hydrate.js'

export const WagmiContext = createContext<
  ResolvedRegister['config'] | undefined
>(undefined)

export type WagmiProviderProps = {
  config: ResolvedRegister['config']
  initialState?: State
  reconnectOnMount?: boolean | undefined
}

export function WagmiProvider(
  parameters: React.PropsWithChildren<WagmiProviderProps>,
) {
  const { children, config } = parameters

  const props = { value: config }
  return createElement(
    Hydrate,
    parameters,
    createElement(WagmiContext.Provider, props, children),
  )
}
