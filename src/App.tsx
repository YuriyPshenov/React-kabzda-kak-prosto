import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOff, setOnOff] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <PageTitle title={'This is App Component'}/>
            <PageTitle title={'New Component'}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            {/*<Accordion titleValue={'Users'} collapsed={accordionCollapsed} />*/}
            <UncontrolledAccordion titleValue={'New Menu'}/>
            <UncontrolledAccordion titleValue={'New Users'}/>
            <div>UncontrolledRating</div>
            <UncontrolledRating/>
            <div>ControlledRating</div>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <div>UncontrolledOnOff</div>
            <UncontrolledOnOff onChange={setOnOff}/>
            <div>{onOff.toString()}</div>
            <div>ControlledOnOff</div>
            <OnOff onClick={setOnOff} value={onOff}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
