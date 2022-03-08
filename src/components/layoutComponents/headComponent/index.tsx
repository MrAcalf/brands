import Head from 'next/head'
import { FC } from 'react'

interface HeadComponentProps {
    title?: string
    description?: string
    content?: string
}

export const HeadComponent: FC<HeadComponentProps> = ({ title, description, content }) => {
    return <Head>
        <title>{title}</title>
        <meta name={description} content={content} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
}