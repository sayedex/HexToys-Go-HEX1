//

import React from 'react'
import { connectorsForWallets, darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, pulsechain, pulsechainV4 } from 'wagmi/chains'


import {
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
  useWeb3ModalTheme
} from '@web3modal/wagmi/react'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'




const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, pulsechain, pulsechainV4],
  [publicProvider()]
)

// const { connectors } = getDefaultWallets({
//   appName: 'okse-dapp',
//   projectId: process.env.REACT_APP_PROJECT_ID || 'YOUR_PROJECT_ID',
//   chains,
// })
const projectId = process.env.REACT_APP_PROJECT_ID || 'YOUR_PROJECT_ID'
const appName = "Aztec Token Staking";


// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })


createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: 'light',
  themeVariables: {
    '--w3m-color-mix': '#00DCFF',
    '--w3m-color-mix-strength': 20
  }
})



export default function Web3RainbowKitProvider({ children }: { children: any }): any {
  return (
    <WagmiConfig config={wagmiConfig}>

        {children}
    </WagmiConfig>
  )
}
