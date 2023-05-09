import {AppProps} from 'next/app';
import Head from 'next/head';
import {MantineProvider} from '@mantine/core';
import FormContext from "../components/context/FormContext";

export default function App(props: AppProps) {
    const {Component, pageProps} = props;

    return (
        <>
            <Head>
                <title>FMW Forms</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    colorScheme: 'light',
                }}
            >
                <FormContext>
                    <Component {...pageProps} />
                </FormContext>
            </MantineProvider>
        </>
    );
}
