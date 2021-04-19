import Head from 'next/head'
import prisma from "../lib/prisma";
import {GetStaticProps} from "next";

export const getStaticProps: GetStaticProps = async () => {
    const feed = await prisma.user.findFirst({
        where: {
            name: "Felix"
        }
    })
    return {props: {feed}}
}

export default function Home(props) {
    return (
        <div className="w-100 h-screen grid place-items-center">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                Hello {props.feed.name}
            </div>
        </div>
    )
}
