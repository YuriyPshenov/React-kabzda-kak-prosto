import React, {useMemo, useState} from 'react';


export default {
    title: 'SelectsUseMemo',
}

type SelectsWithUseMemoPropsType = {
    filterCountry: {country: string, city: string, countPeople: number}[]
    filterPeople: {country: string, city: string, countPeople: number}[]
    sortCity: {country: string, city: string, countPeople: number}[]
}

const SelectsWithUseMemo: React.FC<SelectsWithUseMemoPropsType> = ({filterCountry,filterPeople, sortCity}) => {

    console.log('render selectwithusememo')

    const RenderCountry = filterCountry.map((c, index) => <option key={index}>{c.city}</option>)
    const RenderPeople = filterPeople.map((c, index) => <option key={index}>{c.city}</option>)
    const RenderCity = sortCity.map((c, index) => <option key={index}>{c.city}</option>)

    console.log(RenderCountry)
    console.log(RenderPeople)
    console.log(RenderCity)

    return (
        <div>
            <select>
                {RenderCountry}
            </select>
            <select>
                {RenderPeople}
            </select>
            <select>
                {RenderCity}
            </select>
        </div>
    )
}

const SelectsWithUseMemoContainer = React.memo(SelectsWithUseMemo)


export const CheckUseMemoAndReactMemo = () => {

    console.log('render checkusememo')

    const [cities, setCities] = useState([
        {country: 'Russia', city: 'Moscow', countPeople: 2000},
        {country: 'Belarus', city: 'Minsk', countPeople: 1400},
        {country: 'Germany', city: 'Munchen', countPeople: 2300},
        {country: 'Germany', city: 'Berlin', countPeople: 2500},
        {country: 'Belarus', city: 'Gomel', countPeople: 2100},
        {country: 'Ukraine', city: 'Kiev', countPeople: 1800},
    ])

    const newFilterCountry = useMemo(() => {
        return cities.filter((c) => c.country === 'Belarus')
    }, [cities])

    const newFilterPeople = useMemo(() => {
        return cities.filter((c) => c.countPeople > 2000)
    }, [cities])

    const newSortCity = useMemo(() => {
        return [...cities].sort((a, b) => a.city.localeCompare(b.city))
    }, [cities])


    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCities([...cities, {country: 'Japan', city: 'Tokyo', countPeople: 4000}])}>add Japan, Tokyo</button>
            <div>Count: {count}</div>
            <SelectsWithUseMemoContainer filterCountry={newFilterCountry} filterPeople={newFilterPeople} sortCity={newSortCity}/>
        </div>
    )
}

