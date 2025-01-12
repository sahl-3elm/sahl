import Com from '../components/Com'
import react from 'react'
import CourseComp from '../components/CoursesComp.js';

export default function Affiliate() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="affiliate" />
            <CourseComp name="Mustafa hesham" url="https://www.youtube.com/watch?v=b64R7VvPDS8&list=PLO0GfC_g13c-pDS_jCLSVPQCOEAsGppv1"/>
            <CourseComp name="Crazynet 1" url="https://www.youtube.com/watch?v=eLKRjcdVPEo&list=PLhafC-2qoac9ubiWkFBa6eR83XOTCYT71"/>
            <CourseComp name="Ahmed nabil" url="https://www.youtube.com/watch?v=JjWdmMrcuAo&list=PL3JmV8DuvO_VQNMJQAP5btwPNBP-8oKrh"/>
            <CourseComp name="CrazyNet 2" url="https://www.youtube.com/watch?v=ebdKbZrIej4&pp=ygUsICBBZmZpbGlhdGUgTWFya2V0aW5nICBjb3Vyc2Ug2KjYp9mE2LnYsdio2Yo%3D"/>
            <CourseComp name="Darrel Wilson" url="https://www.youtube.com/watch?v=nw7JTpuwj5g&pp=ygUsICBBZmZpbGlhdGUgTWFya2V0aW5nICBjb3Vyc2Ug2KjYp9mE2LnYsdio2Yo%3D"/>
        </div>
    );
}