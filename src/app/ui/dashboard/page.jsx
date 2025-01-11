import Layout from './layout';  // Import your custom layout from the dashboard directory

function DashboardPage() {
    return (
        <div>Welcome to the Dashboard</div>
    );
}

// Use this to wrap the DashboardPage component with its Layout
DashboardPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
}

export default DashboardPage;

