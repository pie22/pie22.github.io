function addBtn(){
	var newBtn = document.createElement('button')
	var BtnText = document.createTextNode('INQUIRIES')

	var changeHere = document.getElementById('newBtn')	

		newBtn.setAttribute('type', 'button')
		
		 newBtn.className = "add_btn"
		document.getElementById('newBtn').innerHTML = ""
	
	
		newBtn.appendChild(BtnText)
		 
		changeHere.appendChild(newBtn)

		newBtn.addEventListener('click', addForm)
};

addBtn()

function addForm(){
	var inputForm = document.createElement('form')

	var nameInput =  document.createElement('input')	
	var nameInputText = document.createTextNode('Full Name')
	var emailInput = document.createElement('input')
	var emailInputText = document.createTextNode('Email')
	var phoneInput = document.createElement('input')
	var phoneInputText = document.createTextNode('Phone')

	var submitBtn = document.createElement('button')
	var submitBtnTxt = document.createTextNode('SUBMIT')

	var switchBoxContent = document.getElementById('boxRight')
	var removeTable = document.getElementById('removeTable')

		inputForm.setAttribute('id','removeForm')
		
		submitBtn.setAttribute('type', 'button')
		nameInput.setAttribute('name', 'username')
		nameInput.setAttribute('type', 'text')
		
	
		emailInput.setAttribute('name', 'email')
		emailInput.setAttribute('type', 'text')
		
		phoneInput.setAttribute('name', 'phone')
		phoneInput.setAttribute('type', 'text')
		
		inputForm.className = 'add_form'
		submitBtn.className = 'add_btn'
		
		switchBoxContent.removeChild(removeTable)
		
		boxRight.appendChild(inputForm)
		inputForm.appendChild(nameInputText)
		inputForm.appendChild(nameInput)
		inputForm.appendChild(emailInputText)
		inputForm.appendChild(emailInput)
		inputForm.appendChild(phoneInputText)
		inputForm.appendChild(phoneInput)
		inputForm.appendChild(submitBtn)
		submitBtn.appendChild(submitBtnTxt)
		
		
		submitBtn.addEventListener('click', thankYou)
		
}


function thankYou(){
	var newMsgDiv = document.createElement('div')
	var newMsgH1 = document.createElement('h1')
	var newMsgText = document.createTextNode('Thank You!')
		
	var switchBoxContentAgain = document.getElementById('boxRight')
	var removeForm = document.getElementById('removeForm')

		switchBoxContentAgain.removeChild(removeForm)

		boxRight.appendChild(newMsgDiv)
		newMsgDiv.appendChild(newMsgH1)
		newMsgH1.appendChild(newMsgText)
		
		newMsgDiv.className = 'add_thankyou'

}