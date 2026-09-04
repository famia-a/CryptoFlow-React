import React from 'react'
import Faqdiv from './ui/Faqdiv'
import Upperheading from './ui/Upperheading'
function FAQ() {
  return (
<div className='bg-[#1a1e2a] text-amber-50 flex flex-col justify-center items-center py-24'>
    <div className='container lg:w-[60%] md:w-[70%] h-auto mx-auto px-4'>
        
    <Upperheading h="Frequently Asked Questions" p="Got questions about CryptoFlow? We've got answers.If you dont see what you're looking for, reach out to our support team." />

    <Faqdiv h="How Secure is CryptoFlow?" p="CryptoFlow employs bank-level security measures including 256-bit encryption, cold storage for 95% of assets, two-factor authentication, and regular security audits. Our platform has never been compromised and we maintain a comprehensive insurance policy to protect user funds."/>
    <Faqdiv h="What cryptocrrencies can i trade on CryptoFlow?" p="CryptoFlow supports trading of over 50 cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Cardano (ADA), Ripple (XRP), and many more. We regularly add new cryptocurrencies based on market trends and user demand."/>
    <Faqdiv h="What are the fees for using CrptoFlow?" p="Our fee structure is transparent and competitive. Basic accounts pay 0.25% per trade, Pro accounts pay 0.1%, and Enterprise accounts pay no trading fees. There are no hidden fees, and we don't charge for deposits. Withdrawal fees vary by cryptocurrency to cover network costs."/>
    <Faqdiv h="Who do I deosit fnd into my CryptoFlow Account?" p="You can deposit funds via bank transfer, credit/debit card, or by transferring cryptocurrency from another wallet. Bank transfers typically process within 1-3 business days, while card payments and crypto transfers are nearly instant."/>
    <Faqdiv h="Is CryptoFlow is available in our Country?" p="CryptoFlow is available in over 140 countries worldwide. However, due to regulatory constraints, we cannot serve users from certain jurisdictions. Please check our Terms of Service or contact our support team to verify availability in your specific location."/>
    <Faqdiv h="How do I get Started with CryptoFlow?" p="Getting started is simple. Create an account, complete the verification process (which typically takes less than 10 minutes), deposit funds using your preferred method, and you're ready to start trading. Our intuitive interface is designed to make cryptocurrency trading accessible for beginners while offering powerful tools for experienced traders."/>
          
    </div>
</div>
  )
}

export default FAQ