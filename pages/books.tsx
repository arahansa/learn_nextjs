import {GetStaticProps} from "next";
import {User} from "../interfaces";
import Layout from "../components/Layout";

type Props = {
    items: User[]
}

const WithStaticProps = ({ items }: Props) => (
    <Layout title="Users List | Next.js + TypeScript Example">
        <h1>Users List</h1>
        <p>
            Example fetching data from inside <code>getStaticProps()</code>.
        </p>
        <p>You are currently on: /books</p>
        {
            items.map(((value, index) => <div key={index}>id : {value.id}, name : {value.name}</div>))
        }
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
    const result = await fetch("http://localhost:8080/books")
    console.log("result :", result);
    const json = await result.json();
    console.log("json :", json)
    return { props: { items: json } }
}

export default WithStaticProps;
