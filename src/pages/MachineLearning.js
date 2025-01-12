import Com from '../components/Com'
import React from 'react';
import CourseComp from '../components/CoursesComp';

export default function Machine() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Com path="machine" />
            <CourseComp name="Elgouhry AI" url="https://www.youtube.com/watch?v=95RhuC30R5U&list=PLtsZ69x5q-X9j44MdSX-NGuOhGXOY0aqH"/>
            <CourseComp name="Cyber school" url="https://www.youtube.com/watch?v=I1uzgXO3Msw&list=PLH0em1f_fBoRxWaQvGs68xad9XB4AexOo"/>
            <CourseComp name="Asem safan" url="https://www.youtube.com/watch?v=0-JupXj9eYo&list=PLMDrOnfT8EAgCQSBnPuo2V3If-JzC9yFz"/>
            <CourseComp name="Farisology" url="https://www.youtube.com/watch?v=TrO3wr_D04s&list=PLH2enzYTUDTuWsXCqwBzfDC3sLn39QxEN"/>
            <CourseComp name="Hesham asem" url="https://www.youtube.com/watch?v=dWKffQja3Fs&list=PL6-3IRz2XF5Ua2KG_Fl3lbZ-kKi3-Np0_"/>
        </div>
    );
}