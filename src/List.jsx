import {Person} from "./Person.jsx";

export const List = ({people}) => {

    return (
        <section>
            {people.map((person) => {
                return <Person key={person.id} {...person}/>
            })}
        </section>
    );
};
