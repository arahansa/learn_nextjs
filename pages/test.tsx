import Link from 'next/link'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import {useCallback} from "react";
import {COUNT_PLUS} from "../reducers/count";

export interface RootState {
    count:number
}
const TestPage = () => {
    const count = useSelector((state: RootState) => state).count
    const dispatch = useDispatch()
    const handleCountUp = useCallback(()=>{
        dispatch({ type: COUNT_PLUS })
    }, []);
    return (
        <Layout title="TestPage | Next.js + TypeScript Example">
            <h1>Hello TestPage 👋</h1>
            <p>
                <Link href="/about">
                    <a>Test Page</a>
                </Link>
                <span>count : {count}</span>
                <button onClick={handleCountUp}>버튼 클릭업</button>
            </p>
        </Layout>
        )
}

export default TestPage
