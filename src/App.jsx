```jsx
import React from 'react';

const styles = {
    app: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#F6F8D5'
    },
    header: {
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#F6F8D5'
    },
    navigation: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        color: '#4F959D',
        fontSize: '1.5em',
        fontWeight: 'bold',
    },
    heroSection: {
        width: '100%',
        padding: '50px',
        backgroundColor: '#F6F8D5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headline: {
        color: '#205781',
        fontSize: '3em',
        fontWeight: 'bold',
    },
    subheadline: {
        color: '#205781',
        fontSize: '2em',
        fontWeight: '400',
    },
    callToActionButton: {
        margin: '20px 0',
        padding: '10px 20px',
        color: '#F6F8D5',
        fontSize: '1.2em',
        backgroundColor: '#205781',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    featureSection: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '60px',
    },
    testimonialSection: {
        display: 'flex',
        justifyContent: 'center',
    },
    footer: {
        backgroundColor: '#4F959D',
        color: '#F6F8D5',
        padding: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}

const App = () => (
    <div style={styles.app}>
        <header style={styles.header}>
            <div style={styles.navigation}>
                <div style={styles.logo}>Logo</div>
            </div>
            <button style={styles.callToActionButton}>Call To Action</button>
        </header>

        <section style={styles.heroSection}>
            <h1 style={styles.headline}>Elegant Headline</h1>
            <h2 style={styles.subheadline}>Elegant Subheadline</h2>
            <button style={styles.callToActionButton}>Learn More</button>
        </section>

        <main style={styles.featureSection}>
            <div>Feature 1</div>
            <div>Feature 2</div>
            <div>Feature 3</div>
            <div>Feature 4</div>
        </main>

        <section style={styles.testimonialSection}>
            <img src="" alt="" />
            <img src="" alt="" />
        </section>

        <footer style={styles.footer}>
            <div>Contact Info</div>
            <div>Social Media Icons</div>
        </footer>
    </div>
);

export default App;
```