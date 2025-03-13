function AppButton() {
    const mainStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "20vh",
        gap: "20px"
        };
    const mainSection = {
        backgroundColor: "lightblue",
        height: "50vh",
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
    return (
        <>
            <main style={mainStyle}>
                <section style={mainSection}>
                    <p>adasda</p>
                </section>
                <section style={mainSection}>
                    <p>adasda</p>
                </section>
            </main>
        </>
    )
}

export default AppButton