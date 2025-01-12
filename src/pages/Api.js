import Com from '../components/Com'
import react from 'react'
import CourseComp from '../components/CoursesComp.js';

export default function Api() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="api" />
            <CourseComp name="Techno U" url="https://www.youtube.com/watch?v=AAjuyEXVS8Y&list=PLhiFu-f80eo_Pp5W7yHJeSipyQLye7Xzf"/>
            <CourseComp name="BraaSite" url="https://www.youtube.com/watch?v=nM3D5Q4UrPs&t=14s&pp=ygUZYXBpIGNvdXJzZSDYqNin2YTYudix2KjZig%3D%3D"/>
            <CourseComp name="Nour Homsi" url="https://www.youtube.com/watch?v=bB5tpD0Y73w&pp=ygUZYXBpIGNvdXJzZSDYqNin2YTYudix2KjZig%3D%3D"/>
            <CourseComp name="Mohamed ahmady" url="https://www.youtube.com/watch?v=2AWFuSJ_Cxg&list=PLqPejUavRNTUbBmD6zRNRIHfEeSuUK53H"/>
            <CourseComp name="Elzero" url="https://www.youtube.com/watch?v=CLpmD7hxiBs&list=PLDoPjvoNmBAwH_PyuEFjk3OvXflJJrDRQ"/>
        </div>
    );
}