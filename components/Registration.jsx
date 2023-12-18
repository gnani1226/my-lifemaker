"use client";
import React, { useState,useEffect } from "react";
import "./Registration.css";
import { Icons } from "./icons";
import Spotlight, { SpotlightCard } from "./spotlight-card";
import { StarField } from "./star-field";
import { GlowHero } from "./glowHero";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

function RegistrationX() {
  const searchParams = useSearchParams()
 const [user,setUser] = useState(null)
  const search = searchParams.get('user')
  // const supabase = createClientComponentClient();
  const [currentStep, setCurrentStep] = useState(1);
  const [visitedSteps, setVisitedSteps] = useState([]);
  const [authorized,setAuthorized] = useState(false)
  const [uparrow, setUparrow] = useState(true);
  const router = useRouter();
  const [submissionDone,setSubmissionDone] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    purpose: "",
    organization: "",
    mobileNumber: "",
    inviteCode:""
  });
  const [errors, setErrors] = useState({
    fullName: "",
    purpose: "",
    organization: "",
    mobileNumber: "",
    inviteCode:""
  });

  const [checkedValues, setCheckedValues] = useState({
    awardOption: false,
    freeTrial: false,
    trainingProgram: false,
    referralPartner: false,
    reseller: false,
    servicePartner: false,
  });

  useEffect(() =>{
    checkUserExists()
  },[]);

  const checkUserExists = async() =>{
    if(search){
     
      const { data, error } = await supabase.auth.getUser()
      if(error){
        router.push('/')
      }else{
        setUser(data)
      }
    }else{
      router.push(`/`)
    }
  }

  useEffect(() => {
    setCurrentStep(1);
  }, []);


  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedValues({
      ...checkedValues,
      [id]: checked,
    });
  };

  const [isnextdisplay, setNextDisplay] = useState(true);
  const [toggleSubmit, setSubmit] = useState(true);

  const toggleFields = (step) => {
    const fieldContainers = document.querySelectorAll(".field-container");
    const sub_btn = document.getElementById("submitButton");
    const next_btn = document.getElementById("nextButton");
    const upbtns = document.getElementById('updownbtns');


    fieldContainers.forEach((container, index) => {
      if (index === step - 1) {
        container.style.display = "block";
        container.classList.add("zoom-in");
        if (index === fieldContainers.length - 1) {
          sub_btn?.classList.remove("hidden");
          upbtns.style.display = 'none';
          sub_btn?.classList.add("block");
          next_btn?.classList.add("hidden");
          setNextDisplay(false);
        }
      } else {
        container.style.display = "none";
        container.classList.remove("zoom-in");
      }
    });
  };

  const handleInputChange = (field, value) => {
    if(field ==='inviteCode'){
      setFormData({
        ...formData,
        [field]: value.toUpperCase(),
      });
    }else{
      setFormData({
        ...formData,
        [field]: value,
      });
    }
    
    if (field === "fullName" && !value.trim()) {
      setErrors({
        ...errors,
        fullName: "First Name is required",
      });
      setNextDisplay(true);
      return;
    }  else if (field === "purpose" && !value.trim()) {
      setErrors({
        ...errors,
        purpose: "Invalid Field",
      });
      setNextDisplay(true);
    } else if (field === "organization" && !value.trim()) {
      // setErrors({
      //   ...errors,
      //   organization: "Organization Required",
      // });
      // setNextDisplay(true);
    } else if (field === "mobileNumber" && !isValidMobileNumber(value)) {
      // setErrors({
      //   ...errors,
      //   mobileNumber: "Invalid Mobile Number",
      // });
      // setNextDisplay(true);
    } else {
      setErrors({
        ...errors,
        [field]: "",
      });
      setNextDisplay(false);
    }
  };

 

  const isValidMobileNumber = (mobileNumber) => {
    return /^\d{10}$/.test(mobileNumber);
  };



  const handleNextButtonClick = () => {
  
    if(currentStep === 5 ) {
      setNextDisplay(false);
    }else{
   
    if(currentStep === 1 && formData.purpose.length === 0){
      setNextDisplay(true);
    }else if(currentStep === 2){

    }
    }
    setCurrentStep((prevStep) => {
      let nextStep = prevStep + 1;
      if (nextStep > document.querySelectorAll(".field-container").length) {
        nextStep = 1;
      }
      const allErrorsEmpty = Object.values(errors).every(
        (error) => error === ""
      );
      toggleFields(nextStep);
      return nextStep;
    });
  };

  const submitUserdata = async (event) => {
    event.preventDefault();

      const registeredData = {
        fullName: formData.fullName,
        purpose: formData.purpose,
        organization: formData.organization,
        mobileNumber: formData.mobileNumber,
        awardOption: checkedValues.awardOption,
        freeTrial: checkedValues.freeTrial,
        trainingProgram: checkedValues.trainingProgram,
        referralPartner: checkedValues.referralPartner,
        reseller: checkedValues.reseller,
        servicePartner: checkedValues.servicePartner,
      };
      if(user){
        const {data,error} = await supabase
        .from('userprofiles')
        .select()
        .eq('userid', user.user.id)
        if(data?.length === 0 && !error){
          const { data, error } = await supabase.from('userprofiles')
                  .insert({ userid:user.user.id, name:formData.fullName,mobileno:formData.mobileNumber,role:formData.purpose,orgname:formData.organization,award:checkedValues.awardOption,trial:checkedValues.freeTrial,training:checkedValues.trainingProgram,
                    referralpartner:checkedValues.referralPartner,reseller:checkedValues.reseller, servicepartner:checkedValues.servicePartner,invitecode: formData.inviteCode == 'GS2023TECHSPARKS' ?'GS2023TECHSPARKS':null })
                  .select()
        }
        
      }
      
      setSubmit(true);

      //   setCurrentStep(1);
      setFormData({
        fullName: "",
        purpose: "",
        organization: "",
        mobileNumber: "",
      });
      setCheckedValues({
        awardOption: false,
        freeTrial: false,
        trainingProgram: false,
        referralPartner: false,
        reseller: false,
        servicePartner: false,
      })

      setSubmissionDone(true)
      setTimeout(() =>{
        router.push('/')
      },3000)
    // } else {
      // alert("Please fix the validation errors before submitting.");
    // }
  };


  const handleReverseButtonClick = () => {
    console.log(currentStep)
    if(currentStep === 1){
      return;
    }else{
      setCurrentStep((prevStep) => {
        let prevStep1 = prevStep - 1;
        if (prevStep1 < 1) {
          prevStep1 = document.querySelectorAll(".field-container").length;
        }
        toggleFields(prevStep1);
        setNextDisplay(false);
        return prevStep1;
      });
    }
    
  };


  const handlePreviousButtonClick = () => {
    console.log(currentStep)
    if(currentStep === 1 && (!formData.fullName || formData.fullName?.length ===0)){
      setErrors({
        ...errors,
        fullName: "First Name is required",
      });
    }else if(currentStep === 2 && (!formData.purpose || formData.purpose?.length === 0)){
      setErrors({
        ...errors,
        purpose: "Select an option",
      });
    }else{
      setCurrentStep((prevStep) => {
        let prevStep1 = prevStep + 1;
        if (prevStep1 < 1) {
          prevStep1 = document.querySelectorAll(".field-container").length;
        }
        toggleFields(prevStep);
        setNextDisplay(true); 
        return prevStep1;
      });
    }
    
  };



  return (
    <div className="h-full">
      <Spotlight className="h-full"><SpotlightCard className="h-full rounded-none" transparent={true}>
        <StarField from={true}/>
        <GlowHero />
        <div className="absolute p-6"><Link href="/" className="text-xl text-white font-semibold translate-y-9"><Icons.Cross /></Link></div>
      {!submissionDone && <div className="bg-transparent flex flex-col items-center" style={{height:'100vh'}}>
        
     
      <div className="flex flex-col w-[70%] h-full items-center justify-center">
        
        <div className="pb-10 font-mono flex flex-col justify-center items-center font-bold text-xl"><div className="mb-2"><img src="/files/godspeedOldLogo.png" height={84} width={84} /></div>Ready to join the revolution with Godspeed</div>
        <form
          id="userForm"
          className="flex flex-col w-[100%] "
        >
          
          <div className={`field-container zoom-in ${errors.fullName && "error"}`}>
            <h1 className="pt-2 text-white text-xl tracking-widest"><span className="text-4xl font-heading">&rarr; &nbsp;</span><span className="font-mono text-xl">Let's start with your</span> <span className="text-xl lg:text-2xl font-heading italic">full name. <span className="text-sm sm:text-[6px] font-mono pt-2 text-gray-500">&nbsp;[Required]</span></span></h1>
          
            <input type="text" id="fullName" name="fullName" placeholder=""  value={formData.fullName} style={{outline:0}}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="w-full mt-6 lg:ml-8 text-left text-black text-xl lg:text-2xl tracking-widest font-bold font-mono p-2 px-6"/>
            {errors.fullName && (<p style={{color:'#FF5C5C'}} className="validation ml-2 mt-2 font-heading">{errors.fullName}</p>
            )}
          </div>

          <div className={`mb-4 hidden w-full field-container ${errors.purpose && "error"}`}>
         
          <h1 className=" pt-2 text-white text-xl tracking-widest"><span className="text-4xl text-primary-500 font-heading">&rarr; &nbsp;</span><span className="font-mono text-xl">Are you an</span> <span className="text-xl lg:text-2xl font-heading italic">Individual / Organization. <span className="text-sm sm:text-[6px] font-mono pt-2 text-gray-500">&nbsp;[Required]</span></span></h1>
            
          <select
            id="purpose"
            name="purpose"
            label="select an option"
            value={formData.purpose} 
            onChange={(e) => handleInputChange("purpose", e.target.value)}
            style={{outline:0}}
            className="w-full mt-6 lg:ml-8 text-left text-black text-xl lg:text-2xl tracking-widest font-bold font-mono p-2 px-6"
          >
         {formData.purpose.length === 0 && <option value="">-- Please select an option --</option>}
            <option value="individual" className="bg-customColor">Individual</option>
            <option value="organization" className="bg-customColor">Organization</option>
          </select>
          {errors.purpose && (
            <p style={{color:'#FF5C5C'}} className="validation ml-2 mt-2 font-heading">{errors.purpose}</p>
          )}
        </div>

          {formData.purpose.toLowerCase() === "individual" ? (
            ""
          ) : (
            <div
              id="organisationdiv"
              className={`mb-4 hidden  w-full field-container ${
                errors.organization && "error"
              }`}
            >
               <h1 className=" pt-2 text-white text-xl tracking-widest"><span className="text-4xl text-primary-500 font-heading">&rarr; &nbsp;</span><span className="font-mono text-xl">Name of the</span> <span className="text-xl lg:text-2xl font-heading italic">Organiztion. <span className="text-sm sm:text-[6px] font-mono pt-2 text-gray-500">&nbsp;[Optional]</span></span></h1>
          
           <input
                type="text"
                id="organization"
                name="organization"
                placeholder=""
                value={formData.organization}
                onChange={(e) =>
                  handleInputChange("organization", e.target.value)}
                  style={{outline:0}}
              className="w-full mt-6 lg:ml-8 text-left text-black text-xl lg:text-2xl tracking-widest font-bold font-mono p-2 px-6 "
              />
              {errors.organization && (
                <p style={{color:'#FF5C5C'}} className="validation ml-2 mt-2 font-heading">
                  {errors.organization}
                </p>
              )}
            </div>
          )}

          <div
            className={`mb-4 hidden w-full field-container ${
              errors.mobileNumber && "error"
            }`}
          >
            <h1 className=" pt-2 text-white text-xl tracking-widest"><span className="text-4xl text-primary-500 font-heading">&rarr; &nbsp;</span><span className="font-mono text-xl">How do we</span> <span className="text-xl lg:text-2xl font-heading italic">Contact you.? &nbsp; [mobile no.] <span className="text-sm sm:text-[6px] font-mono pt-2 text-gray-500">&nbsp;[Optional]</span></span></h1>
          
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              placeholder=""
              value={formData.mobileNumber}
              onChange={(e) =>
                handleInputChange("mobileNumber", e.target.value)
              }
              style={{outline:0}}
              className="w-full mt-6 lg:ml-8 text-left text-black text-xl lg:text-2xl tracking-widest font-bold font-mono p-2 px-6 " />
            {errors.mobileNumber && (
              <p style={{color:'#FF5C5C'}} className="validation ml-2 mt-2 font-heading">
                {errors.mobileNumber}
              </p>
            )}
          </div>

          <div
            className={`mb-4 hidden w-full field-container ${
              errors.inviteCode && "error"
            }`}
          >
            <h1 className=" pt-2 text-white text-xl tracking-widest"><span className="text-4xl text-primary-500 font-heading">&rarr; &nbsp;</span><span className="font-mono text-xl"></span>Do you have an <span className="text-xl lg:text-2xl font-heading italic">Invite code? &nbsp; <span className="text-sm sm:text-[6px] font-mono pt-2 text-gray-500">&nbsp;[Optional]</span></span></h1>
          
            <input
              type="text"
              id="inviteCode"
              name="inviteCode"
              placeholder=""
              value={formData.inviteCode}
              onChange={(e) =>
                handleInputChange("inviteCode", e.target.value)
              }
              style={{outline:0}}
              className="w-full mt-6 lg:ml-8 text-left text-black text-xl lg:text-2xl tracking-widest font-bold font-mono p-2 px-6 " />
              <p className="text-8 font-mono pt-2 tracking-wide italic" style={{color:"white",fontSize:11}}> <span style={{color:'green'}}>[Note]</span> if you have invite code then you will be eligible for promotional discounts/credits <br/> redeemable again product subscription</p>
              <p className="font-heading font-semibold text-lg text-green-500">Use the invite code for promotional discounts/ credits against product subscriptions. Proceed to next otherwise.</p>

            {errors.inviteCode && (
              <p style={{color:'#FF5C5C'}} className="validation ml-2 mt-2 font-heading">
                {errors.inviteCode}
              </p>
            )}
          </div>
         

          <div className=" pl-4 md:pl-8 hidden flex-col flex-wrap lg:justify-center lg:items-center field-container lg:pb-10">
            <h1 className="text-3xl lg:text-4xl text-white md:pl-12 font-heading">
              I want to
            </h1>
            <ul className="text-white md:pl-12 pt-4 text-xl lg:text-2xl w-full flex flex-col gap-3">
              <li className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="awardOption"
                  className="mr-2"
                  checked={checkedValues.awardOption}
                  onChange={handleCheckboxChange}
                />
                <label className="text-sm md:text-md relative flex items-center font-mono">
                  Participate in $1M bounty program  {/* <span className="tooltip hidden absolute top-0 left-full  bg-gray-800 text-white rounded-md mt-2 z-10">
                  Participate in USD 1MM free award option
                  </span> */}
                 
                  <Link href="https://forum.godspeed.systems/t/1-million-developer-bounty-program-build-earn-with-godspeed/128" target="_blank" className="text-sm p-2 underline">[more info] </Link>
                 
                </label>
              </li>
              <li className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="freeTrial"
                  className="mr-2"
                  checked={checkedValues.freeTrial}
                  onChange={handleCheckboxChange}
                />
                <label className="text-sm md:text-md relative flex items-center font-mono">
                  Get a free trial access
                 
                </label>
              </li>
              <li className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="trainingProgram"
                  className="mr-2"
                  checked={checkedValues.trainingProgram}
                  onChange={handleCheckboxChange}
                />
                <label className="text-sm md:text-md relative flex items-center font-mono">
                Undertake  upskilling  training program
                 
                </label>
              </li>
              <li className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="referralPartner"
                  className="mr-2"
                  checked={checkedValues.referralPartner}
                  onChange={handleCheckboxChange}
                />
                <label className="text-sm md:text-md relative flex items-center font-mono">
                Be a referral/channel partner to Godspeed
                 
                </label>
              </li>
              <li className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="reseller"
                  className="mr-2"
                  checked={checkedValues.reseller}
                  onChange={handleCheckboxChange}
                />
                <label className="text-sm md:text-md relative flex items-center font-mono">
                Be a re-seller of Godspeed Product
                 
                </label>
              </li>
              <li className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="servicePartner"
                  className="mr-2"
                  checked={checkedValues.servicePartner}
                  onChange={handleCheckboxChange}
                />
                <label className="text-sm md:text-md relative flex items-center font-mono">
                  Be a service partner
                  
                </label>
              </li>
            </ul>
          </div>

        </form>

        <div className="flex justify-between gap-3 mt-8 w-full">
        <button
          type="submit"
          id="submitButton"
          onClick={submitUserdata}
          className={`hidden mt-6 lg:ml-8 zoom-in font-heading bg-white p-2 text-black font-bold py-2 px-10 text-2xl rounded-md ${
            currentStep === 1 ? `block` : ""
          }`}
        >
          Submit
        </button>
        <button
          type="button"
          id="nextButton"
          onClick={handleNextButtonClick}
          disabled={isnextdisplay}
          className={`zoom-in mt-6 lg:ml-8 font-heading ${
            isnextdisplay ? `bg-gray-400 text-gray-800` :`bg-white text-black`
          }  font-bold px-6 text-xl rounded-md  ${
            currentStep === 1 ? "block" : ""
          }`}
        >
          Next 
        </button>       
          
          <div className="flex gap-2" id="updownbtns">
          <button type="button" id="reverseButton" onClick={handleReverseButtonClick} 
            className={`zoom-in mt-4  text-white font-bold p-2 text-2xl rounded-xl ${
              currentStep === 1 ? "block" : ""
            }`}
          >
           &darr;
          </button>
          <button
            type="button"
            id="previousButton"
            onClick={handlePreviousButtonClick}
            className={`zoom-in mt-4 text-white font-bold p-2 text-2xl rounded-xl ${
              currentStep === 1 ? "block" : ""
            }`}
          >
            &uarr;
          </button>
          </div>
        </div>
      </div>


      </div>}
     {submissionDone&& <div className="bg-transparent flex flex-col items-center justify-center" style={{height:'100vh'}}>
               <p className="font-heading font-semibold text-2xl">Thanks for submitting your application.</p>
               <p className="font-heading font-semibold text-2xl text-green-500">We will get in touch with you shortly.</p>

               <Link href={"/"} className="pt-6 font-mono"><span className="text-2xl pr-2">&rarr;</span>Visit landing page</Link>
            </div>}
     
      </SpotlightCard></Spotlight>
    </div>
  );
}

export default RegistrationX;




{/* <div className={`field-container zoom-in ${errors.fullName && "error"}`}>
<h1 className=" pt-2 text-white text-xl tracking-widest"><span className="text-4xl text-primary-500 font-heading">&rarr; &nbsp;</span><span className="font-mono text-xl">Let's start with your</span> <span className="text-xl lg:text-2xl font-heading italic">full name. <span className="text-sm sm:text-[6px] font-mono pt-2 text-gray-500">&nbsp;[Required]</span></span></h1>

  <input type="text" id="fullName" name="fullName" placeholder="" value={formData.fullName} 
onChange={(e) => handleInputChange("fullName", e.target.value)}
  className="w-full  mt-6 lg:ml-8 text-left  text-white text-xl lg:text-2xl tracking-widest font-bold font-mono bg-transparent border-b-2 border-white focus:outline-none"/>
{errors.fullName && (<p className="validations text-red-500 ml-2 mt-2">{errors.fullName}</p>
)}
</div> */}