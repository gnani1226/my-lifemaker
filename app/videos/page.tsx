import React from 'react'
import Image from 'next/image'

export default function Videos() {
    return (
        <div className='flex flex-col justify-center items-center pt-8 lg:pt-16 pb-16'>
            <div className='px-4 lg:w-[50vw] gap-4 lg:gap-10 lg:pt-10 flex flex-col items-start min-h-screen'>
                <div className='self-center flex flex-col justify-center items-center pb-8'>
                    <h1 className='font-heading text-3xl lg:text-6xl tracking-wider'>Videos</h1>
                </div>
                
                <div className='flex flex-col gap-4'>
                    <h1 className='font-heading text-lg md:text-xl lg:text-3xl tracking-wide leading-5 lg:leading-normal '>[IMPORTANT] Introduction to the Proposals by an eminent teacher</h1>
                    <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-xl font-light lg:leading-8'><a href="https://www.youtube.com/watch?v=E1STJoXCXUU&list=PLKDfuUlbRCEbe1oj21ih9ECA78R_l8d3-&ab_channel=UniversalHumanValues" target='_blank' className='text-gray-500'>THIS YOUTUBE PLAYLIST</a> has 8 lectures with some question and answers on each lecture.</p>
                    <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-xl font-light lg:leading-8'>A series of lectures, questions and answers giving holistic perspective on the nature of life as humans and the key to harmonious living. These videos were shot during one of his workshops at IIT Kanpur.</p>
                </div>

                <div className='flex mt-4 flex-col gap-4'>
                    <h1 className='font-heading text-lg md:text-xl lg:text-3xl tracking-wide leading-5 lg:leading-normal '>Global state of happiness and prosperity as of today [English]</h1>
                    <div className="mt-4 relative flex flex-col items-center justify-start gap-2">
                        <iframe className="w-full aspect-video rounded-md" src="https://www.youtube.com/embed/-1VzEaPZWls?si=OTYo-8RavJkSYZj5"></iframe>
                    </div> 
                </div>

                <div className='flex mt-4 flex-col gap-4'>
                    <h1 className='font-heading text-lg md:text-xl lg:text-3xl tracking-wide leading-5 lg:leading-normal '>Former Indian President, Dr. APJ Abul Kalam talks about the Jivan Vidya proposals [English]</h1>
                    <div className="mt-4 relative flex flex-col items-center justify-start gap-2">
                        <iframe className="w-full aspect-video rounded-md" src="https://www.youtube.com/embed/ZnV7ghNf2Io?si=Z9w6qD2RQ3vDbDKC"></iframe>
                    </div> 
                </div>
                <div className='flex mt-4 flex-col gap-4'>
                    <h1 className='font-heading text-lg md:text-xl lg:text-3xl tracking-wide leading-5 lg:leading-normal '>Former Tibetan Prime Minister and Spiritual teacher Shri Samdhong Rinpoche talking about meaning of life and Swarajya as the way to live [Hindi]</h1>
                    <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-xl font-light lg:leading-8'>Shri Samdhong Rinpoche has been participating in seminars and discussions on Holistic Life Education and the set of proposals that form the foundation of Undivided Society Movement. You will find glimpses of the proposals in this talk.</p>
                    
                    <div className="mt-4 relative flex flex-col items-center justify-start gap-2">
                        <iframe className="w-full aspect-video rounded-md" src="https://www.youtube.com/embed/uIKhHxRo46s?si=INQIrG5bIaMj3QEK"></iframe>
                    </div> 
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='font-heading text-lg md:text-xl lg:text-3xl tracking-wide leading-5 lg:leading-normal '>Documentary: Schooling the world: The white man’s last burden</h1>
                    <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-xl font-light lg:leading-8'>While animals behave by their breed. A human behaves by his education and Samskaras (conditioning). The education we have recieved reflects as the state of society we have today. Breaking families, breaking villages, cutting from nature, exploitation of nature and each other, wars, competition instead of cooperation, poor physical and mental health, fear based psyche, indulgence in luxury and excessive consumption etc. What is the cause of all of this? What has happened is that what we call “modern education” is basically literacy, general information and living skills, which comes along with some wrong notions about self, society and world… It does not include the core of the knowledge required by every human being: What am I as human? What is Existence? How does this world work? What is the way to live beautifully? What is my deepest aspiration as human? How can I and my family achieve that?</p>
                </div>
               
                <div className='flex flex-col gap-4'>
                    <h1 className='font-heading text-lg md:text-xl lg:text-3xl tracking-wide leading-5 lg:leading-normal '>Call to the tribe: An intro to the concept made in 2017 [English]</h1>
                    <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-xl font-light lg:leading-8'>Every human is seeking happiness, mostly externally. Happiness can only be found when we are in sync with own true nature, and it reflects in fulfilment of our relationships with the world and with our own Self. The individuals are like small streams, which may or may not be able to make to the ocean alone. But together, our company of Truth can form a large river, which surely will reach the ocean of realised co-existential bliss; and there will be mutual wellbeing and happiness all along the way and for all our future generations to come on Earth.</p>
                    <div className="mt-4 relative flex flex-col items-center justify-start gap-2">
                        <iframe className="w-full aspect-video rounded-md" src="https://www.youtube.com/embed/d_nsFjSuMUU?si=83SNX99SrukOUtaf"></iframe>
                    </div> 
                </div>



            </div>
        </div>
    )
}









