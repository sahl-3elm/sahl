import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Shopify() {
    return (
        <div> style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}
            <Com path="shopify" />
            <CourseComp name="Mohamed ahmed" url="https://www.youtube.com/watch?v=QNhYc6n-xM8&pp=ygUgICBTaG9waWZ5ICBjb3Vyc2Ug2KjYp9mE2LnYsdio2Yo%3D"/>
            <CourseComp name="EcoomBlocker" url="https://www.youtube.com/watch?v=r3lSuf4XDvs&pp=ygUgICBTaG9waWZ5ICBjb3Vyc2Ug2KjYp9mE2LnYsdio2Yo%3D"/>
            <CourseComp name="Wael El-Selouky" url="https://www.youtube.com/watch?v=ICFXS5WIS3Y&pp=ygUgICBTaG9waWZ5ICBjb3Vyc2Ug2KjYp9mE2LnYsdio2Yo%3D"/>
            <CourseComp name="Ahmed el bana" url="https://www.youtube.com/watch?v=DjUK79m_ONI&list=PLCKXpdwie89k_VBuBYe4yfNi7NCzXNrCq"/>
            <CourseComp name="Elie Khoudari" url="https://www.youtube.com/watch?v=jyyF7X57oRM&pp=ygUgICBTaG9waWZ5ICBjb3Vyc2Ug2KjYp9mE2LnYsdio2Yo%3D"/>
        </div>
    );
}