import Heading from '../../../Shared/Heading';
import './About.css'
const About = () => {
    return (
        <div className='mt-28'>
            <div>
                <Heading title={"About US"} des={"Find what you want"}></Heading>
            </div>
            {/* <link href='https://fonts.googleapis.com/css?family=Wire+One|Raleway:300' rel='stylesheet' type='text/css' /> */}

<div className="skew-c"></div>
<div className="colour-block flex flex-col gap-3">
  <h1 className='text-5xl font-bold'>Location</h1>
  <p>Meggings fingerstache pariatur enim viral, fashion axe lomo meh authentic vexillologist incididunt adipisicing blog occupy williamsburg four dollar.</p>
    <button className='btn btn-outline'>See more...</button>
 </div>
<div className="skew-cc"></div>
<div className="colour-block mt-6 flex flex-col gap-3">
  <h1 className='text-5xl font-bold'>Courses</h1>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
  <button className='btn btn-outline'>See more...</button>
</div>
<div className="skew-c"></div>
<div className="colour-block flex flex-col gap-3">
  <h1 className='text-5xl font-bold'>Schedule</h1>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
  <button className='btn btn-outline'>See more...</button>
</div>
        </div>
    );
};

export default About;