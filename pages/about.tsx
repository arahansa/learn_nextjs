import Link from 'next/link'
import Layout from '../components/Layout'
import {RootState} from "./test";
import { useDispatch, useSelector } from 'react-redux'
import {useCallback} from "react";
import {COUNT_PLUS} from "../reducers/count";

const AboutPage = () => {
    const count = useSelector((state: RootState) => state).count
    const dispatch = useDispatch()
    const handleCountUp = useCallback(()=>{
        dispatch({ type: COUNT_PLUS })
    }, []);
    return (
        (
            <Layout title="About | Next.js + TypeScript Example">
                <h1>About</h1>
                <p>This is the about page.. count : {count}</p>
                <button onClick={handleCountUp}>버튼 클릭업</button>
                <Link href="/test">
                    Test Page
                </Link>
                <p>
                    <Link href="/">
                        <a>Go home</a>
                    </Link>
                </p>
            </Layout>
        )
    )
}

export default AboutPage
