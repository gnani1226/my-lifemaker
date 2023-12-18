import React from 'react'
import LiteratureCards from '@/components/literatureCards';
import Link from 'next/link';
import { Label } from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';

export default function Literature() {

    const firstCards = [
        {
            cardTitle:"Nature Acceptance",
            cardDescription:"This deeper part always knows the purpose or what to be, innateness, what to do as a human being. Following it leads to harmony (happiness) within. The continuity of harmony is desirable, and it is possible. If followed, this part leads to resolution and definite human conduct in a human being",
            imageUrl:"/files/nature2.jpg",
            redirectUrl:"/natureAcceptance"
        },
        {
            cardTitle:"Am I Immortal",
            cardDescription:"Let us be honest with each other and admit that as humanity our perspective on this issue differs from one to another and this is a matter of personal faith and subjective experience. There is no objective way to prove to the other one point or another, so that everyone is convinced of the fact just like we are convinced that the Sun rises in the East.",
            imageUrl:"/immortal.jpeg",
            redirectUrl:"/immortal"
        },
        {
            cardTitle:"Space",
            cardDescription:`Space is infinite energy in eternal equilibrium
            Because it is in permanent equilibrium, it is static; i.e. has no activity of its own.
            It is transparent (does not affect any thing), omnipresent (present everywhere, even where there is no unit of Nature) and transcendental (is required for the units of Nature to coexist)
            Space is the (fundamental) field of which all fields, whether material or conscious, are part.`,
            imageUrl:"/files/space1.jpg",
            redirectUrl:"/space"
        },
        {
            cardTitle:"Existence Is Coexistence",
            cardDescription:`Existence is all that exists (is).
            Existence is the only thing that exists.
            Existence is autonomous.
            Existence is indivisible, infinite, eternal, the ever “present”.
            Existence is as coexistence; of energy of two kinds - unmanifest and manifest`,
            imageUrl:"/existance.jpg",
            redirectUrl:"/Existence-Is-Coexistence"
        },
        {
            cardTitle:"Introduction by Ayush",
            cardDescription:"I have been waiting for you to arrive at this page. My name is Ayush and for the time being, I am the sole author of the essays listed below, touching upon the essence of Life, Existence and undivided, happy and prosperous Human Society. I have been through (a still ongoing) cosmic and very human journey of reunion with the source and in my inquisitive explorations have found universally acceptable answers (resolution) to some important questions pertaining to human existence on Earth.",
            imageUrl:"/ayush.png",
            redirectUrl:"/introduction-by-ayush"
        },
        {
            cardTitle:"Who Am I",
            cardDescription:`I am all-that-is.
            I am the only thing that exists (also called Truth).
            I am indivisible. All my parts are interrelated, interconnected, interdependent.
            I am experiencing myself through infinite conscious units.
            I am expressing myself as infinite material and conscious units.`,
            imageUrl:"/whoami.jpg",
            redirectUrl:"/who-am-i"
        }
    ];

    const existanceCards = [
        {
            cardTitle:"Four Orders on Earth",
            cardDescription:"Animals don’t and generally can’t think about the nature of Life but humans can and they do. Life in human form has the full capability and can develop the ability to grasp the knowledge of Life and Existence. This capability puts humans uniquely in the bucket of Knowledge Order on Earth. Humanity uniquely forms the knowledge order on Earth, built on top of the lower three orders which evolved and coexisted in perfect harmony.",
            imageUrl:"/foruOrderEarth.jpg",
            redirectUrl:"four-orders-on-earth",
        },
        {
            cardTitle:"Existence Itself Is Coexistence",
            cardDescription:"Existence is inseparable, indivisible, absolute. Truth, knowledge, reality, actuality are different words meaning the same as Existence - all that is. There is no ‘peer’ or other outside all that is (Existence). Can there be something left outside all that is?. There is no ‘creator’ outside of Existence for where would the creator exist if not inside Existence? If there would be more Existences, in which existence or space would they exist together? Hence Existence must be one and only.",
            imageUrl:"/existenceCo.jpg",
            redirectUrl:"existence-Itself-Is-Coexistence",

        },
        {
            cardTitle:"Love",
            cardDescription:`What is love? Is attachment to someone love? Is being with someone to fill a gap within love? Is love conditional? We often say - “I love chicken or I love the color of your hair!”. Is that love? What is love?`,
            redirectUrl:"/love",
            imageUrl:"/love1.jpg"
        },

    ];

    const humanity = [
        {
            cardTitle:"The Human Problem, need and opportunity",
            cardDescription:"We are suffering from never ending strife, misunderstanding, miscommunication, division, conflict and misery at all scopes of human existence - within Self, families, neighborhoods, regions, humankind and with rest of Nature.",
            redirectUrl:"/the-human-problem-need-and-opportunity",
            imageUrl:"/humaProblem.jpg",
        },
        {
            cardTitle:"Family",
            cardDescription:"A family is a group of people living together with assurance of mutual protection, fulfillment and love. It is the first place for a human to experience fulfilling relationships which nurture the body and self. A family is where a child feels protected, cared for. It is a space where every member feels a minimum bottomline assurance of being accepted, physically cared for, protected, guided (as per relatives’ competence).",
            redirectUrl:"/family",
            imageUrl:"/family.jpg"
        },
        {
            cardTitle:"Humanity - a reality check",
            cardDescription:`Humans were still learning and adapting to nature
            More physical work to do.
            Less comfortable physical existence in terms of housing, clothing, heating, energy, health facility, food production etc.
            Higher mortality risk. Attack from animals. Climate. Weather. Diseases. Not such a developed surgery and medical system in west. But there was Ayurveda and chi gung in East.
            Uncleanliness and lack of hygene`,
            redirectUrl:"/humanity-reality-check",
            imageUrl:"/humanity.jpg"
        },

    ];

    const lifemaker = [
        {
            cardTitle:"About the Proposal",
            cardDescription:`In last few decades, an all encompassing, holistic perspective based on Existential reality as it is, has emerged. The proposals are (to be evolved if needed) such that they are naturally acceptable and self verifiable for every human alike, no matter what age, conditioning and background. The proposals promise to clear all doubts and misery when understood and imbibed.`,
            imageUrl:"/proposal.jpg"
        },
        {
            cardTitle:"Working Model",
            cardDescription:`The proposed working model covers six proposed dimensions for self-governed and self-sustainable families organised as grassroots based cooperatives and self help groups to co-exist in Universal orderliness across villages, neighborhoods, provinces, nations and united-humane-nation. These six dimensions broadly cover every aspect from human to nature, but can be expanded into a larger list by breaking individual dimensions if need be. This is a proposal like everything else on this website, and is kept adaptable to change.`,
            imageUrl:"/workingmodel.jpg"
        },
        {
            cardTitle:"Self governance",
            cardDescription:`All changes to vision, constitution, policies, memberships, working decisions & problem resolutions shall be done with consensus from bottom up through fractal design based self governing setup. At every level of the fractal, not more than 10-12 people will be involved in making decisions, with full trust and go ahead by the levels below.`,
            imageUrl:"/selfGovernance.jpg"
        },
        {
            cardTitle:"Why Lifemaker",
            cardDescription:`Happiness is our true nature. Every Human wants to be happy. All prophets, relegions and philosophers have spoken the same truth in different ways. And yet Humanity has evaded the light of happiness somehow. Most of us are caught in a blind rush, desiring happiness from actions or objects but don’t know answers to the what, why and how with stability and clarity. We have not been told so far that for happiness to happen in continuity for any family it needs mental resolution, `,
            imageUrl:"/lifemaker.jpg"
        },
        {
            cardTitle:"Values",
            cardDescription:`To agree on same values of Life is the stepping stone to coming together for a grand party on Earth as one couple, family, team or undivided human society for justful, truthful & successful co-existence as humans.

            `,
            imageUrl:"/values.jpg"
        },

    ];

    const premise = [
        {
            cardTitle:"Only the whole of Self can realise the whole of Self",
            cardDescription:"There is something deeper than the mind - it is that part of the Self which is ‘experiencing’ everything - the body, the world, the mind and even itself. This is the part which is experiencing the deep sleep and as well the dreams and awake experience. This is the part from which the mind emerges. This part is the mediating activity between rest of co-existence and the mind",
            imageUrl:"/self.jpg"
        },
        {
            cardTitle:"The apriori or causal Truth",
            cardDescription:`That reality which exists independent of every conscious being or subjective perspective is being called the apriori Truth.
            As previously discussed there are as many truth sets as number of people, animals or conscious beings in existence. Now let me ask you to think about this - All conscious beings live in a reality which existed before we came into existence and will exist even if we did not exist.`,
            imageUrl:"/truth.jpg",
        },
        {
            cardTitle:"The job of any truth set is to be useful",
            cardDescription:`Every person has universal and irrevocable right to hold on to their truth set. They must surely find their truth as useful to them else why would they follow it? The day a person discovers some part of their truth set to be not useful for their happiness or growth, they look for a better or truer truth.`,
            imageUrl:"/truthful.jpg"
        },
        {
            cardTitle:"7 billion people. 7 billion truth-sets",
            cardDescription:`Every person or animal holds their own truth set. Their truth set holds true in their world view. And all of these truth sets coexist in existence. Hence 7 billion people, 7 billion truth sets.

            `,
            imageUrl:"/7billion.jpg"
        },


    ];

    const resolutionHumanity = [
        {
            cardTitle:"Our approach in moving forward",
            cardDescription:`Treat family as the unit of society and basis for perpetuating Human seed and realisation
            Enlightened families in peaceful and justful co-existence, is healthy and happy Humanity in continuity`,
            imageUrl:"/forward.jpg"
        },
        {
            cardTitle:"Family education",
            cardDescription:`We believe family education is the way to educate our selves, and bring forth a new System and Order. By family, we mean at least two people committed to being together for Life, and growing with mutual fulfillment. Family is the fundamental social unit for mutual wellbeing; and safe and comfortable space for collective discussions, study, contemplation and meditation upon Life and Living. `,
            imageUrl:"/familyed.jpg",
        },

    ];


    return (
        <div className='flex flex-col justify-center items-center pt-8 lg:pt-16 pb-16'>
            <div className='px-4 lg:w-[50vw] gap-4 lg:gap-10 lg:pt-10 flex flex-col items-start min-h-screen'>
                <div className='self-center flex flex-col justify-center items-center pb-8'>
                    <h1 className='font-heading text-3xl lg:text-6xl tracking-wider'>Literature</h1>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-xl border-4 border-gray-700 border-y-transparent border-r-transparent lg:leading-8 italic'>Every information shared in the literature is a proposal to be verified individually by the reader to be universally true or not.</p>
                    <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-xl font-light lg:leading-8'>The universal perspective of Existence as Co-existence, Self as Human and the working model of Undivided Society is greatly derived from, but not limited to, <a href="https://madhyasth-darshan.info/" className='hover:text-blue-800 font-semibold italic' target='_blank'>Madhyastha Darshan</a> - a take at universal explanation of Existence in a human centric way and the solution to all human needs and problems.</p>
                </div>
                <LiteratureCards cardDetails={firstCards}/>

                <div className='self-center flex flex-col justify-center items-center pt-6'>
                    <h1 className='font-heading text-2xl lg:text-4xl tracking-wider mb-2'>Existance</h1>
                    <LiteratureCards cardDetails={existanceCards} />
                </div>

                <div className='self-center flex flex-col justify-center items-center pt-6'>
                    <h1 className='font-heading text-2xl lg:text-4xl tracking-wider mb-2'>Humanity</h1>
                    <LiteratureCards cardDetails={humanity} />
                </div>

                <div className='self-center flex flex-col justify-center items-center pt-6'>
                    <h1 className='font-heading text-2xl lg:text-4xl tracking-wider mb-2'>Lifemaker</h1>
                    <LiteratureCards cardDetails={lifemaker} />
                </div>


                <div className='self-center flex flex-col justify-center items-center pt-6'>
                    <h1 className='font-heading text-2xl lg:text-4xl tracking-wider mb-2'>Premise</h1>
                    <LiteratureCards cardDetails={premise} />
                </div>


                <div className='self-center flex flex-col justify-center items-center pt-6'>
                    <h1 className='font-heading text-2xl lg:text-4xl tracking-wider mb-2'>Resolution for humanity</h1>
                    <LiteratureCards cardDetails={resolutionHumanity} />
                </div>
            </div>
        </div>
    )
}
