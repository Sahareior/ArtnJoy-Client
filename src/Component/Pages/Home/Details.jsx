import { useSpring, animated } from 'react-spring';
import Heading from '../../Shared/Heading';

const Details = () => {
  const yearAnimation = useSpring({ number: 2003, from: { number: 0 }, config: { duration: 2000 } });
  const teachersAnimation = useSpring({ number: 23, from: { number: 0 }, config: { duration: 2000 } });
  const studentsAnimation = useSpring({ number: 535, from: { number: 0 }, config: { duration: 2000 } });

  return (
    <div className="mt-20 mr-[600px] md:mr-1 bg-base-100">
      <div className="md:flex justify-around items-center mt-16">
        <div className="flex flex-col justify-center gap-6 items-center">
          <img className="w-20" src="https://img.freepik.com/free-vector/calendar-icon-white-background_1308-84634.jpg?size=626&ext=jpg" alt="" />
          <animated.h1 className="text-4xl font-bold">{yearAnimation.number.interpolate((val) => Math.floor(val))}</animated.h1>
          <h2 className="font-bold">Year Founded</h2>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center">
          <img className="w-20" src="https://img.freepik.com/premium-vector/3d-realistic-professional-old-professor-teacher-man-vector-character-speaking-talking_572288-2251.jpg?size=626&ext=jpg" alt="" />
          <animated.h1 className="text-4xl font-bold">{teachersAnimation.number.interpolate((val) => Math.floor(val))}</animated.h1>
          <h2 className="font-bold">Teachers</h2>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center">
          <img className="w-20" src="https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?size=626&ext=jpg" alt="" />
          <animated.h1 className="text-4xl font-bold">{studentsAnimation.number.interpolate((val) => Math.floor(val))}</animated.h1>
          <h2 className="font-bold">Students</h2>
        </div>
      </div>
    </div>
  );
};

export default Details;
