import Com from '../components/Com'
import react from 'react'
import CourseComp from '../components/CoursesComp.js';

export default function Block() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="block" />
            <CourseComp name="Bahaa taha 1" url="https://www.youtube.com/watch?v=P7knmiMxkQs&list=PL2niyQ09KNViO3sRHs02_SNxijglIfROh"/>
            <CourseComp name="Bahaa taha 2" url="https://www.youtube.com/watch?v=D3ysEeIMBgk&list=PL2niyQ09KNVjE7E0SnkqTzAbcS4kYiR2l"/>
            <CourseComp name="Mohamed eesa" url="https://www.youtube.com/watch?v=AvTtUF0roc0&list=PLMYF6NkLrdN9b1zUSytDUcafRip551bqP"/>
            <CourseComp name="ClodZer" url="https://www.youtube.com/watch?v=e0T2PRT7YBo&pp=ygUsQmxvY2tjaGFpbiBEZXZlbG9wbWVudCBjb3Vyc2Ug2KjYp9mE2LnYsdio2Yo%3D"/>
            <CourseComp name="Haza Salem" url="https://www.youtube.com/watch?v=gOw93zZQtKE&pp=ygUsQmxvY2tjaGFpbiBEZXZlbG9wbWVudCBjb3Vyc2Ug2KjYp9mE2LnYsdio2Yo%3D"/>
        </div>
    );
}