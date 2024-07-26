import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Kanit} from "next/font/google"

const kanit = Kanit({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    variable: '--next-font-kanit',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={kanit.variable}>
            <Component {...pageProps} />
        </div>
    )
}
