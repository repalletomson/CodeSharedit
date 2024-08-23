import React, { useState } from 'react';
// import CodeEditor from './CodeEditor';
import { Link } from 'react-router-dom';
const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleParagraph = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        { title: 'Build Entire Projects', paragraph: 'Projects is the most powerful feature of CodePen. Its a full blown IDE right in the browser, with automatic preprocessing, drag and drop uploading, live previews, website deployment, and much more.', img: '/img1.png' },
        { title: 'Collab mode', paragraph: 'Live collaboration on code. Multiple people can type and edit code in a Pen at the same time, all while still seeing the live preview.', img: '/img3.png' },
        { title: 'Support For the Way You Code', paragraph: 'The CodePen Editor is highly customizable. There is autocomplete and Emmet for speed and accuracy. Plus you can set up smart defaults for starting new work.', img: '/img2.png' },
    ];

    return (
        <div id="Editor" className="bg-dark-6 p-12 relative overflow-hidden mt-12">
            <div className="flex flex-col items-center">
                <h1 className="text-dark-4 font-bold text-2xl pb-5 text-center">
                    A front-end environment made for testing and sharing
                </h1>
                <Link to='/CodeEditor' className=' semi-bold text-emerald-300'
               >
                    Explore the editor
                </Link>
            </div>
            <div className='flex'>
                <div className="mx-auto p-4 flex flex-col gap-16">
                    {items.map((item, index) => (
                        <div key={index} className="mb-4 ">
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => toggleParagraph(index)}
                            >
                                <img src="/pause.png" alt="pause icon" className="w-6  h-6" />
                                <h2 className="text-xl text-dark-4 font-bold">{item.title}</h2>
                            </div>
                            {openIndex === index && (
                                <div className="flex mt-2 ">
                                    <div className="w-96 p-2 rounded">
                                        <p className="text-dark-4 ">{item.paragraph}</p>
                                    </div>
                                    <div className=" w-[50%] ml-[10rem]">
                                        <img src={item.img} className='w-full' alt={item.title} />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
             

              </div>
            </div>
        
    );
};

export default Accordion;
