export default function ScholarshipPage({ query }) {
    return (
        <h1>
            {console.log(query)}
            test page
        </h1>
    );
}

export async function getServerSideProps({ query }) {
    return {
        props: { query },
    };
}
