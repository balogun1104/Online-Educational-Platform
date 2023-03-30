import React , {useState} from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem';
import LessonNoteOne from '../Lesson-Note-One';
import LessonNoteThree from '../Lesson-Note-Three';
import LessonNoteTwo from '../Lesson-Note-Two';
import './styles.css';

const LessonNote = ({currentModal,
    setName,
    setModalName,
    currentSellModal}) => {

        const [step, setStep] = useState(1);
        const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal((prev) => !prev);
      };
    
      const nextStep = () => {
        setStep(step + 1);
      };

      const prevStep = () => {
        setStep(nextStep - Prev)
      }

      const render = () => {
        switch (step) {
          case 1:
            return <LessonNoteOne nextStep={nextStep} prevStep={prevStep}/>;
    
          case 2:
            return <LessonNoteTwo nextStep={nextStep} prevStep={prevStep}/>;
    
          case 3:
            return <LessonNoteThree nextStep={nextStep} prevStep={prevStep}/>;
    
          default:
            return <LessonNoteOne />;
        }
      };

      
  return (
    // <div className='lessonNoteWrapper'>
    //     <div className='lessonNote'>
    //         <div className='lessonNoteInner'>
    //             <h1>Lesson Plan</h1>
    //         </div>
    //     </div>
    // </div>

    <>
    <div>
       
        {render()}
    </div>
    </>
  )
}

export default LessonNote