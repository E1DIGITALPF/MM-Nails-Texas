import Head from 'next/head';

interface HeadProps {
    title: string;
}

export function NextHead({ title }: HeadProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} key="title" />
        </Head>
    )
}