import React from 'react';
import './App.css';

function App() {
    console.log('app rendering')
    // что-то полезное

    // обязана вернуть JSX
    return (
        <div>
            <AppTitle />
            <Rating />
            <Accordion />
            <Rating />
            <Accordion />
        </div>

    );
}

function AppTitle() {
    console.log('apptitle rendering')
    return <>This is App Component</>
}

function Rating() {
    console.log('rating rendering')
    return (
        <>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </>
    )
}

function Accordion() {
    console.log('accordion rendering')
    return <div>
        <AccordionTitle />
        <AccordionBody />
    </div>
}

function Star() {
    console.log('star rendering')
    return <div>Star</div>
}

function AccordionTitle() {
    return <h3>Menu</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default App;
